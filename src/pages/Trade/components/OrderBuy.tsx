import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core';

type OrderType = {
  index: number;
  value: number;
};

const LabelStyle = {
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
};

const OrderBuy = (props: OrderType) => {
  const { index, value } = props;

  return (
    <Box hidden={value !== index}>
      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelStyle}>
            <FormLabel>주문구분</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <RadioGroup>
              <FormControlLabel control={<Radio />} label="지정가" />
            </RadioGroup>
          </Grid>
        </Grid>
      </FormControl>
      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelStyle}>
            <FormLabel>주문가능</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <Box>얼마일까요</Box>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default OrderBuy;
