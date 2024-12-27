import React, { createContext, useState } from 'react'
import CompoTwo from './CompoTwo'


export const UserContext = createContext()

const CompoOne = () => {

    const [user, setUser] = useState('Shanto')
  return (
    <div className='border-4 m-5 p-10 border-black'>
        <h1 className='text-2xl'>CompoOne</h1>
        <h1 className='text-2xl'>{`Hello ${user}`} </h1>
        <UserContext.Provider value={user}>
             <CompoTwo user={user} />
        </UserContext.Provider>
    </div>
  )
}

export default CompoOne