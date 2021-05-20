import React from 'react';
import { Box } from '@material-ui/core';

type OrderType = {
  index: number;
  value: number;
};

const OrderSell = (props: OrderType) => {
  const { index, value } = props;

  return <Box hidden={value !== index}>판매창</Box>;
};

export default OrderSell;
