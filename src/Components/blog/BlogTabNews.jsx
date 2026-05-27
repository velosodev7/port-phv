import { FiExternalLink } from "react-icons/fi";
import { useTabNews } from "../../hooks/useTabNews.js";
import "./BlogTabNews.css";

const formatTabcoins = (n) =>
  `${n} ${n === 1 ? "tabcoin" : "tabcoins"}`;

const formatComments = (n) =>
  `${n} ${n === 1 ? "comentário" : "comentários"}`;

const formatUpdatedAt = (date) =>
  `${date.toLocaleDateString("pt-BR")} às ${date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

const BlogTabNews = () => {
  const { posts, updatedAt, isEmpty } = useTabNews();

  if (isEmpty) {
    return (
      <div className="blog-tabnews blog-tabnews--empty">
        <p className="blog-tabnews__kicker">// CARREGANDO</p>
        <p className="blog-tabnews__empty-text">
          Carregando notícias <em>em breve</em>…
        </p>
      </div>
    );
  }

  return (
    <div className="blog-tabnews">
      <p className="blog-tabnews__kicker">
        // FEED <span className="blog-tabnews__source">TabNews</span>
      </p>

      <ul className="blog-tabnews__list">
        {posts.map((post) => (
          <li key={post.id} className="blog-tabnews__item">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-tabnews__link"
              aria-label={`Abrir "${post.title}" no TabNews`}
            >
              <h3 className="blog-tabnews__title">{post.title}</h3>
              <div className="blog-tabnews__meta">
                <span className="blog-tabnews__author">
                  @{post.owner_username}
                </span>
                <span className="blog-tabnews__dot" aria-hidden="true">·</span>
                <span>{formatTabcoins(post.tabcoins)}</span>
                <span className="blog-tabnews__dot" aria-hidden="true">·</span>
                <span>{formatComments(post.children_deep_count)}</span>
                <FiExternalLink
                  className="blog-tabnews__icon"
                  aria-hidden="true"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>

      {updatedAt && (
        <p className="blog-tabnews__footer">
          // Atualizado em {formatUpdatedAt(updatedAt)}
        </p>
      )}
    </div>
  );
};

export default BlogTabNews;
