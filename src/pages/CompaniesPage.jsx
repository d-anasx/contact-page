import { Plus, Filter, Search, ArrowUpDown, ChevronDown } from "lucide-react"
import pic from "../assets/empty.svg"
function CompaniesPage() {
  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-800">Companies</h1>
          <span className="text-blue-600">0 Companies</span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md">
          <Plus size={16} />
          Add Company
        </button>
      </div>

      <div className="mb-6">
        <div className="flex">
          <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-blue-600 rounded-full"></span>
            </span>
            All
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
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
            <input type="text" placeholder="Search" className="pl-10 pr-3 py-2 border rounded-md text-sm w-64" />
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
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="w-10 px-4 py-3 whitespace-nowrap">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Company Name <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Phone <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Email <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Website <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Address <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    State <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    City <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Description <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Postal Code <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Country <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Created By <ChevronDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Updated <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    Created <ArrowUpDown size={14} />
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="flex flex-col items-center justify-center py-16">
          <img src={pic} alt="Empty" className="mb-4 w-48" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">It's so lonely in here!</h3>
          <p className="text-gray-500 mb-6">No Companies in sight! Ready to create a fresh one?</p>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md">
            <Plus size={16} />
            Add Company
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div>Page 1 of 1</div>
        <div className="flex items-center gap-2">
          <select className="border rounded-md px-2 py-1">
            <option>20</option>
          </select>
          <button className="px-3 py-1 border rounded-md flex items-center gap-1 text-gray-400">Prev</button>
          <button className="px-3 py-1 border rounded-md bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 border rounded-md flex items-center gap-1 text-gray-400">Next</button>
        </div>
      </div>
    </div>
  )
}

export default CompaniesPage
