import React from 'react';
import Layout from '@/components/layout/UserPanelLayout';
import UserAccount from '@/components/template/p-user/UserAccount/UserAccount';

const page:React.FC = ()=>{
  return (
    <Layout>
        <UserAccount/>
    </Layout>
  )
}

export default page