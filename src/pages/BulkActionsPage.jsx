import { Calendar, Filter, MoreVertical, ArrowRight } from "lucide-react"

function BulkActionsPage() {
  // Sample data for bulk actions
  const bulkActions = [
    {
      actionLabel: "20_Apr_2025_4_16_PM",
      operation: "Delete",
      status: "Complete",
      user: "HT",
      created: { date: "Apr 20 2025", time: "04:16 PM" },
      completed: { date: "Apr 20 2025", time: "04:16 PM" },
    },
    {
      actionLabel: "17_Feb_2025_7_05_PM",
      operation: "Delete",
      status: "Complete",
      user: "AA",
      created: { date: "Feb 17 2025", time: "07:05 PM" },
      completed: { date: "Feb 17 2025", time: "07:06 PM" },
    },
  ]

  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Bulk Actions</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md bg-white">
            <div className="px-4 py-2 flex items-center gap-2 text-sm text-gray-600">
              Oct 20 2024
              <Calendar size={16} className="text-gray-400" />
            </div>
            <div className="px-2">
              <ArrowRight size={16} className="text-gray-400" />
            </div>
            <div className="px-4 py-2 flex items-center gap-2 text-sm text-gray-600">
              Apr 21 2025
              <Calendar size={16} className="text-gray-400" />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white text-gray-700">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Action Label</th>
              <th className="px-6 py-3 text-left font-medium">Operation</th>
              <th className="px-6 py-3 text-left font-medium">Status</th>
              <th className="px-6 py-3 text-left font-medium">User</th>
              <th className="px-6 py-3 text-left font-medium">Created (GMT +01)</th>
              <th className="px-6 py-3 text-left font-medium">Completed (GMT +01)</th>
              <th className="px-6 py-3 text-left font-medium">Statistics</th>
              <th className="px-6 py-3 text-left font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {bulkActions.map((action, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{action.actionLabel}</td>
                <td className="px-6 py-4">{action.operation}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">{action.status}</span>
                </td>
                <td className="px-6 py-4">{action.user}</td>
                <td className="px-6 py-4">
                  <div>{action.created.date}</div>
                  <div className="text-gray-500">{action.created.time}</div>
                </td>
                <td className="px-6 py-4">
                  <div>{action.completed.date}</div>
                  <div className="text-gray-500">{action.completed.time}</div>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline">Show Stats</button>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded text-gray-500 bg-white">Previous</button>
            <button className="px-3 py-1 border rounded text-gray-700 bg-white font-medium">1</button>
            <button className="px-3 py-1 border rounded text-gray-500 bg-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BulkActionsPage
