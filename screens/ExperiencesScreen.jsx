const EX = window.Florita39DesignSystem_466e9b;

function PageHero({ image, eyebrow, title, sub }) {
  return (
    <section style={{ position: 'relative', minHeight: '54vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <img src={F39_ASSETS + '/' + image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(4,32,58,.28), rgba(4,32,58,.72))' }}></div>
      <div className="f39-container" style={{ position: 'relative', maxWidth: 'var(--container-xl)', paddingBottom: 52, paddingTop: 'calc(var(--header-height) + 24px)' }}>
        <div className="f39-eyebrow-el" style={{ color: '#fff', marginBottom: 14 }}>{eyebrow}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.07em', color: '#fff', fontSize: 'var(--text-display)', margin: 0, lineHeight: 1.04 }}>{title}</h1>
        {sub && <p style={{ color: 'rgba(255,255,255,.9)', maxWidth: '52ch', marginTop: 16, fontSize: 'var(--text-lg)', lineHeight: 1.6 }}>{sub}</p>}
      </div>
    </section>
  );
}
window.PageHero = PageHero;

function ExperiencesScreen({ onNav }) {
  const D = window.F39DATA;
  const { Eyebrow, Button, Icon, Badge } = EX;
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div>
      <PageHero image="marketing/lifestyle/zycar.jpg" eyebrow="Things to do" title="Experiences & tours"
        sub="The island, on your terms. We arrange the experiences our guests love most — from fishing mornings to golf-cart days." />

      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-7)' }}>
            {D.experiences.map((e) => (
              <div key={e.id} className="f39-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: 240 }}>
                  <img src={F39_ASSETS + '/' + e.image} alt={e.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {e.link && <span style={{ position: 'absolute', top: 14, left: 14 }}><Badge variant="sand">Included for guests</Badge></span>}
                </div>
                <div style={{ padding: 26, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ color: 'var(--color-primary)', marginBottom: 12 }}><Icon name={e.icon} size={24} /></span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', margin: '0 0 4px', color: 'var(--text-strong)' }}>{e.name}</h3>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 500, marginBottom: 12 }}>{e.meta}</div>
                  <p style={{ color: 'var(--text-body)', margin: 0, flex: 1 }}>{e.blurb}</p>
                  <div style={{ marginTop: 20 }}>
                    {e.link
                      ? <Button variant="secondary" onClick={() => onNav(e.link)}>Learn more</Button>
                      : <a className="f39-btn f39-btn--secondary" href={'https://wa.me/5219991732538'} target="_blank" rel="noreferrer">Ask the concierge</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="f39-section--tight f39-bg-chukum">
        <div className="f39-container" style={{ maxWidth: 'var(--container-lg)', textAlign: 'center', paddingTop: 40, paddingBottom: 40 }}>
          <Eyebrow>Plan with us</Eyebrow>
          <h2 className="f39-section__title" style={{ marginTop: 12, marginBottom: 18 }}>Tell us what you’d love to do</h2>
          <a href="https://wa.me/5219991732538" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Contact the concierge</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
window.ExperiencesScreen = ExperiencesScreen;
