import { useState } from "react";
import BlogPreview from "./BlogPreview";
import { v4 as uuidv4 } from "uuid";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(""); // new category state
  const [thumbnail, setThumbnail] = useState(""); 
  const [blocks, setBlocks] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const categories = ["Tech", "Lifestyle", "Health", "Education", "Travel"]; // example categories

  // add new block
  const addBlock = (type) => {
    setBlocks([...blocks, { id: uuidv4(), type }]);
  };

  // update block
  const updateBlock = (id, changes) => {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, ...changes } : b)));
  };

  // delete block
  const deleteBlock = (id) => {
    setBlocks(blocks.filter((b) => b.id !== id));
  };

  // move block up or down
  const moveBlock = (id, direction) => {
    const index = blocks.findIndex((b) => b.id === id);
    if (index < 0) return;
    const newBlocks = [...blocks];
    const [removed] = newBlocks.splice(index, 1);
    newBlocks.splice(direction === "up" ? index - 1 : index + 1, 0, removed);
    setBlocks(newBlocks);
  };

  // save blog (to localStorage for now)
  const saveBlog = () => {
    const blog = {
      id: uuidv4(),
      title,
      category,
      thumbnail,
      content: blocks,
    };
    const existing = JSON.parse(localStorage.getItem("blogs") || "[]");
    localStorage.setItem("blogs", JSON.stringify([...existing, blog]));
    alert("Blog saved!");
    setTitle("");
    setCategory("");
    setThumbnail("");
    setBlocks([]);
  };

  return (
    <div className="p-6 bg-gray-50 rounded shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>

      {/* Blog Title */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Post Title</label>
        <input
          type="text"
          placeholder="Enter post title..."
          className="border rounded w-full p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

{/* Blog Thumbnail */}
<div className="mb-6">
  <label className="block font-semibold mb-1">Thumbnail Image</label>
  <input
    type="url"
    placeholder="Paste thumbnail image URL..."
    value={thumbnail}
    onChange={(e) => setThumbnail(e.target.value)}
    className="border rounded w-full p-2"
  />
</div>


      

      {/* Category */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded w-full p-2"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Block controls */}
      <div className="mb-4 flex gap-3">
        <button
          onClick={() => addBlock("text")}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Add Text
        </button>
        <button
          onClick={() => addBlock("image")}
          className="px-3 py-1 bg-green-600 text-white rounded"
        >
          Add Image
        </button>
        <button
          onClick={() => addBlock("video")}
          className="px-3 py-1 bg-purple-600 text-white rounded"
        >
          Add Video
        </button>
      </div>

      {/* Blocks */}
      <div className="space-y-4 mb-6">
        {blocks.map((block) => (
          <div key={block.id} className="border p-4 bg-white rounded shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">{block.type.toUpperCase()} Block</span>
              <div className="flex gap-2">
                <button onClick={() => moveBlock(block.id, "up")}>⬆</button>
                <button onClick={() => moveBlock(block.id, "down")}>⬇</button>
                <button onClick={() => deleteBlock(block.id)}>❌</button>
              </div>
            </div>

            {block.type === "text" && (
              <textarea
                placeholder="Enter text..."
                value={block.text || ""}
                onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                className="w-full border rounded p-2"
                rows={4}
              />
            )}

            {block.type === "image" && (
              <>
                <input
                  type="url"
                  placeholder="Image URL"
                  value={block.url || ""}
                  onChange={(e) => updateBlock(block.id, { url: e.target.value })}
                  className="w-full border rounded p-2 mb-2"
                />
                <input
                  type="text"
                  placeholder="Caption (optional)"
                  value={block.caption || ""}
                  onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </>
            )}

            {block.type === "video" && (
              <>
                <input
                  type="url"
                  placeholder="Video URL"
                  value={block.url || ""}
                  onChange={(e) => updateBlock(block.id, { url: e.target.value })}
                  className="w-full border rounded p-2 mb-2"
                />
                <input
                  type="text"
                  placeholder="Caption (optional)"
                  value={block.caption || ""}
                  onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={saveBlog}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Save Draft
        </button>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          {showPreview ? "Hide Preview" : "Preview Post"}
        </button>
      </div>

      {/* Preview */}
      {showPreview && (
        <div className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold mb-4">Preview</h2>
          <p className="text-gray-600 mb-4">
            <strong>Category:</strong> {category || "None"}
          </p>
          <BlogPreview title={title} content={blocks} />
        </div>
      )}
    </div>
  );
}
