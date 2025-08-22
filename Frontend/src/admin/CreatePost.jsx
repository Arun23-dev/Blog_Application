"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Eye, Save, Send } from "lucide-react";
import {Link} from "react-router";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [category, setCategory] = useState("");
  const [featuredPost, setFeaturedPost] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {/* <div className="w-60 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">CMS Admin</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            Dashboard
          </Link>
          <Link href="/" className="flex items-center gap-3 px-3 py-2 bg-teal-700 text-white rounded-lg">
            <div className="w-5 h-5 bg-white rounded"></div>
            Blog Posts
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            Videos
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            Media Library
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            Users
          </Link>
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            Sign Out
          </Link>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                <ArrowLeft className="w-4 h-4" />
                Back to Posts
              </Link>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">Create New Post</h1>
                <p className="text-gray-600 mt-1">Write and publish your blog post</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Eye className="w-4 h-4" />
                Preview
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Save className="w-4 h-4" />
                Save Draft
              </Button>
              <Button className="bg-teal-700 hover:bg-teal-800 flex items-center gap-2">
                <Send className="w-4 h-4" />
                Publish
              </Button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          <div className="flex gap-8">
            {/* Main Content Form */}
            <div className="flex-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-800 mb-2">Content</h2>
                  <p className="text-gray-600 text-sm">Write your blog post content</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <Input
                      placeholder="Enter post title..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                    <Textarea
                      placeholder="Brief description of your post..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      className="w-full h-20 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <Textarea
                      placeholder="Write your post content here... (Markdown supported)"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full h-64 resize-none font-mono text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-80 space-y-6">
              {/* Publish Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Publish</h3>
                  <p className="text-gray-600 text-sm">Control when and how your post is published</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <Select value={status} onValueChange={setStatus}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="featured" checked={featuredPost} onCheckedChange={setFeaturedPost} />
                    <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                      Featured Post
                    </label>
                  </div>
                </div>
              </div>

              {/* Organization Section */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">Organization</h3>
                  <p className="text-gray-600 text-sm">Categorize and tag your post</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tutorial">Tutorial</SelectItem>
                      <SelectItem value="news">News</SelectItem>
                      <SelectItem value="guide">Guide</SelectItem>
                      <SelectItem value="review">Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
