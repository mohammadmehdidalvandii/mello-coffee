import React from 'react';
import Layout from '@/components/layout/UserPanelLayout';
import Orders from '@/components/template/p-user/Orders/Orders';

const page:React.FC = ()=>{
  return (
    <Layout>
        <Orders/>
    </Layout>
  )
}

export default page