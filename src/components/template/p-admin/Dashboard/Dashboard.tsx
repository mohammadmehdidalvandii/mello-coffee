import React from 'react'

const Dashboard:React.FC = ()=>{
  return (
    <section className="block">
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="block">
                <div className="block bg-secondary-200 rounded-lg text-center p-4">
                    <span className="block font-iranBold text-2xl">تعداد کاربران</span>
                    <p className="block font-iranMedium text-lg">21,000</p>
                </div>
            </div>
            <div className="block">
                <div className="block bg-secondary-200 rounded-lg text-center p-4">
                    <span className="block font-iranBold text-2xl">فروش این ماه</span>
                    <p className="block font-iranMedium text-lg">244,873,00 تومان</p>
                </div>
            </div>
            <div className="block">
                <div className="block bg-secondary-200 rounded-lg text-center p-4">
                    <span className="block font-iranBold text-2xl">تعداد محصولات </span>
                    <p className="block font-iranMedium text-lg">282 نوع</p>
                </div>
            </div>
            <div className="block">
                <div className="block bg-secondary-200 rounded-lg text-center p-4">
                    <span className="block font-iranBold text-2xl">فروش امروز</span>
                    <p className="block font-iranMedium text-lg">45,880,000 تومان</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Dashboard