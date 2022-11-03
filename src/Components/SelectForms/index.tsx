import * as React from 'react';

import { getIn, FieldProps } from 'formik';

import MuiSelect, {
  SelectProps as MuiSelectProps,
} from '@material-ui/core/Select';
import MuiFormHelperText from '@material-ui/core/FormHelperText';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiInputLabel from '@material-ui/core/InputLabel';

export interface SelectProps
  extends FieldProps,
  Omit<MuiSelectProps, 'name' | 'value'> { }

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
