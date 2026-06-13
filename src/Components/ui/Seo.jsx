import { useLocation } from "react-router-dom";
import { seo, SITE_URL } from "../../data/meta.js";
import { contact } from "../../data/contact.js";

/**
 * SEO por rota. Usa a metadata nativa do React 19 (title/meta/link renderizados
 * aqui são içados para o <head> automaticamente). Alimentado por `seo` em
 * src/data/meta.js. Uma instância única dentro do Router resolve a rota atual.
 *
 * No prerender (scripts/prerender.mjs) o Chrome monta o app, o React injeta
 * estas tags no <head> e o DOM serializado já sai com o SEO correto por rota.
 */
const OG_IMAGE = `${SITE_URL}/og-card.png`;
const DEFAULT = seo["/"];

// JSON-LD do site (Person + WebSite). Estático — vale para todas as rotas.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Pedro Veloso",
      url: SITE_URL,
      jobTitle: "Desenvolvedor Full-stack",
      email: `mailto:${contact.email}`,
      sameAs: [contact.github.url, contact.linkedin.url],
    },
    {
      "@type": "WebSite",
      name: "Pedro Veloso — Portfólio",
      url: SITE_URL,
      inLanguage: "pt-BR",
    },
  ],
};

const Seo = () => {
  const { pathname } = useLocation();
  const meta = seo[pathname] || DEFAULT;
  const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Seo;
