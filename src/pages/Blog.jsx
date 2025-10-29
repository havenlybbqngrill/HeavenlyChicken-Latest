import TopInfoBar from "../components/Landing/TopInfoBar";
import Navbar from "../components/Landing/Navbar";
import Contact from "../components/Landing/Contact";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../components/Data/blogData";

export default function Blog() {
  return (
     <>
      <TopInfoBar />
      <Navbar />
    <section className="blog-list">
      <div className="blog-banner">
        <h2>Our Blog</h2>
        </div>
      <div className="blog-grid w-full max-w-[1200px]">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
     <Contact />
    </>
  );
}
