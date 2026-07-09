const IN = window.Florita39DesignSystem_466e9b;

/* ---------------- Offers ---------------- */
function OffersScreen({ onNav }) {
  const D = window.F39DATA;
  const { Eyebrow, Button, Badge } = IN;
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div>
      <window.PageHero image="rooms/florita-4/06.jpg" eyebrow="Promotions" title="Offers & packages"
        sub="The best rates are always direct with us. Here’s what’s on right now." />
      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-lg)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {D.offers.map((o) => (
              <div key={o.title} className="f39-card" style={{ padding: 30, display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 24, alignItems: 'center' }}>
                <div style={{ width: 110, height: 110, borderRadius: '50%', background: 'var(--f39-sand-500, #C6A187)', color: 'var(--text-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', textAlign: 'center', lineHeight: 1.05, padding: 12 }}>{o.badge}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', margin: '0 0 8px', color: 'var(--text-strong)' }}>{o.title}</h3>
                  <p style={{ color: 'var(--text-body)', margin: '0 0 6px' }}>{o.blurb}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', margin: 0 }}>{o.terms}</p>
                </div>
                <Button variant="primary" onClick={() => onNav('reserve')}>Book</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.OffersScreen = OffersScreen;

/* ---------------- About ---------------- */
function AboutScreen({ onNav }) {
  const D = window.F39DATA;
  const { Eyebrow, Button } = IN;
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div>
      <window.PageHero image="areas/fachada/16.jpg" eyebrow="Our story" title="A home by the sea"
        sub="An intimate boutique hotel in the heart of Isla Mujeres, built to feel like home." />
      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-lg)' }}>
          <div className="f39-grid-2" style={{ alignItems: 'center', gap: 'var(--space-9)' }}>
            <div>
              <Eyebrow>The concept</Eyebrow>
              <h2 className="f39-section__title" style={{ textAlign: 'left', margin: '16px 0 20px' }}>Intimate by design</h2>
              <p className="f39-lead">Florita 39 was designed to preserve the original sense of a home — with special attention to detail, architecture and comfort.</p>
              <p style={{ marginTop: 16, color: 'var(--text-body)' }}>Six suites with private entrances, a rooftop pool and club, a tropical garden and a genuine care for the island and its environment. For those who seek the privacy of a boutique hotel and a truly memorable stay.</p>
              <div style={{ marginTop: 26 }}><Button variant="secondary" onClick={() => onNav('rooms')}>See the rooms</Button></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <img src={F39_ASSETS + '/areas/terraza/05.jpg'} alt="" style={{ borderRadius: 'var(--radius-lg)', height: 320, objectFit: 'cover', gridRow: 'span 2' }} />
              <img src={F39_ASSETS + '/rooms/florita-1/04.jpg'} alt="" style={{ borderRadius: 'var(--radius-lg)', height: 153, objectFit: 'cover' }} />
              <img src={F39_ASSETS + '/areas/fachada/16.jpg'} alt="" style={{ borderRadius: 'var(--radius-lg)', height: 153, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
window.AboutScreen = AboutScreen;

/* ---------------- Contact ---------------- */
function ContactScreen({ onNav }) {
  const D = window.F39DATA;
  const B = D.brand;
  const { Eyebrow, Button, Icon, Input, Divider } = IN;
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const rows = [
    ['map-pin', B.address],
    ['phone', 'Tel. ' + B.phone],
    ['message-circle', 'WhatsApp ' + B.whatsapp],
    ['globe', B.web],
    ['instagram', B.instagram],
  ];
  return (
    <div>
      <window.PageHero image="marketing/exterior/j3851.jpg" eyebrow="Get in touch" title="Contact"
        sub="We’re happy to help plan your stay, a tour or a table. Reach us any way you like." />
      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-lg)' }}>
          <div className="f39-grid-2" style={{ gap: 'var(--space-9)', alignItems: 'start' }}>
            <div>
              <Eyebrow>Visit us</Eyebrow>
              <h2 className="f39-section__title" style={{ textAlign: 'left', margin: '14px 0 22px' }}>Florita 39</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {rows.map(([ic, t]) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ color: 'var(--color-primary)', marginTop: 2 }}><Icon name={ic} size={20} /></span>
                    <span style={{ color: 'var(--text-body)' }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 26, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="f39-btn f39-btn--primary" href="https://wa.me/5219991732538" target="_blank" rel="noreferrer">WhatsApp us</a>
                <a className="f39-btn f39-btn--secondary" href="https://hotelflorita39.com" target="_blank" rel="noreferrer">Visit website</a>
              </div>
            </div>
            <aside className="f39-card f39-card--raised" style={{ padding: 26 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', margin: '0 0 16px' }}>Send a message</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <Input label="Name" placeholder="Your name" />
                <Input label="Email" type="email" placeholder="you@email.com" />
              </div>
              <Input label="Message" placeholder="How can we help?" />
              <div style={{ marginTop: 18 }}><Button variant="primary" block onClick={() => onNav('reserve')}>Send</Button></div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
window.ContactScreen = ContactScreen;

/* ---------------- FAQ ---------------- */
function FaqScreen({ onNav }) {
  const D = window.F39DATA;
  const { Eyebrow, Icon } = IN;
  const [open, setOpen] = React.useState(0);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div>
      <window.PageHero image="marketing/playa/m5705.jpg" eyebrow="Good to know" title="Frequently asked"
        sub="Everything you need before you arrive. Still curious? Just message us." />
      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-md, 760px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {D.faq.map((f, i) => (
              <div key={i} className="f39-card" style={{ padding: 0, overflow: 'hidden' }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '22px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--text-strong)' }}>
                  {f.q}
                  <span style={{ color: 'var(--color-primary)', transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}><Icon name="chevron-down" size={20} /></span>
                </button>
                {open === i && <div style={{ padding: '0 24px 24px', color: 'var(--text-body)', lineHeight: 1.6 }}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.FaqScreen = FaqScreen;
