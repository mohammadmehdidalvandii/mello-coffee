import React from 'react'

const OrdersList:React.FC =()=>{
  return (
    <section className="block">
         <table className="table-auto w-full border border-secondary-100 rounded-2xl font-iranMedium text-md font-bold">
        <thead className="bg-gray-100 border-b border-secondary-100">
          <tr>
            <th className="px-4 py-2">productId</th>
            <th className="px-4 py-2">نام محصول</th>
            <th className="px-4 py-2">نام خریدار</th>
            <th className="px-4 py-2">قیمت محصول</th>
            <th className="px-4 py-2">وضعیت خرید</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody >
        <tr  className='border-b border-secondary-100'>
            <td className="px-4 py-2">#P022</td>
            <td className="px-4 py-2">قهوه اربیکا</td>
            <td className="px-4 py-2">محمد رحمانی</td>
            <td className="px-4 py-2">450,000 تومان</td>
            <td className="px-4 py-2">
                <span className="flex justify-center items-center p3 rounded-full bg-red-500 text-white text-sm">pendding</span>
            </td>
            <td className="px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                ویرایش
              </button>
            </td>
          </tr>
        <tr className='border-b border-secondary-100'>
            <td className="px-4 py-2">#P022</td>
            <td className="px-4 py-2">قهوه اربیکا</td>
            <td className="px-4 py-2">محمد رحمانی</td>
            <td className="px-4 py-2">450,000 تومان</td>
            <td className="px-4 py-2">
                <span className="flex justify-center items-center p3 rounded-full bg-red-500 text-white text-sm">pendding</span>
            </td>
            <td className="px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    ویرایش
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default OrdersList