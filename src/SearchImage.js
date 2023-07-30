import React, { useState } from 'react'

const SearchImage = ({set}) => {
  const [find, setFind] = useState('')

  const handleSubmit=(e)=>{
      e.preventDefault();
      set(find)
  }

  return (
    <div className='flex justify-center max-w-md min-w-full pt-2'>
      <form onSubmit={handleSubmit} className='flex' >
      {/* <label className="relative block"> */}
    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" onChange={e=>setFind(e.target.value)}/>
    {/* </label> */}
    <button className='rounded-full px-3 py-0.5 bg-violet-400 ml-2'>Search</button>
    </form>
    </div>
  )
}

export default SearchImage