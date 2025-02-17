// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const uploadScan = async (file) => {
  const formData = new FormData()
  formData.append('scan', file)

  try {
    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      body: formData,
    })
    return await response.json()
  } catch (error) {
    console.error('Error uploading scan:', error)
    throw error
  }
}

export const getResults = async (scanId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/results/${scanId}`)
    return await response.json()
  } catch (error) {
    console.error('Error fetching results:', error)
    throw error
  }
}