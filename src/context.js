import React, { useState, useContext, useEffect, useReducer } from 'react';
import { useCallback } from 'react';
import reducer from './reducer';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const initialCartState = {
  cart: [],
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  // Cart ------------------------------------------------------
  const [state, dispatch] = useReducer(reducer,initialCartState);
  // -----------------------------------------------------------

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);

    try{
      const response = await fetch(`${url}${search}`);
      const data = await response.json();
      const {drinks} = data;
    
      if(drinks){

        const newProducts = drinks.map((item)=>{
          const {idDrink, strDrink, strDrinkThumb, strCategory} = item;
          let max=15;
          let min=5;
          let random = Math.floor(Math.random()*(max-min+1)+min);
          return {id: idDrink, name:strDrink, image:strDrinkThumb, category:strCategory, price: random}
        })
        setProducts(newProducts);
        
      }
      else{
        setProducts([]);
      }
      setLoading(false);

    }

    catch(error){
      console.log(error.message)
    }
    
  },[search])

  useEffect(()=>{
    fetchProducts();
  },[fetchProducts, search]) 

  //search marca Warning porque tiene una supuesta missing dependency fetchProducts, pero si yo agrego fetchProducts
  //al array, me quedaria un loop infinito -> para resolver el loop entonces voy a usar el useCallback

  //Cart ------------------------------------------------
  const add = (id,name,img,price,amount) => {
    dispatch({type:'ADD', payload:{id,name,img,price,amount}})
    dispatch({type:'GET_TOTALS'});
  }

  const remove = (id) => {
    dispatch({type: 'REMOVE', payload:id})
  }

  const toggleAmount = (id,type) => {
    dispatch({type:'TOGGLE_AMOUNT', payload:{id,type}})
  }

  useEffect(()=>{
    dispatch({type:'GET_TOTALS'})
  },[state.cart])
  // ---------------------------------------------------


  return <AppContext.Provider 
    value={{
      isSidebarOpen,
      openSidebar,
      closeSidebar,
      loading,
      setSearch,
      products,
      ...state,
      remove,
      toggleAmount,
      add,
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }