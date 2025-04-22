import {
  Plus,
  Filter,
  Printer,
  Mail,
  Tag,
  Link,
  Trash,
  Star,
  Download,
  Upload,
  Grid,
  MessageCircle,
  Copy,
  Search,
  ChevronDown,
} from "lucide-react"

function Toolbar() {
  return (
    <div className="flex items-center mb-4 bg-white rounded p-2 shadow-sm">
      <div className="flex items-center">
        <ToolbarButton icon={<Plus size={18} />} />
        <ToolbarButton icon={<Filter size={18} />} />
        <ToolbarButton icon={<Printer size={18} />} />
        <ToolbarButton icon={<Mail size={18} />} />
        <ToolbarButton icon={<Tag size={18} />} />
        <ToolbarButton icon={<Link size={18} />} />
        <ToolbarButton icon={<Trash size={18} />} />
        <ToolbarButton icon={<Star size={18} />} />
        <ToolbarButton icon={<Download size={18} />} />
        <ToolbarButton icon={<Upload size={18} />} />
        <ToolbarButton icon={<Grid size={18} />} />
        <ToolbarButton icon={<MessageCircle size={18} />} />
        <ToolbarButton icon={<Copy size={18} />} />
      </div>

      <div className="mx-4 text-sm text-gray-500">* No items found for selected filters</div>

      <div className="flex items-center ml-auto">
        <DropdownButton text="Columns" />

        <div className="relative mx-2">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Quick search"
            className="pl-10 pr-3 py-2 border border-gray-200 rounded text-sm w-60"
          />
        </div>

        <DropdownButton text="More Filters" />
      </div>
    </div>
  )
}

function ToolbarButton({ icon }) {
  return <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">{icon}</button>
}

function DropdownButton({ text }) {
  return (
    <button className="flex items-center px-3 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50">
      {text} <ChevronDown size={16} className="ml-1" />
    </button>
  )
}

export default Toolbar
