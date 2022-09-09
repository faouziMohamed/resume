import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { FC, ReactNode, useEffect, useRef } from 'react';

import Transition from './Transition';

interface IDialogProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  children: ReactNode;
  title?: string;
  sx?: SxProps<Theme>;
  closeBtnText?: string;
  CloseButtonComponent?: typeof Button;
  closeOnlyOnBtnClick?: boolean;
}

const FZDialog: FC<IDialogProps> = (props) => {
  const {
    closeBtnText = 'Close',
    CloseButtonComponent = Button,
    closeOnlyOnBtnClick = false,
  } = props;
  const { sx, open = false, setOpen = () => {}, children, title = '' } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Dialog
      open={open}
      onClose={!closeOnlyOnBtnClick ? handleClose : () => {}}
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
      TransitionComponent={Transition}
      className='bg-black bg-opacity-20'
      sx={sx}
    >
      {title && (
        <DialogTitle>
          <Typography variant='h6'>{title}</Typography>
        </DialogTitle>
      )}
      <DialogContent className='p-0'>{children}</DialogContent>
      <DialogActions className='p-1'>
        <CloseButtonComponent onClick={handleClose} className='font-bold'>
          {closeBtnText}
        </CloseButtonComponent>
      </DialogActions>
    </Dialog>
  );
};

export default FZDialog;
