import { AppRegistrationRounded, LoginRounded } from '@mui/icons-material'
import React from 'react'

function Nav() {
  return (
    <div className='flex justify-around bg-blue-400 p-2  items-center text-white'>
        <div className='img_div flex justify-start items-center   w-[120px] h-[30px]  hover:cursor-pointer '> 
            
            <img src="https://th.bing.com/th/id/OIP.q6vhAaxqJNQzghy2asht9QHaFj?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='rounded-lg w-full h-full mr-2' alt="logo"/>
            <p>Newsapp</p>
        </div>
        <div className='flex justify-center items-center space-x-10 hover:cursor-pointer'>
        <div className='flex justify-start space-x-1' >
            <LoginRounded/>
            <p>Login</p>
        </div>
        <div className='flex justify-start space-x-1' >
             <AppRegistrationRounded/>
             <p>Signup</p>
             </div>
        </div>
        


        
    </div>
  )
}

export default Nav