import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import FormTextField, { FormValues } from '@/components/home/FormTextField';

import { emailRegex } from '@/utils/utils';

interface InputFieldProps {
  className?: string;
}

export default function ContactForm(props: InputFieldProps) {
  const { className = '' } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Box
      component='form'
      className={`flex w-full max-w-[50rem] flex-col gap-4 rounded-xl bg-form-gradient p-4 ${className}`} // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormTextField
        register={register('email', { required: true, pattern: emailRegex })}
        type='email'
        name='email'
        label='Email'
        placeholder='example@xyz.com'
        error={errors.email}
      />
      <FormTextField
        register={register('name', { required: true })}
        type='text'
        name='name'
        label='Name'
        placeholder='Your name'
        error={errors.name}
      />
      <FormTextField
        register={register('message', { required: true })}
        type='textarea'
        name='message'
        label='Message'
        placeholder='Your message here'
        error={errors.message}
      />
      <Box className='flex w-full justify-start'>
        <Button
          type='submit'
          variant='contained'
          className='w-full bg-primary-500'
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
