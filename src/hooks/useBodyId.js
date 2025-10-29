import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useBodyId() {
  const location = useLocation();

  useEffect(() => {
    // Convert path into a slug (e.g. "/blog/post" → "blog-post")
    let id = location.pathname
      .replace(/\//g, "-")
      .replace(/^-/, "")
      .replace(/-$/, "");

    if (id === "") id = "home";

    // Generate random 3–4 digit code (e.g. y736)
    const randomCode = "y" + Math.floor(100 + Math.random() * 900);

    // Final body ID
    const bodyId = `${id}-${randomCode}`;

    // Set ID
    document.body.id = bodyId;

    // Cleanup when route changes
    return () => {
      document.body.removeAttribute("id");
    };
  }, [location]);
}
