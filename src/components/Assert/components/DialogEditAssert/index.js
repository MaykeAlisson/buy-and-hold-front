import React from 'react'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

import PropTypes from "prop-types";

const isLetters = (str) => /^[A-Za-z]*$/.test(str);

const Componente = ({ open, onClose }) => {

  const onInputChange = (e) => {
    const { value } = e.target;
    if (isLetters(value)) {
      setVal(value);
    }
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogContent dividers>
        <>
          <TextField
            error={false}
            id="dialog_edit_assert_ipt_nome"
            label="Nome"
            defaultValue="Valor recebidod"
            helperText="Incorrect entry."
            variant="filled"
            size="small"
          />
          <TextField
            error={false}
            id="dialog_edit_assert_ipt_nome"
            label="Valor"
            defaultValue="Valor recebidod"
            helperText="Incorrect entry."
            variant="filled"
            size="small"
            type='number'
            InputProps={{pattern: '[0-9]*' , inputProps: { min: 0, max: 1000 } }}
          />
          <TextField
            error={false}
            id="dialog_edit_assert_ipt_nome"
            label="PM"
            defaultValue="Valor recebidod"
            helperText="Incorrect entry."
            variant="filled"
            size="small"
            type='number'
            InputProps={{ inputProps: { min: 0, max: 1000 } }}
          />
          <TextField
            error={false}
            id="dialog_edit_assert_ipt_nome"
            label="Qtd"
            defaultValue="Valor recebidod"
            helperText="Incorrect entry."
            variant="filled"
            size="small"
            type='number'
            InputProps={{ inputProps: { min: 0, max: 100000 } }}
          />
          <TextField
            error={false}
            id="dialog_edit_assert_ipt_nome"
            label="Investido"
            defaultValue="Valor recebidod"
            helperText="Incorrect entry."
            variant="filled"
            size="small"
            type='number'
            InputProps={{ inputProps: { min: 0, max: 1000000 } }}
          />
        </>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { onClose() }}>
          Cancelar
        </Button>
        <Button onClick={() => { alert('editar') }}>Salvar</Button>
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