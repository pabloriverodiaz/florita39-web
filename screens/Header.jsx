const { Logo, Button } = window.Florita39DesignSystem_466e9b;

function Header({ route, onNav, onImage = false }) {
  const links = [
    ['home', 'Stay'],
    ['rooms', 'Rooms'],
    ['amenities', 'Amenities'],
    ['experiences', 'Experiences'],
    ['island', 'The Island'],
    ['restaurant', 'Dining'],
  ];
  return (
    <header className={'f39-header' + (onImage ? ' f39-header--onimage f39-header--transparent' : '')}>
      <div className="f39-header__inner">
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ display: 'flex' }} aria-label="Florita 39 — home">
          <Logo variant="wordmark" color={onImage ? 'white' : 'blue'} base={F39_ASSETS + '/logos'} height={24} />
        </a>
        <nav className="f39-nav">
          {links.map(([id, label]) => (
            <a key={id} href="#" className={route === id ? 'is-active' : ''}
               onClick={(e) => { e.preventDefault(); onNav(id); }}>{label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} aria-label="Language">
            {['en', 'es'].map((l, i) => (
              <React.Fragment key={l}>
                {i === 1 && <span style={{ opacity: 0.4, color: onImage ? '#fff' : 'var(--text-muted)' }}>/</span>}
                <button data-lang-btn={l} onClick={() => window.F39setLang(l)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px 2px',
                           fontFamily: 'var(--font-body)', fontSize: '.72rem', letterSpacing: '.12em', textTransform: 'uppercase',
                           color: onImage ? '#fff' : 'var(--text-strong)',
                           opacity: (window.F39_LANG || 'en') === l ? 1 : 0.5,
                           fontWeight: (window.F39_LANG || 'en') === l ? 600 : 400 }}>{l}</button>
              </React.Fragment>
            ))}
          </div>
          <Button variant={onImage ? 'ondark' : 'primary'} size="sm" onClick={() => onNav('reserve')}>Reserve</Button>
        </div>
      </div>
    </header>
  );
}
window.Header = Header;
