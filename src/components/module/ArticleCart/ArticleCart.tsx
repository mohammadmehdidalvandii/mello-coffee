import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleCart:React.FC = ()=>{
  return (
    <div className="block shadow shadow-secondary-200 rounded-lg overflow-auto relative mb-3">
    <Image src='/assets/images/articles.jpg' alt='article'  width={300} height={200} className=''/>
    <span className="block absolute bg-white top-3 right-3 font-iranMedium text-sm text-center p-2 rounded-sm">03 <br /> اسفند</span>
    <span className="flex justify-center items-center mt-1 w-[140px] bg-primary-100 text-white rounded-sm p-0.5 mx-auto text-center">دانستنیهای قهوه</span>
    <div className="block my-3 p-4 text-center">
      <h6 className="block font-iranBlack text-2xl ">5 دستور تهیه خوراکی با قهوه</h6>
      <span className="block font-iranMedium text-md  my-3 text-secondary-100">فرشته نوری</span>
      <Link href='' className='block text-xl font-bold font-iranMedium duration-300 ease-linear hover:text-primary-100'>ادامه مطلب</Link>
    </div>
</div>
  )
}

export default ArticleCart