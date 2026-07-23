const RD = window.Florita39DesignSystem_466e9b;

function RoomDetailScreen({ roomId, onNav }) {
  const D = window.F39DATA;
  const room = D.rooms.find((r) => r.id === roomId) || D.rooms[0];
  const { Eyebrow, Button, Tag, Icon, Divider } = RD;
  const gallery = room.gallery || [room.image];
  const [main, setMain] = React.useState(room.image);
  React.useEffect(() => { setMain(room.image); }, [roomId]);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const facts = [
    ['users', room.guests], ['maximize', room.size], ['bed-double', room.bed], ['chef-hat', 'Kitchenette'],
  ];

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      <div className="f39-container" style={{ maxWidth: 'var(--container-xl)', paddingTop: 28 }}>
        <button onClick={() => onNav('rooms')} className="f39-btn f39-btn--ghost f39-btn--sm" style={{ paddingLeft: 0 }}>
          <Icon name="arrow-left" size={16} /> All rooms
        </button>
      </div>

      <section className="f39-section" style={{ paddingTop: 'var(--space-5)' }}>
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 'var(--space-9)', alignItems: 'start' }}>

            {/* LEFT — gallery + content */}
            <div style={{ minWidth: 0 }}>
              <img src={F39_ASSETS + '/' + main} alt={room.name}
                   style={{ width: '100%', height: 'min(52vh, 480px)', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginTop: 10 }}>
                {gallery.map((g) => (
                  <img loading="lazy" decoding="async" key={g} src={F39_ASSETS + '/' + g} alt="" onClick={() => setMain(g)}
                       style={{ width: '100%', height: 92, objectFit: 'cover', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                                outline: g === main ? '2px solid var(--color-primary)' : 'none', outlineOffset: 2, opacity: g === main ? 1 : 0.82 }} />
                ))}
              </div>

              <div style={{ marginTop: 'var(--space-8)' }}>
                <Eyebrow>{room.audience || room.model}</Eyebrow>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)', margin: '14px 0 6px', color: 'var(--text-strong)' }}>{room.name}</h1>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 18px', fontSize: 'var(--text-sm)', letterSpacing: '.02em' }}>{room.model}</p>
                <p className="f39-lead" style={{ maxWidth: '62ch' }}>{room.blurb}</p>

                <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', margin: '28px 0' }}>
                  {facts.map(([ic, label]) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-body)' }}>
                      <span style={{ color: 'var(--color-primary)' }}><Icon name={ic} size={20} /></span>
                      <span style={{ fontWeight: 500, color: 'var(--text-strong)' }}>{label}</span>
                    </div>
                  ))}
                </div>

                <Divider />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', margin: '0 0 16px' }}>In this room</h3>
                <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
                  {room.tags.map((t) => <Tag key={t} iconLeft={<Icon name="check" size={15} />}>{t}</Tag>)}
                </div>
              </div>
            </div>

            {/* RIGHT — booking CTA. No price/dates here: live rates & availability
                live in the Amenitiz engine, so nothing needs to stay in sync. */}
            <aside className="f39-card f39-card--raised" style={{ padding: 24, position: 'sticky', top: 'calc(var(--header-height) + 16px)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', margin: '0 0 6px', color: 'var(--text-strong)' }}>Book your stay</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 18 }}>Taxes included · free cancellation</p>
              <Button variant="primary" block onClick={() => onNav('reserve')}>Check availability</Button>
              <a href={D.brand.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', marginTop: 12 }}>
                <Button variant="secondary" block>Book by WhatsApp</Button>
              </a>
              <p style={{ textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 14 }}>Live rates &amp; dates on our booking system</p>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
window.RoomDetailScreen = RoomDetailScreen;
