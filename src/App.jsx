"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SmartListsPage from "./pages/SmartListsPage"
import BulkActionsPage from "./pages/BulkActionsPage"
import TasksPage from "./pages/TasksPage"
import CompaniesPage from "./pages/CompaniesPage"

function App() {
  const [activeSidebar, setActiveSidebar] = useState("All")
  const location = useLocation()

  // Get the current path without the leading slash
  const currentPath = location.pathname.substring(1) || "smart-lists"

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header currentPath={currentPath} />
      <div className="px-2 border-b border-gray-300">
        <button
          className="text-gray-700 font-medium hover:bg-gray-300 px-4 py-2 rounded"
        >
          All
        </button>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 flex flex-col p-4">
                <SmartListsPage />
              </div>
            </div>
          }
        />
        <Route
          path="/smart-lists"
          element={
            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 flex flex-col p-4">
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
