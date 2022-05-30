import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

const Product = () => {

const [items,setItems]=useState("");
useEffect(() => {
  getAllItems();
},[]);

const getAllItems = () =>{
  axios.get(`http://localhost:8080/products`).then((res)=>{
  const allItems=res.data;  
  setItems(allItems);
  });
}
if(items.length>0){
  return items.map((item, index) => {
    console.log(item);
    return (
      <Stack data-cy="product" key={item.id}>
        <Image data-cy="product-image" src={item.imageSrc} />
        <Text data-cy="product-category">{item.category}</Text>
        <Tag>
          <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
        </Tag>
        <Heading data-cy="product-title">{item.title}</Heading>
        <Box data-cy="product-price">{item.price}</Box>
      </Stack>
    );
  });
} 
};

export default Product;
