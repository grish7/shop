import React,{useState} from "react";
import { WrapItem,MainWrapper,CategoriesWrapper,WrapperItems } from "./index.styles";
import { Item } from "../item";
import { goods} from "../../constants";
import { CATEGORIES } from "../../constants";
import { useDispatch } from "react-redux";
import { addItem,setChosenHugeItem } from "../../redux/basket/basketSlice";
import { Button } from "../button";






export const ItemList =() =>{  
    const [activeCategory, setActiveCategory] = useState("все");

    const filteredGoods = activeCategory === "все"
    ? goods
    : goods.filter(item => item.category === activeCategory);

    const dispatch =useDispatch();

    const handleClickAdd =(e,i)=>{
         e.stopPropagation();  // Останавливаем всплытие события
        dispatch(addItem(i));
    }
    const chosenItem =(i)=>{
        dispatch(setChosenHugeItem(i))
    }

    return(
        <MainWrapper>
            <CategoriesWrapper>
                {CATEGORIES.map((item,index)=>(
                    <Button view='filter'
                            key={index+1}
                            className={activeCategory === item ? 'active' : ''}
                            onClick={()=>setActiveCategory(item)}>
                        {item}
                    </Button>
                ))}                
            </CategoriesWrapper>
            <WrapperItems>
                {filteredGoods.map(item => (
                <WrapItem key={item.id}
                        onClick={()=>chosenItem(item.id)}
                        >
                    <Item
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    category={item.category}
                    price={item.price}
                    onClickItem={(e)=>handleClickAdd(e,item)}                    
                    />
                </WrapItem>               
            )) }
            </WrapperItems>
        </MainWrapper>
        
    )
}




