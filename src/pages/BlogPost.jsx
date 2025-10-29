import { useParams, Link } from "react-router-dom";
import TopInfoBar from "../components/Landing/TopInfoBar";
import Navbar from "../components/Landing/Navbar";
import Contact from "../components/Landing/Contact";
import { blogPosts } from "../components/Data/blogData";
import { Helmet } from "react-helmet-async";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <h2>Post not found</h2>;

  return (
     <>
     <Helmet>
        <title>{post.title} | Heavenly Chicken & Ribs</title>
        {/* <meta name="description" content={post.description} /> */}
        <meta property="og:title" content={post.title} />
        {/* <meta property="og:description" content={post.description} /> */}
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://www.heavenlybbqngrill.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>
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
