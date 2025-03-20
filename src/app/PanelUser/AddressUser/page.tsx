import React from 'react';
import Layout from '@/components/layout/UserPanelLayout';
import AddressUser from '@/components/template/p-user/AddressUser/AddressUser';

const page:React.FC = ()=>{
  return (
    <Layout>
        <AddressUser/>
    </Layout>
  )
}

export default page