import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import JoditEditor from "jodit-react";
import { zodResolver } from '@hookform/resolvers/zod';
import Select from 'react-select';
import { z } from 'zod';

// Zod schema
const postSchema = z.object({
  coverImg: z.string().url({ message: "Cover image must be a valid URL" }),
  title: z.string().min(4, { message: "Title must be at least 4 characters" }).max(70, { message: "Title must be at most 70 characters" }),
  slug: z.string().min(3, { message: "Slug is required" }),
  categories: z.array(z.string()).min(1, { message: "Select at least one category" }),
  shortDesc: z.string().max(200, { message: "Short description must be at most 200 characters" }),
  content: z.string().min(20, { message: "Content must be at least 20 characters" }).max(5000, { message: "Content must be at most 5000 characters" }),
});

// Categories options
const options = [
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'politics', label: 'Politics' },
  { value: 'sports', label: 'Sports' },
  { value: 'technology', label: 'Technology' },
  { value: 'economics', label: 'Economics' },
  { value: 'international', label: 'International' },
  { value: 'social', label: 'Social' },
  { value: 'health', label: 'Health' },
  { value: 'science', label: 'Science' },
  { value: 'education', label: 'Education' },
  { value: 'travel', label: 'Travel' },
  { value: 'culture', label: 'Culture' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'business', label: 'Business' },
  { value: 'environment', label: 'Environment' },
  { value: 'history', label: 'History' },
  { value: 'opinion', label: 'Opinion' },
  { value: 'lifestyle', label: 'Lifestyle' }
];

function CreatePost() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  
  const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      categories: [],
      content: ''
    }
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
    setContent("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">✍️ Create a New Post</h2>

        {/* Cover Image */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Cover Image URL</label>
          <input
            type="url"
            placeholder="Paste ImageKit.io URL here"
            className="w-full text-sm text-gray-600 border border-gray-300 rounded-lg p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("coverImg")}
          />
          {errors.coverImg && <p className="text-red-500 text-sm mt-1">{errors.coverImg.message}</p>}
        </div>

        {/* Title */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter a catchy title..."
            className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            {...register("title")}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        {/* Slug */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Slug</label>
          <input
            type="text"
            placeholder="my-awesome-post"
            className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            {...register("slug")}
          />
          {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
        </div>

        {/* Categories */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Categories</label>
          <Controller
            name="categories"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Select
                  {...field}
                  options={options}
                  isMulti
                  placeholder="Search or select categories..."
                  classNamePrefix="select"
                  value={options.filter((c) => field.value.includes(c.value))}
                  onChange={(selected) => field.onChange(selected ? selected.map((c) => c.value) : [])}
                  styles={{
                    multiValue: (base) => ({ ...base, fontSize: "14px", padding: "2px 6px" }),
                    control: (base) => ({ ...base, minHeight: "50px" })
                  }}
                />
                {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
              </>
            )}
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Short Description</label>
          <textarea
            placeholder="Write a short preview of your post..."
            className="w-full h-24 rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            {...register("shortDesc")}
          />
          {errors.shortDesc && <p className="text-red-500 text-sm mt-1">{errors.shortDesc.message}</p>}
        </div>

        {/* Content */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Content</label>
          <div className="border rounded-lg overflow-hidden">
            <JoditEditor
              ref={editor}
              value={content}
              config={{readonly:false,height:600}}
              onBlur={(newContent) => {
                setContent(newContent);
                setValue("content", newContent); // sync with react-hook-form
              }}
            
            />
          </div>
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              reset();
              setContent("");
            }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
