"use client"

import { useState, useEffect, useCallback } from "react"
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
  MoreVertical,
  ChevronRight,
  ArrowUpDown,
  X,
} from "lucide-react"
import FiltersModal from "../components/FiltersModal"


  // Dummy contact data
  const contacts = [
    {
      id: 1,
      initials: "WB",
      color: "bg-purple-500",
      name: "Wilson Bob",
      email: "hello+21@funnelscene.com",
      phone: "+6421223344",
      created: "Jul 28 2022 02:04 PM",
      tags: ["watch demo"],
      lastActivity: "1 day ago",
    },
    {
      id: 2,
      initials: "HW",
      color: "bg-amber-500",
      name: "Hill Wilson",
      email: "hello+10@funnelscene.com",
      phone: "+6421445566",
      created: "Jul 28 2022 02:04 PM",
      tags: ["pricing capture"],
      lastActivity: "4 hours ago",
    },
    {
      id: 3,
      initials: "WS",
      color: "bg-green-500",
      name: "Wilson Sill",
      email: "hello+13@funnelscene.com",
      phone: "+6421556677",
      created: "Jul 28 2022 02:04 PM",
      tags: ["pricing capture"],
      lastActivity: "3 days ago",
    },
    {
      id: 4,
      initials: "PW",
      color: "bg-green-400",
      name: "Philson Will",
      email: "hello+8@funnelscene.com",
      phone: "+6421667788",
      created: "Jul 28 2022 02:04 PM",
      tags: ["watch demo"],
      lastActivity: "5 hours ago",
    },
    {
      id: 5,
      initials: "SW",
      color: "bg-amber-400",
      name: "Sill Wilson",
      email: "hello+12@funnelscene.com",
      phone: "+6421778899",
      created: "Jul 28 2022 02:04 PM",
      tags: [],
      lastActivity: "2 days ago",
    },
    {
      id: 6,
      initials: "RW",
      color: "bg-green-500",
      name: "Rill Wilson",
      email: "hello+16@funnelscene.com",
      phone: "+6421889900",
      created: "Jul 28 2022 02:04 PM",
      tags: [],
      lastActivity: "1 hour ago",
    },
    {
      id: 7,
      initials: "WR",
      color: "bg-purple-500",
      name: "Wilson Rill",
      email: "hello+17@funnelscene.com",
      phone: "+6421999011",
      created: "Jul 28 2022 02:04 PM",
      tags: ["watch demo"],
      lastActivity: "6 days ago",
    },
    {
      id: 8,
      initials: "BW",
      color: "bg-green-500",
      name: "Bob Wilson",
      email: "hello+20@funnelscene.com",
      phone: "+6421223344",
      created: "Jul 28 2022 02:04 PM",
      tags: [],
      lastActivity: "30 minutes ago",
    },
    {
      id: 9,
      initials: "LW",
      color: "bg-red-400",
      name: "Lill Wilson",
      email: "hello+18@funnelscene.com",
      phone: "+6421445566",
      created: "Jul 28 2022 02:04 PM",
      tags: ["pricing capture"],
      lastActivity: "2 days ago",
    },
    {
      id: 10,
      initials: "TW",
      color: "bg-amber-500",
      name: "Till Wilson",
      email: "hello+14@funnelscene.com",
      phone: "+6421556677",
      created: "Jul 28 2022 02:04 PM",
      tags: ["watch demo"],
      lastActivity: "4 hours ago",
    },
    {
      id: 11,
      initials: "WP",
      color: "bg-green-500",
      name: "Will Philson",
      email: "hello+9@funnelscene.com",
      phone: "+6421667788",
      created: "Jul 28 2022 02:04 PM",
      tags: [],
      lastActivity: "1 day ago",
    },
    {
      id: 12,
      initials: "WL",
      color: "bg-green-500",
      name: "Wilson Lil",
      email: "hello+19@funnelscene.com",
      phone: "+6421778899",
      created: "Jul 28 2022 02:04 PM",
      tags: ["pricing capture"],
      lastActivity: "3 days ago",
    },
    {
      id: 13,
      initials: "WT",
      color: "bg-green-500",
      name: "Wilson Till",
      email: "hello+15@funnelscene.com",
      phone: "+6421889900",
      created: "Jul 28 2022 02:04 PM",
      tags: ["watch demo"],
      lastActivity: "2 hours ago",
    },
    {
      id: 14,
      initials: "JD",
      color: "bg-blue-500",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+6423000001",
      created: "Apr 20 2025 10:00 AM",
      tags: ["new lead"],
      lastActivity: "1 hour ago",
    },
    {
      id: 15,
      initials: "AS",
      color: "bg-red-400",
      name: "Alice Smith",
      email: "alice.smith@example.com",
      phone: "+6423000002",
      created: "Apr 19 2025 09:30 AM",
      tags: ["follow up"],
      lastActivity: "2 days ago",
    },
    {
      id: 16,
      initials: "BM",
      color: "bg-green-400",
      name: "Bob Martin",
      email: "bob.martin@example.com",
      phone: "+6423000003",
      created: "Apr 18 2025 03:15 PM",
      tags: [],
      lastActivity: "5 days ago",
    },
    {
      id: 17,
      initials: "CR",
      color: "bg-purple-500",
      name: "Cathy Rose",
      email: "cathy.rose@example.com",
      phone: "+6423000004",
      created: "Apr 17 2025 11:20 AM",
      tags: ["pricing capture"],
      lastActivity: "3 hours ago",
    },
    {
      id: 18,
      initials: "DL",
      color: "bg-amber-500",
      name: "David Lee",
      email: "david.lee@example.com",
      phone: "+6423000005",
      created: "Apr 16 2025 01:45 PM",
      tags: ["watch demo"],
      lastActivity: "4 days ago",
    },
    {
      id: 19,
      initials: "EM",
      color: "bg-green-500",
      name: "Emma Moore",
      email: "emma.moore@example.com",
      phone: "+6423000006",
      created: "Apr 15 2025 08:00 AM",
      tags: [],
      lastActivity: "1 week ago",
    },
    {
      id: 20,
      initials: "FN",
      color: "bg-red-400",
      name: "Frank Nelson",
      email: "frank.nelson@example.com",
      phone: "+6423000007",
      created: "Apr 14 2025 04:30 PM",
      tags: ["new lead"],
      lastActivity: "2 hours ago",
    },
    {
      id: 21,
      initials: "GP",
      color: "bg-blue-500",
      name: "Grace Park",
      email: "grace.park@example.com",
      phone: "+6423000008",
      created: "Apr 13 2025 12:00 PM",
      tags: ["follow up"],
      lastActivity: "6 days ago",
    },
    {
      id: 22,
      initials: "HR",
      color: "bg-purple-500",
      name: "Henry Reed",
      email: "henry.reed@example.com",
      phone: "+6423000009",
      created: "Apr 12 2025 09:10 AM",
      tags: ["watch demo"],
      lastActivity: "3 days ago",
    },
    {
      id: 23,
      initials: "IS",
      color: "bg-amber-400",
      name: "Isabel Scott",
      email: "isabel.scott@example.com",
      phone: "+6423000010",
      created: "Apr 11 2025 02:25 PM",
      tags: [],
      lastActivity: "1 day ago",
    },
    {
      id: 24,
      initials: "JT",
      color: "bg-green-400",
      name: "James Taylor",
      email: "james.taylor@example.com",
      phone: "+6423000011",
      created: "Apr 10 2025 05:40 PM",
      tags: ["pricing capture"],
      lastActivity: "5 hours ago",
    },
    {
      id: 25,
      initials: "KL",
      color: "bg-red-400",
      name: "Karen Lee",
      email: "karen.lee@example.com",
      phone: "+6423000012",
      created: "Apr 09 2025 11:55 AM",
      tags: ["new lead"],
      lastActivity: "2 weeks ago",
    },
    {
      id: 26,
      initials: "LM",
      color: "bg-blue-500",
      name: "Larry Miller",
      email: "larry.miller@example.com",
      phone: "+6423000013",
      created: "Apr 08 2025 08:20 AM",
      tags: [],
      lastActivity: "4 days ago",
    },
    {
      id: 27,
      initials: "MN",
      color: "bg-purple-500",
      name: "Megan Norris",
      email: "megan.norris@example.com",
      phone: "+6423000014",
      created: "Apr 07 2025 01:35 PM",
      tags: ["watch demo"],
      lastActivity: "7 days ago",
    },
    {
      id: 28,
      initials: "OP",
      color: "bg-amber-500",
      name: "Oliver Price",
      email: "oliver.price@example.com",
      phone: "+6423000015",
      created: "Apr 06 2025 03:50 PM",
      tags: ["follow up"],
      lastActivity: "6 hours ago",
    },
    {
      id: 29,
      initials: "QR",
      color: "bg-green-500",
      name: "Quincy Roberts",
      email: "quincy.roberts@example.com",
      phone: "+6423000016",
      created: "Apr 05 2025 10:10 AM",
      tags: [],
      lastActivity: "2 days ago",
    },
    {
      id: 30,
      initials: "ST",
      color: "bg-red-400",
      name: "Samantha Turner",
      email: "samantha.turner@example.com",
      phone: "+6423000017",
      created: "Apr 04 2025 04:45 PM",
      tags: ["pricing capture"],
      lastActivity: "3 hours ago",
    },
    {
      id: 31,
      initials: "UV",
      color: "bg-blue-500",
      name: "Ulysses Vaughn",
      email: "ulysses.vaughn@example.com",
      phone: "+6423000018",
      created: "Apr 03 2025 09:00 AM",
      tags: ["watch demo"],
      lastActivity: "1 day ago",
    },
    {
      id: 32,
      initials: "WX",
      color: "bg-purple-500",
      name: "Wendy Xu",
      email: "wendy.xu@example.com",
      phone: "+6423000019",
      created: "Apr 02 2025 02:15 PM",
      tags: [],
      lastActivity: "5 days ago",
    },
    {
      id: 33,
      initials: "YZ",
      color: "bg-amber-400",
      name: "Yvonne Zimmerman",
      email: "yvonne.zimmerman@example.com",
      phone: "+6423000020",
      created: "Apr 01 2025 11:30 AM",
      tags: ["new lead"],
      lastActivity: "4 hours ago",
    },
    {
      id: 34,
      initials: "AB",
      color: "bg-green-400",
      name: "Aaron Brown",
      email: "aaron.brown@example.com",
      phone: "+6423000021",
      created: "Mar 31 2025 05:00 PM",
      tags: ["follow up"],
      lastActivity: "2 days ago",
    },
    {
      id: 35,
      initials: "CD",
      color: "bg-red-400",
      name: "Cindy Davis",
      email: "cindy.davis@example.com",
      phone: "+6423000022",
      created: "Mar 30 2025 10:25 AM",
      tags: [],
      lastActivity: "1 week ago",
    },
    {
      id: 36,
      initials: "EF",
      color: "bg-blue-500",
      name: "Ethan Fisher",
      email: "ethan.fisher@example.com",
      phone: "+6423000023",
      created: "Mar 29 2025 03:40 PM",
      tags: ["watch demo"],
      lastActivity: "3 days ago",
    },
    {
      id: 37,
      initials: "GH",
      color: "bg-purple-500",
      name: "Gina Howard",
      email: "gina.howard@example.com",
      phone: "+6423000024",
      created: "Mar 28 2025 12:55 PM",
      tags: ["pricing capture"],
      lastActivity: "6 hours ago",
    },
    {
      id: 38,
      initials: "IJ",
      color: "bg-amber-500",
      name: "Ian Johnson",
      email: "ian.johnson@example.com",
      phone: "+6423000025",
      created: "Mar 27 2025 09:10 AM",
      tags: [],
      lastActivity: "2 days ago",
    },
    {
      id: 39,
      initials: "KL",
      color: "bg-green-500",
      name: "Kelly Lee",
      email: "kelly.lee@example.com",
      phone: "+6423000026",
      created: "Mar 26 2025 04:25 PM",
      tags: ["new lead"],
      lastActivity: "1 hour ago",
    },
    {
      id: 40,
      initials: "MN",
      color: "bg-red-400",
      name: "Mark Nelson",
      email: "mark.nelson@example.com",
      phone: "+6423000027",
      created: "Mar 25 2025 11:40 AM",
      tags: ["follow up"],
      lastActivity: "5 days ago",
    },
    {
      id: 41,
      initials: "OP",
      color: "bg-blue-500",
      name: "Olivia Parker",
      email: "olivia.parker@example.com",
      phone: "+6423000028",
      created: "Mar 24 2025 02:55 PM",
      tags: [],
      lastActivity: "3 days ago",
    },
    {
      id: 42,
      initials: "QR",
      color: "bg-purple-500",
      name: "Quinn Roberts",
      email: "quinn.roberts@example.com",
      phone: "+6423000029",
      created: "Mar 23 2025 10:10 AM",
      tags: ["watch demo"],
      lastActivity: "4 hours ago",
    },
    {
      id: 43,
      initials: "ST",
      color: "bg-amber-400",
      name: "Sara Thompson",
      email: "sara.thompson@example.com",
      phone: "+6423000030",
      created: "Mar 22 2025 05:25 PM",
      tags: ["pricing capture"],
      lastActivity: "2 days ago",
    },
  ]
  const columnWidths = {
    checkbox: "w-[50px]",
    name: "w-[250px]",
    phone: "w-[150px]",
    email: "w-[300px]",
    created: "w-[200px]",
    lastActivity: "w-[200px]",
    tags: "w-[200px]",
  }
  function SmartListsPage() {
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false)
    const [appliedFilters, setAppliedFilters] = useState({})
    const [filteredContacts, setFilteredContacts] = useState(contacts)
    const [searchQuery, setSearchQuery] = useState("")
  
    // Add pagination state variables at the top of the SmartListsPage component, after the other state variables
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 20 // Fixed page size of 20
  
    // Memoize the matchesFilter function to prevent it from being recreated on each render
    const matchesFilter = useCallback((text, operator, value) => {
      if (!text) return false
  
      text = text.toLowerCase()
      value = value.toLowerCase()
  
      switch (operator) {
        case "equals":
          return text === value
        case "not_equals":
          return text !== value
        case "contains":
          return text.includes(value)
        case "starts_with":
          return text.startsWith(value)
        case "ends_with":
          return text.endsWith(value)
        default:
          return true
      }
    }, [])  


  // Apply filters to contacts
  useEffect(() => {
    let result = [...contacts]

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (contact) => contact.name.toLowerCase().includes(query) || contact.email.toLowerCase().includes(query),
      )
    }

    // Apply filters
    if (Object.keys(appliedFilters).length > 0) {
      result = result.filter((contact) => {
        return Object.entries(appliedFilters).every(([category, { operator, value }]) => {
          if (!value) return true // Skip empty values

          switch (category) {
            case "First Name":
              const firstName = contact.name.split(" ")[0]
              return matchesFilter(firstName, operator, value)

            case "Last Name":
              const lastName = contact.name.split(" ")[1]
              return matchesFilter(lastName, operator, value)

            case "Full Name":
              return matchesFilter(contact.name, operator, value)

            case "Email":
              return matchesFilter(contact.email, operator, value)

            case "Tag":
              if (operator === "is") {
                return contact.tags.includes(value)
              } else if (operator === "is_not") {
                return !contact.tags.includes(value)
              } else if (operator === "contains") {
                return contact.tags.some((tag) => tag.includes(value))
              }
              return true

            default:
              return true
          }
        })
      })
    }

    setFilteredContacts(result)
    setCurrentPage(1)
  }, [appliedFilters, searchQuery, matchesFilter])

  const handleOpenFiltersModal = () => {
    setIsFiltersModalOpen(true)
  }

  const handleCloseFiltersModal = () => {
    setIsFiltersModalOpen(false)
  }

  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters)
  }

  const handleRemoveFilter = (category) => {
    const newFilters = { ...appliedFilters }
    delete newFilters[category]
    setAppliedFilters(newFilters)
  }

  const handleClearAllFilters = () => {
    setAppliedFilters({})
  }

  // Add a function to handle page changes
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  // Calculate pagination values
  const totalPages = Math.max(1, Math.ceil(filteredContacts.length / pageSize))
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, filteredContacts.length)
  const currentContacts = filteredContacts.slice(startIndex, endIndex)

  // Get the active filter count
  const activeFilterCount = Object.keys(appliedFilters).length

  return (
    <>
       <div className="flex flex-col h-full overflow-hidden"> 
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

          <div className="ml-auto flex items-center">
            <DropdownButton text="Columns" />

            <div className="relative mx-2">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Quick search"
                className="pl-10 pr-3 py-2 border border-gray-200 rounded text-sm w-60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button
              onClick={handleOpenFiltersModal}
              className={`flex items-center px-3 py-2 text-sm border rounded hover:bg-gray-50 ${
                activeFilterCount > 0 ? "border-blue-300 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-700"
              }`}
            >
              <Filter size={16} className="mr-1" />
              More Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
        </div>

        {activeFilterCount > 0 && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-blue-700 font-medium">
                {activeFilterCount} filter{activeFilterCount !== 1 && "s"} applied
              </span>
              <button onClick={handleClearAllFilters} className="text-sm text-blue-700 hover:underline">
                Clear all
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(appliedFilters).map(([category, { operator, value }]) => (
                <div
                  key={category}
                  className="bg-white border border-blue-200 rounded-full px-3 py-1 text-xs flex items-center gap-1"
                >
                  <span className="font-medium">{category}:</span>
                  <span>
                    {operator.replace("_", " ")} "{value}"
                  </span>
                  <button
                    onClick={() => handleRemoveFilter(category)}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-md shadow-sm overflow-hidden flex-1 flex flex-col">
           {/* Table container with fixed height and proper overflow */}
           <div className="flex flex-col h-full">
            {/* Header table with sticky positioning */}
            <div className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
              <table className="w-full text-sm table-fixed">
                <colgroup>
                  <col className={columnWidths.checkbox} />
                  <col className={columnWidths.name} />
                  <col className={columnWidths.phone} />
                  <col className={columnWidths.email} />
                  <col className={columnWidths.created} />
                  <col className={columnWidths.lastActivity} />
                  <col className={columnWidths.tags} />
                </colgroup>
                <thead>
                <tr className="">
                  <th className="px-4 py-3 text-left font-medium"></th>
                    <th className="px-4 py-3 text-left font-medium">
                      <div className="flex items-center gap-1">
                        Name <ArrowUpDown size={14} />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      <div className="flex items-center gap-1">
                        Phone <ArrowUpDown size={14} />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      <div className="flex items-center gap-1">
                        Email <ArrowUpDown size={14} />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      <div className="flex items-center gap-1">
                        Created <ArrowUpDown size={14} />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      <div className="flex items-center gap-1">
                        Last Activity <ArrowUpDown size={14} />
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left font-medium">Tags</th>
                  </tr>
                </thead>
              </table>
            </div>

                 {/* Body table with scrolling - key fix is here */}
            <div className="overflow-auto flex-1 min-h-0">
              <table className="w-full text-sm table-fixed">
                <colgroup>
                  <col className={columnWidths.checkbox} />
                  <col className={columnWidths.name} />
                  <col className={columnWidths.phone} />
                  <col className={columnWidths.email} />
                  <col className={columnWidths.created} />
                  <col className={columnWidths.lastActivity} />
                  <col className={columnWidths.tags} />
                </colgroup>
              <tbody className="divide-y divide-gray-100">
                {currentContacts.length > 0 ? (
                  currentContacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-4 py-3 ">
                        <div className="flex items-center">
                          <button className="mr-2 text-gray-400 hover:text-gray-600">
                            <MoreVertical size={16} />
                          </button>
                          <div
                            className={`w-8 h-8 rounded-full ${contact.color} text-white flex items-center justify-center mr-3 text-xs font-medium`}
                          >
                            {contact.initials}
                          </div>
                          <span className="truncate">{contact.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">{contact.phone}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                        <Mail size={14} className="text-blue-600 mr-2 flex-shrink-0" />
                        <span className="truncate">{contact.email}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        <div>
                          {contact.created.split(" ")[0]} {contact.created.split(" ")[1]}{" "}
                          {contact.created.split(" ")[2]}
                        </div>
                        <div>
                          {contact.created.split(" ")[3]} {contact.created.split(" ")[4]}{" "}
                          <span className="text-gray-400">(NZST)</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">{contact.lastActivity}</td>
                      <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                          {contact.tags.map((tag, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 rounded text-xs ${
                                tag === "watch demo" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                      No contacts match the current filters. Try adjusting your filters or search query.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {filteredContacts.length > 0
                ? `Total ${filteredContacts.length} record${filteredContacts.length !== 1 ? "s" : ""} | Page ${currentPage} of ${totalPages}`
                : "No records to display"}
            </div>
            <div className="flex items-center gap-2">
              <button
                className={`px-3 py-1 border rounded flex items-center ${currentPage > 1 ? "text-gray-700 bg-white hover:bg-gray-50" : "text-gray-400 bg-gray-50 cursor-not-allowed"}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
              >
                Previous
              </button>

              {/* Page number buttons */}
              {(() => {
                let pageNumbers = []
                pageNumbers.push(1)
                const startPage = Math.max(2, currentPage - 1)
                const endPage = Math.min(totalPages - 1, currentPage + 1)
                if (startPage > 2) {
                  pageNumbers.push("...")
                }
                for (let i = startPage; i <= endPage; i++) {
                  pageNumbers.push(i)
                }
                if (endPage < totalPages - 1) {
                  pageNumbers.push("...")
                }
                if (totalPages > 1) {
                  pageNumbers.push(totalPages)
                }
                pageNumbers = [...new Set(pageNumbers)]

                return pageNumbers.map((page, index) => {
                  if (page === "...") {
                    return (
                      <span key={`ellipsis-${index}`} className="px-2">
                        ...
                      </span>
                    )
                  }
                  return (
                    <button
                      key={page}
                      className={`px-3 py-1 border rounded ${
                        currentPage === page ? "bg-blue-600 text-white" : "text-gray-700 bg-white hover:bg-gray-50"
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                })
              })()}

              <button
                className={`px-3 py-1 border rounded flex items-center ${currentPage < totalPages ? "text-gray-700 bg-white hover:bg-gray-50" : "text-gray-400 bg-gray-50 cursor-not-allowed"}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <FiltersModal
        isOpen={isFiltersModalOpen}
        onClose={handleCloseFiltersModal}
        onApplyFilters={handleApplyFilters}
        currentFilters={appliedFilters}
      />
    </>
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

export default SmartListsPage


