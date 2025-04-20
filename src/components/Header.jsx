"use client"

import { Link } from "react-router-dom"
import { Settings } from "lucide-react"

function Header({ currentPath }) {
  const tabs = [
    { name: "Smart Lists", path: "smart-lists" },
    { name: "Bulk Actions", path: "bulk-actions" },
    { name: "Tasks", path: "tasks" },
    { name: "Companies", path: "companies" }
  ]

  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 h-12">
      <div className="flex h-full">
        {tabs.map((tab) => {
          const isActive = currentPath === tab.path || (currentPath === "" && tab.path === "smart-lists")

          return (
            <Link
              key={tab.name}
              to={`/${tab.path}`}
              className={`px-4 h-full flex items-center text-sm relative transition-colors duration-150 ${
                isActive
                  ? "text-blue-600 font-medium border-b-2 border-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {tab.name}
            </Link>
          )
        })}
      </div>
      <button className="px-4 text-gray-500 hover:text-gray-700 transition-colors duration-150">
        <Settings size={20} />
      </button>
    </nav>
  )
}

export default Header
