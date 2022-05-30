import React from "react";
import { Button, ButtonGroup, Select } from '@chakra-ui/react';
const Pagination = () => {


  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" disabled="true">First</Button>
      <Button data-cy="pagination-previous-button" disabled="true">Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
