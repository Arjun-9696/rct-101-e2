import React, { useState } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  Select,
  RadioGroup,
  Radio,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';
import axios from 'axios';

const AddProduct = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
const [data,setData]=useState("");
const handleSubmit= () => {
    axios.post(`http://localhost:8080/products`,setData).then(res => {
      console.log(res)
    });
}
const handleTitle=(e)=>{
  e.preventDefault();
  setData(e.target.value);
}
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>
        Add New Product
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <h3>Add new Product</h3>
            <br />
            <b>Title</b>
            <Input
              data-cy="add-product-title"
              placeholder="Title"
              onChange={handleTitle}
            />
            <b>Category</b>
            <Select data-cy="add-product-category" placeholder="Category">
              <option data-cy="add-product-category-shirt">shirt</option>
              <option data-cy="add-product-category-pant">Pant</option>
              <option data-cy="add-product-category-jeans">Jeans</option>
            </Select>
            <b>Gender</b>
            <RadioGroup data-cy="add-product-gender">
              <Radio data-cy="add-product-gender-male">Male</Radio>
              <Radio data-cy="add-product-gender-female">Female</Radio>
              <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
            </RadioGroup>
            <b>Price</b>
            <Input data-cy="add-product-price" placeholder="Price" />
            <Button data-cy="add-product-submit-button" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
