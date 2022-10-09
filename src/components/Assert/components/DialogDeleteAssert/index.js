import React from 'react'

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

import PropTypes from "prop-types";

const Componente = ({open, onClose, assert}) => {

    return (
        <Dialog
          sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
          maxWidth="xs"
          open={open}
        >
        <DialogTitle>Deletar Assert</DialogTitle>
          <DialogContent dividers>
          <Typography variant="h6" gutterBottom style={{'color': 'red'}}>
            Deletar Assert {assert.nome} ?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {onClose()}}>
              Cancelar
            </Button>
            <Button onClick={()=> {alert('deleta')}}>Deletar</Button>
          </DialogActions>
        </Dialog>
      );
}

Componente.propType = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    assert: PropTypes.object
};

Componente.defaultProps = {
    open: false,
    onClose: () => {
    },
    assert: {}
};

export default Componente;