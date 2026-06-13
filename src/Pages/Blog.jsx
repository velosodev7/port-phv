import MetaBlock from "../Components/ui/MetaBlock.jsx";
import SectionHeader from "../Components/ui/SectionHeader.jsx";
import TerminalWindow from "../Components/ui/TerminalWindow.jsx";
import BlogTabNews from "../Components/blog/BlogTabNews.jsx";
import { meta } from "../data/meta.js";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog-page">
      <div className="container">
        <MetaBlock
          documento={meta.documento}
          assunto="ROOM 04 · BLOG"
          status={null}
        />

        <SectionHeader
          as="h1"
          index="04"
          title="Logs"
          command="git log --oneline"
        />

        <TerminalWindow title="$ tail -f ~/logs/blog">
          <BlogTabNews />
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Blog;
