import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/MainProvider'
import { WishListContext } from '../../context/WishListProvider'
function HomePage() {
    const [datas,setdatas]=useState([])
    const { basket,isExistBasket,getCountFromBasket, addbasket,GetTotal, decreasebasket,removebasket }=useContext(MainContext)
    const { WishList,isExistWishList, addWishList }=useContext(WishListContext)
    useEffect(()=>{
fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>setdatas(data))

    },[])
    
  return (
    <div>
      <div style={{border:"1px soldid black",display:'flex',flexWrap:"wrap",justifyContent:"space-between"}}>
        {datas.map((x)=>(
            <div key={x.id} style={{width:"23%",border:"1px solid black"}}>
              <div onClick={()=>addWishList(x)}>{isExistWishList(x)? <i className="fa-solid fa-heart" style={{fontSize:"30px"}}></i>:<i className="fa-regular fa-heart" style={{fontSize:"30px"}}></i>}</div>  
            <img src={x.image} alt="" width={"100%"}/>
            <div>{x.title}</div>
            <div>{x.price}</div>
            {
                isExistBasket(x)?(<>
                <button>{getCountFromBasket(x)}</button>
                <button onClick={()=>removebasket(x)}>X</button>
            <button onClick={()=>addbasket(x)}>+</button>
            <button onClick={()=>decreasebasket(x)}>-</button> 

                </>):(
                  <>
                <button onClick={()=>addbasket(x)}>Add Basket</button>
                
                </>
                
              )
            } 
            </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
