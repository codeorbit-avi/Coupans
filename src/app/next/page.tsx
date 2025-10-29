import React from 'react'

const Nextpage = () => {
 const users = [
  { id: 1, name: 'Avinash Patil', email: 'avinash@example.com', role: 'Admin', passwordStatus: 'Strong', lastLogin: '2025-10-15' },
  { id: 2, name: 'Riya Sharma', email: 'riya@example.com', role: 'User', passwordStatus: 'Weak', lastLogin: '2025-10-14' },
  { id: 3, name: 'Karan Mehta', email: 'karan@example.com', role: 'Moderator', passwordStatus: 'Medium', lastLogin: '2025-10-13' },
];

  return (
    <>
      <div className="space-y-8 pt-20">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-purple-700">Total Users</h3>
            <p className="text-3xl mt-2">{users.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-purple-700">Admins</h3>
            <p className="text-3xl mt-2">{users.filter(u => u.role === 'Admin').length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-purple-700">Last Login</h3>
            <p className="text-xl mt-2">{users[0].lastLogin}</p>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">User Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-purple-100 text-purple-700">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Password</th>
                  <th className="px-4 py-2 text-left">Last Login</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.role}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-white text-sm ${user.passwordStatus === 'Strong' ? 'bg-green-500' :
                          user.passwordStatus === 'Medium' ? 'bg-yellow-500' :
                            'bg-red-500'
                        }`}>
                        {user.passwordStatus}
                      </span>
                    </td>
                    <td className="px-4 py-2">{user.lastLogin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nextpage