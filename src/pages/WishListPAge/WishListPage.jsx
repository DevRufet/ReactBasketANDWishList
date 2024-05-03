import React from 'react'
import { WishListContext } from '../../context/WishListProvider'
import { useContext } from 'react'
function WishListPage() {
  const { WishList,isExistWishList, addWishList }=useContext(WishListContext)
  return (
    <>
    <div style={{border:"1px soldid black",display:'flex',flexWrap:"wrap",justifyContent:"space-between"}}>
        {WishList.map((x)=>(
          
            <div key={x.id} style={{width:"23%",border:"1px solid black"}}>
              <div onClick={()=>addWishList(x)}>{isExistWishList(x)? <i className="fa-solid fa-heart" style={{fontSize:"30px"}}></i>:<i className="fa-regular fa-heart" style={{fontSize:"30px"}}></i>}</div>
            <img src={x.image} alt="" width={"100%"}/>
            <div>{x.title}</div>
            <div>{x.price}</div>
            </div>
            
        ))}
        
      </div>
    
    </>
  )
}

export default WishListPage
