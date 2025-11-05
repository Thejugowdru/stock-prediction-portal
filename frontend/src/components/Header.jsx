import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='navbar container py-3 align-items-start'>
            <Link className='navbar-brand text-light' to={'/'}>Stock Prediction Portal</Link>
            <div>
                <Button class='btn-outline-light' text='Login' url="/login" />
                &nbsp;
                <Button class='btn-light' text='Register' url="/register" />
            </div>
        </nav>
    </>
  )
}

export default Header