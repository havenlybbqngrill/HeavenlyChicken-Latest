import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} />
      {/* <h3>{post.title}</h3> */}
      {/* <p>{post.excerpt}</p> */}
      {/* <small>{post.date}</small> */}
      <br />
      <Link to={`/blog/${post.slug}`} className="btn">
        <h3>{post.title}</h3>
      </Link>
    </div>
  );
}
