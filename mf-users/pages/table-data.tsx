import React from 'react';
import Layout from "../components/Layout";
import AgUserTable from '@components/AgUserTable';
import { users } from 'data/users';

export default function tableData() {
  return (
    <Layout>
        <div className='p-4'>
            <h1 className='font-semibold'>Table Data with Crud Operations:</h1>
             <AgUserTable users={users} />
        </div>
    </Layout>
    
  )
}
