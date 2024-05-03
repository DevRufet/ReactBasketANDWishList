import React, { createContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
export const WishListContext = createContext();
function WishListProvider({ children }) {
  const [WishList, setWishList] = useLocalStorage("WishList",[]);
  function addWishList(item) {
    let index = WishList.findIndex((x) => x.id === item.id);
    if (index !== -1) {
     
        setWishList(WishList.filter((x) => x.id !== item.id));
    } else {
      setWishList([...WishList, {...item }]);
    }
  }
  function isExistWishList(item){
    return WishList.findIndex((x)=>x.id===item.id) !==-1
  }
  return (
    <WishListContext.Provider value={{ WishList,isExistWishList, addWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

export default WishListProvider;
