import React, { useEffect } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

interface IFilter {
  setFilterAgenda: (filterAgenda: any) => void;
}

const FiltroAgenda = ({ setFilterAgenda }: IFilter): React.ReactElement => {
  const defaultFilter = {
    data: new Date(),
  };

  const formik = useFormik({
    initialValues: defaultFilter,
    onSubmit: (values) => setFilterAgenda(values),
  });

  useEffect(() => {
    formik.handleSubmit();
  }, [formik.values]);

  return (
    <form onChange={formik.handleSubmit}>
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
        <Grid item md={8.5} xs={12}>
          <Typography
            id="table-title"
            variant="h6"
            component="h2"
            fontFamily={'inherit'}
          >
            Agendamentos
          </Typography>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid item md={3.5} xs={12}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={formik.values.data}
              onChange={(event) => formik.setFieldValue('data', event)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="data"
                  name="data"
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

export default FiltroAgenda;
