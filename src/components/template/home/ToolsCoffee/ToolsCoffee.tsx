import TitleCenter from '@/components/module/TitleCenter/TitleCenter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ToolsCoffee:React.FC = ()=>{
  return (
    <section className="block mt-12">
        <div className="container">
        <TitleCenter
            title='ابزار دم اوری قهوه'
            />
            <div className="grid mt-8 gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                <Link href='' className='block'>
                    <Image src='/assets/images/Travel-coffee-maker.webp' alt='type-coffee' width={400} height={200} className='rounded-lg duration-300 ease-linear hover:scale-90'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/French-press-coffee-maker.webp' alt='type-coffee' width={400} height={200} className='rounded-lg duration-300 ease-linear hover:scale-90'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/Mokapot-coffee-maker.webp' alt='type-coffee' width={400} height={200} className='rounded-lg duration-300 ease-linear hover:scale-90'/>
                </Link>
                <Link href='' className='block'>
                    <Image src='/assets/images/Espresso-machine.webp' alt='type-coffee' width={400} height={200} className='rounded-lg duration-300 ease-linear hover:scale-90'/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default ToolsCoffee