import React from 'react';

import { useFormContext } from 'react-hook-form';

interface ICheckbox {
  id?: any;
  label: string;
  name: string;
  value?: string | number;
  defaultChecked?: boolean;
  onChange?: (
    event: React.SyntheticEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const FormCheckbox = ({
  id,
  label,
  name,
  value,
  defaultChecked,
}: ICheckbox) => {
  const { register } = useFormContext();

  return (
    <>
      <input
        type="checkbox"
        value={value}
        defaultChecked={defaultChecked}
        {...register(name)}
      />
      <label id={id} htmlFor={name}>
        {label}
      </label>
    </>
  );
};

export default FormCheckbox;
