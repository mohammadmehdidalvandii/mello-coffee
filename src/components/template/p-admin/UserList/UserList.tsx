import React from 'react'


const UserList:React.FC = ()=>{
  return (
    <section className="block">
        <table className='table-auto w-full border border-secondary-100 font-iranMedium text-md font-bold'>
        <thead className="bg-gray-100 border-b border-secondary-100">
          <tr>
            <th className="px-4 py-2">userID</th>
            <th className="px-4 py-2">نام کاربر</th>
            <th className="px-4 py-2">سمت</th>
            <th className="px-4 py-2">وضعیت</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">شماره</th>
            <th className="px-4 py-2">عملیات</th>
          </tr>
        </thead>
        <tbody >
        <tr  className='border-b border-secondary-100'>
            <td className="px-4 py-2">#u022</td>
            <td className="px-4 py-2">yasdak</td>
            <td className="px-4 py-2">
                کاربر
            </td>
            <td className="px-4 py-2">فعال</td>
            <td className="px-4 py-2">
                    ysadal@gmail.com
                </td>
            <td className="px-4 py-2">
                    09011111111
                </td>
            <td className="flex px-4 py-2 gap-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                ویرایش
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                حذف
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                ادمین
              </button>
            </td>
          </tr>
        <tr  className='border-b border-secondary-100'>
            <td className="px-4 py-2">#u022</td>
            <td className="px-4 py-2">yasdak</td>
            <td className="px-4 py-2">
                کاربر
            </td>
            <td className="px-4 py-2">فعال</td>
            <td className="px-4 py-2">
                    ysadal@gmail.com
                </td>
            <td className="px-4 py-2">
                    09011111111
                </td>
            <td className="flex px-4 py-2 gap-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                ویرایش
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                حذف
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                ادمین
              </button>
            </td>
          </tr>
          </tbody>
        </table>
    </section>
  )
}

export default UserList