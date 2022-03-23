import React from 'react'
const Card=()=>{
  return(
      <>
      <div style={{display:'flex',flexDirection:'row',border:'1px solid gray',marginTop:'5px',marginLeft:'5px'}}>
      <img src='https://images-eu.ssl-images-amazon.com/images/I/41PdV1qZQpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg' style={{width:'200px',height:'150px',border:'1px solid gray',margin:'2px'}}/>
      <p>Products Name <span style={{display:'block',marginTop:'10px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda voluptas rep...</span>
      <span style={{display:'flex',paddingTop:'60px',justifyContent:'space-between'}}>$129<button>Buy Now</button></span>
      </p>
      
      </div>
        
      </>
  )
}
export default Card;