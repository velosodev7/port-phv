import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
import BlogTabNews from "../Components/blog/BlogTabNews.jsx";
import { meta } from "../data/meta.js";
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

        <BlogTabNews />
      </div>
    </section>
  );
};

export default Blog;
