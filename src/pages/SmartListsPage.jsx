"use client"

import { useState, useEffect, useCallback } from "react"
import { Plus, Filter, Printer, Mail, Tag, LinkIcon, Trash, Star, Download, Upload, Grid, MessageCircle, Copy, Search, ChevronDown, MoreVertical, ArrowUpDown, X } from 'lucide-react'
import FiltersModal from "../components/FiltersModal"
import AddContactModal from "../components/AddContactModal"

// Move contacts data outside the component to prevent it from being recreated on each render
const contactsData = [
  {
    id: 1,
    initials: "WB",
    color: "bg-primary",
    name: "Wilson Bob",
    email: "hello+21@funnelscene.com",
    phone: "+6423000001",
    created: "Jul 28 2022 02:04 PM",
    tags: ["watch demo"],
    lastActivity: "2 weeks ago",
  },
  {
    id: 2,
    initials: "HW",
    color: "bg-secondary",
    name: "Hill Wilson",
    email: "hello+10@funnelscene.com",
    phone: "+6423000002",
    created: "Jul 28 2022 02:04 PM",
    tags: ["pricing capture"],
    lastActivity: "2 weeks ago",
  },
  {
    id: 3,
    initials: "WS",
    color: "bg-primary",
    name: "Wilson Sill",
    email: "hello+13@funnelscene.com",
    phone: "+6423000003",
    created: "Jul 28 2022 02:04 PM",
    tags: ["pricing capture"],
    lastActivity: "3 days ago",
  },
  {
    id: 4,
    initials: "PW",
    color: "bg-accent",
    name: "Philson Will",
    email: "hello+8@funnelscene.com",
    phone: "+6423000004",
    created: "Jul 28 2022 02:04 PM",
    tags: ["watch demo"],
    lastActivity: "1 week ago",
  },
  {
    id: 5,
    initials: "SW",
    color: "bg-secondary",
    name: "Sill Wilson",
    email: "hello+12@funnelscene.com",
    phone: "+6423000005",
    created: "Jul 28 2022 02:04 PM",
    tags: [],
    lastActivity: "5 days ago",
  },
  {
    id: 6,
    initials: "RW",
    color: "bg-primary",
    name: "Rill Wilson",
    email: "hello+16@funnelscene.com",
    phone: "+6423000006",
    created: "Jul 28 2022 02:04 PM",
    tags: [],
    lastActivity: "2 weeks ago",
  },
  {
    id: 7,
    initials: "WR",
    color: "bg-primary",
    name: "Wilson Rill",
    email: "hello+17@funnelscene.com",
    phone: "+6423000007",
    created: "Jul 28 2022 02:04 PM",
    tags: ["watch demo"],
    lastActivity: "2 weeks ago",
  },
  {
    id: 8,
    initials: "BW",
    color: "bg-primary",
    name: "Bob Wilson",
    email: "hello+20@funnelscene.com",
    phone: "+6423000008",
    created: "Jul 28 2022 02:04 PM",
    tags: [],
    lastActivity: "1 day ago",
  },
  {
    id: 9,
    initials: "LW",
    color: "bg-error",
    name: "Lill Wilson",
    email: "hello+18@funnelscene.com",
    phone: "+6423000009",
    created: "Jul 28 2022 02:04 PM",
    tags: ["pricing capture"],
    lastActivity: "2 weeks ago",
  },
  {
    id: 10,
    initials: "TW",
    color: "bg-secondary",
    name: "Till Wilson",
    email: "hello+14@funnelscene.com",
    phone: "+6423000010",
    created: "Jul 28 2022 02:04 PM",
    tags: ["watch demo"],
    lastActivity: "2 weeks ago",
  },
  {
    id: 11,
    initials: "WP",
    color: "bg-primary",
    name: "Will Philson",
    email: "hello+9@funnelscene.com",
    phone: "+6423000011",
    created: "Jul 28 2022 02:04 PM",
    tags: [],
    lastActivity: "2 weeks ago",
  },
  {
    id: 12,
    initials: "WL",
    color: "bg-primary",
    name: "Wilson Lil",
    email: "hello+19@funnelscene.com",
    phone: "+6423000012",
    created: "Jul 28 2022 02:04 PM",
    tags: ["pricing capture"],
    lastActivity: "2 weeks ago",
  },
  {
    id: 13,
    initials: "WT",
    color: "bg-primary",
    name: "Wilson Till",
    email: "hello+15@funnelscene.com",
    phone: "+6423000013",
    created: "Jul 28 2022 02:04 PM",
    tags: ["watch demo"],
    lastActivity: "2 weeks ago",
  },
  {
    id: 14,
    initials: "CR",
    color: "bg-primary",
    name: "Cathy Rose",
    email: "cathy.rose@example.com",
    phone: "+6423000014",
    created: "Apr 17 2025 11:20 AM",
    tags: ["pricing capture"],
    lastActivity: "3 hours ago",
  },
]

// Define column widths to ensure alignment
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
  const [isAddContactModalOpen, setIsAddContactModalOpen] = useState(false)
  const [appliedFilters, setAppliedFilters] = useState({})
  const [allContacts, setAllContacts] = useState(contactsData)
  const [filteredContacts, setFilteredContacts] = useState(contactsData)
  const [searchQuery, setSearchQuery] = useState("")

  // Add pagination state variables at the top of the SmartListsPage component, after the other state variables
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 20 // Fixed page size of 20

  // Now add state for selected contacts and functions to handle selection and deletion
  const [selectedContacts, setSelectedContacts] = useState([])

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
    let result = [...allContacts]

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
    // Reset to first page when filters change
    setCurrentPage(1)
  }, [allContacts, appliedFilters, searchQuery, matchesFilter])

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

  const handleOpenAddContactModal = () => {
    setIsAddContactModalOpen(true)
  }

  const handleCloseAddContactModal = () => {
    setIsAddContactModalOpen(false)
  }

  const handleSaveContact = (newContact) => {
    setAllContacts((prev) => [newContact, ...prev])
  }

  // Add these functions after the other handler functions:
  const handleSelectContact = (id, isSelected) => {
    if (isSelected) {
      setSelectedContacts((prev) => [...prev, id])
    } else {
      setSelectedContacts((prev) => prev.filter((contactId) => contactId !== id))
    }
  }

  const handleSelectAllContacts = (isSelected) => {
    if (isSelected) {
      setSelectedContacts(currentContacts.map((contact) => contact.id))
    } else {
      setSelectedContacts([])
    }
  }

  const handleDeleteSelectedContacts = () => {
    if (selectedContacts.length === 0) {
      alert("Please select at least one contact to delete.")
      return
    }

    if (window.confirm(`Are you sure you want to delete ${selectedContacts.length} contact(s)?`)) {
      setAllContacts((prev) => prev.filter((contact) => !selectedContacts.includes(contact.id)))
      setSelectedContacts([])
    }
  }

  // Add a function to check for duplicate emails or phone numbers
  const checkDuplicate = (field, value) => {
    return allContacts.some((contact) => contact[field] === value)
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
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4 bg-base-200 rounded p-2 shadow-sm">
          <div className="flex items-center">
            <ToolbarButton icon={<Plus size={18} />} onClick={handleOpenAddContactModal} />
            <ToolbarButton icon={<Filter size={18} />} />
            <ToolbarButton icon={<Printer size={18} />} />
            <ToolbarButton icon={<Mail size={18} />} />
            <ToolbarButton icon={<Tag size={18} />} />
            <ToolbarButton icon={<LinkIcon size={18} />} />
            <ToolbarButton
              icon={<Trash size={18} />}
              onClick={handleDeleteSelectedContacts}
              disabled={selectedContacts.length === 0}
              className={selectedContacts.length === 0 ? "opacity-50 cursor-not-allowed" : ""}
            />
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
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50" />
              <input
                type="text"
                placeholder="Quick search"
                className="input input-bordered pl-10 pr-3 py-2 w-60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button
              onClick={handleOpenFiltersModal}
              className={`btn ${activeFilterCount > 0 ? "btn-primary btn-outline" : "btn-ghost"
                } flex items-center gap-2`}
            >
              <Filter size={16} />
              More Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {activeFilterCount > 0 && (
          <div className="mb-4 p-3 bg-primary/10 border border-primary/20 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-primary font-medium">
                {activeFilterCount} filter{activeFilterCount !== 1 && "s"} applied
              </span>
              <button onClick={handleClearAllFilters} className="text-sm text-primary hover:underline">
                Clear all
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(appliedFilters).map(([category, { operator, value }]) => (
                <div key={category} className="badge badge-outline badge-primary gap-1 py-3">
                  <span className="font-medium">{category}:</span>
                  <span>
                    {operator.replace("_", " ")} "{value}"
                  </span>
                  <button
                    onClick={() => handleRemoveFilter(category)}
                    className="ml-1 text-base-content/50 hover:text-base-content"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-base-100 rounded-md shadow-sm overflow-hidden flex-1 flex flex-col">
          {/* Table container with fixed layout */}
          <div className="flex-1 flex flex-col">
            {/* Header table with sticky positioning */}
            <div className="sticky top-0 z-10 bg-base-200 border-b border-base-300">
              <table className="table table-fixed">
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
                  <tr>
                    <th className="px-4 py-3">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={currentContacts.length > 0 && selectedContacts.length === currentContacts.length}
                        onChange={(e) => handleSelectAllContacts(e.target.checked)}
                      />
                    </th>
                    <th className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        Name <ArrowUpDown size={14} className="text-base-content/50" />
                      </div>
                    </th>
                    <th className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        Phone <ArrowUpDown size={14} className="text-base-content/50" />
                      </div>
                    </th>
                    <th className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        Email <ArrowUpDown size={14} className="text-base-content/50" />
                      </div>
                    </th>
                    <th className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        Created <ArrowUpDown size={14} className="text-base-content/50" />
                      </div>
                    </th>
                    <th className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        Last Activity <ArrowUpDown size={14} className="text-base-content/50" />
                      </div>
                    </th>
                    <th className="px-4 py-3">Tags</th>
                  </tr>
                </thead>
              </table>
            </div>

            {/* Body table with scrolling */}
            <div className="overflow-auto flex-1 min-h-0">
              <div style={{ height: "calc(100vh - 23rem)" }}>
                <table className="table table-fixed">
                  <colgroup>
                    <col className={columnWidths.checkbox} />
                    <col className={columnWidths.name} />
                    <col className={columnWidths.phone} />
                    <col className={columnWidths.email} />
                    <col className={columnWidths.created} />
                    <col className={columnWidths.lastActivity} />
                    <col className={columnWidths.tags} />
                  </colgroup>
                  <tbody>
                    {currentContacts.length > 0 ? (
                      currentContacts.map((contact) => (
                        <tr key={contact.id} className="hover">
                          <td className="px-4 py-3">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                              checked={selectedContacts.includes(contact.id)}
                              onChange={(e) => handleSelectContact(contact.id, e.target.checked)}
                            />
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <button className="mr-2 text-base-content/50 hover:text-base-content">
                                <MoreVertical size={16} />
                              </button>
                              <div className={`avatar placeholder mr-3`}>
                                <div
                                  className={`w-8  rounded-full ${contact.color} text-white flex items-center justify-center`}
                                >
                                  <span className="text-xs w-8 h-8 rounded-full  flex items-center justify-center  font-medium">{contact.initials}</span>
                                </div>
                              </div>
                              <span className="truncate">{contact.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">{contact.phone || ""}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <Mail size={14} className="text-primary mr-2 flex-shrink-0" />
                              <span className="truncate">{contact.email}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-base-content/70">
                            <div>
                              {contact.created.split(" ")[0]} {contact.created.split(" ")[1]}{" "}
                              {contact.created.split(" ")[2]}
                            </div>
                            <div>
                              {contact.created.split(" ")[3]} {contact.created.split(" ")[4]}{" "}
                              <span className="text-base-content/50">(NZST)</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-base-content/70">{contact.lastActivity}</td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1 flex-wrap">
                              {contact.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className={`badge badge-soft ${tag === "watch demo"
                                      ? "badge-primary "
                                      : "badge-success "
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
                        <td colSpan={7} className="px-4 py-8 text-center text-base-content/50">
                          No contacts match the current filters. Try adjusting your filters or search query.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 p-4 bg-base-200 border-t border-base-300 flex justify-between items-center">
            <div className="text-sm text-base-content/70">
              {filteredContacts.length > 0
                ? `Total ${filteredContacts.length} record${filteredContacts.length !== 1 ? "s" : ""} | Page ${currentPage} of ${totalPages}`
                : "No records to display"}
            </div>
            <div className="join">
              <button
                className={`join-item btn ${currentPage > 1 ? "btn-outline" : "btn-disabled"}`}
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
                      <span key={`ellipsis-${index}`} className="join-item btn btn-disabled">
                        ...
                      </span>
                    )
                  }
                  return (
                    <button
                      key={page}
                      className={`join-item btn ${currentPage === page ? "btn-active" : "btn-outline"}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                })
              })()}

              <button
                className={`join-item btn ${currentPage < totalPages ? "btn-outline" : "btn-disabled"}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
              >
                Next
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

      <AddContactModal
        isOpen={isAddContactModalOpen}
        onClose={handleCloseAddContactModal}
        onSave={handleSaveContact}
        onCheckDuplicate={checkDuplicate}
      />
    </>
  )
}

function ToolbarButton({ icon, onClick, disabled, className = "" }) {
  return (
    <button className={`btn btn-ghost btn-sm ${className}`} onClick={onClick} disabled={disabled}>
      {icon}
    </button>
  )
}

function DropdownButton({ text }) {
  return (
    <button className="btn btn-ghost btn-sm">
      {text} <ChevronDown size={16} className="ml-1" />
    </button>
  )
}

export default SmartListsPage
