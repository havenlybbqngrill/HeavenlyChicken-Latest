import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./data/blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <h2>Post not found</h2>;

  return (
    <section className="blog-post">
      <Link to="/blog">← Back to Blog</Link>
      <img src={post.image} alt={post.title} />
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </section>
  );
}
