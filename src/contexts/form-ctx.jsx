import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { createContext, useState } from 'react'

import { db, storage } from '../firebase.config'

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
  }

  // handle Features list
  const handleFeatures = feature => {
    setVals(prev => ({ ...prev, features: [...prev.features, feature] }))

    setVals(prev => ({ ...prev, feature: '' }))
  }

  // handle form Submission
  const handleSubmit = async e => {
    e.preventDefault()

    // // store image in firebase
    let imgUrl
    try {
      const projectImgsRef = ref(storage, `projectImgs/${vals.pic.name}`)
      const uploadImg = await uploadBytesResumable(projectImgsRef, vals.pic)
      const downloadUrl = await getDownloadURL(
        ref(storage, uploadImg.metadata.fullPath)
      )
      imgUrl = downloadUrl
    } catch (error) {
      alert(error)
    }

    // add formData to firestore.
    try {
      delete vals.feature
      const formData = vals
      await addDoc(collection(db, 'projects'), {
        ...formData,
        pic: imgUrl,
        timeStamp: serverTimestamp(),
      }).then(() => {
        alert('success')
        setVals({
          title: '',
          desc: '',
          feature: '',
          features: [],
          challenges: '',
          milestones: '',
          github: '',
          live: '',
        })
      })
    } catch (error) {
      alert(error)
    }
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
