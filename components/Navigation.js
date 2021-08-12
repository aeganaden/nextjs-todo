import React from 'react'

export const Navigation = () => {
  return (
    <nav className='w-screen px-10 py-5 mb-10 bg-secondary-light'>
      <ul className='flex flex-between items-center gap-10'>
        <li className='font-display font-bold text-4xl w-4/6'>
          <a href='' className='text-primary-dark'>
            A&J
          </a>
        </li>

        <li>
          <a href=''>Men</a>
        </li>
        <li>
          <a href=''>Women</a>
        </li>
        <li>
          <button>Cart</button>
        </li>
      </ul>
    </nav>
  )
}
