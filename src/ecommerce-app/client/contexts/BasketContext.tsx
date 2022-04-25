import React, {useState , createContext , useContext, useEffect} from 'react';
import { Product } from '../models/product';

interface Values {
    state: Product[];
    setState?: React.Dispatch<React.SetStateAction<Product[]>>;
    addToBasket?: (data: Product, findItemFromBasket?: Product) => void;
    removeItemFromBasket?: (id: number) => void;
    clearBasket?: (data: number[]) => void
}

const createBasketContext = createContext<Values>({state: []});


const BasketContextProvider: React.FC<{children?: React.ReactNode}> = ({children}) =>  {
  const defaultStateValue:Product[] = JSON.parse(localStorage.getItem("basket") as string) || [];

  const [state , setState] = useState<Product[]>(defaultStateValue); 

  useEffect(()=>{
      localStorage.setItem("basket", JSON.stringify(state));
  },[state]);

  const addToBasket = (data: Product, findItemFromBasket?: Product) =>{
    if(!findItemFromBasket){ 
        setState([data , ...state]) 
    } 
    
    else { 
        const filtered = state.filter((item: Product)=> item.id !== findItemFromBasket.id);
        setState(filtered) ;
    }
  }

  const removeItemFromBasket = (id: number) => {
    const filtered = state.filter(item => item.id !== id);
    setState(filtered);
  }

  const clearBasket = (data: number[]) => {
      setState([]);
  }
  const values: Values = {
    state,
    setState,
    addToBasket,
    removeItemFromBasket,
    clearBasket
  }
  return (
    <createBasketContext.Provider value={values}>
        {children}
    </createBasketContext.Provider>
  )
}

export default BasketContextProvider;

export const useBasketContext = () =>{
    const {state , setState , addToBasket , removeItemFromBasket , clearBasket} = useContext(createBasketContext);

    if(!state){
        throw new Error("state was called outside of the createBasketContext provider");
    }
    if(!setState){
        throw new Error("setState was called outside of the createBasketContext provider");
    }
    if(!addToBasket){
        throw new Error("addToBasket was called outside of the createBasketContext provider");
    }
    if(!removeItemFromBasket){
        throw new Error("removeItemFromBasket was called outside of the createBasketContext provider");
    }
    if(!clearBasket){
        throw new Error("clearBasket was called outside of the createBasketContext provider");
    }
    return [state , setState , addToBasket , removeItemFromBasket , clearBasket] as const;
}