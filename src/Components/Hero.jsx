import React from 'react'
import { HeroJs } from './Card'
import Main from './Main'

const Hero = () => {
    <HeroJs />
    return (
        <>
        <hr />
        <h1 className='p-3 container'>Most Relevant</h1>
        <hr />
        <div className='cards'>
        {
           HeroJs.map((elements , index) => {
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

export default Hero
