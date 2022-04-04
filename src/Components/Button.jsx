import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Button = () => {
    const state= useSelector((state)=>state.cart.cartItems)
    return (
        <>
        <NavLink  style={{padding:'10px', marginTop:'20px', textDecoration:'none'}}  to='/cart'>
           Cart({state.length}) 
        </NavLink>
        </>
    )
}

export default Button
