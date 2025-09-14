import BlogEditor from "@/components/admin/BlogEditor";

export default function AdminBlogPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Blog Panel</h1>
      <BlogEditor />
    </div>
  );
}
