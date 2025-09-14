import { useParams } from "react-router-dom";
import BlogPreview from "../components/admin/BlogPreview";

export default function BlogPage() {
  const { id } = useParams(); // get blog ID from URL
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <p className="p-4 text-red-500">Blog not found</p>;

  return (
    <div className="p-4">
      <BlogPreview title={blog.title} content={blog.content} />
    </div>
  );
}
