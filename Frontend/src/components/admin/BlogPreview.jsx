export default function BlogPreview({ title, content }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{title || "Untitled Blog"}</h1>
      {content.map((block) => {
        switch (block.type) {
          case "text":
            return (
              <p key={block.id} className="mb-4">
                {block.text}
              </p>
            );
          case "image":
            return (
              <div key={block.id} className="mb-4 text-center">
                <img
                  src={block.url}
                  alt={block.caption || "Blog image"}
                  className="mx-auto rounded"
                />
                {block.caption && (
                  <div className="text-sm italic text-gray-500">{block.caption}</div>
                )}
              </div>
            );
          case "video":
            return (
              <div key={block.id} className="mb-4 text-center">
                <iframe
                  src={block.url}
                  className="w-full h-64 rounded"
                  allowFullScreen
                  title="video"
                ></iframe>
                {block.caption && (
                  <div className="text-sm italic text-gray-500">{block.caption}</div>
                )}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
