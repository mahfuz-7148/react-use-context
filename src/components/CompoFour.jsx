import React, { useContext } from 'react'
import { UserContext } from './CompoOne'

const CompoFour = () => {

    const user = useContext(UserContext)
  return (
    <div className='border-4 p-10 border-black'>
        <h1 className='text-2xl'>CompoFour</h1>
        <h1 className='text-2xl'>{`bye ${user}`} </h1>
    </div>
  )
}

export default CompoFour