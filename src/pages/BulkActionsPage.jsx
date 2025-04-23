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
        <h1 className="text-xl font-semibold">Bulk Actions</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md bg-base-100">
            <div className="px-4 py-2 flex items-center gap-2 text-sm text-base-content/70">
              Oct 20 2024
              <Calendar size={16} className="text-base-content/50" />
            </div>
            <div className="px-2">
              <ArrowRight size={16} className="text-base-content/50" />
            </div>
            <div className="px-4 py-2 flex items-center gap-2 text-sm text-base-content/70">
              Apr 21 2025
              <Calendar size={16} className="text-base-content/50" />
            </div>
          </div>
          <button className="btn btn-outline btn-sm gap-2">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-base-100 rounded-md shadow-sm overflow-hidden">
        <table className="table w-full">
          <thead className="bg-base-200 text-base-content/80">
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
          <tbody>
            {bulkActions.map((action, index) => (
              <tr key={index} className="hover">
                <td className="px-6 py-4">{action.actionLabel}</td>
                <td className="px-6 py-4">{action.operation}</td>
                <td className="px-6 py-4">
                  <span className="badge badge-success badge-sm">{action.status}</span>
                </td>
                <td className="px-6 py-4">{action.user}</td>
                <td className="px-6 py-4">
                  <div>{action.created.date}</div>
                  <div className="text-base-content/50">{action.created.time}</div>
                </td>
                <td className="px-6 py-4">
                  <div>{action.completed.date}</div>
                  <div className="text-base-content/50">{action.completed.time}</div>
                </td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:underline">Show Stats</button>
                </td>
                <td className="px-6 py-4">
                  <button className="btn btn-ghost btn-sm btn-circle">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center px-6 py-3 bg-base-200">
          <div className="join">
            <button className="join-item btn btn-sm btn-outline">Previous</button>
            <button className="join-item btn btn-sm btn-active">1</button>
            <button className="join-item btn btn-sm btn-outline">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BulkActionsPage
