import React, { createContext, useState } from 'react'

export const formCtx = createContext({})

export default function FormCtxProvider({ children }) {
  const [vals, setVals] = useState({
    pic: null,
    title: '',
    desc: '',
    feature: '',
    features: [],
    challenges: '',
    milestones: '',
    github: '',
    live: '',
  })

  // handle textinput fields
  const handleTextChange = name => e => {
    setVals(prev => ({ ...prev, [name]: e.target.value }))
  }

  // handling File Upload
  const handleFileUpload = name => e => {
    // update file state
    setVals(prev => ({ ...prev, [name]: e.target.files[0] }))
    console.log(e.target.files[0])
  }

  // handle Features list
  const handleFeatures = feature => {
    setVals(prev => ({ ...prev, features: [...prev.features, feature] }))

    setVals(prev => ({ ...prev, feature: '' }))
  }

  // handle form Submission
  const handleSubmit = (vals, e) => {
    e.preventDefault()
    // console.log(vals)
    const formData = new FormData()
  }

  return (
    <formCtx.Provider
      value={{
        vals,
        handleTextChange,
        handleFileUpload,
        handleFeatures,
        handleSubmit,
      }}
    >
      {children}
    </formCtx.Provider>
  )
}
