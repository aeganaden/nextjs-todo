import React from 'react'

export const Navigation = () => {
  return (
    <nav className='w-screen p-10'>
      <ul className='flex flex-between items-center gap-10'>
        <li className='font-display font-bold text-4xl w-4/6'>
          <a href='' className='text-primary'>
            A&J
          </a>
        </li>

        <li>
          <a href=''>Men</a>
        </li>
        <li>
          <a href=''>Women</a>
        </li>
      </ul>
    </nav>
  )
}
