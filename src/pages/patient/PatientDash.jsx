import { Link } from 'react-router-dom';
import { FileText, Calendar, MessageCircle, MapPin, Bell } from 'lucide-react';

const PatientDashboard = () => {
  const recentScans = [
    { id: 1, date: '2023-10-01', disease: 'Disease A', confidence: 92 },
    { id: 2, date: '2023-09-25', disease: 'Disease B', confidence: 85 },
  ];

  const upcomingAppointments = [
    { id: 1, date: '2023-10-15', doctor: 'Dr. Smith', speciality: 'Cardiology' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6" role="main">
      <h1 className="text-3xl font-bold text-gray-800 mb-8" tabIndex="0">
        Patient Dashboard
      </h1>

      {/* Recent Scans Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4" tabIndex="0">
          Recent Scans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentScans.map((scan) => (
            <div key={scan.id} className="bg-white p-6 rounded-lg shadow-sm">
              <FileText className="h-6 w-6 text-blue-700 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">{scan.disease}</h3>
              <p className="text-gray-600">Date: {scan.date}</p>
              <p className="text-gray-600">Confidence: {scan.confidence}%</p>
              <Link
                to={`/patient/results/${scan.id}`}
                className="mt-4 inline-flex items-center text-blue-600 hover:underline"
              >
                View Report
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Appointments Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4" tabIndex="0">
          Upcoming Appointments
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="mb-4">
              <Calendar className="h-6 w-6 text-blue-700 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">{appointment.doctor}</h3>
              <p className="text-gray-600">Date: {appointment.date}</p>
              <p className="text-gray-600">Speciality: {appointment.speciality}</p>
              <Link
                to={`/patient/appointments/${appointment.id}`}
                className="mt-4 inline-flex items-center text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4" tabIndex="0">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/patient/upload"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <FileText className="h-6 w-6 text-blue-700" />
            <span>Upload Scan</span>
          </Link>
          <Link
            to="/patient/doctors"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <MapPin className="h-6 w-6 text-blue-700" />
            <span>Find Doctors</span>
          </Link>
          <Link
            to="/patient/messages"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <MessageCircle className="h-6 w-6 text-blue-700" />
            <span>Messages</span>
          </Link>
          <Link
            to="/patient/notifications"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <Bell className="h-6 w-6 text-blue-700" />
            <span>Notifications</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;