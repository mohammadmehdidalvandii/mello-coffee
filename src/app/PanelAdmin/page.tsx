import React from 'react';
import Layout from '@/components/layout/AdminPanelLayout';
import Dashboard from '@/components/template/p-admin/Dashboard/Dashboard';

const page:React.FC = ()=>{
  return (
   <Layout>
    <Dashboard/>
   </Layout>
  )
}

export default page