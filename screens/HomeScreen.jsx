/* Florita 39 — Home screen (the "Mega" landing, ported to React).
   Authored in English; the i18n layer swaps to Spanish via the dictionary.
   Reserve CTAs route to the Amenitiz booking engine (onNav 'reserve');
   suite cards route to their room-detail pages. */
function HomeScreen({ onNav }) {
  const D = window.F39DATA;
  const WA = D.brand.whatsappUrl;
  const img = (p) => F39_ASSETS + '/' + p;
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const suites = [
    { no: '01', id: 'loft-florita', title: 'Balcony Loft', who: 'Best for couples',
      text: 'An open loft with a queen bed and a balcony over Av. Hidalgo. No stairs — bright and serene.',
      feats: ['Queen bed', 'Balcony', 'No stairs'], image: 'rooms/florita-1/pro-01.jpg' },
    { no: '02', id: 'hidalgo-heritage', title: 'Hidalgo Heritage', who: 'Families · up to 4',
      text: 'A suite with a bedroom and a lounge with a second queen bed. Room for the whole family.',
      feats: ['2 Queen beds', 'Lounge', 'Family'], image: 'rooms/florita-2/pro-09.jpg' },
    { no: '03', id: 'playa-norte', title: 'Playa Norte Suite', who: 'Families · up to 4',
      text: 'A queen bed plus a second queen in the lounge. Comfortable, cool and superbly located.',
      feats: ['2 Queen beds', 'Lounge', 'Kitchen'], image: 'rooms/florita-3/pro-03.jpg' },
    { no: '04', id: 'rubber-tree', title: 'Rubber Tree Retreat', who: 'Families · two levels',
      text: 'A two-level duplex with a private bedroom upstairs. More space and privacy for longer stays.',
      feats: ['Duplex', 'Two levels', 'Private'], image: 'rooms/florita-4/pro-09.jpg' },
    { no: '05', id: 'isla-mujeres-duplex', title: 'Isla Mujeres Dúplex', who: 'Groups · two levels',
      text: 'A spacious duplex with a garden view and two levels. Our largest, for groups and big families.',
      feats: ['Duplex', 'Two levels', 'Garden view'], image: 'rooms/florita-5/pro-01.jpg' },
    { no: '06', id: 'boutique-garden', title: 'Boutique Garden Suite', who: 'Couples · private garden',
      text: 'A ground-floor suite with a king bed and a private garden patio — a green willow view through floor-to-ceiling glass.',
      feats: ['King bed', 'Private garden', 'Ground floor'], image: 'rooms/florita-6/pro-02.jpg' },
  ];

  const islandStrip = [
    { src: 'marketing/playa/sea.jpg', cap: 'Playa Norte · turquoise water' },
    { src: 'marketing/exterior/m8154.jpg', cap: 'Punta Sur' },
    { src: 'marketing/playa/m8069.jpg', cap: 'Eastern cliffs' },
    { src: 'marketing/exterior/j3851.jpg', cap: 'Malecón & centre' },
    { src: 'marketing/playa/j3874.jpg', cap: 'Open sea' },
    { src: 'marketing/playa/m5709.jpg', cap: 'Sunset on the pier' },
  ];

  const tinyStrip = [
    { src: 'marketing/lifestyle/m8454.jpg', cap: 'The Tiny House' },
    { src: 'marketing/lifestyle/m8514.jpg', cap: 'Private cabin' },
    { src: 'marketing/lifestyle/m9110.jpg', cap: 'Bamboo garden' },
    { src: 'marketing/lifestyle/m9144.jpg', cap: 'Couples escape' },
  ];

  return (
    <div className="mega">
      {/* ===== HERO ===== */}
      <header className="hero" id="top">
        <img className="bg" src={img('marketing/playa/sea.jpg')} alt="Playa Norte, Isla Mujeres" />
        <div className="veil"></div>
        <div className="wrap">
          <div className="kick">Boutique Hotel · Isla Mujeres, Mexico</div>
          <h1>A home<br />by the sea<em>Your summer in Isla Mujeres starts here</em></h1>
          <div className="meta">
            <span><b>6</b> suites with private entrances</span>
            <span><b>3 min</b> from the Ultramar ferry</span>
            <span><b>10 min</b> from Playa Norte</span>
            <span><b>Rooftop</b> pool &amp; club</span>
          </div>
          <div className="btns">
            <button className="btn btn-pri" onClick={() => onNav('reserve')}>Book direct <span className="dot"></span></button>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-gho">WhatsApp</a>
          </div>
        </div>
      </header>

      {/* ===== INTRO ===== */}
      <section className="intro">
        <div className="wrap grid">
          <div>
            <div className="eyebrow">Welcome to Florita 39</div>
            <h2 className="sec">Boutique, not generic.</h2>
            <p className="sec-lede">In the heart of the island, steps from the malecón and the ferry, Florita 39 is a small six-suite hotel with a character of its own: sage-green stucco, chukum details, a tropical garden and a rooftop pool to watch the sun go down. A home by the sea, made to stay a while.</p>
            <div className="btns">
              <a href="#suites" className="btn btn-sand">See the suites</a>
              <button className="btn" style={{ background: 'var(--stone)', color: 'var(--ink-900)' }} onClick={() => onNav('island')}>Discover the island</button>
            </div>
          </div>
          <div className="stats">
            <div className="c"><div className="n">6</div><div className="l">Unique suites with private entrances</div></div>
            <div className="c"><div className="n">4.7★</div><div className="l">Guest rating</div></div>
            <div className="c"><div className="n">3 min</div><div className="l">Walk to the Ultramar ferry</div></div>
            <div className="c"><div className="n">∞</div><div className="l">Sunsets from the rooftop</div></div>
          </div>
        </div>
      </section>

      {/* ===== SUITES ===== */}
      <section className="block alt" id="suites">
        <div className="wrap">
          <div className="eyebrow">The suites · Six models</div>
          <h2 className="sec">Find your own.</h2>
          <p className="sec-lede">From an intimate loft for two to duplexes and family suites with two beds. Each model has its own character — choose by trip, not by category.</p>
          <div className="suites">
            {suites.map((s) => (
              <article key={s.no} className="suite linkcard" onClick={() => onNav('room:' + s.id)}>
                <div className="ph"><span className="no">{s.no}</span><img src={img(s.image)} alt={s.title} /></div>
                <div className="bd">
                  <h3>{s.title}</h3>
                  <div className="who">{s.who}</div>
                  <p>{s.text}</p>
                  <div className="feat">{s.feats.map((f) => <span key={f}>{f}</span>)}</div>
                </div>
              </article>
            ))}
            <article className="suite" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'var(--chukum)', borderStyle: 'dashed' }}>
              <div className="bd" style={{ justifyContent: 'center', gap: 14 }}>
                <div className="script">Can’t decide?</div>
                <h3>Let’s find<br />your dates</h3>
                <p>Tell us who’s travelling and we’ll recommend the perfect suite.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-pri" style={{ alignSelf: 'center', marginTop: 6 }}>Message us <span className="dot"></span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== PROMOS ===== */}
      <section className="block" id="promos">
        <div className="wrap">
          <div className="eyebrow">Promotions · Summer 2026</div>
          <h2 className="sec">Book direct and save.</h2>
          <p className="sec-lede">The best rates are always here, direct with us — no intermediary fees.</p>
          <div className="promo">
            <img src={img('rooms/florita-2/08.jpg')} alt="Family suite" />
            <div className="v"></div>
            <div className="in">
              <div className="badge"><b>30%</b><span>Off</span></div>
              <h3>Summer for families,<br />−30% on villas 2 &amp; 4</h3>
              <p>The family suites with two beds, a rooftop pool and a car-free island — now 30% off this summer. Book direct on the site or by WhatsApp.</p>
              <div className="btns">
                <button className="btn btn-sand" onClick={() => onNav('reserve')}>Book the offer</button>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-gho">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE ISLAND ===== */}
      <section className="block alt" id="isla">
        <div className="wrap">
          <div className="eyebrow">About Isla Mujeres</div>
          <h2 className="sec">An unhurried, car-free island.</h2>
          <p className="sec-lede">Eight kilometres of Caribbean across from Cancún: turquoise water, walkable streets, golf carts and sunsets on the malecón. Florita 39 sits right in the centre — everything a few steps or a short ride away.</p>
          <div className="strip">
            {islandStrip.map((t) => (
              <div key={t.src} className="t" onClick={() => setLightbox(img(t.src))}>
                <img src={img(t.src)} alt={t.cap} /><div className="cap">{t.cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ZAMA ===== */}
      <section className="block" id="zama">
        <div className="wrap">
          <div className="eyebrow">Exclusive partnership · Beach Club</div>
          <h2 className="sec">Zama Beach Club, included.</h2>
          <p className="sec-lede">As a Florita 39 guest you enter Zama Beach Club <b>with no minimum spend</b> — enjoy the pool, the loungers and the sea, and order freely, no strings attached.</p>
          <div className="split rev">
            <div className="ph"><img src={img('marketing/zama/dji3.jpg')} alt="Zama Beach Club" /></div>
            <div className="tx">
              <span className="tag">Guests only</span>
              <h3>The day by the sea, sorted.</h3>
              <p>A beachfront pool, house coconuts, ceviches and aguachiles. Arrive, settle in and relax — we connect you with the club.</p>
              <ul>
                <li><b>No minimum spend</b> for Florita 39 guests.</li>
                <li>Pool, loungers and full food &amp; drink service.</li>
                <li>Minutes away by golf cart from the hotel.</li>
              </ul>
              <div className="btns"><a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-pri" style={{ alignSelf: 'flex-start' }}>Book your day <span className="dot"></span></a></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOLF CARTS ===== */}
      <section className="block ink" id="carritos">
        <div className="wrap">
          <div className="eyebrow">Getting around the island</div>
          <h2 className="sec" style={{ color: '#fff' }}>We rent golf carts.</h2>
          <p className="sec-lede">The best way to explore Isla Mujeres. We leave a cart ready at the hotel so you can roam at your own pace — from Playa Norte to Punta Sur, on nobody’s schedule.</p>
          <div className="split" style={{ borderColor: 'rgba(255,255,255,.14)', background: 'rgba(255,255,255,.04)' }}>
            <div className="ph"><img src={img('marketing/lifestyle/zycar.jpg')} alt="Golf cart by the sea" /></div>
            <div className="tx">
              <span className="tag" style={{ background: 'rgba(131,195,215,.18)', color: 'var(--blue-300)' }}>Easy rental</span>
              <h3 style={{ color: '#fff' }}>Your island, your pace.</h3>
              <p style={{ color: 'rgba(255,255,255,.78)' }}>Well-kept carts, delivery at the hotel and routes we recommend. By the hour or by the day, for couples or families.</p>
              <ul>
                <li style={{ color: 'rgba(255,255,255,.82)' }}>Pickup and drop-off at Florita 39.</li>
                <li style={{ color: 'rgba(255,255,255,.82)' }}>Hourly or full-day rates.</li>
                <li style={{ color: 'rgba(255,255,255,.82)' }}>A map with the island’s must-sees.</li>
              </ul>
              <div className="btns"><a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-sand" style={{ alignSelf: 'flex-start' }}>Reserve your cart</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FISHING ===== */}
      <section className="block" id="pesca">
        <div className="wrap">
          <div className="eyebrow">Experiences at sea</div>
          <h2 className="sec">Fishing tours.</h2>
          <p className="sec-lede">Head out into the Caribbean with local captains: sport fishing, snorkel and open-water afternoons. We coordinate your departure from the hotel — just bring the enthusiasm (and sunscreen).</p>
          <div className="split rev">
            <div className="ph"><img src={img('marketing/playa/j3874.jpg')} alt="Fishing trip at sea" /></div>
            <div className="tx">
              <span className="tag">With a local captain</span>
              <h3>Out to sea at dawn.</h3>
              <p>Half or full days, gear included. One of our guests’ favourite experiences on the island.</p>
              <ul>
                <li>Private and shared departures.</li>
                <li>Fishing gear and drinks on board.</li>
                <li>Optional reef snorkel.</li>
              </ul>
              <div className="btns"><a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-pri" style={{ alignSelf: 'flex-start' }}>Book your trip <span className="dot"></span></a></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TINY HOUSE ===== */}
      <section className="block alt" id="tiny">
        <div className="wrap">
          <div className="eyebrow">Sister property</div>
          <h2 className="sec">The Tiny House · Isla Mujeres.</h2>
          <p className="sec-lede">A different experience: intimate cabins with a bamboo garden, loungers and a plunge pool. Perfect for a couples’ escape with all the island charm.</p>
          <div className="strip" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {tinyStrip.map((t) => (
              <div key={t.src} className="t" style={{ aspectRatio: '4/5' }} onClick={() => setLightbox(img(t.src))}>
                <img src={img(t.src)} alt={t.cap} /><div className="cap">{t.cap}</div>
              </div>
            ))}
          </div>
          <div className="btns" style={{ marginTop: 26 }}><a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-sand">Ask about The Tiny House</a></div>
        </div>
      </section>

      {/* ===== AMENITIES ===== */}
      <section className="block">
        <div className="wrap">
          <div className="eyebrow">In the hotel</div>
          <h2 className="sec">Everything you need.</h2>
          <div className="amen">
            <div className="a" onClick={() => onNav('amenities')} style={{ cursor: 'pointer' }}><div className="ph"><img src={img('areas/terraza/05.jpg')} alt="Rooftop pool" /></div><div className="bd"><h4>Rooftop &amp; pool</h4><p>A rooftop club with a pool and loungers for the sunset.</p></div></div>
            <div className="a" onClick={() => onNav('restaurant')} style={{ cursor: 'pointer' }}><div className="ph"><img src={img('marketing/restaurante/00.jpg')} alt="Restaurant" /></div><div className="bd"><h4>Rubén’s Restaurant</h4><p>Fresh cooking and a coffee shop in the heart of the hotel.</p></div></div>
            <div className="a"><div className="ph"><img src={img('areas/fachada/16.jpg')} alt="Tropical garden" /></div><div className="bd"><h4>Tropical garden</h4><p>Sage stucco and green all around — the mark of the house.</p></div></div>
            <div className="a" onClick={() => onNav('amenities')} style={{ cursor: 'pointer' }}><div className="ph"><img src={img('marketing/azotea/02.jpg')} alt="Spa & rest" /></div><div className="bd"><h4>Spa &amp; rest</h4><p>Moments of calm without leaving the hotel.</p></div></div>
          </div>
          <div className="btns" style={{ marginTop: 30, justifyContent: 'center' }}>
            <button className="btn btn-pri" onClick={() => onNav('reserve')}>Check availability <span className="dot"></span></button>
            <button className="btn btn-sand" onClick={() => onNav('rooms')}>See all rooms</button>
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="mega-lb" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" />
        </div>
      )}
    </div>
  );
}
window.HomeScreen = HomeScreen;
