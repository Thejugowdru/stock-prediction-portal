import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className="p-5 text-center bg-light-dark rounded">
                <h1 className="text-light">Stock Prediction Portal</h1>
                <p className="text-light lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error doloremque aspernatur. Ullam quam eaque perspiciatis explicabo minus nemo deserunt modi rem quo aliquid odio provident, in, cumque et ut!</p>
                <Button class='btn-light' text='Login now' />
            </div>
        </div>
    </>
  )
}

export default Main