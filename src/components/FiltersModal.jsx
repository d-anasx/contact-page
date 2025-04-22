"use client"

import { useState } from "react"
import { Search, X, ChevronRight, FilterIcon, ChevronDown, Plus, Check } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

function FiltersModal({ isOpen, onClose, onApplyFilters, currentFilters = {} }) {
  const [activeFilter, setActiveFilter] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilters, setSelectedFilters] = useState(currentFilters)

  const filterCategories = [
    "Business Name",
    "Company Name",
    "Email",
    "First Name",
    "Full Name",
    "Last Name",
    "Tag",
    "Wildcard Name",
  ]

  const filteredCategories = filterCategories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleFilterClick = (category) => {
    setActiveFilter(activeFilter === category ? null : category)
  }

  const handleApplyFilters = () => {
    onApplyFilters(selectedFilters)
    onClose()
  }

  const handleFilterChange = (category, operator, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: { operator, value },
    }))
  }

  const handleRemoveFilter = (category) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev }
      delete newFilters[category]
      return newFilters
    })
  }

  const getOperatorOptions = (category) => {
    if (category === "Tag") {
      return [
        { value: "is", label: "is" },
        { value: "is_not", label: "is not" },
        { value: "contains", label: "contains" },
      ]
    }
    
    return [
      { value: "equals", label: "equals" },
      { value: "not_equals", label: "does not equal" },
      { value: "contains", label: "contains" },
      { value: "starts_with", label: "starts with" },
      { value: "ends_with", label: "ends with" },
    ]
  }

  const renderFilterContent = (category) => {
    const filter = selectedFilters[category] || { operator: getOperatorOptions(category)[0].value, value: "" }
    const operators = getOperatorOptions(category)

    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="bg-white p-4 border-t border-gray-100 overflow-hidden"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <select
              className="border border-gray-200 rounded-md p-2 text-sm flex-1"
              value={filter.operator}
              onChange={(e) => handleFilterChange(category, e.target.value, filter.value)}
            >
              {operators.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>
            
            {category === "Tag" ? (
              <select
                className="border border-gray-200 rounded-md p-2 text-sm flex-1"
                value={filter.value}
                onChange={(e) => handleFilterChange(category, filter.operator, e.target.value)}
              >
                <option value="">Select a tag</option>
                <option value="watch demo">watch demo</option>
                <option value="pricing capture">pricing capture</option>
              </select>
            ) : (
              <input
                type="text"
                className="border border-gray-200 rounded-md p-2 text-sm flex-1"
                placeholder={`Enter ${category.toLowerCase()}`}
                value={filter.value}
                onChange={(e) => handleFilterChange(category, filter.operator, e.target.value)}
              />
            )}
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={() => handleRemoveFilter(category)}
              className="text-red-600 text-sm hover:underline"
            >
              Remove
            </button>
            <button
              onClick={() => setActiveFilter(null)}
              className="text-blue-600 text-sm hover:underline"
            >
              Done
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-0 flex justify-end z-50 bg-black/20 backdrop-blur-[1px]"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white w-96 h-full flex flex-col shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"
                >
                  <FilterIcon size={18} className="text-blue-600" />
                </motion.div>
                <div>
                  <motion.h2
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-semibold text-lg"
                  >
                    Filters
                  </motion.h2>
                  <motion.p
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-gray-500"
                  >
                    Apply filters to contacts
                  </motion.p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </motion.button>
            </div>

            {Object.keys(selectedFilters).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-3 bg-blue-50 border-b border-blue-100"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-700">
                    {Object.keys(selectedFilters).length} filter{Object.keys(selectedFilters).length !== 1 && "s"} applied
                  </span>
                  <button
                    onClick={() => setSelectedFilters({})}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    Clear all
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Object.entries(selectedFilters).map(([category, { operator, value }]) => (
                    <div
                      key={category}
                      className="bg-white border border-blue-200 rounded-full px-3 py-1 text-xs flex items-center gap-1"
                    >
                      <span className="font-medium">{category}:</span>
                      <span>{operator.replace("_", " ")} "{value}"</span>
                      <button
                        onClick={() => handleRemoveFilter(category)}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="p-4">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Filters"
                  className="pl-10 pr-3 py-2 border border-gray-200 rounded-md w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </motion.div>

            <div className="flex-1 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-4 py-2"
              >
                <h3 className="text-sm font-medium text-gray-700">Most Used</h3>
              </motion.div>

              <div className="space-y-2 px-4">
                <AnimatePresence>
                  {filteredCategories.map((category, index) => (
                    <div key={category}>
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0.1 * index, duration: 0.1 }}
                        whileHover={{ backgroundColor: "#f3f4f6", x: 5 }}
                        className={`flex items-center justify-between w-full p-3 rounded-md text-left ${
                          selectedFilters[category] ? "bg-blue-50 border border-blue-100" : "bg-gray-50"
                        }`}
                        onClick={() => handleFilterClick(category)}
                      >
                        <div className="flex items-center gap-2">
                          {selectedFilters[category] && (
                            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                              <Check size={12} className="text-white" />
                            </div>
                          )}
                          <span>{category}</span>
                        </div>
                        {activeFilter === category ? (
                          <ChevronDown size={18} className="text-gray-400" />
                        ) : (
                          <ChevronRight size={18} className="text-gray-400" />
                        )}
                      </motion.button>
                      <AnimatePresence>
                        {activeFilter === category && renderFilterContent(category)}
                      </AnimatePresence>
                    </div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-4 border-t flex justify-end gap-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApplyFilters}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Apply
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FiltersModal
