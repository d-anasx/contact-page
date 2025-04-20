import { Plus, Filter, Search, ChevronDown, ArrowUpDown } from "lucide-react"
import pic from "../assets/empty.svg"
function TasksPage() {
  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-800">Tasks</h1>
          <span className="text-blue-600">0 Tasks</span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md">
          <Plus size={16} />
          Add Task
        </button>
      </div>

      <div className="mb-6">
        <div className="flex border-b">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-blue-600 rounded-full"></span>
            </span>
            All
          </button>
          <button className="px-4 py-2 text-gray-600 flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-gray-400 rounded-full"></span>
            </span>
            Due Today
          </button>
          <button className="px-4 py-2 text-gray-600 flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-gray-400 rounded-full"></span>
            </span>
            Overdue
          </button>
          <button className="px-4 py-2 text-gray-600 flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-gray-400 rounded-full"></span>
            </span>
            Upcoming
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-gray-700 text-sm">
          <span className="w-4 h-4 flex items-center justify-center">
            <span className="block w-1 h-1 bg-gray-400 rounded-full"></span>
          </span>
          Assignee: Any
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-gray-700 text-sm">
          <span className="w-4 h-4 flex items-center justify-center">
            <span className="block w-1 h-1 bg-gray-400 rounded-full"></span>
          </span>
          Status: All
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-gray-700 text-sm">
          <span className="w-4 h-4 flex items-center justify-center">
            <span className="block w-1 h-1 bg-gray-400 rounded-full"></span>
          </span>
          Due Date: Any
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-gray-700 text-sm">
          <Filter size={16} />
          Advanced Filters
        </button>
        <button className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-gray-700 text-sm">
          <span className="text-blue-600">Sort (1)</span>
        </button>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for task title"
              className="pl-10 pr-3 py-2 border rounded-md text-sm w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-gray-700 text-sm">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-gray-400 rounded-full"></span>
            </span>
            Manage Fields
          </button>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm overflow-hidden flex-1">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="w-10 px-4 py-3">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium flex items-center gap-1">
                Title <ArrowUpDown size={14} />
              </th>
              <th className="px-4 py-3 text-left font-medium">Description</th>
              <th className="px-4 py-3 text-left font-medium">Associated Contacts</th>
              <th className="px-4 py-3 text-left font-medium">Assignee</th>
              <th className="px-4 py-3 text-left font-medium flex items-center gap-1">
                Due Date (+01) <ChevronDown size={14} />
              </th>
              <th className="px-4 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
        </table>

        <div className="flex flex-col items-center justify-center py-16">
          <img src={pic} alt="Empty state illustration" className="mb-4 w-48" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">It's so lonely in here!</h3>
          <p className="text-gray-500 mb-6">No Tasks in sight! Ready to create a fresh one?</p>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md">
            <Plus size={16} />
            Add Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default TasksPage
