// Real-path routing: every screen is a crawlable URL (/rooms/, /room/loft-florita/,
// /es/rooms/ for Spanish) prerendered at build time by scripts/prerender.mjs;
// React takes over on load and navigates with pushState. Scroll is managed by
// hand: links open the new screen at the top, while back/forward return to the
// scroll position the visitor left that screen at.
const parsePath = () => {
  let p = window.location.pathname.replace(/\/+$/, '');
  if (p === '/es' || p.indexOf('/es/') === 0) p = p.slice(3);
  const segs = p.split('/').filter(Boolean);
  if (segs[0] === 'room' && segs[1]) return 'room:' + decodeURIComponent(segs[1]);
  if (segs[0] === 'blog' && segs[1]) return 'blogpost:' + decodeURIComponent(segs[1]);
  return segs[0] || 'home';
};
window.F39path = (r) => {
  const prefix = (window.F39_LANG === 'es') ? '/es' : '';
  if (r === 'home') return prefix + '/';
  if (r.indexOf('room:') === 0) return prefix + '/room/' + r.split(':')[1] + '/';
  if (r.indexOf('blogpost:') === 0) return prefix + '/blog/' + r.split(':')[1] + '/';
  return prefix + '/' + r + '/';
};
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
// Legacy hash URLs from the previous router (#/rooms, #/room:id) → real paths.
if (/^#\/.+/.test(window.location.hash)) {
  const legacy = decodeURIComponent(window.location.hash.replace(/^#\//, ''));
  window.history.replaceState(null, '', window.F39path(legacy));
}
function App() {
  const [route, setRoute] = React.useState(parsePath);
  const scrollMem = React.useRef({});
  const targetY = React.useRef(0);
  React.useEffect(() => {
    const onPop = () => {
      const r = parsePath();
      targetY.current = scrollMem.current[r] || 0;
      setRoute(r);
      if (window.gtag) window.gtag('event', 'page_view', { page_location: window.location.href });
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  React.useLayoutEffect(() => {
    window.scrollTo({ top: targetY.current, behavior: 'instant' });
  }, [route]);
  const onNav = (r) => {
    if (r === parsePath()) { window.scrollTo({ top: 0, behavior: 'instant' }); return; }
    scrollMem.current[parsePath()] = window.scrollY;
    targetY.current = 0;
    window.history.pushState(null, '', window.F39path(r));
    setRoute(r);
    if (window.gtag) window.gtag('event', 'page_view', { page_location: window.location.href });
  };
  const base = route.split(':')[0];
  const onImage = base === 'home';

  let screen;
  if (base === 'home') screen = <window.HomeScreen onNav={onNav} />;
  else if (base === 'rooms') screen = <window.RoomsScreen onNav={onNav} />;
  else if (base === 'room') screen = <window.RoomDetailScreen roomId={route.split(':')[1]} onNav={onNav} />;
  else if (base === 'amenities') screen = <window.AmenitiesScreen onNav={onNav} />;
  else if (base === 'experiences') screen = <window.ExperiencesScreen onNav={onNav} />;
  else if (base === 'zama') screen = <window.ZamaScreen onNav={onNav} />;
  else if (base === 'island') screen = <window.IslandScreen onNav={onNav} />;
  else if (base === 'restaurant') screen = <window.RestaurantScreen onNav={onNav} />;
  else if (base === 'gallery') screen = <window.GalleryScreen onNav={onNav} />;
  else if (base === 'offers') screen = <window.OffersScreen onNav={onNav} />;
  else if (base === 'about') screen = <window.AboutScreen onNav={onNav} />;
  else if (base === 'contact') screen = <window.ContactScreen onNav={onNav} />;
  else if (base === 'faq') screen = <window.FaqScreen onNav={onNav} />;
  else if (base === 'reserve') screen = <window.ReserveScreen onNav={onNav} />;
  else if (base === 'blog') screen = <window.BlogScreen onNav={onNav} />;
  else if (base === 'blogpost') screen = <window.BlogPostScreen slug={route.split(':')[1]} onNav={onNav} />;

  return (
    <div className="f39-site">
      <window.Header route={base} onNav={onNav} onImage={onImage} />
      {screen}
      <window.Footer onNav={onNav} />
    </div>
  );
}
function boot() {
  if (!window.HomeScreen || !window.Florita39DesignSystem_466e9b) { setTimeout(boot, 40); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  setTimeout(() => window.lucide && window.lucide.createIcons(), 0);
  setTimeout(() => window.F39initI18N && window.F39initI18N(), 90);
}
boot();
