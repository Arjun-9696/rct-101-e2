import React from 'react';
import Product from './Product';
import AddProduct from './AddProduct';
import Pagination from './Pagination';
import { Flex, Grid } from '@chakra-ui/react';
const Products = () => {
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct />
        <Grid>
          {/* List of Products */}
          <Product />
        </Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;
