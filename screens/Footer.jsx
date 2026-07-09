const { Logo: F39Logo } = window.Florita39DesignSystem_466e9b;

function Footer({ onNav }) {
  const D = window.F39DATA.brand;
  return (
    <footer className="f39-footer">
      <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
        <div className="f39-footer__grid">
          <div className="f39-footer__col">
            <F39Logo variant="wordmark" color="white" base={F39_ASSETS + '/logos'} height={26} />
            <p style={{ marginTop: 18, maxWidth: '30ch', lineHeight: 1.7 }}>
              A boutique hotel genuinely designed to preserve the feeling of a home — intimate, calm, and steps from Playa Norte.
            </p>
          </div>
          <div className="f39-footer__col">
            <p className="f39-footer__title">Explore</p>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('rooms'); }}>Rooms &amp; rates</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('amenities'); }}>Amenities</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('restaurant'); }}>Dining</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('gallery'); }}>Gallery</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('offers'); }}>Offers</a>
          </div>
          <div className="f39-footer__col">
            <p className="f39-footer__title">Island</p>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('island'); }}>The island</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('experiences'); }}>Experiences &amp; tours</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('zama'); }}>Zama Beach Club</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('faq'); }}>FAQ</a>
          </div>
          <div className="f39-footer__col">
            <p className="f39-footer__title">Visit</p>
            <p>{D.address}</p>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav('contact'); }}>Contact</a>
            <a href="https://wa.me/5219991732538" target="_blank" rel="noreferrer">WhatsApp {D.whatsapp}</a>
            <a href="https://instagram.com/florita_39" target="_blank" rel="noreferrer">{D.instagram}</a>
          </div>
        </div>
        <hr className="f39-footer__rule" />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', letterSpacing: '.05em', color: 'rgba(255,255,255,.5)' }}>
          <span>© 2026 Florita 39 · Isla Mujeres, Q.R.</span>
          <span>Hotel Boutique</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
