import { useParams } from "react-router-dom";
import BlogPreview from "./BlogPreview";

export default function BlogDetail() {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="p-4">
      <BlogPreview title={blog.title} content={blog.content} />
    </div>
  );
}
