import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category:React.FC = ()=>{
  return (
    <section className="block mt-12">
        <div className="container">
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
                <Link href='' className='block'>
                    <Image src='/assets/images/cat-1.webp' alt='category ' width={300} height={2000} className='rounded-lg'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/cat-2.webp' alt='category ' width={300} height={2000} className='rounded-lg'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/cat-3.webp' alt='category ' width={300} height={2000} className='rounded-lg'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/cat-4.webp' alt='category ' width={300} height={2000} className='rounded-lg'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/cat-5.webp' alt='category ' width={300} height={2000} className='rounded-lg'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/cat-6.webp' alt='category ' width={300} height={2000} className='rounded-lg'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/cat-7.webp' alt='category ' width={300} height={2000} className='rounded-lg'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/cat-8.webp' alt='category ' width={300} height={2000} className='rounded-lg'/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Category