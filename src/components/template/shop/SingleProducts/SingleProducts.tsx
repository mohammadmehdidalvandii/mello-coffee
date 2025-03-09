import React from 'react'
import Gallery from '../Gallery/Gallery'

const SingleProducts:React.FC = ()=>{
  return (
    <section className="block">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="block">
                    <Gallery/>
                </div>
                <div className="block bg-amber-500">this is item</div>
            </div>
        </div>
    </section>
)
}

export default SingleProducts