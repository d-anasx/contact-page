import {
  Plus,
  Filter,
  Bot,
  Mail,
  Tag,
  Link,
  Trash,
  Star,
  Download,
  Upload,
  Building2,
  Copy,
  Search,
  ChevronDown,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { TbTagMinus, TbTagPlus } from "react-icons/tb";

function Toolbar() {
  return (
    <div className="bg-white rounded shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4 w-full">
      {/* Icon Buttons */}
      <div className="flex flex-wrap gap-2">
        <ToolbarButton icon={<Plus size={18} />} />
        <ToolbarButton icon={<Filter size={18} />} />
        <ToolbarButton icon={<Bot size={20} />} />
        <ToolbarButton icon={<Mail size={18} />} />
        <ToolbarButton icon={<TbTagPlus size={18} />} />
        <ToolbarButton icon={<TbTagMinus size={18} />} />
        <ToolbarButton icon={<Link size={18} />} />
        <ToolbarButton icon={<Trash size={18} />} />
        <ToolbarButton icon={<Star size={18} />} />
        <ToolbarButton icon={<Download size={18} />} />
        <ToolbarButton icon={<Upload size={18} />} />
        <ToolbarButton icon={<Building2 size={18} />} />
        <ToolbarButton icon={<FaWhatsapp size={18} />} />
        <ToolbarButton icon={<Copy size={18} />} />
      </div>

      {/* Info message (hidden on small screens) */}
      <div className="hidden sm:block text-sm text-gray-500 whitespace-nowrap">
        * No items found for selected filters
      </div>

      {/* Right-side Filters/Search */}
      <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:items-center sm:gap-4 w-full md:w-auto">
        <DropdownButton text="Columns" />

        <div className="relative w-full sm:w-60">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Quick search"
            className="pl-10 pr-3 py-2 border border-gray-200 rounded text-sm w-full"
          />
        </div>

        <DropdownButton text="More Filters" />
      </div>
    </div>
  );
}

function ToolbarButton({ icon }) {
  return (
    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded transition">
      {icon}
    </button>
  );
}

function DropdownButton({ text }) {
  return (
    <button className="flex items-center justify-between px-3 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50 transition">
      {text} <ChevronDown size={16} className="ml-1" />
    </button>
  );
}

export default Toolbar;
