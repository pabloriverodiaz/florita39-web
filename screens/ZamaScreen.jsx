const ZM = window.Florita39DesignSystem_466e9b;

function ZamaScreen({ onNav }) {
  const D = window.F39DATA;
  const Z = D.zama;
  const { Eyebrow, Button, Icon, Badge } = ZM;
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div>
      <window.PageHero image="marketing/zama/dji3.jpg" eyebrow="Beach-club partnership" title="Zama Beach Club"
        sub="Your day by the sea — included with every stay, with no minimum spend." />

      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-lg)' }}>
          <div className="f39-grid-2" style={{ alignItems: 'center', gap: 'var(--space-9)' }}>
            <div>
              <Badge variant="sand">Guests only</Badge>
              <h2 className="f39-section__title" style={{ textAlign: 'left', margin: '14px 0 18px' }}>The day by the sea, sorted</h2>
              <p className="f39-lead">{Z.blurb}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '24px 0' }}>
                {Z.perks.map((p) => (
                  <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ color: 'var(--color-primary)', marginTop: 2 }}><Icon name="check" size={18} /></span>
                    <span style={{ color: 'var(--text-body)' }}>{p}</span>
                  </div>
                ))}
              </div>
              <a className="f39-btn f39-btn--primary" href="https://wa.me/5219991732538" target="_blank" rel="noreferrer">Reserve your day</a>
            </div>
            <img src={F39_ASSETS + '/' + Z.images[0]} alt="Zama Beach Club" style={{ width: '100%', height: 460, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </div>
      </section>

      <section className="f39-section--tight" style={{ paddingBottom: 'var(--space-9)' }}>
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {Z.images.slice(1).map((g) => (
              <img key={g} src={F39_ASSETS + '/' + g} alt="" style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.ZamaScreen = ZamaScreen;
