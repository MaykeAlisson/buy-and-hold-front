import React from 'react'

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

import PropTypes from "prop-types";

const Componente = ({open, onClose}) => {

    return (
        <Dialog
          sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
          maxWidth="xs"
          open={open}
        >
        <DialogTitle>Atualizar Assert</DialogTitle>
          <DialogContent dividers>
          <h3>Form</h3>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => {onClose()}}>
              Cancelar
            </Button>
            <Button onClick={()=> {alert('salva')}}>Slavar</Button>
          </DialogActions>
        </Dialog>
      );
}

Componente.propType = {
    open: PropTypes.bool,
    onClose: PropTypes.func
};

Componente.defaultProps = {
    open: false,
    onClose: () => {
    },
};

export default Componente;