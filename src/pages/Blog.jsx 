import BlogCard from "./components/BlogCard";
import { blogPosts } from "./data/blogData";

export default function Blog() {
  return (
    <section className="blog-list">
      <h2>Our Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
