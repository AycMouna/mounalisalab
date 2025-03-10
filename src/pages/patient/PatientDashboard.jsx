import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/src/assets/logo2.png'; // Ensure this path is correct
import { FaCalendarAlt, FaFolder, FaRobot, FaUserMd, FaSignOutAlt, FaSearch, FaMapMarkerAlt, FaUpload, FaDownload } from 'react-icons/fa'; // Icons

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [scanFile, setScanFile] = useState(null); // Scan uploaded by the lab
  const [aiResults, setAiResults] = useState([]); // AI results available to the patient
  const [aiReport, setAiReport] = useState(null); // Selected AI report to view/download
  const [showConfetti, setShowConfetti] = useState(false); // Confetti effect for premium users
  const [isPremium, setIsPremium] = useState(false); // Premium status
  const [isExternal, setIsExternal] = useState(false); // External user status
  const [userLocation, setUserLocation] = useState(null); // User's location for proximity filter
  const [hasPendingRequest, setHasPendingRequest] = useState(false); // Pending AI scan request
  const [isScanUploadedByLab, setIsScanUploadedByLab] = useState(false); // Scan uploaded by the lab
  const [isAIResultsAvailable, setIsAIResultsAvailable] = useState(false); // AI results available
  const [showUploadModal, setShowUploadModal] = useState(false); // Show/hide upload modal
  const navigate = useNavigate();
  
  // Doctor search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [distanceRange, setDistanceRange] = useState(20); // in km
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  
  // Mock doctors data with address and office hours
  const doctors = [
    { 
      id: 1, 
      name: 'Dr. Sophia Rose', 
      specialty: 'Pediatrics', 
      address: '123 Medical Ave, Suite 101, Paris',
      officeHours: 'Mon-Fri: 9:00-17:00',
      coordinates: { lat: 48.8584, lng: 2.2945 }, // Paris coordinates
      available: true,
    },
    // ... (other doctors)
  ];
  
  // Get unique specialties for filters
  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
  
  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c; // Distance in km
    return d;
  };
  
  const deg2rad = (deg) => {
    return deg * (Math.PI/180);
  };
  
  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Default to Paris if location access is denied
          setUserLocation({ lat: 48.8566, lng: 2.3522 });
        }
      );
    } else {
      // Default to Paris if geolocation is not supported
      setUserLocation({ lat: 48.8566, lng: 2.3522 });
    }
  }, []);
  
  // Filter doctors based on search term, specialty, and distance
  useEffect(() => {
    if (!userLocation) return;
    
    let results = doctors;
    
    if (searchTerm) {
      results = results.filter(doctor => 
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedSpecialty) {
      results = results.filter(doctor => doctor.specialty === selectedSpecialty);
    }
    
    // Calculate and filter by distance
    results = results.map(doctor => {
      const distance = calculateDistance(
        userLocation.lat, 
        userLocation.lng, 
        doctor.coordinates.lat, 
        doctor.coordinates.lng
      );
      return { ...doctor, distance: Math.round(distance * 10) / 10 }; // Round to 1 decimal
    }).filter(doctor => doctor.distance <= distanceRange);
    
    // Sort by distance (closest first)
    results.sort((a, b) => a.distance - b.distance);
    
    setFilteredDoctors(results);
  }, [searchTerm, selectedSpecialty, distanceRange, userLocation]);

  // Simulate AI scan request and report generation
  const handleRequestAIScan = () => {
    if (isPremium) {
      // Premium users get instant access
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      setIsAIResultsAvailable(true);
      alert("AI scan results are ready!");
    } else {
      // Normal users must wait for admin approval
      setHasPendingRequest(true);
      alert("Your AI scan request has been submitted. Please wait for admin approval.");
    }
  };

  // Simulate scan upload by the lab
  const handleUploadScanByLab = () => {
    setIsScanUploadedByLab(true);
    alert("The lab has uploaded your scan. You can now request an AI analysis.");
  };

  // Simulate report download
  const handleDownloadReport = () => {
    const blob = new Blob([aiReport], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AI_Scan_Report.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  // Simulate file upload for AI scan
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScanFile(file.name);
      setShowUploadModal(false); // Close the modal after upload
      alert(`File "${file.name}" uploaded successfully!`);
    }
  };

  // Initialize filtered doctors on component mount
  useEffect(() => {
    if (userLocation) {
      const doctorsWithDistance = doctors.map(doctor => {
        const distance = calculateDistance(
          userLocation.lat, 
          userLocation.lng, 
          doctor.coordinates.lat, 
          doctor.coordinates.lng
        );
        return { ...doctor, distance: Math.round(distance * 10) / 10 }; // Round to 1 decimal
      });
      doctorsWithDistance.sort((a, b) => a.distance - b.distance);
      setFilteredDoctors(doctorsWithDistance);
    }
  }, [userLocation]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-50 to-white font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8">
        {/* Clickable Logo and Name */}
        <Link to="/" className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12" />
          <span className="font-semibold text-2xl text-pink-600">
            MounalisaLab
          </span>
        </Link>
        
        <div className="flex items-center space-x-6">
          {/* Premium Toggle Switch */}
          <div className="flex items-center mr-4">
            <span className="mr-2 text-sm font-medium text-gray-600">Normal</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                value="" 
                className="sr-only peer" 
                checked={isPremium}
                onChange={() => setIsPremium(!isPremium)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-400"></div>
            </label>
            <span className="ml-2 text-sm font-medium text-pink-500">Premium ✨</span>
          </div>
          
          {/* Contact Link */}
          <Link
            to="/contact"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-sm font-medium"
          >
            Contact
          </Link>
          
          {/* Home Link */}
          <Link
            to="/"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-sm font-medium"
          >
            Home
          </Link>
          
          {/* Check Results Link */}
          <Link
            to="/check-results"
            className="text-gray-700 hover:text-pink-500 transition-colors duration-300 text-sm font-medium"
          >
            Check Results
          </Link>
          
          {/* Sign In Button */}
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 rounded-full transition bg-pink-100 text-pink-600 hover:bg-pink-200 text-sm font-medium"
          >
            Sign In
          </button>
        </div>
      </nav>

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Simple confetti effect */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                backgroundColor: ['#FFC7D1', '#FFACC7', '#FF85B3', '#FF619B', '#FFC0D3', '#FFDFEB'][
                  Math.floor(Math.random() * 6)
                ],
                borderRadius: '50%',
                animation: `fall ${Math.random() * 3 + 2}s linear forwards`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="flex flex-grow pt-16">
        {/* Sidebar Menu */}
        <div className="w-64 bg-gradient-to-b from-pink-300 to-pink-400 text-white flex-shrink-0 rounded-r-3xl shadow-lg">
          <div className="p-6">
            <h1 className="text-2xl font-bold flex items-center">
              <span className="mr-2"></span>
              Patient Portal
            </h1>
            <div className="text-sm mt-3">
              {isPremium ? (
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-medium"> Premium Member ✨</span>
              ) : isExternal ? (
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium"> Guest User</span>
              ) : (
                <span className="bg-white text-pink-600 px-3 py-1 rounded-full font-medium"> Standard Member</span>
              )}
            </div>
          </div>
          <nav className="mt-6">
            <button
              className={`w-full py-3 px-6 text-left font-medium text-sm ${
                activeTab === 'appointments'
                  ? 'bg-white text-pink-600 rounded-l-full'
                  : 'text-white hover:bg-pink-500 hover:text-white'
              } transition duration-300 flex items-center`}
              onClick={() => setActiveTab('appointments')}
            >
              <FaCalendarAlt className="mr-2" /> Appointments
            </button>
            <button
              className={`w-full py-3 px-6 text-left font-medium text-sm ${
                activeTab === 'scans'
                  ? 'bg-white text-pink-600 rounded-l-full'
                  : 'text-white hover:bg-pink-500 hover:text-white'
              } transition duration-300 flex items-center`}
              onClick={() => setActiveTab('scans')}
            >
              <FaFolder className="mr-2" /> My Scans
            </button>
            <button
              className={`w-full py-3 px-6 text-left font-medium text-sm ${
                activeTab === 'aiResults'
                  ? 'bg-white text-pink-600 rounded-l-full'
                  : 'text-white hover:bg-pink-500 hover:text-white'
              } transition duration-300 flex items-center`}
              onClick={() => setActiveTab('aiResults')}
            >
              <FaRobot className="mr-2" /> AI Results
            </button>
            {isPremium && (
              <button
                className={`w-full py-3 px-6 text-left font-medium text-sm ${
                  activeTab === 'doctorList'
                    ? 'bg-white text-pink-600 rounded-l-full'
                    : 'text-white hover:bg-pink-500 hover:text-white'
                } transition duration-300 flex items-center`}
                onClick={() => setActiveTab('doctorList')}
              >
                <FaUserMd className="mr-2" /> Premium Doctors
              </button>
            )}
          </nav>
          <div className="p-6 mt-auto">
  <Link to="/" className="block w-full">
    <button className="w-full bg-white hover:bg-pink-100 text-pink-600 font-medium py-2 px-4 rounded-full transition duration-300 shadow-sm flex items-center justify-center">
      <FaSignOutAlt className="mr-2" /> Sign Out
    </button>
  </Link> {/* Corrected closing tag */}
</div>
        </div>

        {/* Main Content */}
        <main className="flex-grow p-8 overflow-y-auto">
          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-pink-600 flex items-center">
                  <FaCalendarAlt className="mr-2" /> My Appointments
                </h2>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-sm flex items-center">
                  <span className="mr-2">➕</span> Book Appointment
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100">
                <p className="text-center text-pink-500 font-medium py-8">Your appointment calendar will appear here.</p>
              </div>
            </div>
          )}

          {/* Scans Tab */}
          {activeTab === 'scans' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-pink-600 flex items-center">
                  <FaFolder className="mr-2" /> My Scans
                </h2>
                {isScanUploadedByLab ? (
                  <button
                    className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-sm flex items-center"
                    onClick={() => handleDownloadReport()}
                  >
                    <FaDownload className="mr-2" /> Download Scan
                  </button>
                ) : (
                  <p className="text-pink-500">No scans available yet. Please wait for the lab to upload your scan.</p>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100">
                <p className="text-center text-pink-500 font-medium py-8">Your medical scans will appear here.</p>
              </div>
            </div>
          )}

          {/* AI Results Tab */}
          {activeTab === 'aiResults' && (
            <div>
              <h2 className="text-2xl font-bold text-pink-600 mb-8 flex items-center">
                 AI Analysis Results
              </h2>

              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100">
                <h3 className="text-lg font-semibold text-pink-600 mb-4 flex items-center">
                  <span className="mr-2"></span>Recent Results
                </h3>
                <div className="space-y-4">
                  {isAIResultsAvailable ? (
                    aiResults.map((result) => (
                      <div key={result.id} className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                        <p className="text-pink-600 font-medium flex items-center">
                          <span className="mr-2"></span>{result.name} - {result.date}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Status: <span className="text-green-600 font-medium">✅ {result.status}</span></p>
                        <div className="mt-3 flex space-x-2">
                          <button
                            className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-sm transition duration-300 flex items-center"
                            onClick={() => setAiReport(result.report)}
                          >
                            <span className="mr-1"></span> View Report
                          </button>
                          <button
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition duration-300 flex items-center"
                            onClick={handleDownloadReport}
                          >
                            <FaDownload className="mr-1" /> Download
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-pink-500 font-medium mb-4">No AI results available yet.</p>
                      {!isPremium && (
                        <button
                          className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full transition duration-300 shadow-sm flex items-center mx-auto"
                          onClick={() => setShowUploadModal(true)} // Open upload modal
                          disabled={hasPendingRequest}
                        >
                          {hasPendingRequest ? "Request Pending..." : "Request AI Analysis"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Display AI Report */}
              {aiReport && (
                <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 border border-pink-100">
                  <h3 className="text-lg font-semibold text-pink-600 mb-4 flex items-center">
                    <span className="mr-2"></span>AI Report
                  </h3>
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                    <pre className="text-gray-700 whitespace-pre-wrap">{aiReport}</pre>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Doctor List Tab (Premium Only) */}
          {activeTab === 'doctorList' && isPremium && (
            <div>
              <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
                <FaUserMd className="mr-2" /> Premium Doctor Network
              </h2>
              
              {/* Search and Filter Bar */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search Input */}
                  <div className="flex-grow">
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Doctors</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="search"
                        className="block w-full pl-10 pr-3 py-2 border border-pink-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
                        placeholder="Search by name, specialty or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* Specialty Filter */}
                  <div className="md:w-1/4">
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                    <select
                      id="specialty"
                      className="block w-full px-3 py-2 border border-pink-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                    >
                      <option value="">All Specialties</option>
                      {specialties.map((specialty, index) => (
                        <option key={index} value={specialty}>{specialty}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Distance Range Slider */}
                  <div className="md:w-1/4">
                    <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">
                      Max Distance: {distanceRange} km
                    </label>
                    <input
                      type="range"
                      id="distance"
                      min="5"
                      max="100"
                      step="5"
                      className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
                      value={distanceRange}
                      onChange={(e) => setDistanceRange(parseInt(e.target.value))}
                    />
                  </div>
                </div>

                {/* User Location Status */}
                <div className="mt-4 text-sm text-gray-500">
                  {userLocation ? (
                    <p className="flex items-center">
                      <FaMapMarkerAlt className="mr-1" /> Using your current location to find nearby doctors
                    </p>
                  ) : (
                    <p className="flex items-center">
                      <span className="mr-1">⚠️</span> Please enable location services to find doctors near you
                    </p>
                  )}
                </div>
              </div>
              
              {/* Doctors List - Simplified Display */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100">
                <h3 className="text-lg font-semibold text-pink-600 mb-4">
                  Found {filteredDoctors.length} Premium Doctors
                </h3>
                
                {filteredDoctors.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredDoctors.map((doctor) => (
                      <div key={doctor.id} className="p-4 bg-pink-50 rounded-xl border border-pink-100">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-2">{doctor.avatar}</span>
                          <h4 className="font-medium text-pink-600">{doctor.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{doctor.specialty}</p>
                        <p className="text-sm text-gray-500 mb-1">{doctor.address}</p>
                        <p className="text-sm text-gray-500 mb-2">{doctor.officeHours}</p>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                            {doctor.distance} km away
                          </span>
                          <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-sm transition duration-300">
                            Schedule
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No doctors found matching your criteria.</p>
                    <button 
                      className="mt-4 text-pink-500 hover:text-pink-600"
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedSpecialty('');
                        setDistanceRange(20);
                      }}
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </div>
              
              {/* Map Visualization Hint */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-pink-100 mt-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Looking for doctors near you?</p>
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 flex items-center justify-center">
                    <p className="text-pink-600">Map visualization coming soon!</p>
                  </div>
                  <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm transition duration-300">
                    Find Nearest Doctor
                  </button>
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
            <input
              type="file"
              className="w-full p-2 border border-pink-100 rounded-lg"
              onChange={handleFileUpload}
            />
            <button
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 shadow-sm flex items-center justify-center w-full"
              onClick={() => setShowUploadModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;