import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
import EmptyState from "../Components/blog/EmptyState.jsx";
import { meta } from "../data/meta.js";
import { posts } from "../data/posts.js";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog-page">
      <div className="container">
        <MetaBlock
          documento={meta.documento}
          assunto="§04 · BLOG"
          status={null}
        />

        <SectionHeader
          index="04"
          title="Blog"
          kicker="ANOTAÇÕES E ARTIGOS"
        />

        {posts.length === 0 ? (
          <EmptyState />
        ) : (
          <p>Listagem de posts virá quando houver conteúdo.</p>
        )}
      </div>
    </section>
  );
};

export default Blog;
