import { createSlice } from "@reduxjs/toolkit";
import { goods } from "../../constants";

const initialState = {
    items:[],
    hugeItem:{},
    item:{},
    totalPrice:0,
    totalItems:0,    
}

const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        addItem:(state,action)=>{                      
            const newItem =action.payload;            
            const ixistingItem = state.items.find(i => i.id === newItem.id);
            if(!ixistingItem){                
                state.item = newItem;
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    image: newItem.image
                });  
                state.totalPrice = state.items.reduce((sum,item)=>{
                    const fixedStr = (sum + item.price).toFixed(2);
                    const fixedNum = parseFloat(fixedStr);
                    return fixedNum;
                }, 0);
                state.totalItems ++;
            }
        },
        removeItem:(state,action)=>{            
            const newItem = action.payload;
            state.items = state.items.filter(i => i.id !== newItem.id);
            state.totalItems --;
            state.totalPrice = state.items.reduce((sum,item)=>sum + item.price, 0)
        },
        setChosenItem:(state,action)=>{           
            state.item = goods.filter(i=>i.id ===action.payload);
        },
        setChosenHugeItem:(state,action)=>{
            state.hugeItem = goods.filter(i=>i.id ===action.payload)
        },
        clearChosenItem:(state)=>{
            state.hugeItem = {};
            console.log('hugeItem',state.hugeItem)
        },
        clearBasket:()=>initialState,
    }
})

export const {addItem,removeItem,setChosenItem,setChosenHugeItem,clearChosenItem,clearBasket} = basketSlice.actions;
export default basketSlice.reducer;
