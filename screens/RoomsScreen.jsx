const RS = window.Florita39DesignSystem_466e9b;

function RoomsScreen({ onNav }) {
  const D = window.F39DATA;
  const { Eyebrow, RoomCard, Tag } = RS;
  const filters = ['All rooms', '2 guests', 'Ocean view', 'Family'];
  const [active, setActive] = React.useState('All rooms');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <div>
      <section style={{ background: 'var(--f39-blue-900)', color: '#fff', padding: 'calc(var(--header-height) + 40px) 0 56px' }}>
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div className="f39-eyebrow-el" style={{ color: 'rgba(255,255,255,.85)', marginBottom: 14 }}>Know our rooms</div>
          <h1 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.08em', fontSize: 'var(--text-display)', margin: 0, color: '#fff', lineHeight: 1.04 }}>Rooms</h1>
          <p style={{ color: 'rgba(255,255,255,.85)', maxWidth: '52ch', marginTop: 16, fontSize: 'var(--text-lg)' }}>Six intimate layouts, each with a kitchenette and the island a step away.</p>
        </div>
      </section>

      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
            {filters.map((f) => (
              <Tag key={f} interactive selected={active === f} onClick={() => setActive(f)}>{f}</Tag>
            ))}
          </div>
          <div className="f39-grid-3">
            {D.rooms.map((r) => (
              <RoomCard key={r.id} name={r.name} model={r.model}
                image={F39_ASSETS + '/' + r.image}
                tags={r.tags.slice(0, 3)} ctaLabel="View room"
                onClick={() => onNav('room:' + r.id)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.RoomsScreen = RoomsScreen;
