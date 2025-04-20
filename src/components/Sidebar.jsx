"use client"

function Sidebar({ activeSidebar, setActiveSidebar }) {
  return (
    <div className="w-48 bg-gray-50 border-r border-gray-200 pt-4">
      <button
        className={`w-full text-left px-4 py-2 text-sm relative ${
          activeSidebar === "All"
            ? "text-primary font-medium border-l-2 border-primary"
            : "text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => setActiveSidebar("All")}
      >
        All
      </button>
    </div>
  )
}

export default Sidebar
