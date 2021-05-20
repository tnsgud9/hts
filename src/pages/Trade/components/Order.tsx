import { Box, Tabs, Tab } from '@material-ui/core';
import { useState } from 'react';
import OrderHistory from './OrderHistory';
import OrderSell from './OrderSell';
import OrderBuy from './OrderBuy';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const changeTab = (index: number) => {
    // TODO: 적당한 코들를 작성
    setTabIndex(index);
  };
  return (
    <Box>
      <Tabs variant="fullWidth" value={tabIndex}>
        <Tab label="매수" fullWidth id="tab-0" onClick={() => changeTab(0)} />
        <Tab label="매도" fullWidth id="tab-1" onClick={() => changeTab(1)} />
        <Tab label="거래내역" fullWidth id="tab-2" onClick={() => changeTab(2)} />
      </Tabs>
      <OrderBuy index={0} value={tabIndex} />
      <OrderSell index={1} value={tabIndex} />
      <OrderHistory index={2} value={tabIndex} />
    </Box>
  );
};

export default Order;
