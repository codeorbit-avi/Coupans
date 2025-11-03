import React from 'react'

const Nextpage = () => {
const coupons = [
  { id: 1, title: '50% Off Electronics', code: 'ELEC50', expires: '2025-11-30', status: 'Active' },
  { id: 2, title: 'Buy 1 Get 1 Free', code: 'FASHIONBOGO', expires: '2025-12-15', status: 'Expired' },
  { id: 3, title: '30% Off Groceries', code: 'GROC30', expires: '2025-11-10', status: 'Active' },
];

  return (
    <>
      <div className="space-y-10 p-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-purple-700">Total Coupons</h3>
          <p className="text-3xl mt-2">{coupons.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-purple-700">Active Coupons</h3>
          <p className="text-3xl mt-2">{coupons.filter(c => c.status === 'Active').length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-purple-700">Expired Coupons</h3>
          <p className="text-3xl mt-2">{coupons.filter(c => c.status === 'Expired').length}</p>
        </div>
      </div>

      {/* Coupon Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Coupons</h2>
        <table className="min-w-full table-auto">
          <thead className="bg-purple-100 text-purple-700">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Code</th>
              <th className="px-4 py-2 text-left">Expires</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map(coupon => (
              <tr key={coupon.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{coupon.title}</td>
                <td className="px-4 py-2 font-mono">{coupon.code}</td>
                <td className="px-4 py-2">{coupon.expires}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-white text-sm ${
                    coupon.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {coupon.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Settings Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Settings</h2>
        <form className="space-y-4 max-w-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Site Name</label>
            <input type="text" defaultValue="CouponCraze" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Admin Email</label>
            <input type="email" defaultValue="admin@example.com" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400" />
          </div>
          <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            Save Settings
          </button>
        </form>
      </div>
    </div>
</>
  )
}

export default Nextpage;

// import React from 'react';

// const coupons = [
//   { id: 1, title: '50% Off Electronics', code: 'ELEC50', expires: '2025-11-30', status: 'Active' },
//   { id: 2, title: 'Buy 1 Get 1 Free', code: 'FASHIONBOGO', expires: '2025-12-15', status: 'Expired' },
//   { id: 3, title: '30% Off Groceries', code: 'GROC30', expires: '2025-11-10', status: 'Active' },
// ];

// export default function Dashboard() {
//   return (
//     <div className="space-y-10 p-6">
//       {/* Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold text-purple-700">Total Coupons</h3>
//           <p className="text-3xl mt-2">{coupons.length}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold text-purple-700">Active Coupons</h3>
//           <p className="text-3xl mt-2">{coupons.filter(c => c.status === 'Active').length}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold text-purple-700">Expired Coupons</h3>
//           <p className="text-3xl mt-2">{coupons.filter(c => c.status === 'Expired').length}</p>
//         </div>
//       </div>

//       {/* Coupon Section */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Coupons</h2>
//         <table className="min-w-full table-auto">
//           <thead className="bg-purple-100 text-purple-700">
//             <tr>
//               <th className="px-4 py-2 text-left">Title</th>
//               <th className="px-4 py-2 text-left">Code</th>
//               <th className="px-4 py-2 text-left">Expires</th>
//               <th className="px-4 py-2 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {coupons.map(coupon => (
//               <tr key={coupon.id} className="border-b hover:bg-gray-50">
//                 <td className="px-4 py-2">{coupon.title}</td>
//                 <td className="px-4 py-2 font-mono">{coupon.code}</td>
//                 <td className="px-4 py-2">{coupon.expires}</td>
//                 <td className="px-4 py-2">
//                   <span className={`px-2 py-1 rounded text-white text-sm ${
//                     coupon.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
//                   }`}>
//                     {coupon.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Settings Section */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Settings</h2>
//         <form className="space-y-4 max-w-lg">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Site Name</label>
//             <input type="text" defaultValue="CouponCraze" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Admin Email</label>
//             <input type="email" defaultValue="admin@example.com" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400" />
//           </div>
//           <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
//             Save Settings
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }