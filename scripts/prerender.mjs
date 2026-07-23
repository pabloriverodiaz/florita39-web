// Prerenders every screen to static HTML — EN at /<route>/index.html and
// ES at /es/<route>/index.html — so search engines index real content on
// real URLs without executing JavaScript. React takes over on load.
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

// ---- routes & per-page metadata --------------------------------------------
const META = {
  home: {
    en: ['Florita 39 — Hotel Boutique · Isla Mujeres',
      'Florita 39 — an intimate six-suite boutique hotel in the heart of Isla Mujeres. Rooftop pool, Zama Beach Club included, steps from Playa Norte and the Ultramar ferry.'],
    es: ['Florita 39 — Hotel Boutique · Isla Mujeres',
      'Florita 39 — un íntimo hotel boutique de seis suites en el corazón de Isla Mujeres. Alberca en la azotea, Zama Beach Club incluido, a pasos de Playa Norte y del ferry Ultramar.'],
  },
  rooms: {
    en: ['Rooms & Suites — Florita 39 · Isla Mujeres',
      'Six suites with private entrances in the heart of Isla Mujeres — lofts, family suites and two-level duplexes with kitchenettes, balconies and garden patios.'],
    es: ['Habitaciones y Suites — Florita 39 · Isla Mujeres',
      'Seis suites con entrada privada en el corazón de Isla Mujeres — lofts, suites familiares y dúplex de dos niveles con cocineta, balcón y jardín.'],
  },
  amenities: {
    en: ['Amenities — Florita 39 · Isla Mujeres',
      "Rooftop pool and club, spa, tropical garden, Rubén's Restaurant and an all-day coffee shop — everything included in your stay at Florita 39."],
    es: ['Amenidades — Florita 39 · Isla Mujeres',
      "Alberca y club en la azotea, spa, jardín tropical, Rubén's Restaurant y café todo el día — todo incluido en tu estancia en Florita 39."],
  },
  experiences: {
    en: ['Experiences & Tours — Florita 39 · Isla Mujeres',
      'Fishing trips, snorkel and reef tours, golf-cart rental and Zama Beach Club days — all arranged from the hotel.'],
    es: ['Experiencias y Tours — Florita 39 · Isla Mujeres',
      'Tours de pesca, snorkel y arrecife, renta de carritos de golf y días en Zama Beach Club — todo organizado desde el hotel.'],
  },
  zama: {
    en: ['Zama Beach Club — Florita 39 · Isla Mujeres',
      'Zama Beach Club is included with every stay at Florita 39 — beachfront pool, loungers and full service with no minimum spend.'],
    es: ['Zama Beach Club — Florita 39 · Isla Mujeres',
      'Zama Beach Club está incluido en cada estancia en Florita 39 — alberca frente al mar, camastros y servicio completo sin consumo mínimo.'],
  },
  island: {
    en: ['Isla Mujeres Guide — Florita 39',
      'Playa Norte, Punta Sur, the walking street and the Ultramar ferry — Isla Mujeres from the centre, steps from Florita 39.'],
    es: ['Guía de Isla Mujeres — Florita 39',
      'Playa Norte, Punta Sur, la calle peatonal y el ferry Ultramar — Isla Mujeres desde el centro, a pasos de Florita 39.'],
  },
  restaurant: {
    en: ["Rubén's Restaurant — Florita 39 · Isla Mujeres",
      'Fresh regional Yucatán cooking and an all-day coffee shop in the heart of Florita 39 — open to guests and the island alike.'],
    es: ["Rubén's Restaurant — Florita 39 · Isla Mujeres",
      'Cocina regional yucateca y café todo el día en el corazón de Florita 39 — abierto a huéspedes y a toda la isla.'],
  },
  gallery: {
    en: ['Gallery — Florita 39 · Isla Mujeres',
      'The suites, the rooftop, the dining and the island around Florita 39 — in pictures.'],
    es: ['Galería — Florita 39 · Isla Mujeres',
      'Las suites, la azotea, el restaurante y la isla alrededor de Florita 39 — en imágenes.'],
  },
  offers: {
    en: ['Offers — Florita 39 · Isla Mujeres',
      'Direct-booking offers at Florita 39 — the lowest rates, summer discounts and Zama Beach Club always included.'],
    es: ['Ofertas — Florita 39 · Isla Mujeres',
      'Ofertas por reserva directa en Florita 39 — las mejores tarifas, descuentos de verano y Zama Beach Club siempre incluido.'],
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
    en: ['FAQ — Florita 39 · Isla Mujeres',
      'Ferry from Cancún, check-in times, kitchens, Zama Beach Club access and more — practical answers for your stay at Florita 39.'],
    es: ['Preguntas Frecuentes — Florita 39 · Isla Mujeres',
      'Ferry desde Cancún, horarios de check-in, cocinas, acceso a Zama Beach Club y más — respuestas prácticas para tu estancia.'],
  },
  reserve: {
    en: ['Reserve — Florita 39 · Isla Mujeres',
      'Book direct at Florita 39 for the lowest rates — choose your suite and dates on our secure booking engine.'],
    es: ['Reserva — Florita 39 · Isla Mujeres',
      'Reserva directo en Florita 39 con las mejores tarifas — elige tu suite y fechas en nuestro motor de reservas seguro.'],
  },
};
for (const room of D.rooms) {
  META['room:' + room.id] = {
    en: [`${room.name} — Florita 39 · Isla Mujeres`, room.blurb],
    es: [`${room.name} — Florita 39 · Isla Mujeres`, t(room.blurb)],
  };
}
const ROUTES = Object.keys(META);

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
      .replace(/(<meta name="twitter:title" content=")[^"]*(">)/, `$1${esc(title)}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*(">)/, `$1${esc(desc)}$2`)
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
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
