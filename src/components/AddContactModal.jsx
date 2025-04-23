"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Phone, Mail, MessageSquare, PhoneCall, Facebook, Info  } from 'lucide-react'
// First, update the initial form state at the beginning of the component
const initialFormState = {
  firstName: "",
  lastName: "",
  emails: [{ value: "", primary: true }],
  phones: [{ value: "", type: "Mobile", primary: true }],
  contactType: "Lead",
  timeZone: "",
  dndSettings: {
    allChannels: false,
    emails: false,
    textMessages: false,
    callsVoicemails: false,
    gmb: false,
    facebookMessenger: false,
    inboundCallsSMS: false,
  },
}

// Update the component props to include onCheckDuplicate
const AddContactModal = ({ isOpen, onClose, onSave, onCheckDuplicate }) => {
  // Replace the current useState with this:
  const [formData, setFormData] = useState(initialFormState)

  const [logoPreview, setLogoPreview] = useState(null)
  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEmailChange = (index, value) => {
    const newEmails = [...formData.emails]
    newEmails[index].value = value
    setFormData((prev) => ({
      ...prev,
      emails: newEmails,
    }))
  }

  const handlePhoneChange = (index, field, value) => {
    const newPhones = [...formData.phones]
    newPhones[index][field] = value
    setFormData((prev) => ({
      ...prev,
      phones: newPhones,
    }))
  }

  const addEmail = () => {
    setFormData((prev) => ({
      ...prev,
      emails: [...prev.emails, { value: "", primary: false }],
    }))
  }

  const addPhone = () => {
    setFormData((prev) => ({
      ...prev,
      phones: [...prev.phones, { value: "", type: "Mobile", primary: false }],
    }))
  }

  const handleDndChange = (setting) => {
    setFormData((prev) => ({
      ...prev,
      dndSettings: {
        ...prev.dndSettings,
        [setting]: !prev.dndSettings[setting],
      },
    }))
  }

  const handleLogoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogoPreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Then modify the handleSubmit function to reset the form and check for duplicates
  const handleSubmit = (e) => {
    e.preventDefault()

    // Check for duplicate email
    if (onCheckDuplicate && formData.emails[0]?.value) {
      const isDuplicateEmail = onCheckDuplicate("email", formData.emails[0].value)
      if (isDuplicateEmail) {
        alert("This email address is already in use by another contact.")
        return
      }
    }

    // Check for duplicate phone
    if (onCheckDuplicate && formData.phones[0]?.value) {
      const isDuplicatePhone = onCheckDuplicate("phone", formData.phones[0].value)
      if (isDuplicatePhone) {
        alert("This phone number is already in use by another contact.")
        return
      }
    }

    // Create initials from first and last name
    const initials = `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`.toUpperCase()

    // Generate a random color for the avatar
    const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-error"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    // Format current date
    const now = new Date()
    const formattedDate = now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const newContact = {
      id: Date.now(), // Use timestamp as ID
      name: `${formData.firstName} ${formData.lastName}`,
      initials: initials,
      color: randomColor,
      email: formData.emails[0]?.value || "",
      phone: formData.phones[0]?.value || "",
      created: formattedDate,
      tags: [],
      lastActivity: "Just now",
    }

    onSave(newContact)

    // Reset form
    setFormData(initialFormState)
    setLogoPreview(null)
    onClose()
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-base-300/50 backdrop-blur-[2px] z-50 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
        onClick={onClose}
      >
        <motion.div
          className="bg-base-100 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center p-6 border-b border-base-300">
              <h2 className="text-xl font-semibold">Contact</h2>
              <button type="button" onClick={onClose} className="btn btn-ghost btn-sm">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Logo/Avatar Section */}
              <div className="flex items-start gap-8">
                <div className="w-36 h-36 bg-base-200 border border-base-300 rounded-lg flex items-center justify-center relative">
                  {logoPreview ? (
                    <img
                      src={logoPreview || "/placeholder.svg"}
                      alt="Contact logo"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <Plus size={40} className="text-base-content/30" />
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleLogoChange}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Personal Logo</h3>
                  <p className="text-sm text-base-content/70 mb-4">
                    The proposed size is 512*512px
                    <br />
                    no bigger than 2.5mb
                  </p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="btn btn-outline btn-primary btn-sm"
                    >
                      Change
                    </button>
                    {logoPreview && (
                      <button type="button" onClick={() => setLogoPreview(null)} className="btn btn-ghost btn-sm">
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              {/* Email Section */}
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                {formData.emails.map((email, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <div className="avatar placeholder">
                      <div className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center p-[8px]">
                        <Mail size={16} className="block" />
                      </div>


                    </div>
                    <input
                      type="email"
                      value={email.value}
                      onChange={(e) => handleEmailChange(index, e.target.value)}
                      className="input input-bordered flex-1"
                      placeholder="email@example.com"
                    />
                  </div>
                ))}
                <button type="button" onClick={addEmail} className="btn btn-ghost btn-sm text-primary">
                  <Plus size={16} className="mr-1" /> Add email
                </button>
              </div>

              {/* Phone Section */}
              <div>
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                {formData.phones.map((phone, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <div className="avatar placeholder">
                      <div className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center p-[8px]">
                        <Phone size={16} className="block" />
                      </div>
                    </div>
                    <select
                      value={phone.type}
                      onChange={(e) => handlePhoneChange(index, "type", e.target.value)}
                      className="select select-bordered"
                    >
                      <option value="Mobile">Mobile</option>
                      <option value="Work">Work</option>
                      <option value="Home">Home</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      type="tel"
                      value={phone.value}
                      onChange={(e) => handlePhoneChange(index, "value", e.target.value)}
                      className="input input-bordered flex-1"
                      placeholder="Phone number"
                    />
                  </div>
                ))}
                <button type="button" onClick={addPhone} className="btn btn-ghost btn-sm text-primary">
                  <Plus size={16} className="mr-1" /> Add Phone Numbers
                </button>
              </div>

              {/* Contact Type */}
              <div>
                <label className="label">
                  <span className="label-text">Contact Type</span>
                </label>
                <select
                  name="contactType"
                  value={formData.contactType}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                >
                  <option value="Lead">Lead</option>
                  <option value="Customer">Customer</option>
                  <option value="Partner">Partner</option>
                  <option value="Vendor">Vendor</option>
                </select>
              </div>

              {/* Time Zone */}
              <div>
                <label className="label">
                  <span className="label-text">Time Zone</span>
                </label>
                <select
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                >
                  <option value="">Choose one...</option>
                  <option value="GMT-12:00">GMT-12:00</option>
                  <option value="GMT-11:00">GMT-11:00</option>
                  <option value="GMT-10:00">GMT-10:00</option>
                  <option value="GMT-09:00">GMT-09:00</option>
                  <option value="GMT-08:00">GMT-08:00</option>
                  <option value="GMT-07:00">GMT-07:00</option>
                  <option value="GMT-06:00">GMT-06:00</option>
                  <option value="GMT-05:00">GMT-05:00</option>
                  <option value="GMT-04:00">GMT-04:00</option>
                  <option value="GMT-03:00">GMT-03:00</option>
                  <option value="GMT-02:00">GMT-02:00</option>
                  <option value="GMT-01:00">GMT-01:00</option>
                  <option value="GMT+00:00">GMT+00:00</option>
                  <option value="GMT+01:00">GMT+01:00</option>
                  <option value="GMT+02:00">GMT+02:00</option>
                  <option value="GMT+03:00">GMT+03:00</option>
                  <option value="GMT+04:00">GMT+04:00</option>
                  <option value="GMT+05:00">GMT+05:00</option>
                  <option value="GMT+06:00">GMT+06:00</option>
                  <option value="GMT+07:00">GMT+07:00</option>
                  <option value="GMT+08:00">GMT+08:00</option>
                  <option value="GMT+09:00">GMT+09:00</option>
                  <option value="GMT+10:00">GMT+10:00</option>
                  <option value="GMT+11:00">GMT+11:00</option>
                  <option value="GMT+12:00">GMT+12:00</option>
                </select>
              </div>

              {/* DND Settings */}
              <div className="border border-base-300 rounded-md p-4">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="dnd-all"
                    checked={formData.dndSettings.allChannels}
                    onChange={() => handleDndChange("allChannels")}
                    className="checkbox checkbox-sm checkbox-primary mr-2"
                  />
                  <label htmlFor="dnd-all" className="font-medium">
                    DND all channels
                  </label>
                </div>

                <div className="divider">OR</div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail size={18} className="text-primary mr-2" />
                      <span>Emails</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.dndSettings.emails}
                      onChange={() => handleDndChange("emails")}
                      className="checkbox checkbox-sm checkbox-primary"
                      disabled={formData.dndSettings.allChannels}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MessageSquare size={18} className="text-primary mr-2" />
                      <span>Text Messages</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.dndSettings.textMessages}
                      onChange={() => handleDndChange("textMessages")}
                      className="checkbox checkbox-sm checkbox-primary"
                      disabled={formData.dndSettings.allChannels}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PhoneCall size={18} className="text-primary mr-2" />
                      <span>Calls & Voicemails</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.dndSettings.callsVoicemails}
                      onChange={() => handleDndChange("callsVoicemails")}
                      className="checkbox checkbox-sm checkbox-primary"
                      disabled={formData.dndSettings.allChannels}
                    />
                  </div>

                

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Facebook size={18} className="text-primary mr-2" />
                      <span>Facebook Messenger</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.dndSettings.facebookMessenger}
                      onChange={() => handleDndChange("facebookMessenger")}
                      className="checkbox checkbox-sm checkbox-primary"
                      disabled={formData.dndSettings.allChannels}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-base-300">
                    <div className="flex items-center">
                      <span>DND Inbound Calls and SMS</span>
                      <div className="tooltip" data-tip="Prevent inbound calls and SMS">
                        <Info size={16} className="text-base-content/50 ml-1" />
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.dndSettings.inboundCallsSMS}
                      onChange={() => handleDndChange("inboundCallsSMS")}
                      className="checkbox checkbox-sm checkbox-primary"
                      disabled={formData.dndSettings.allChannels}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center p-6 border-t border-base-300 bg-base-200">
              <button type="button" onClick={onClose} className="btn btn-ghost mr-2">
                Close
              </button>
              <button type="submit" className="btn btn-secondary">
                Save
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AddContactModal
