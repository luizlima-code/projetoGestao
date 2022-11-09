import React from 'react';
import { Field, FieldAttributes } from 'formik';

function FieldsForms(props: FieldAttributes<any>): React.ReactElement {
  const { titleId, id, label, children, dateTime, inputProps } = props;
  const labelledby = `${titleId} ${id}-label`;

  const accessibleProps = dateTime
    ? {
        inputProps: {
          'aria-labelledby': labelledby,
        },
        KeyboardButtonProps: {
          'aria-labelledby': labelledby,
        },
        DialogProps: {
          'aria-label': label,
        },
      }
    : {
        inputProps: {
          'aria-labelledby': labelledby,
          ...inputProps,
        },
      };

  return (
    <Field {...props} {...accessibleProps}>
      {children}
    </Field>
  );
}

export default FieldsForms;
