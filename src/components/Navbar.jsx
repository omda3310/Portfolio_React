import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-4 sm:px-6 md:px-16 lg:px-24'>
      <div className='container mx-auto py-3 flex flex-wrap items-center justify-between'>
        <div className='w-full flex justify-between md:w-auto'>
          <div className='text-2xl font-bold md:inline'>Imed</div>
          <button className='text-white md:hidden'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>

        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        <a href='#contact' className='hidden md:inline-block'>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </a>
      </div>

      {/* Mobile menu */}
      <div className='md:hidden'>
        <div className='flex flex-col items-center space-y-2 py-4'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
          <a href='#contact'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Connect Me
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
