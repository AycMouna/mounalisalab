import { Link } from 'react-router-dom';
import { Users, FileText, Calendar, MessageCircle } from 'lucide-react';

const DoctorDashboard = () => {
  const assignedPatients = [
    { id: 1, name: 'John Doe', lastScan: '2023-10-01', disease: 'Disease A' },
    { id: 2, name: 'Jane Smith', lastScan: '2023-09-25', disease: 'Disease B' },
  ];

  const upcomingAppointments = [
    { id: 1, date: '2023-10-15', patient: 'John Doe', speciality: 'Cardiology' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6" role="main">
      <h1 className="text-3xl font-bold text-gray-800 mb-8" tabIndex="0">
        Doctor Dashboard
      </h1>

      {/* Assigned Patients Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4" tabIndex="0">
          Assigned Patients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assignedPatients.map((patient) => (
            <div key={patient.id} className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-6 w-6 text-blue-700 mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">{patient.name}</h3>
              <p className="text-gray-600">Last Scan: {patient.lastScan}</p>
              <p className="text-gray-600">Disease: {patient.disease}</p>
              <Link
                to={`/doctor/patients/${patient.id}`}
                className="mt-4 inline-flex items-center text-blue-600 hover:underline"
              >
                View Details
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
              <h3 className="text-lg font-semibold text-gray-800">{appointment.patient}</h3>
              <p className="text-gray-600">Date: {appointment.date}</p>
              <p className="text-gray-600">Speciality: {appointment.speciality}</p>
              <Link
                to={`/doctor/appointments/${appointment.id}`}
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
            to="/doctor/patients"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <Users className="h-6 w-6 text-blue-700" />
            <span>View Patients</span>
          </Link>
          <Link
            to="/doctor/reports"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <FileText className="h-6 w-6 text-blue-700" />
            <span>Review Reports</span>
          </Link>
          <Link
            to="/doctor/messages"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <MessageCircle className="h-6 w-6 text-blue-700" />
            <span>Messages</span>
          </Link>
          <Link
            to="/doctor/schedule"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <Calendar className="h-6 w-6 text-blue-700" />
            <span>Manage Schedule</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DoctorDashboard;