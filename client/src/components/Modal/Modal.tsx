import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FC } from 'react';

interface ModalProps {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
  title: string;
}

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

const BasicModal: FC<ModalProps> = ({ children, open, title }) => {
  return (
    <Modal open={open}>
      <Box sx={style}>
        <Typography id="modal-modal-title" align="center" variant="h6" component="h2">
          {title}
        </Typography>
        <Box id="modal-modal-container" sx={{ mt: 2 }}>
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;