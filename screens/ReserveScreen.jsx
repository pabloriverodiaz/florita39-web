const RV = window.Florita39DesignSystem_466e9b;

/* Florita 39 — Reserve screen.
   Embeds the real Amenitiz booking engine (on the amenitiz.io subdomain, so it
   keeps working after hotelflorita39.com is pointed at this new site).
   URL lives in data.js › brand.booking. Bookings still register in Amenitiz. */
function ReserveScreen({ onNav }) {
  const D = window.F39DATA;
  const { Eyebrow, Button, Icon } = RV;
  const [lang, setLang] = React.useState(window.F39_LANG === 'es' ? 'es' : 'en');
  const CLIP = 118; // px cropped off the top of the Amenitiz engine (its nav + hero banner)
  const src = (D.brand.booking && D.brand.booking[lang]) || 'https://florita39-1.amenitiz.io/es/booking/room';
  const [blocked, setBlocked] = React.useState(false);

  // Keep the embedded engine in sync with the site's language toggle.
  React.useEffect(() => {
    const h = (e) => setLang(e.detail === 'es' ? 'es' : 'en');
    window.addEventListener('f39:lang', h);
    return () => window.removeEventListener('f39:lang', h);
  }, []);

  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  // If the engine refuses to be framed (X-Frame-Options / CSP), the iframe stays
  // blank — after a grace period we surface the "open in a new tab" fallback.
  React.useEffect(() => {
    const t = setTimeout(() => {
      const f = document.getElementById('f39-booking-frame');
      if (f && f.dataset.loaded !== '1') setBlocked(true);
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <section className="f39-section" style={{ paddingBottom: 'var(--space-6)' }}>
        <div className="f39-container" style={{ maxWidth: 'var(--container-lg)' }}>
          <div className="f39-section__head" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
            <Eyebrow>Reserve</Eyebrow>
            <h1 className="f39-section__title">Book your stay</h1>
            <p className="f39-lead" style={{ maxWidth: '52ch', margin: '10px auto 0' }}>
              Best rates, direct — taxes included and free cancellation on most dates.
              Your booking is confirmed with our reservation system.
            </p>
          </div>

          {/* The Amenitiz engine ships its own header + hero banner; we crop
              CLIP px off the top so only the clean "select your stay" widget
              shows inside our page. Tune CLIP if Amenitiz changes their layout. */}
          <div className="f39-card f39-card--raised" style={{ overflow: 'hidden', padding: 0, background: 'var(--surface-card)' }}>
            <div style={{ position: 'relative', height: 'min(1180px, calc(100vh - 40px))', overflow: 'hidden' }}>
              <iframe
                id="f39-booking-frame"
                title="Florita 39 — Booking engine"
                src={src}
                key={src}
                onLoad={(e) => { e.currentTarget.dataset.loaded = '1'; }}
                loading="lazy"
                allow="payment"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ position: 'absolute', top: -CLIP, left: 0, width: '100%', height: 'calc(100% + ' + CLIP + 'px)', border: 0, display: 'block', background: 'var(--surface-card)' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', alignItems: 'center', marginTop: 'var(--space-5)' }}>
            <a href={src} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="sm">Open the booking engine in a new tab</Button>
            </a>
            <a href={D.brand.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button variant="ghost" size="sm">Book by WhatsApp</Button>
            </a>
          </div>

          {blocked && (
            <div className="f39-card" style={{ marginTop: 'var(--space-5)', padding: '20px 22px', textAlign: 'center', background: 'var(--color-primary-soft)' }}>
              <p style={{ margin: 0, color: 'var(--text-strong)' }}>
                <strong>The booking engine opens in its own page.</strong>{' '}
                <a href={src} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  Check availability &amp; book &rarr;
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
window.ReserveScreen = ReserveScreen;
