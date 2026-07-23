// Routes live in the URL hash (#/rooms, #/room:suite) so the browser's
// back/forward buttons work and screens are deep-linkable. Scroll is managed
// by hand: links open the new screen at the top, while back/forward return
// to the scroll position the visitor left that screen at.
const readRoute = () => decodeURIComponent(window.location.hash.replace(/^#\/?/, '')) || 'home';
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
function App() {
  const [route, setRoute] = React.useState(readRoute);
  const scrollMem = React.useRef({});
  const fromLink = React.useRef(false);
  const targetY = React.useRef(0);
  React.useEffect(() => {
    const onHash = () => {
      const r = readRoute();
      targetY.current = fromLink.current ? 0 : (scrollMem.current[r] || 0);
      fromLink.current = false;
      setRoute(r);
      if (window.gtag) window.gtag('event', 'page_view', { page_location: window.location.href });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  React.useLayoutEffect(() => {
    window.scrollTo({ top: targetY.current, behavior: 'instant' });
  }, [route]);
  const onNav = (r) => {
    if (r === readRoute()) { window.scrollTo({ top: 0, behavior: 'instant' }); return; }
    scrollMem.current[readRoute()] = window.scrollY;
    fromLink.current = true;
    window.location.hash = '/' + r;
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
