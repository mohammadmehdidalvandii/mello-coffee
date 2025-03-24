import React from 'react';
import Layout from '@/components/layout/AdminPanelLayout';
import AdminAccount from '@/components/template/p-admin/AdminAccount/AdminAccount';

const page:React.FC = ()=>{
  return (
       <Layout>
        <AdminAccount/>
       </Layout> 
  )
}

export default page