import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainProvider'
import './Navbar.scss'
function Navbar() {
    const {basket}=useContext(MainContext)
  return (
    <div  className='navbar'>
      <Link to={'/'}>HomePage</Link>
      <Link to={'/basket'}>BasketPage {basket.length}</Link>
      <Link to={'/wishlist'}>WishList</Link>
    </div>
  )
}

export default Navbar
