import React from 'react';
import Layout from '@/components/layout/AdminPanelLayout';
import UserList from '@/components/template/p-admin/UserList/UserList';

const page:React.FC = ()=>{
  return (
    <Layout>
      <UserList/>
    </Layout>
  )
}

export default page