import React from 'react'
import { TrendingJs } from './Card'
import Main from './Main'
import { Link } from 'react-router-dom'

const Watch = () => {
    <TrendingJs />
    return (
        <>
       

        <hr />
        <h1 className='container'>Watches</h1>
        <hr />
        <div className='cards'>
        {
           TrendingJs.map((elements , index) => {
                return (
            <div className='cardss'>
                   <Main head={elements.Heading} price={elements.Price} image={elements.Image} />
            </div>
              )
            })
         }
        </div>
        </>
    )
}

export default Watch

