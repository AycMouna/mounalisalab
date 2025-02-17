// src/pages/Results.jsx
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getResults } from '../../services/api'

const Results = () => {
  const [searchParams] = useSearchParams()
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const scanId = searchParams.get('scanId')
    if (scanId) {
      fetchResults(scanId)
    }
  }, [searchParams])

  const fetchResults = async (scanId) => {
    try {
      const data = await getResults(scanId)
      setResults(data)
    } catch (err) {
      setError('Failed to fetch results')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Scan Results</h2>
          {results && (
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <img
                    src={results.scanUrl}
                    alt="Scan"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">
                      Diagnosis
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {results.diagnosis}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900">
                      Confidence Score
                    </h3>
                    <div className="mt-2">
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                          <div
                            style={{ width: `${results.confidence}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                          ></div>
                        </div>
                        <div className="text-right mt-1">
                          <span className="text-sm font-semibold inline-block text-teal-500">
                            {results.confidence}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Recommendations
                </h3>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  {results.recommendations?.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Results
