import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FileText, Video, ImageIcon, Eye, TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

// Mock data for the chart
const chartData = [
  { day: "2", views: 2200 },
  { day: "5", views: 3500 },
  { day: "10", views: 4100 },
  { day: "15", views: 3800 },
  { day: "20", views: 4500 },
  { day: "25", views: 4500 },
  { day: "30", views: 6000 },
]

const recentActivity = [
  {
    user: "John Doe",
    action: "published",
    item: "Getting Started with Next.js 14",
    time: "2 hours ago",
  },
  {
    user: "Sarah Chen",
    action: "updated",
    item: "Web Development Trends 2024",
    time: "4 hours ago",
  },
  {
    user: "Marcus Johnson",
    action: "created",
    item: "Design System Guidelines",
    time: "6 hours ago",
  },
]

export default function AdminDashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your content</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Last updated: 8/20/2025</span>
          <Button className="bg-teal-700 hover:bg-teal-800">+ New Content</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gray-50/50 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Posts</CardTitle>
            <FileText className="h-5 w-5 text-teal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <p className="text-xs text-gray-600 mt-1">Published blog posts</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+12%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-50/50 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Videos</CardTitle>
            <Video className="h-5 w-5 text-teal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <p className="text-xs text-gray-600 mt-1">Video content</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+3%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-50/50 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Media Files</CardTitle>
            <ImageIcon className="h-5 w-5 text-teal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">156</div>
            <p className="text-xs text-gray-600 mt-1">Images and assets</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+8%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-50/50 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Views</CardTitle>
            <Eye className="h-5 w-5 text-teal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">12.4k</div>
            <p className="text-xs text-gray-600 mt-1">This month</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+18%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Performance and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content Performance Chart */}
        <Card className="lg:col-span-2 bg-gray-50/30">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Content Performance</CardTitle>
            <p className="text-sm text-gray-600">Views and engagement over the last 30 days</p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="day" stroke="#666" fontSize={12} />
                  <YAxis stroke="#666" fontSize={12} />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#0f766e"
                    strokeWidth={3}
                    dot={{ fill: "#0f766e", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#0f766e", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gray-50/30">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
            <p className="text-sm text-gray-600">Latest actions and updates</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-teal-600">{activity.action}</span>
                    </p>
                    <p className="text-sm text-gray-600 truncate">{activity.item}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
