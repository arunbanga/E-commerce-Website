import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Button = () => {
    const state= useSelector((state)=>state.cart.cartItems)
    return (
        <>
        <NavLink  className='py-5 mx-2'  to='/cart'>
           Cart({state.length}) 
        </NavLink>
        </>
    )
}

export default Button
