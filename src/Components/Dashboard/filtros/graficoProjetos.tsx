import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import dateFnsUtils from '@date-io/date-fns';
import { useFormik } from 'formik';

interface IFilter {
  setFilterProjetos: (filterProjetos: any) => void;
}

const FiltroProjetos = ({ setFilterProjetos }: IFilter): React.ReactElement => {
  const defaultFilter = {
    dataInicial: new Date(),
    dataFinal: new Date(),
  };

  const formik = useFormik({
    initialValues: defaultFilter,
    onSubmit: (values) => setFilterProjetos(values),
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
        <Grid item md={4} xs={12}>
          <Typography
            id="table-title"
            variant="h6"
            component="h2"
            fontFamily={'inherit'}
          >
            Projetos
          </Typography>
        </Grid>
        <MuiPickersUtilsProvider utils={dateFnsUtils}>
          <Grid item md={4} xs={12}>
            <KeyboardDatePicker
              size="small"
              id="dataInicial"
              name="dataInicial"
              // label="Data inicial"
              format="dd/MM/yyyy"
              InputProps={{
                disableUnderline: true,
                readOnly: true,
              }}
              KeyboardButtonProps={{
                style: { padding: 4, color: '#00b4d8' },
              }}
              value={formik.values.dataInicial}
              // value={formik.values.dataInicial}
              maxDate={formik.values.dataFinal}
              maxDateMessage={'Data inicial maior que final'}
              onChange={(event) => formik.setFieldValue('dataInicial', event)}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <KeyboardDatePicker
              size="small"
              id="dataFinal"
              name="dataFinal"
              // label="Data final"
              format="dd/MM/yyyy"
              InputProps={{
                disableUnderline: true,
                readOnly: true,
              }}
              KeyboardButtonProps={{
                style: { padding: 4, color: '#00b4d8' },
              }}
              value={formik.values.dataFinal}
              // value={formik.values.dataFinal}
              onChange={(event) => formik.setFieldValue('dataFinal', event)}
              minDate={formik.values.dataInicial}
              minDateMessage={'Data final menor que inicial'}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </form>
  );
};

export default FiltroProjetos;
