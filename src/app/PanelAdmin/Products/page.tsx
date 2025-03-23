import React from 'react'
import Layout from '@/components/layout/AdminPanelLayout'
import ProductList from '@/components/template/p-admin/ProductList/ProductList'

const page:React.FC =()=>{
  return (
    <Layout>
        <ProductList/>
    </Layout>
  )
}

export default page