import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div >
        <Header />
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg'
        alt='background-img' />
    </div>
    <form className='w-3/12 absolute bg-black my-36 mx-auto right-0 left-0'>
        <input className="p-2 m-2" type='text' placeholder='Enter email' />
        <input className='p-2 m-2' type='passoword' placeholder='Enter the Password' />
        <button className='p-4 m-4'>Sign In</button>
    </form>
    </div>
  )
}

export default Login