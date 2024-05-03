import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'
function BasketPage() {
    const { basket, addbasket, GetTotal,decreasebasket,removebasket }=useContext(MainContext)
  return (
   <>
   <div style={{border:"1px soldid black",display:'flex',flexWrap:"wrap",justifyContent:"space-between"}}>
        {basket.map((x)=>(
            <div key={x.id} style={{width:"23%",border:"1px solid black"}}>
            <img src={x.image} alt="" width={"100%"}/>
            <div>{x.title}</div>
            <div>{x.price}</div>
            <div>count:{x.count}</div>
            <button onClick={()=>removebasket(x)}>X</button>
            <button onClick={()=>addbasket(x)}>+</button>
            <button onClick={()=>decreasebasket(x)}>-</button>
            </div>
            
        ))}
        
      </div>
      <div>Total:{GetTotal()}</div>
   </>
  )
}

export default BasketPage
