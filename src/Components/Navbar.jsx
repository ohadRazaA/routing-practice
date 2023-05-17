import React from 'react'
import Navlist from './Navlist'

const Navbar = () => {
  return (
    <>
      <Navlist heads = {"Navbar"} main = {"Home"} mostRelevant = {"Most Relevant"} trending = {"Trending"} watches = {"Watches"} mobile = {"Mobile"}/>
    </>
  )
}

export default Navbar