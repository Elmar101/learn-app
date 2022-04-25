import React, {useState , createContext , useContext} from 'react';
import { Product } from '../models/product';

interface Values {
    state: Product[];
    setState: React.Dispatch<React.SetStateAction<Product[]>>;
    addToBasket: (data: Product, findItemFromBasket?: Product) => void
}

const initialState: Product = {
    category: '',
    description: '',
    id: 0,
    image:  '' ,
    price: 0 ,
    rating: {rate: 0, count: 0},
    title: '',
}
const createBasketContext = createContext<Values>({state: [initialState] , setState: ()=>{} , addToBasket: (data: Product) => {}});


const BasketContextProvider: React.FC<{children?: React.ReactNode}> = ({children}) =>  {
  const [state , setState] = useState<Product[]>([initialState]); 

  const addToBasket = (data: Product, findItemFromBasket?: Product) =>{
    if(!findItemFromBasket){ 
        setState([data , ...state]) 
    } 
    
    else { 
        const filtered = state.filter((item: Product)=> item.id !== findItemFromBasket.id);
        setState(filtered) ;
    }
  }

  const values: Values = {
      state,
      setState,
      addToBasket
  }
  return (
    <createBasketContext.Provider value={values}>
        {children}
    </createBasketContext.Provider>
  )
}

export default BasketContextProvider;

export const useBasketContext = () =>{
    const {state , setState , addToBasket} = useContext(createBasketContext);
    if(!state){
        throw new Error("state was called outside of the createBasketContext provider");
    }
    if(!setState){
        throw new Error("setState was called outside of the createBasketContext provider");
    }
    if(!addToBasket){
        throw new Error("addToBasket was called outside of the createBasketContext provider");
    }
    return [state , setState , addToBasket] as const;
}