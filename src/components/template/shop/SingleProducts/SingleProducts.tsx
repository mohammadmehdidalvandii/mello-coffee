import React from 'react'
import Gallery from '../Gallery/Gallery'
import Details from '../Details/Details'
import Info from '../Info/Info'

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
            <div className="block mt-4 border-t border-secondary-100">
              <Info/>
            </div>
        </div>
    </section>
)
}

export default SingleProducts