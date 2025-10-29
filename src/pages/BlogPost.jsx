import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../components/Data/blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <h2>Post not found</h2>;

  return (
     <>
      <TopInfoBar />
      <Navbar />
    <section className="blog-post w-full max-w-[1200px]">
      <Link to="/blog">← Back to Blog</Link>
      <img src={post.image} alt={post.title} />
      <h1>{post.title}</h1>
      {/* <small>{post.date}</small> */}
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </section>
     <Contact />
    </>
  );
}
