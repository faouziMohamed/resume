import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
  title: string;
  BlobComponent: () => JSX.Element;
}

export default function SectionTitleWithBlob({
  title,
  BlobComponent,
}: SectionTitleProps) {
  return (
    <Box className='relative flex w-full max-w-[15rem] flex-col items-center border-b border-b-black'>
      <Typography
        variant='h2'
        className='text-center font-primary text-2xl font-[700] leading-6 text-black'
      >
        {title}
      </Typography>
      {BlobComponent && <BlobComponent />}
    </Box>
  );
}
