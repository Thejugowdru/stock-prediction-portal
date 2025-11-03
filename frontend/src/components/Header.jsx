import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container py-3 align-items-start'>
            <a className='navbar-brand text-light' href="">Stock Prediction Portal</a>
            <div>
                <Button class='btn-outline-light' text='Login' />
                &nbsp;
                <Button class='btn-light' text='Register' />
            </div>
        </nav>
    </>
  )
}

export default Header