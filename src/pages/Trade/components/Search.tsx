import { Box, FormControl, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, TextField, Grid } from '@material-ui/core';

type PastTradePriceType = {
  price: number;
  percent: number;
};

type ColumnType = {
  id: string;
  label: string;
};

type RowType = {
  [key: string]: string | number | PastTradePriceType;
};
const columns: ColumnType[] = [
  { id: 'name', label: '종목명' },
  { id: 'currentPrice', label: '현재가' },
  { id: 'pastPrice', label: '전일 대비' },
];

const rows: RowType[] = [
  {
    name: '삼성전자',
    currentPrice: 15000,
    pastPrice: {
      price: 14000,
      percent: 50,
    },
  },
  {
    name: '삼성전자',
    currentPrice: 15000,
    pastPrice: {
      price: 14000,
      percent: 50,
    },
  },
  {
    name: '삼성전자',
    currentPrice: 15000,
    pastPrice: {
      price: 14000,
      percent: 50,
    },
  },
];
const Search = () => {
  return (
    <Box>
      <FormControl>
        <Grid container>
          <Grid item>
            <TextField variant="outlined" margin="dense" placeholder="종목명" fullWidth />
          </Grid>
        </Grid>
      </FormControl>
      <FormControl>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => {
                      if (column.id === 'pastPrice') {
                        const pastPrice = row[column.id] as PastTradePriceType;
                        return (
                          <TableCell key={column.id}>
                            {pastPrice.price}
                            <br />
                            {pastPrice.percent}
                          </TableCell>
                        );
                      }
                      const value = row[column.id] as string | number;
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </FormControl>
    </Box>
  );
};
export default Search;
