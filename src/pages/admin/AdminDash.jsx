import { Link } from 'react-router-dom';
import { Users, Settings, Bell, HelpCircle } from 'lucide-react';

const AdminDashboard = () => {
  const systemStats = [
    { id: 1, metric: 'Total Users', value: 1200 },
    { id: 2, metric: 'Active Patients', value: 850 },
    { id: 3, metric: 'Active Doctors', value: 150 },
    { id: 4, metric: 'Pending Support Requests', value: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6" role="main">
      <h1 className="text-3xl font-bold text-gray-800 mb-8" tabIndex="0">
        Admin Dashboard
      </h1>

      {/* System Statistics Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4" tabIndex="0">
          System Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemStats.map((stat) => (
            <div key={stat.id} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">{stat.metric}</h3>
              <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
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
            to="/admin/users"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <Users className="h-6 w-6 text-blue-700" />
            <span>Manage Users</span>
          </Link>
          <Link
            to="/admin/settings"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <Settings className="h-6 w-6 text-blue-700" />
            <span>System Settings</span>
          </Link>
          <Link
            to="/admin/notifications"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <Bell className="h-6 w-6 text-blue-700" />
            <span>Notifications</span>
          </Link>
          <Link
            to="/admin/support"
            className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4 hover:bg-blue-50 transition-colors"
          >
            <HelpCircle className="h-6 w-6 text-blue-700" />
            <span>Support Requests</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;