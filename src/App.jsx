"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import SmartListsPage from "./pages/SmartListsPage"
import BulkActionsPage from "./pages/BulkActionsPage"
import TasksPage from "./pages/TasksPage"
import CompaniesPage from "./pages/CompaniesPage"

function App() {
  const location = useLocation()

  // Get the current path without the leading slash
  const currentPath = location.pathname.substring(1) || "smart-lists"

  // Initialize theme from localStorage on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "halloween"
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  return (
    <div className="flex flex-col h-screen bg-base-200">
      <Header currentPath={currentPath} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 flex flex-col p-4 overflow-hidden">
                <SmartListsPage />
              </div>
            </div>
          }
        />
        <Route
          path="/smart-lists"
          element={
            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 flex flex-col p-4 overflow-hidden">
                <SmartListsPage />
              </div>
            </div>
          }
        />
        <Route path="/bulk-actions" element={<BulkActionsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
       
      </Routes>
    </div>
  )
}

export default App
