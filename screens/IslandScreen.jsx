const IS = window.Florita39DesignSystem_466e9b;

function IslandScreen({ onNav }) {
  const D = window.F39DATA;
  const I = D.island;
  const { Eyebrow, Button } = IS;
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div>
      <window.PageHero image="marketing/playa/sea.jpg" eyebrow="About Isla Mujeres" title="The island"
        sub={I.intro} />

      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div className="f39-section__head" style={{ textAlign: 'left', margin: '0 0 var(--space-7)', maxWidth: '100%' }}>
            <Eyebrow>Around the island</Eyebrow>
            <h2 className="f39-section__title" style={{ textAlign: 'left', marginTop: 14 }}>Close at hand</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-7)' }}>
            {I.highlights.map((h) => (
              <div key={h.name} className="f39-card" style={{ overflow: 'hidden' }}>
                <img src={F39_ASSETS + '/' + h.image} alt={h.name} style={{ width: '100%', height: 260, objectFit: 'cover' }} />
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', margin: 0, color: 'var(--text-strong)' }}>{h.name}</h3>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 500, whiteSpace: 'nowrap' }}>{h.meta}</span>
                  </div>
                  <p style={{ color: 'var(--text-body)', margin: '10px 0 0' }}>{h.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="f39-section--tight" style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={F39_ASSETS + '/marketing/playa/m5709.jpg'} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(3,22,42,.92), rgba(3,22,42,.55) 60%, rgba(3,22,42,.35))' }}></div>
        <div className="f39-container" style={{ position: 'relative', maxWidth: 'var(--container-xl)', paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ maxWidth: '42ch', color: '#fff' }}>
            <div className="f39-eyebrow-el" style={{ color: '#fff', marginBottom: 14 }}>Right in the centre</div>
            <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.07em', fontSize: 'var(--text-display)', margin: '0 0 14px', lineHeight: 1.05, color: '#fff' }}>3 min from the ferry</h2>
            <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 'var(--text-lg)', lineHeight: 1.6 }}>{D.brand.address}</p>
            <div style={{ marginTop: 22 }}><Button variant="ondark" onClick={() => onNav('reserve')}>Plan your stay</Button></div>
          </div>
        </div>
      </section>
    </div>
  );
}
window.IslandScreen = IslandScreen;
