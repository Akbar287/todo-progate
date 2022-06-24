import React from 'react'

function Layout({title, children}) {
  return (
    <div className='bg-gray-300 mx-auto w-full min-h-screen'>
        <div className='bg-blue-500'>
            <h1 className='p-2 text-white text-xl text-center font-bold'>{title ? title : "Todo"}</h1>
        </div>
        <div className=''>
            {children}
        </div>
    </div>
  )
}

export default Layout