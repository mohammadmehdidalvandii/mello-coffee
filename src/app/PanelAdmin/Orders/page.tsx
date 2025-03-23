import React from 'react';
import Layout from '@/components/layout/AdminPanelLayout';
import OrdersList from '@/components/template/p-admin/OrdersList/OrdersList';

const page:React.FC = ()=>{
  return (
    <Layout>
        <OrdersList/>
    </Layout>
  )
}

export default page