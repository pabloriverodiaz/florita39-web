const GA = window.Florita39DesignSystem_466e9b;

function GalleryScreen({ onNav }) {
  const D = window.F39DATA;
  const { Tag } = GA;
  const cats = ['All', ...Object.keys(D.gallery)];
  const [active, setActive] = React.useState('All');
  const [lb, setLb] = React.useState(null);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const items = active === 'All'
    ? Object.values(D.gallery).flat()
    : D.gallery[active];

  return (
    <div>
      <window.PageHero image="areas/terraza/01.jpg" eyebrow="See the hotel" title="Gallery"
        sub="The rooms, the rooftop, the dining and the island around us." />

      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
            {cats.map((c) => (
              <Tag key={c} interactive selected={active === c} onClick={() => setActive(c)}>{c}</Tag>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {items.map((g, i) => (
              <img key={g + i} src={F39_ASSETS + '/' + g} alt="" loading="lazy" onClick={() => setLb(g)}
                style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: 'var(--radius-md)', cursor: 'zoom-in' }} />
            ))}
          </div>
        </div>
      </section>

      {lb && (
        <div onClick={() => setLb(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(10,16,22,.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 80, cursor: 'zoom-out', padding: 30 }}>
          <img src={F39_ASSETS + '/' + lb} alt="" style={{ maxWidth: '92vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: 'var(--radius-md)' }} />
        </div>
      )}
    </div>
  );
}
window.GalleryScreen = GalleryScreen;
