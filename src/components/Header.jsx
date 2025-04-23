"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Settings, Sun, Moon } from 'lucide-react'

function Header({ currentPath }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "halloween")

  const tabs = [
    { name: "Smart Lists", path: "smart-lists" },
    { name: "Bulk Actions", path: "bulk-actions" },
    { name: "Tasks", path: "tasks" },
    { name: "Companies", path: "companies" },
  ]

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "halloween"
    document.documentElement.setAttribute("data-theme", savedTheme)
    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "halloween" ? "light" : "halloween"
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  return (
    <nav className="flex items-center justify-between bg-base-100 border-b border-base-300 h-12">
      <div className="flex h-full">
        {tabs.map((tab) => {
          const isActive = currentPath === tab.path || (currentPath === "" && tab.path === "smart-lists")

          return (
            <Link
              key={tab.name}
              to={`/${tab.path}`}
              className={`px-4 h-full flex items-center text-sm relative transition-colors duration-150 ${isActive
                  ? "text-primary font-medium border-b-2 border-primary"
                  : "text-base-content hover:bg-base-200 hover:text-base-content"
                }`}
              aria-current={isActive ? "page" : undefined}
            >
              {tab.name}
            </Link>
          )
        })}
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-sm px-3 mr-2 text-base-content hover:bg-base-200"
          aria-label="Toggle theme"
        >
          {theme === "halloween" ? (
            <Sun size={18} className="text-warning" />
          ) : (
            <Moon size={18} className="text-primary" />
          )}        </button>
        <button className="btn btn-ghost btn-sm px-4 text-base-content hover:bg-base-200">
          <Settings size={20} />
        </button>
      </div>
    </nav>
  )
}

export default Header
