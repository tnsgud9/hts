import { Container, Grid, Typography } from '@material-ui/core';

const CurrentPrice = () => {
  return (
    <Container>
      <Grid container>
        <Grid item>
          <Typography>SK 텔레콤</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} sm={12}>
          <Grid container>
            <Grid item md={12}>
              150,000원
            </Grid>
            <Grid item md={12}>
              150,000원
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} sm={12}>
          <Grid container>
            <Grid item md={6} sm={6}>
              고가 쏼라쏼라
            </Grid>
            <Grid item md={6} sm={6}>
              거래량 쏼라쏼라
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={6} sm={6}>
              저가 쏼라쏼라
            </Grid>
            <Grid item md={6} sm={6}>
              거래대금 쏼라쏼라
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CurrentPrice;
