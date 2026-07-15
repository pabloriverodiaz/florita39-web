const RV = window.Florita39DesignSystem_466e9b;

/* Florita 39 — Reserve screen.
   Links out to the real Amenitiz booking engine instead of embedding it.
   The engine renders its own full page (its "FLORITA 39" hero + Select Your
   Stay), which does not embed cleanly in an iframe and makes in-frame payment
   fragile — so we send guests straight to it. The URL lives on the amenitiz.io
   subdomain (data.js › brand.booking), so it survives pointing
   hotelflorita39.com at this site. Language follows the site's EN/ES toggle. */
function ReserveScreen({ onNav }) {
  const D = window.F39DATA;
  const { Eyebrow, Button, Icon } = RV;
  const [lang, setLang] = React.useState(window.F39_LANG === 'es' ? 'es' : 'en');
  const url = (D.brand.booking && D.brand.booking[lang]) || 'https://florita39-1.amenitiz.io/es/booking/room';

  // Keep the booking link in sync with the site's language toggle.
  React.useEffect(() => {
    const h = (e) => setLang(e.detail === 'es' ? 'es' : 'en');
    window.addEventListener('f39:lang', h);
    return () => window.removeEventListener('f39:lang', h);
  }, []);

  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const reassurance = ['Best rate, direct', 'Taxes included', 'Free cancellation on most dates'];

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-md)', textAlign: 'center' }}>
          <Eyebrow>Reserve</Eyebrow>
          <h1 className="f39-section__title">Book your stay</h1>
          <p className="f39-lead" style={{ maxWidth: '54ch', margin: '10px auto 0' }}>
            Check live availability and rates and book securely on our reservation system.
            The best rates are always here, direct with us.
          </p>

          <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', justifyContent: 'center', margin: 'var(--space-6) 0' }}>
            {reassurance.map((label) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-body)' }}>
                <span style={{ color: 'var(--color-primary)' }}><Icon name="check" size={18} /></span>
                <span style={{ fontWeight: 500, color: 'var(--text-strong)' }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={url} rel="noopener" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="lg">Check availability &amp; book</Button>
            </a>
            <a href={D.brand.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="lg">Book by WhatsApp</Button>
            </a>
          </div>

          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-5)' }}>
            You continue to our secure booking system to choose dates and pay.
          </p>
        </div>
      </section>
    </div>
  );
}
window.ReserveScreen = ReserveScreen;
