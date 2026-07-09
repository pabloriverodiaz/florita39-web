const RE = window.Florita39DesignSystem_466e9b;

function RestaurantScreen({ onNav }) {
  const D = window.F39DATA;
  const R = D.restaurant;
  const { Eyebrow, Button, Icon } = RE;
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div>
      <window.PageHero image={R.image} eyebrow="Eat & drink" title={R.name} sub={R.blurb} />

      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-lg)' }}>
          <div className="f39-grid-3" style={{ rowGap: 'var(--space-7)' }}>
            {R.highlights.map((h) => (
              <div key={h.label} className="f39-card" style={{ padding: 26, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ color: 'var(--color-primary)' }}><Icon name={h.icon} size={26} /></span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--text-strong)' }}>{h.label}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>{h.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="f39-section--tight" style={{ paddingBottom: 'var(--space-9)' }}>
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 14, height: 360 }}>
            {R.gallery.map((g, i) => (
              <img key={g} src={F39_ASSETS + '/' + g} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)', gridRow: i === 0 ? 'span 2' : 'auto', display: i > 2 ? 'none' : 'block' }} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Button variant="primary" onClick={() => onNav('reserve')}>Book a table with your stay</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
window.RestaurantScreen = RestaurantScreen;
