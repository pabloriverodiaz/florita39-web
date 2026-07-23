// Compiles the JSX screens into one plain-JS file (lib/screens.js) so the
// browser no longer downloads Babel and compiles the site on every visit.
// Run by Netlify on deploy (see netlify.toml) or locally: npm run build
import { transformSync } from 'esbuild';
import { readFileSync, writeFileSync } from 'fs';

// Same order as the old <script type="text/babel"> tags; each file assigns
// its component to window.*, App.jsx must come last because it boots React.
const SCREENS = [
  'Header', 'Footer', 'HomeScreen', 'RoomsScreen', 'RoomDetailScreen',
  'AmenitiesScreen', 'ExperiencesScreen', 'ZamaScreen', 'IslandScreen',
  'RestaurantScreen', 'GalleryScreen', 'InfoScreens', 'ReserveScreen', 'App',
];

const parts = SCREENS.map((name) => {
  const src = readFileSync(`screens/${name}.jsx`, 'utf8');
  const { code } = transformSync(src, { loader: 'jsx', minify: true });
  // IIFE per screen: top-level consts (e.g. `const { Logo } = ...`) would
  // otherwise collide across concatenated files.
  return `// ${name}.jsx\n(function () {\n${code}\n})();`;
});

writeFileSync('lib/screens.js', parts.join('\n'));
console.log(`built lib/screens.js from ${SCREENS.length} screens`);
