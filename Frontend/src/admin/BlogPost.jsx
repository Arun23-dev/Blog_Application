import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, MoreHorizontal, Calendar, Eye, User } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Blog Posts</h1>
          <p className="text-gray-600">Manage your blog content and articles</p>
        </div>
        <Button className="bg-teal-700 hover:bg-teal-800 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search posts..." className="pl-10 border-gray-200" />
          </div>
          <Select defaultValue="all-status">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-categories">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-categories">All Categories</SelectItem>
              <SelectItem value="tutorial">Tutorial</SelectItem>
              <SelectItem value="news">News</SelectItem>
              <SelectItem value="guide">Guide</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Blog Post Card */}
      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold text-gray-900">Getting Started with Next.js 14</h3>
                <Badge variant="secondary" className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                  published
                </Badge>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Learn the fundamentals of Next.js 14 and its new features including the App Router and Server Components.
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>John Doe</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>1/15/2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>1,200 views</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
                  Tutorial
                </Badge>
                <Badge variant="outline" className="bg-teal-100 text-teal-700 border-teal-300">
                  Next.js
                </Badge>
                <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
                  React
                </Badge>
                <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                  Web Development
                </Badge>
              </div>
            </div>

            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
