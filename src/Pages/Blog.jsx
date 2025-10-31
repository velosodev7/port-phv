import React from "react";
import "./Blog.css";

const posts = [
  {
    id: 1,
    title:
      "Nvidia é a primeira empresa da história a atingir US$ 5 trilhões em valor de mercado",
    date: "29/10/2025",
    category: "Tecnologia",
    content:
      "Marco destaca a rápida transformação da empresa, que começou como uma designer de chips gráficos para se tornar a espinha dorsal da indústria global de IA.",
  },
  {
    id: 2,
    title:
      "Amazon não demitiu 14 mil funcionários por crise financeira, mas por 'cultura', diz CEO da empresa",
    date: "31/10/2025",
    category: "Tecnologia",
    content:
      "Ao justificar os cortes, Andy Jassy afirmou que o crescimento da empresa criou estruturas lentas e que a meta agora é operar de forma mais enxuta e eficiente.",
  },
];

const Blog = () => {
  return (
    <section style={{ marginTop: "4rem" }} className="blog-section container">
      <h2>Blog</h2>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3>{post.title}</h3>
            <div className="blog-info">
              <span className="blog-date">{post.date}</span>
              <span className="blog-category">{post.category}</span>
            </div>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
