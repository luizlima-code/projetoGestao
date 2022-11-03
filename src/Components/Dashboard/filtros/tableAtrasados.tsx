import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import dateFnsUtils from '@date-io/date-fns';
import { useFormik } from 'formik';

interface IFilter {
  setFilterAtrasados: (filterAtrasados: any) => void;
}

const FiltroAtrasados = ({
  setFilterAtrasados,
}: IFilter): React.ReactElement => {
  const defaultFilter = {
    data: new Date(),
  };

  const formik = useFormik({
    initialValues: defaultFilter,
    onSubmit: (values) => setFilterAtrasados(values),
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
        <Grid item md={9.5} xs={12}>
          <Typography
            id="table-title"
            variant="h6"
            component="h2"
            fontFamily={'inherit'}
          >
            Projetos atrasados
          </Typography>
        </Grid>
        <MuiPickersUtilsProvider utils={dateFnsUtils}>
          <Grid item md={2.5} xs={12}>
            <KeyboardDatePicker
              size="small"
              format="dd/MM/yyyy"
              name="data"
              id="data"
              // label="Data"
              InputProps={{
                disableUnderline: true,
                readOnly: true,
              }}
              KeyboardButtonProps={{
                style: { padding: 4, color: '#00b4d8' },
              }}
              value={formik.values.data}
              onChange={(event) => formik.setFieldValue('data', event)}
              fullWidth
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </form>
  );
};

export default FiltroAtrasados;
