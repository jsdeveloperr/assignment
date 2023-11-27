import React from 'react';

import { Checkbox as MUICheckbox, FormControlLabel } from '@mui/material';

interface ICheckbox {
  label: string;
  value?: string | number | boolean;
  defaultChecked?: boolean;
  onChange?: (
    event: React.SyntheticEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const Checkbox = ({ label, value, defaultChecked, onChange }: ICheckbox) => {
  return (
    <FormControlLabel
      control={
        <MUICheckbox
          onChange={onChange}
          defaultChecked={defaultChecked}
          sx={{
            '&.Mui-checked': {
              color: '#7108aa',
            },
          }}
        />
      }
      label={label}
      value={value}
    />
  );
};

export default Checkbox;
