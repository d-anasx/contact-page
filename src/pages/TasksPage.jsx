import { Plus, Filter, Search, ChevronDown, ArrowUpDown } from 'lucide-react'
import img from '../assets/empty.png'

function TasksPage() {
  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold">Tasks</h1>
          <span className="text-primary">0 Tasks</span>
        </div>
        <button className="btn btn-primary btn-sm gap-2">
          <Plus size={16} />
          Add Task
        </button>
      </div>

      <div className="mb-6">
        <div className="flex border-b border-base-300">
          <button className="px-4 py-2 text-primary border-b-2 border-primary flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-primary rounded-full"></span>
            </span>
            All
          </button>
          <button className="px-4 py-2 text-base-content/70 flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-base-content/50 rounded-full"></span>
            </span>
            Due Today
          </button>
          <button className="px-4 py-2 text-base-content/70 flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-base-content/50 rounded-full"></span>
            </span>
            Overdue
          </button>
          <button className="px-4 py-2 text-base-content/70 flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-base-content/50 rounded-full"></span>
            </span>
            Upcoming
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button className="btn btn-outline btn-sm gap-2">
          <span className="w-4 h-4 flex items-center justify-center">
            <span className="block w-1 h-1 bg-base-content/50 rounded-full"></span>
          </span>
          Assignee: Any
        </button>
        <button className="btn btn-outline btn-sm gap-2">
          <span className="w-4 h-4 flex items-center justify-center">
            <span className="block w-1 h-1 bg-base-content/50 rounded-full"></span>
          </span>
          Status: All
        </button>
        <button className="btn btn-outline btn-sm gap-2">
          <span className="w-4 h-4 flex items-center justify-center">
            <span className="block w-1 h-1 bg-base-content/50 rounded-full"></span>
          </span>
          Due Date: Any
        </button>
        <button className="btn btn-outline btn-sm gap-2">
          <Filter size={16} />
          Advanced Filters
        </button>
        <button className="btn btn-outline btn-sm gap-2">
          <span className="text-primary">Sort (1)</span>
        </button>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
            <input
              type="text"
              placeholder="Search for task title"
              className="input input-bordered input-sm pl-10 w-64"
            />
          </div>
          <button className="btn btn-outline btn-sm gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-base-content/50 rounded-full"></span>
            </span>
            Manage Fields
          </button>
        </div>
      </div>

      <div className="bg-base-100 rounded-md shadow-sm overflow-hidden flex-1">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th className="w-10 px-4 py-3 whitespace-nowrap">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">Status</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Title <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">Description</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">Associated Contacts</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">Assignee</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Due Date (+01) <ChevronDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">Actions</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="flex flex-col items-center justify-center py-16">
          <img src={img} alt="Empty state illustration" className="mb-4 w-48" />
          <h3 className="text-lg font-medium mb-2">It's so lonely in here!</h3>
          <p className="text-base-content/70 mb-6">No Tasks in sight! Ready to create a fresh one?</p>
          <button className="btn btn-primary gap-2">
            <Plus size={16} />
            Add Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default TasksPage
