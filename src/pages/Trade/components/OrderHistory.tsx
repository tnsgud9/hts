import React from 'react';
import { Box } from '@material-ui/core';

type OrderType = {
  index: number;
  value: number;
};

const OrderHistory = (props: OrderType) => {
  const { index, value } = props;

  return <Box hidden={value !== index}>기록창</Box>;
};

export default OrderHistory;
