// Prerenders every screen to static HTML — EN at /<route>/index.html and
// ES at /es/<route>/index.html — so search engines index real content on
// real URLs without executing JavaScript. React takes over on load.
// Emits per-page titles/descriptions (keyword-researched), Open Graph images,
// and JSON-LD (HotelRoom+Offer, FAQPage, Restaurant, BreadcrumbList).
// Runs after scripts/build.mjs (needs lib/screens.js). Also writes sitemap.xml.
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { createRequire } from 'module';
import { parse } from 'node-html-parser';

const ROOT = new URL('..', import.meta.url).pathname;
const require = createRequire(join(ROOT, 'package.json'));
const React = require('react');
const { renderToString } = require('react-dom/server');
const SITE = 'https://hotelflorita39.com';

// ---- browser stubs so the site's plain-script bundles run in Node ----------
const noop = () => {};
globalThis.window = globalThis;
globalThis.React = React;
globalThis.ReactDOM = { createRoot: () => ({ render: noop }) }; // boot() no-op
globalThis.F39_ASSETS = '/assets';
globalThis.localStorage = { getItem: () => null, setItem: noop };
globalThis.location = { search: '', pathname: '/', hash: '', href: SITE + '/' };
globalThis.history = { replaceState: noop, pushState: noop };
globalThis.document = {
  getElementById: () => null,
  createElement: () => ({ style: {}, setAttribute: noop, appendChild: noop }),
  head: { appendChild: noop }, body: { appendChild: noop },
  documentElement: { lang: 'en', style: {} },
  addEventListener: noop, removeEventListener: noop,
  querySelector: () => null, querySelectorAll: () => [],
};
globalThis.addEventListener = noop;
globalThis.removeEventListener = noop;
globalThis.MutationObserver = class { observe() {} disconnect() {} };
globalThis.scrollTo = noop;

const load = (p) => (0, eval)(readFileSync(join(ROOT, p), 'utf8'));
load('lib/_ds_bundle.js');
load('lib/data.js');
load('lib/i18n.js');
load('lib/screens.js');

const D = globalThis.F39DATA;
const DICT = globalThis.F39_DICT;
const t = (s) => (DICT && DICT[s]) || s; // EN → ES via the runtime dictionary
const abs = (p) => `${SITE}/assets/${p}`;

// ---- routes & per-page metadata --------------------------------------------
// Titles/descriptions target researched queries: "boutique hotel isla mujeres",
// "where to stay isla mujeres", "hotels near playa norte", "isla mujeres centro",
// "hotel familiar / con alberca", "dónde hospedarse en isla mujeres".
const META = {
  home: {
    en: ['Florita 39 — Boutique Hotel in Isla Mujeres · Playa Norte',
      'Intimate six-suite boutique hotel in Isla Mujeres centro, steps from Playa Norte and the Ultramar ferry. Rooftop pool, family suites with kitchenettes, Zama Beach Club included.'],
    es: ['Florita 39 — Hotel Boutique en Isla Mujeres · Playa Norte',
      'Íntimo hotel boutique de seis suites en el centro de Isla Mujeres, a pasos de Playa Norte y del ferry Ultramar. Alberca en la azotea, suites familiares con cocineta y Zama Beach Club incluido.'],
  },
  rooms: {
    en: ['Rooms & Suites in Isla Mujeres Centro — Florita 39',
      'Six suites with private entrances near Playa Norte — lofts for couples, family suites and two-level duplexes with kitchenettes, balconies and garden patios.'],
    es: ['Habitaciones y Suites en el Centro de Isla Mujeres — Florita 39',
      'Seis suites con entrada privada cerca de Playa Norte — lofts para parejas, suites familiares y dúplex de dos niveles con cocineta, balcón y jardín.'],
  },
  amenities: {
    en: ['Amenities — Rooftop Pool, Spa & More · Florita 39 Isla Mujeres',
      "Rooftop pool and sunset club, spa, tropical garden, Rubén's Restaurant and an all-day coffee shop — everything included in your stay at Florita 39, Isla Mujeres."],
    es: ['Amenidades — Alberca en la Azotea, Spa y Más · Florita 39',
      "Alberca en la azotea con club al atardecer, spa, jardín tropical, Rubén's Restaurant y café todo el día — todo incluido en tu estancia en Florita 39, Isla Mujeres."],
  },
  experiences: {
    en: ['Experiences & Tours in Isla Mujeres — Florita 39',
      'Fishing trips, snorkel and reef tours, golf-cart rental and Zama Beach Club days in Isla Mujeres — all arranged from the hotel.'],
    es: ['Experiencias y Tours en Isla Mujeres — Florita 39',
      'Tours de pesca, snorkel y arrecife, renta de carritos de golf y días en Zama Beach Club en Isla Mujeres — todo organizado desde el hotel.'],
  },
  zama: {
    en: ['Zama Beach Club Included — Florita 39 · Isla Mujeres',
      'Zama Beach Club is included with every stay at Florita 39, Isla Mujeres — beachfront pool, loungers and full service with no minimum spend.'],
    es: ['Zama Beach Club Incluido — Florita 39 · Isla Mujeres',
      'Zama Beach Club está incluido en cada estancia en Florita 39, Isla Mujeres — alberca frente al mar, camastros y servicio completo sin consumo mínimo.'],
  },
  island: {
    en: ['Isla Mujeres Travel Guide — Playa Norte, Punta Sur & More',
      'Playa Norte, Punta Sur, the walking street and the Ultramar ferry from Cancún — Isla Mujeres from the centre, steps from Florita 39.'],
    es: ['Guía de Isla Mujeres — Playa Norte, Punta Sur y Más',
      'Playa Norte, Punta Sur, la calle peatonal y el ferry Ultramar desde Cancún — Isla Mujeres desde el centro, a pasos de Florita 39.'],
  },
  restaurant: {
    en: ["Rubén's Restaurant — Yucatán Cooking in Isla Mujeres Centro",
      "Fresh regional Yucatán cooking and an all-day coffee shop in the heart of Florita 39, on the Isla Mujeres walking street — open to guests and the island alike."],
    es: ["Rubén's Restaurant — Cocina Yucateca en el Centro de Isla Mujeres",
      'Cocina regional yucateca y café todo el día en el corazón de Florita 39, en la calle peatonal de Isla Mujeres — abierto a huéspedes y a toda la isla.'],
  },
  gallery: {
    en: ['Gallery — Florita 39 Boutique Hotel · Isla Mujeres',
      'The suites, the rooftop pool, the dining and the island around Florita 39, Isla Mujeres — in pictures.'],
    es: ['Galería — Florita 39 Hotel Boutique · Isla Mujeres',
      'Las suites, la alberca en la azotea, el restaurante y la isla alrededor de Florita 39, Isla Mujeres — en imágenes.'],
  },
  offers: {
    en: ['Hotel Offers & Direct Booking Deals — Florita 39 Isla Mujeres',
      'Direct-booking offers at Florita 39, Isla Mujeres — the lowest rates, summer discounts and Zama Beach Club always included.'],
    es: ['Ofertas y Reserva Directa — Florita 39 Isla Mujeres',
      'Ofertas por reserva directa en Florita 39, Isla Mujeres — las mejores tarifas, descuentos de verano y Zama Beach Club siempre incluido.'],
  },
  about: {
    en: ['Our Story — Florita 39 · Isla Mujeres',
      'A home by the sea: Florita 39 was designed to preserve the original sense of a home — six suites, a rooftop and genuine care for the island.'],
    es: ['Nuestra Historia — Florita 39 · Isla Mujeres',
      'Un hogar frente al mar: Florita 39 fue diseñado para conservar el sentido original de un hogar — seis suites, una azotea y un cuidado genuino por la isla.'],
  },
  contact: {
    en: ['Contact — Florita 39 · Isla Mujeres',
      "Reach Florita 39 by WhatsApp, phone or email — we're happy to help plan your stay, a tour or a table."],
    es: ['Contacto — Florita 39 · Isla Mujeres',
      'Contacta a Florita 39 por WhatsApp, teléfono o correo — con gusto te ayudamos a planear tu estancia, un tour o una mesa.'],
  },
  faq: {
    en: ['FAQ — Staying at Florita 39 · Isla Mujeres',
      'Ferry from Cancún, check-in times, kitchens, Zama Beach Club access and more — practical answers for your stay at Florita 39.'],
    es: ['Preguntas Frecuentes — Florita 39 · Isla Mujeres',
      'Ferry desde Cancún, horarios de check-in, cocinas, acceso a Zama Beach Club y más — respuestas prácticas para tu estancia.'],
  },
  reserve: {
    en: ['Book Direct — Florita 39 Boutique Hotel · Isla Mujeres',
      'Book direct at Florita 39, Isla Mujeres for the lowest rates — choose your suite and dates on our secure booking engine.'],
    es: ['Reserva Directo — Florita 39 Hotel Boutique · Isla Mujeres',
      'Reserva directo en Florita 39, Isla Mujeres con las mejores tarifas — elige tu suite y fechas en nuestro motor de reservas seguro.'],
  },
};
for (const room of D.rooms) {
  META['room:' + room.id] = {
    en: [`${room.name} — Suite in Isla Mujeres · Florita 39`, room.blurb],
    es: [`${room.name} — Suite en Isla Mujeres · Florita 39`, t(room.blurb)],
  };
}
const ROUTES = Object.keys(META);

// Per-page social/hero image (falls back to the generic og-cover).
const OG_DEFAULT = 'marketing/og-cover.jpg';
const OGIMG = {
  home: 'marketing/playa/sea.jpg',
  rooms: 'rooms/florita-1/pro-01.jpg',
  amenities: 'areas/terraza/05.jpg',
  experiences: 'marketing/lifestyle/zycar.jpg',
  zama: 'marketing/zama/dji3.jpg',
  island: 'marketing/playa/sea.jpg',
  restaurant: 'marketing/restaurante/00.jpg',
  gallery: 'areas/terraza/01.jpg',
  offers: 'rooms/florita-4/06.jpg',
  about: 'areas/fachada/16.jpg',
  contact: 'marketing/exterior/j3851.jpg',
  faq: 'marketing/playa/m5705.jpg',
};
for (const room of D.rooms) OGIMG['room:' + room.id] = room.image;

const SCREEN_FOR = {
  home: 'HomeScreen', rooms: 'RoomsScreen', amenities: 'AmenitiesScreen',
  experiences: 'ExperiencesScreen', zama: 'ZamaScreen', island: 'IslandScreen',
  restaurant: 'RestaurantScreen', gallery: 'GalleryScreen', offers: 'OffersScreen',
  about: 'AboutScreen', contact: 'ContactScreen', faq: 'FaqScreen', reserve: 'ReserveScreen',
};

const pathFor = (route, lang) => {
  const prefix = lang === 'es' ? '/es' : '';
  if (route === 'home') return prefix + '/';
  if (route.startsWith('room:')) return `${prefix}/room/${route.split(':')[1]}/`;
  return `${prefix}/${route}/`;
};

// ---- per-page JSON-LD -------------------------------------------------------
const HOTEL_REF = { '@type': 'Hotel', '@id': `${SITE}/#hotel`, name: 'Florita 39', url: `${SITE}/` };
const ADDRESS = {
  '@type': 'PostalAddress', streetAddress: 'Miguel Hidalgo 103, Centro',
  addressLocality: 'Isla Mujeres', addressRegion: 'Quintana Roo',
  postalCode: '77400', addressCountry: 'MX',
};
function jsonLdFor(route, lang, url) {
  const T = lang === 'es' ? t : (s) => s;
  const blocks = [];
  const crumbs = [{ name: lang === 'es' ? 'Inicio' : 'Home', item: SITE + pathFor('home', lang) }];
  if (route.startsWith('room:')) {
    const room = D.rooms.find((r) => 'room:' + r.id === route);
    crumbs.push({ name: lang === 'es' ? 'Habitaciones' : 'Rooms', item: SITE + pathFor('rooms', lang) });
    crumbs.push({ name: room.name, item: url });
    blocks.push({
      '@context': 'https://schema.org', '@type': 'HotelRoom', '@id': url, url,
      name: room.name, description: T(room.blurb), image: abs(room.image),
      bed: { '@type': 'BedDetails', typeOfBed: room.bed },
      occupancy: { '@type': 'QuantitativeValue', maxValue: /4/.test(room.guests) ? 4 : 2, unitText: lang === 'es' ? 'huéspedes' : 'guests' },
      amenityFeature: room.tags.map((tag) => ({ '@type': 'LocationFeatureSpecification', name: T(tag), value: true })),
      containedInPlace: HOTEL_REF,
      offers: {
        '@type': 'Offer', price: room.price.replace(/[^0-9]/g, ''), priceCurrency: room.currency,
        availability: 'https://schema.org/InStock', url: D.brand.booking[lang],
      },
    });
  } else {
    crumbs.push({ name: META[route][lang][0].split('—')[0].trim(), item: url });
    if (route === 'faq') {
      blocks.push({
        '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang,
        mainEntity: D.faq.map((f) => ({
          '@type': 'Question', name: T(f.q),
          acceptedAnswer: { '@type': 'Answer', text: T(f.a) },
        })),
      });
    }
    if (route === 'restaurant') {
      blocks.push({
        '@context': 'https://schema.org', '@type': 'Restaurant',
        name: "Rubén's Restaurant", description: T(D.restaurant.blurb),
        image: abs(D.restaurant.image), url, servesCuisine: ['Yucatecan', 'Mexican'],
        telephone: '+52 999 101 2428', address: ADDRESS, containedInPlace: HOTEL_REF,
      });
    }
  }
  blocks.push({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
  });
  return blocks.map((b) => `<script type="application/ld+json">\n${JSON.stringify(b, null, 1)}\n</script>`).join('\n');
}
// The home pages keep the template's Hotel entity, enriched with its rooms.
const containsPlace = (lang) => JSON.stringify(
  D.rooms.map((r) => ({ '@type': 'HotelRoom', name: r.name, url: SITE + pathFor('room:' + r.id, lang) })), null, 1);

// ---- render one route -------------------------------------------------------
function renderRoute(route) {
  const base = route.split(':')[0];
  const el = React.createElement;
  const screen = base === 'room'
    ? el(globalThis.RoomDetailScreen, { roomId: route.split(':')[1], onNav: noop })
    : el(globalThis[SCREEN_FOR[base]], { onNav: noop });
  return renderToString(
    el('div', { className: 'f39-site' },
      el(globalThis.Header, { route: base, onNav: noop, onImage: base === 'home' }),
      screen,
      el(globalThis.Footer, { onNav: noop })
    )
  );
}

// Translate rendered HTML to Spanish with the same dictionary the runtime
// walker uses: whole trimmed text nodes and input placeholders.
const decodeEnt = (s) => s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const encodeEnt = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function translateHTML(html) {
  const dom = parse(html);
  const walk = (node) => {
    if (node.nodeType === 3) {
      // React escapes quotes in text; decode before matching dictionary keys.
      const raw = decodeEnt(node.rawText);
      const key = raw.trim();
      if (key && DICT[key] != null) node.rawText = encodeEnt(raw.replace(key, DICT[key]));
      return;
    }
    if (node.getAttribute) {
      const ph = node.getAttribute('placeholder');
      if (ph && DICT[ph] != null) node.setAttribute('placeholder', DICT[ph]);
      // ES pages must link to /es/... so crawlers stay in the Spanish tree
      const href = node.getAttribute('href');
      if (href && /^\/(?!es\/)/.test(href)) node.setAttribute('href', '/es' + (href === '/' ? '/' : href));
    }
    node.childNodes.forEach(walk);
  };
  walk(dom);
  return dom.toString();
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---- assemble pages from the index.html template ----------------------------
const template = readFileSync(join(ROOT, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('index.html is already prerendered — restore the pristine template first (git checkout index.html)');
}
const urls = [];
for (const route of ROUTES) {
  globalThis.F39_LANG = 'en';
  const bodyEN = renderRoute(route);
  for (const lang of ['en', 'es']) {
    const [title, desc] = META[route][lang];
    const path = pathFor(route, lang);
    const url = SITE + path;
    const altEN = SITE + pathFor(route, 'en');
    const altES = SITE + pathFor(route, 'es');
    const body = lang === 'es' ? translateHTML(bodyEN) : bodyEN;
    // Home keeps the dedicated 1200×630 share card; other pages use their hero.
    const ogFile = route === 'home' ? OG_DEFAULT : (OGIMG[route] || OG_DEFAULT);
    const ogImg = SITE + '/assets/' + ogFile;
    const hero = OGIMG[route];
    let page = template
      .replace('<html lang="en">', `<html lang="${lang}">`)
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(">)/, `$1${esc(desc)}$2`)
      .replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${url}$2`)
      .replace(/(<link rel="alternate" hreflang="en" href=")[^"]*(">)/, `$1${altEN}$2`)
      .replace(/(<link rel="alternate" hreflang="es" href=")[^"]*(">)/, `$1${altES}$2`)
      .replace(/(<link rel="alternate" hreflang="x-default" href=")[^"]*(">)/, `$1${altEN}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${esc(title)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${esc(desc)}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${url}$2`)
      .replace(/(<meta property="og:image" content=")[^"]*(">)/, `$1${ogImg}$2`)
      .replace(/(<meta name="twitter:title" content=")[^"]*(">)/, `$1${esc(title)}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*(">)/, `$1${esc(desc)}$2`)
      .replace(/(<meta name="twitter:image" content=")[^"]*(">)/, `$1${ogImg}$2`)
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    if (ogFile !== OG_DEFAULT) {
      // Dimensions of the generic cover don't apply to page-specific images.
      page = page
        .replace('<meta property="og:image:width" content="1200">\n', '')
        .replace('<meta property="og:image:height" content="630">\n', '');
    }
    if (hero) {
      // Hint the hero image to the preload scanner for a faster LCP.
      page = page.replace('<link rel="canonical"',
        `<link rel="preload" as="image" href="/assets/${hero}">\n<link rel="canonical"`);
    }
    if (route === 'home') {
      page = page.replace('"numberOfRooms": 6,', `"numberOfRooms": 6,\n  "containsPlace": ${containsPlace(lang)},`);
    } else {
      page = page.replace(/<!-- Structured data: Hotel entity for Google rich results -->\n<script type="application\/ld\+json">[\s\S]*?<\/script>/,
        jsonLdFor(route, lang, url));
    }
    if (lang === 'es') {
      page = page
        .replace('<meta property="og:locale" content="en_US">', '<meta property="og:locale" content="es_MX">')
        .replace('<meta property="og:locale:alternate" content="es_MX">', '<meta property="og:locale:alternate" content="en_US">');
    }
    const outFile = path === '/' ? 'index.html' : path.slice(1) + 'index.html';
    mkdirSync(join(ROOT, dirname(outFile)), { recursive: true });
    writeFileSync(join(ROOT, outFile), page);
    urls.push({ url, altEN, altES });
  }
}

// ---- sitemap ----------------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(({ url, altEN, altES }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${altEN}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${altES}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${altEN}"/>
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(ROOT, 'sitemap.xml'), sitemap);
console.log(`prerendered ${urls.length} pages (${ROUTES.length} routes × en/es) + sitemap.xml`);
process.exit(0); // the site's i18n boot keeps a setTimeout retry loop alive in Node
