import { Box, Typography } from '@mui/material';
import { FC } from 'react';

export default function LayerIntro({
  message,
  BlobComponent,
  showLines = true,
}: {
  message: string;
  BlobComponent?: FC;
  showLines?: boolean;
}) {
  return (
    <div className='flex w-full items-center justify-center gap-3'>
      <BlockLine showLines={showLines} />
      <Box className='flex flex-col'>
        <Typography
          variant='subtitle1'
          component='p'
          className=' font-base grow  text-center font-primary text-[1.0625rem] leading-5 text-black'
        >
          {message}
        </Typography>
        {BlobComponent && <BlobComponent />}
      </Box>
      <BlockLine showLines={showLines} />
    </div>
  );
}
function BlockLine({ showLines = true }: { showLines?: boolean }) {
  return showLines ? (
    <div className='flex grow basis-20 border-b border-slate-300 md:grow-[.1] md:basis-40 ' />
  ) : (
    <div />
  );
}
