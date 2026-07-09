const AM = window.Florita39DesignSystem_466e9b;

function AmenitiesScreen({ onNav }) {
  const D = window.F39DATA;
  const { Eyebrow, AmenityItem, Icon, Button } = AM;
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div>
      <section style={{ position: 'relative', minHeight: '52vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={F39_ASSETS + '/photos/rooftop-terrace.jpg'} alt="Rooftop terrace" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(4,32,58,.3), rgba(4,32,58,.66))' }}></div>
        <div className="f39-container" style={{ position: 'relative', maxWidth: 'var(--container-xl)', paddingBottom: 48 }}>
          <div className="f39-eyebrow-el" style={{ color: '#fff', marginBottom: 14 }}>Know our hotel</div>
          <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.08em', color: '#fff', fontSize: 'var(--text-display)', margin: 0, lineHeight: 1.04 }}>Amenities &amp; services</h1>
        </div>
      </section>

      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-lg)' }}>
          <div className="f39-section__head" style={{ textAlign: 'left', margin: '0 0 var(--space-7)', maxWidth: '100%' }}>
            <Eyebrow>The hotel</Eyebrow>
            <h2 className="f39-section__title" style={{ textAlign: 'left', marginTop: 14 }}>Amenities</h2>
          </div>
          <div className="f39-grid-3" style={{ rowGap: 'var(--space-7)' }}>
            {D.amenities.map((a) => (
              <AmenityItem key={a.label} icon={<Icon name={a.icon} />} label={a.label} note={a.note} />
            ))}
          </div>
        </div>
      </section>

      <section className="f39-section f39-bg-chukum">
        <div className="f39-container" style={{ maxWidth: 'var(--container-lg)' }}>
          <div className="f39-section__head" style={{ textAlign: 'left', margin: '0 0 var(--space-7)', maxWidth: '100%' }}>
            <Eyebrow>At your service</Eyebrow>
            <h2 className="f39-section__title" style={{ textAlign: 'left', marginTop: 14 }}>Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6) var(--space-5)' }}>
            {D.services.map((s) => (
              <div key={s.label} className="f39-card" style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--surface-card)' }}>
                <span style={{ color: 'var(--color-primary)' }}><Icon name={s.icon} size={24} /></span>
                <span style={{ fontWeight: 500, color: 'var(--text-strong)' }}>{s.label}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            <Button variant="primary" onClick={() => onNav('reserve')}>Reserve your stay</Button>
          </div>
        </div>
      </section>

      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div className="f39-section__head" style={{ textAlign: 'left', margin: '0 0 var(--space-7)', maxWidth: '100%' }}>
            <Eyebrow>Beyond the hotel</Eyebrow>
            <h2 className="f39-section__title" style={{ textAlign: 'left', marginTop: 14 }}>Explore Florita 39</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            {[
              { r: 'experiences', img: 'marketing/lifestyle/zycar.jpg', t: 'Experiences & tours', s: 'Fishing, snorkel & golf carts' },
              { r: 'zama', img: 'marketing/zama/dji3.jpg', t: 'Zama Beach Club', s: 'Included · no minimum spend' },
              { r: 'restaurant', img: 'marketing/restaurante/00.jpg', t: "Rubén's Restaurant", s: 'Regional kitchen & coffee' },
              { r: 'island', img: 'marketing/playa/sea.jpg', t: 'The island', s: 'Playa Norte & beyond' },
              { r: 'gallery', img: 'areas/terraza/01.jpg', t: 'Gallery', s: 'See the hotel & island' },
              { r: 'offers', img: 'rooms/florita-4/06.jpg', t: 'Offers', s: 'Summer −30% & more' },
            ].map((c) => (
              <button key={c.r} onClick={() => onNav(c.r)} className="f39-card" style={{ padding: 0, overflow: 'hidden', border: 'none', cursor: 'pointer', textAlign: 'left', background: 'var(--surface-card)' }}>
                <div style={{ position: 'relative', height: 200 }}>
                  <img src={F39_ASSETS + '/' + c.img} alt={c.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(4,32,58,0), rgba(4,32,58,.55))' }}></div>
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', margin: '0 0 4px', color: 'var(--text-strong)' }}>{c.t}</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>{c.s}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.AmenitiesScreen = AmenitiesScreen;
