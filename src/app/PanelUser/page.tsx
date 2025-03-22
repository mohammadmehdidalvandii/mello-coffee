import React from 'react'
import Layout from '@/components/layout/UserPanelLayout'
import Dashboard from '@/components/template/p-user/Dashboard/Dashboard'
import connectToDB from '@/config/db'
import { authUser } from '@/utils/serverHelpers'

const page:React.FC = async ()=>{
  await connectToDB();
  const user = await authUser();
  return (
    <Layout>
        <Dashboard name={user?.name} />
    </Layout>
  )
}

export default page