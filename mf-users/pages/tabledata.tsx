import React from 'react';
import AgUserTable from '@components/AgUserTable';
import { users } from 'data/users';

export default function TableData() {
  return (
   
        <div className='p-2'>
            <h1 className='font-semibold text-2xl'>Users Data : </h1>
             <AgUserTable users={users} />
        </div>
    
    
  )
}
