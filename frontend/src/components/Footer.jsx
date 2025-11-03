import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='footer py-3 my-3 text-light text-center border-top'>
            &copy; {new Date().getFullYear()}- Built with ❤️ <strong>By ThejuSphere</strong>
        </footer>
    </>
  )
}

export default Footer