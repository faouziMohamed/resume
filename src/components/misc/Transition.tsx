import { Slide, SlideProps } from '@mui/material';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props: SlideProps, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction='up' ref={ref} {...props} />;
});

export default Transition;
