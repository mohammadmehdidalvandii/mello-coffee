import React from 'react'
import Gallery from '../Gallery/Gallery'
import Details from '../Details/Details'

const SingleProducts:React.FC = ()=>{
  return (
    <section className="block">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="block">
                    <Gallery/>
                </div>
                <div className="block">
                    <Details/>
                </div>
            </div>
        </div>
    </section>
)
}

export default SingleProducts