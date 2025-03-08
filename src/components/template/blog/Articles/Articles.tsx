import ArticleCart from '@/components/module/ArticleCart/ArticleCart'
import React from 'react'

const Articles:React.FC = ()=>{
  return (
    <section className="block">
        <div className="container">
            <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
            <ArticleCart/>
                <ArticleCart/>
                <ArticleCart/>
                <ArticleCart/>
                <ArticleCart/>
                <ArticleCart/>
                <ArticleCart/>
                <ArticleCart/>
            </div>
            <div className="flex items-center justify-center">
              <button className="btn_primary mt-12">مشاهده بیشتر</button>
            </div>
        </div>
    </section>
  )
}

export default Articles