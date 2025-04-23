import { Plus, Filter, Search, ArrowUpDown, ChevronDown } from "lucide-react"
import img from '../assets/empty.png'

function CompaniesPage() {
  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold">Companies</h1>
          <span className="text-primary">0 Companies</span>
        </div>
        <button className="btn btn-primary btn-sm gap-2">
          <Plus size={16} />
          Add Company
        </button>
      </div>

      <div className="mb-6">
        <div className="flex">
          <button className="px-4 py-2 text-primary border-b-2 border-primary flex items-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">
              <span className="block w-1 h-1 bg-primary rounded-full"></span>
            </span>
            All
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
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
            <input type="text" placeholder="Search" className="input input-bordered input-sm pl-10 w-64" />
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
          <img src={img} alt="Empty state illustration" className="mb-4 w-48" />
          <h3 className="text-lg font-medium mb-2">It's so lonely in here!</h3>
          <p className="text-base-content/70 mb-6">No Companies in sight! Ready to create a fresh one?</p>
          <button className="btn btn-primary gap-2">
            <Plus size={16} />
            Add Company
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-base-content/70">
        <div>Page 1 of 1</div>
        <div className="flex items-center gap-2">
          <select className="select select-bordered select-sm">
            <option>20</option>
          </select>
          <div className="join">
            <button className="join-item btn btn-sm btn-disabled">Prev</button>
            <button className="join-item btn btn-sm btn-primary">1</button>
            <button className="join-item btn btn-sm btn-disabled">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompaniesPage
