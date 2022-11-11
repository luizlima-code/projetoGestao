import React, { useEffect } from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

interface IFilter {
  setFilterDesempenho: (filterDesempenho: any) => void;
}

const FiltroDesempenhoEtapa = ({
  setFilterDesempenho,
}: IFilter): React.ReactElement => {
  const defaultFilter = {
    dataInicial: new Date(),
    dataFinal: new Date(),
  };

  const formik = useFormik({
    initialValues: defaultFilter,
    onSubmit: (values) => setFilterDesempenho(values),
  });

  useEffect(() => {
    formik.handleSubmit();
  }, [formik.values]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        mb={1}
        mr={0.5}
        spacing={1}
      >
        <Grid item md={6.6} xs={12}>
          <Typography
            id="table-title"
            variant="h6"
            component="h2"
            fontFamily={'inherit'}
          >
            Desempenho etapas
          </Typography>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid item md={2.2} xs={12}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={formik.values.dataInicial}
              maxDate={formik.values.dataFinal}
              onChange={(event) => formik.setFieldValue('dataInicial', event)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="dataInicial"
                  name="dataInicial"
                  size="small"
                  variant="standard"
                  disabled
                  onKeyDown={(e) => {
                    e.preventDefault();
                  }}
                />
              )}
              InputProps={{
                disableUnderline: true,
                style: { padding: 2 },
              }}
            />
          </Grid>
          <Grid item md={1} xs={12}>
            <Box sx={{ mx: 2, mt: 0.5 }}>até</Box>
          </Grid>
          <Grid item md={2.2} xs={12}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={formik.values.dataFinal}
              maxDate={formik.values.dataInicial}
              onChange={(event) => formik.setFieldValue('dataFinal', event)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="dataFinal"
                  name="dataFinal"
                  size="small"
                  variant="standard"
                  disabled
                  onKeyDown={(e) => {
                    e.preventDefault();
                  }}
                />
              )}
              InputProps={{
                disableUnderline: true,
                style: { padding: 2 },
              }}
            />
          </Grid>
        </LocalizationProvider>
      </Grid>
    </form>
  );
};

export default FiltroDesempenhoEtapa;
