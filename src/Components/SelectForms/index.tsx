import * as React from 'react';

import { getIn, FieldProps } from 'formik';

import MuiSelect, { SelectProps as MuiSelectProps } from '@mui/material/Select';
import MuiFormHelperText from '@mui/material/FormHelperText';
import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';

export interface SelectProps
  extends FieldProps,
    Omit<MuiSelectProps, 'name' | 'value'> {}

export function fieldToSelect({
  disabled,
  field,
  form: { isSubmitting },
  ...props
}: SelectProps): MuiSelectProps {
  return {
    disabled: disabled ?? isSubmitting,
    ...props,
    ...field,
  };
}

function SelectForms(props: SelectProps): React.ReactElement {
  const {
    field,
    form: { errors, touched },
    label,
    fullWidth,
    required,
    labelId,
  } = props;

  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return (
    <>
      <MuiFormControl
        fullWidth={fullWidth}
        required={required}
        error={showError}
      >
        <MuiInputLabel id={labelId}>{label}</MuiInputLabel>
        <MuiSelect {...fieldToSelect(props)} error={showError} />
        {showError && <MuiFormHelperText>{fieldError}</MuiFormHelperText>}
      </MuiFormControl>
    </>
  );
}

SelectForms.displayName = 'SPIFormikMaterialUISelect';

export default SelectForms;
