import CompoFour from './CompoFour'
import React, { useContext } from 'react'
import { UserContext } from './CompoOne'

const CompoThree = () => {

    const user = useContext(UserContext)
  return (
    <div className='border-4 p-10 border-black' >
        <h1 className='text-2xl'>CompoThree</h1>
        <h1 className='text-2xl'>{`heyy ${user}`} </h1>
        <CompoFour />
    </div>
  )
}

export default CompoThree