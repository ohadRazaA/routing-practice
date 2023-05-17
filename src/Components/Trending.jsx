import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { TrendingJs } from './Card'
import Main from './Main'

function Trending() {
    return (
        <>



            <ul className='ul-list'>
                <li className='list'>
                   <Link className='nestedElement' to="watches">Watches</Link> 
                </li>
                <li className='list'>
                   <Link className='nestedElement' to="mobile"> Mobile </Link>
                </li>
            </ul>

            <Outlet />

            <hr />
        <h1 className='p-3 container'>More Products</h1>
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

export default Trending
