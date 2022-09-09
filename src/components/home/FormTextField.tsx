import { Box, InputLabel, TextField } from '@mui/material';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export default function FormTextField(props: FormTextFieldProps) {
  const { register, type = 'text', name, label, placeholder } = props;
  return (
    <Box className='flex flex-col gap-1 '>
      <InputLabel
        htmlFor={`${name}-input`}
        className='font-[Roboto] text-base font-[500] text-dark text-opacity-90'
      >
        {label}
      </InputLabel>
      <TextField
        type={type}
        placeholder={placeholder}
        multiline={type === 'textarea'}
        rows={type === 'textarea' ? '4' : '1'}
        id={`${name}-input`} // eslint-disable-next-line react/jsx-props-no-spreading
        {...register}
        className='rounded-md bg-[#ecfffd]'
        sx={{
          '.MuiInputBase-input': {
            backgroundColor: '#ecfffd',
            borderRadius: 'rounded-md',
            boxShadow: 'none',
          },
        }}
      />
    </Box>
  );
}
export interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormTextFieldProps {
  register: UseFormRegisterReturn;
  type: string;
  name: keyof FormValues;
  label: string;
  placeholder: string;
  error?: FieldError;
}
