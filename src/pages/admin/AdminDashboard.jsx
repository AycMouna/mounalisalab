import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/src/assets/logo2.png'; // Assurez-vous que le chemin est correct
import { FaUser, FaFileUpload, FaFileDownload, FaCheckCircle, FaTimesCircle, FaUsers, FaFolderOpen } from 'react-icons/fa'; // Icônes

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [patients, setPatients] = useState([]); // Liste des patients
  const [pendingRequests, setPendingRequests] = useState([]); // Demandes de scan IA en attente
  const [scans, setScans] = useState([]); // Scans uploadés par le labo
  const [aiResults, setAiResults] = useState([]); // Résultats IA à valider
  const [selectedPatient, setSelectedPatient] = useState(''); // Patient sélectionné pour l'upload
  const [showUploadModal, setShowUploadModal] = useState(false); // Modal pour uploader un scan
  const [showResultsModal, setShowResultsModal] = useState(false); // Modal pour valider les résultats IA
  const [selectedScan, setSelectedScan] = useState(null); // Scan sélectionné pour upload
  const [selectedResult, setSelectedResult] = useState(null); // Résultat IA sélectionné pour validation
  const [selectedFile, setSelectedFile] = useState(null); // Fichier sélectionné pour l'upload
  const navigate = useNavigate();

  // Données simulées pour les patients, les scans et les résultats IA
  useEffect(() => {
    // Simuler des données de patients
    const mockPatients = [
      { id: 1, name: 'Sissi Ayachi', email: 'Sissi@example.com', isPremium: false, scans: [], aiRequests: [] },
      { id: 2, name: 'Khalil Ayachi', email: 'Khalil@example.com', isPremium: true, scans: [], aiRequests: [] },
    ];
    setPatients(mockPatients);

    // Simuler des demandes de scan IA en attente
    const mockPendingRequests = [
      { id: 1, patientId: 1, patientName: 'Mohcen Benmounah', requestDate: '2023-10-01', status: 'pending' },
    ];
    setPendingRequests(mockPendingRequests);

    // Simuler des scans uploadés par le labo
    const mockScans = [
      { id: 1, patientId: 1, patientName: 'Shasha AYACHI', scanName: 'Scan1.dcm', uploadDate: '2023-10-01' },
    ];
    setScans(mockScans);

    // Simuler des résultats IA à valider
    const mockAiResults = [
      { id: 1, patientId: 1, patientName: 'Mouna AYACHI', result: 'Résultat IA 1', status: 'pending' },
    ];
    setAiResults(mockAiResults);
  }, []);

  // Gérer l'upload d'un scan pour un patient
  const handleUploadScan = () => {
    if (!selectedPatient || !selectedFile) {
      alert('Veuillez sélectionner un patient et un fichier.');
      return;
    }

    const patient = patients.find(p => p.id === parseInt(selectedPatient));
    const newScan = {
      id: scans.length + 1,
      patientId: selectedPatient,
      patientName: patient.name,
      scanName: selectedFile.name,
      uploadDate: new Date().toISOString().split('T')[0],
    };
    setScans([...scans, newScan]);
    alert(`Scan "${selectedFile.name}" uploadé avec succès pour le patient ${patient.name}.`);

    // Réinitialiser les champs
    setSelectedPatient('');
    setSelectedFile(null);
    setShowUploadModal(false);
  };

  // Gérer la validation d'un résultat IA
  const handleValidateResult = (resultId) => {
    const updatedResults = aiResults.map(result =>
      result.id === resultId ? { ...result, status: 'validated' } : result
    );
    setAiResults(updatedResults);
    alert(`Résultat IA validé pour le patient ${aiResults.find(r => r.id === resultId).patientName}.`);
    setShowResultsModal(false);
  };

  // Gérer le rejet d'un résultat IA
  const handleRejectResult = (resultId) => {
    const updatedResults = aiResults.map(result =>
      result.id === resultId ? { ...result, status: 'rejected' } : result
    );
    setAiResults(updatedResults);
    alert(`Résultat IA rejeté pour le patient ${aiResults.find(r => r.id === resultId).patientName}.`);
    setShowResultsModal(false);
  };

  // Gérer l'approbation d'une demande de scan IA
  const handleApproveRequest = (requestId) => {
    const updatedRequests = pendingRequests.map(request =>
      request.id === requestId ? { ...request, status: 'approved' } : request
    );
    setPendingRequests(updatedRequests);
    alert(`Demande de scan IA approuvée pour le patient ${pendingRequests.find(r => r.id === requestId).patientName}.`);
  };

  // Gérer le rejet d'une demande de scan IA
  const handleRejectRequest = (requestId) => {
    const updatedRequests = pendingRequests.map(request =>
      request.id === requestId ? { ...request, status: 'rejected' } : request
    );
    setPendingRequests(updatedRequests);
    alert(`Demande de scan IA rejetée pour le patient ${pendingRequests.find(r => r.id === requestId).patientName}.`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 to-white font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8">
        <Link to="/" className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12" />
          <span className="font-semibold text-2xl text-pink-600">MounalisaLab</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-sm font-medium">
            Home
          </Link>
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 rounded-full transition bg-pink-100 text-pink-600 hover:bg-pink-200 text-sm font-medium"
          >
            Sign Out
          </button>
        </div>
      </nav>

      <div className="flex flex-grow pt-16">
        {/* Sidebar Menu */}
        <div className="w-64 bg-gradient-to-b from-pink-300 to-pink-400 text-white flex-shrink-0 rounded-r-3xl shadow-lg">
          <div className="p-6">
            <h1 className="text-2xl font-bold flex items-center">
              <span className="mr-2"></span>
              Admin Portal
            </h1>
          </div>
          <nav className="mt-6">
            <button
              className={`w-full py-3 px-6 text-left font-medium text-sm ${
                activeTab === 'patients'
                  ? 'bg-white text-pink-600 rounded-l-full'
                  : 'text-white hover:bg-pink-500 hover:text-white'
              } transition duration-300 flex items-center`}
              onClick={() => setActiveTab('patients')}
            >
              <FaUsers className="mr-2" /> Manage Patients
            </button>
            <button
              className={`w-full py-3 px-6 text-left font-medium text-sm ${
                activeTab === 'scans'
                  ? 'bg-white text-pink-600 rounded-l-full'
                  : 'text-white hover:bg-pink-500 hover:text-white'
              } transition duration-300 flex items-center`}
              onClick={() => setActiveTab('scans')}
            >
              <FaFolderOpen className="mr-2" /> Manage Scans
            </button>
            <button
              className={`w-full py-3 px-6 text-left font-medium text-sm ${
                activeTab === 'aiRequests'
                  ? 'bg-white text-pink-600 rounded-l-full'
                  : 'text-white hover:bg-pink-500 hover:text-white'
              } transition duration-300 flex items-center`}
              onClick={() => setActiveTab('aiRequests')}
            >
              <FaFileUpload className="mr-2" /> AI Scan Requests
            </button>
            <button
              className={`w-full py-3 px-6 text-left font-medium text-sm ${
                activeTab === 'aiResults'
                  ? 'bg-white text-pink-600 rounded-l-full'
                  : 'text-white hover:bg-pink-500 hover:text-white'
              } transition duration-300 flex items-center`}
              onClick={() => setActiveTab('aiResults')}
            >
              <FaFileDownload className="mr-2" /> AI Results
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-grow p-8 overflow-y-auto">
          {/* Manage Patients Tab */}
          {activeTab === 'patients' && (
            <div>
              <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
                <FaUsers className="mr-2" /> Manage Patients
              </h2>
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {patients.map((patient) => (
                    <div key={patient.id} className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                      <h3 className="text-lg font-semibold text-pink-600">{patient.name}</h3>
                      <p className="text-sm text-gray-600">{patient.email}</p>
                      <p className="text-sm text-gray-600">
                        Status: {patient.isPremium ? 'Premium ✨' : 'Standard'}
                      </p>
                      <button
                        className="mt-3 bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-sm transition duration-300"
                        onClick={() => setSelectedPatient(patient)}
                      >
                        Manage
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Manage Scans Tab */}
          {activeTab === 'scans' && (
            <div>
              <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
                <FaFolderOpen className="mr-2" /> Manage Scans
              </h2>
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-pink-600">Uploaded Scans</h3>
                  <button
                    className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 shadow-sm flex items-center"
                    onClick={() => setShowUploadModal(true)}
                  >
                    <FaFileUpload className="mr-2" /> Upload Scan
                  </button>
                </div>
                <div className="space-y-4">
                  {scans.map((scan) => (
                    <div key={scan.id} className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                      <p className="text-pink-600 font-medium">{scan.scanName}</p>
                      <p className="text-sm text-gray-600">Patient: {scan.patientName}</p>
                      <p className="text-sm text-gray-600">Upload Date: {scan.uploadDate}</p>
                      <button
                        className="mt-2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-sm transition duration-300"
                        onClick={() => setSelectedScan(scan)}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* AI Scan Requests Tab */}
          {activeTab === 'aiRequests' && (
            <div>
              <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
                <FaFileUpload className="mr-2" /> AI Scan Requests
              </h2>
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100">
                <div className="space-y-4">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                      <p className="text-pink-600 font-medium">{request.patientName}</p>
                      <p className="text-sm text-gray-600">Request Date: {request.requestDate}</p>
                      <p className="text-sm text-gray-600">Status: {request.status}</p>
                      <div className="mt-3 flex space-x-2">
                        <button
                          className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-sm transition duration-300"
                          onClick={() => handleApproveRequest(request.id)}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition duration-300"
                          onClick={() => handleRejectRequest(request.id)}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* AI Results Tab */}
          {activeTab === 'aiResults' && (
            <div>
              <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
                <FaFileDownload className="mr-2" /> AI Results
              </h2>
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100">
                <div className="space-y-4">
                  {aiResults.map((result) => (
                    <div key={result.id} className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                      <p className="text-pink-600 font-medium">{result.patientName}</p>
                      <p className="text-sm text-gray-600">Result: {result.result}</p>
                      <p className="text-sm text-gray-600">Status: {result.status}</p>
                      <div className="mt-3 flex space-x-2">
                        <button
                          className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-sm transition duration-300"
                          onClick={() => {
                            setSelectedResult(result);
                            setShowResultsModal(true);
                          }}
                        >
                          Validate
                        </button>
                        <button
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition duration-300"
                          onClick={() => handleRejectResult(result.id)}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
            <h3 className="text-lg font-semibold text-pink-600 mb-4">Upload Scan</h3>

            {/* Sélecteur de patient */}
            <div className="mb-4">
              <label htmlFor="patient" className="block text-sm font-medium text-pink-700 mb-2">
                Sélectionner un patient
              </label>
              <select
                id="patient"
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
                value={selectedPatient}
                onChange={(e) => setSelectedPatient(e.target.value)}
              >
                <option value="">Choisir un patient</option>
                {patients.map((patient) => (
                  <option key={patient.id} value={patient.id}>
                    {patient.name} ({patient.email})
                  </option>
                ))}
              </select>
            </div>

            {/* Sélecteur de fichier */}
            <div className="mb-4">
              <label htmlFor="file" className="block text-sm font-medium text-pink-700 mb-2">
                Sélectionner un fichier
              </label>
              <input
                type="file"
                id="file"
                className="w-full px-4 py-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </div>

            {/* Boutons d'action */}
            <div className="flex space-x-2">
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 shadow-sm flex items-center justify-center w-full"
                onClick={handleUploadScan}
              >
                <FaFileUpload className="mr-2" /> Upload
              </button>
              <button
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full transition duration-300 shadow-sm flex items-center justify-center w-full"
                onClick={() => setShowUploadModal(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Modal */}
      {showResultsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
            <h3 className="text-lg font-semibold text-pink-600 mb-4">Validate AI Result</h3>
            <p className="text-gray-600 mb-4">Patient: {selectedResult.patientName}</p>
            <p className="text-gray-600 mb-4">Result: {selectedResult.result}</p>
            <div className="flex space-x-2">
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 shadow-sm flex items-center justify-center w-full"
                onClick={() => handleValidateResult(selectedResult.id)}
              >
                <FaCheckCircle className="mr-2" /> Validate
              </button>
              <button
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full transition duration-300 shadow-sm flex items-center justify-center w-full"
                onClick={() => handleRejectResult(selectedResult.id)}
              >
                <FaTimesCircle className="mr-2" /> Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;