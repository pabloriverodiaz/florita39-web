// Island Journal — blog list and article screens. Content lives in
// lib/blog.js with full EN/ES versions; these screens pick the language
// live (following the header's EN/ES switch via the f39:lang event).
function useF39Lang() {
  const [lang, setLang] = React.useState(window.F39_LANG || 'en');
  React.useEffect(() => {
    const onLang = (e) => setLang(e.detail);
    window.addEventListener('f39:lang', onLang);
    return () => window.removeEventListener('f39:lang', onLang);
  }, []);
  return lang;
}

const F39_BLOG_STR = {
  eyebrow: { en: 'Island Journal', es: 'Diario de la Isla' },
  title: { en: 'Notes from Isla Mujeres', es: 'Notas desde Isla Mujeres' },
  sub: {
    en: 'Guides and local tips from the walking street — ferries, beaches, seasons and the island we call home.',
    es: 'Guías y tips locales desde la calle peatonal — ferries, playas, temporadas y la isla que llamamos hogar.',
  },
  read: { en: 'min read', es: 'min de lectura' },
  back: { en: 'All articles', es: 'Todos los artículos' },
  more: { en: 'Keep reading', es: 'Sigue leyendo' },
};

function f39BlogDate(iso, lang) {
  const [y, m, d] = iso.split('-').map(Number);
  const months = lang === 'es'
    ? ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return lang === 'es' ? `${d} de ${months[m - 1]} de ${y}` : `${months[m - 1]} ${d}, ${y}`;
}

function BlogScreen({ onNav }) {
  const lang = useF39Lang();
  const posts = window.F39BLOG;
  return (
    <div>
      <window.PageHero image="marketing/observer/the-roof-10.jpg"
        eyebrow={F39_BLOG_STR.eyebrow[lang]} title={F39_BLOG_STR.title[lang]} sub={F39_BLOG_STR.sub[lang]} />
      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {posts.map((p) => (
              <a key={p.slug} href={window.F39path('blogpost:' + p.slug)} className="f39-card"
                 onClick={(e) => { e.preventDefault(); onNav('blogpost:' + p.slug); }}
                 style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block', background: 'var(--surface-card)' }}>
                <img loading="lazy" decoding="async" src={F39_ASSETS + '/' + p.image} alt={p.title[lang]}
                     style={{ width: '100%', height: 210, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '20px 22px 24px' }}>
                  <div style={{ fontSize: '.74rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
                    {f39BlogDate(p.date, lang)} · {p.minutes} {F39_BLOG_STR.read[lang]}
                  </div>
                  <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-display)', fontSize: '1.25rem', lineHeight: 1.3 }}>{p.title[lang]}</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '.95rem' }}>{p.excerpt[lang]}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogPostScreen({ slug, onNav }) {
  const lang = useF39Lang();
  const post = window.F39BLOG.find((p) => p.slug === slug);
  if (!post) return <BlogScreen onNav={onNav} />;
  return (
    <div>
      <window.PageHero image={post.image} eyebrow={F39_BLOG_STR.eyebrow[lang]}
        title={post.title[lang]} sub={`${f39BlogDate(post.date, lang)} · ${post.minutes} ${F39_BLOG_STR.read[lang]}`} />
      <section className="f39-section">
        <div className="f39-container" style={{ maxWidth: 760 }}>
          <style>{`
            .f39-article { font-family: var(--font-body); line-height: 1.75; color: var(--text-strong); }
            .f39-article h2 { font-family: var(--font-display); font-size: 1.45rem; margin: 2em 0 .6em; line-height: 1.3; }
            .f39-article p { margin: 0 0 1.1em; }
            .f39-article ul { margin: 0 0 1.2em; padding-left: 1.2em; }
            .f39-article li { margin-bottom: .5em; }
            .f39-article a { color: inherit; text-decoration: underline; text-underline-offset: 3px; }
          `}</style>
          <article className="f39-article" dangerouslySetInnerHTML={{ __html: post.body[lang] }} />
          <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={window.F39path('blog')} onClick={(e) => { e.preventDefault(); onNav('blog'); }}
               style={{ fontFamily: 'var(--font-body)', fontSize: '.9rem', textDecoration: 'underline', textUnderlineOffset: 3, color: 'var(--text-muted)' }}>
              ← {F39_BLOG_STR.back[lang]}
            </a>
          </div>
        </div>
      </section>
      <section className="f39-section" style={{ paddingTop: 0 }}>
        <div className="f39-container" style={{ maxWidth: 'var(--container-xl)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0 0 22px' }}>{F39_BLOG_STR.more[lang]}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {(() => {
              const all = window.F39BLOG;
              const i = all.findIndex((p) => p.slug === slug);
              return [1, 2, 3].map((k) => all[(i + k) % all.length]);
            })().map((p) => (
              <a key={p.slug} href={window.F39path('blogpost:' + p.slug)} className="f39-card"
                 onClick={(e) => { e.preventDefault(); onNav('blogpost:' + p.slug); }}
                 style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block', background: 'var(--surface-card)' }}>
                <img loading="lazy" decoding="async" src={F39_ASSETS + '/' + p.image} alt={p.title[lang]}
                     style={{ width: '100%', height: 150, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '14px 16px 18px' }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.05rem', lineHeight: 1.3 }}>{p.title[lang]}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.BlogScreen = BlogScreen;
window.BlogPostScreen = BlogPostScreen;
