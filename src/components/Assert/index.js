import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NewAssert from './components/DialogNewAssert';
import EditAssert from './components/DialogEditAssert';
import DeleteAssert from './components/DialogDeleteAssert';

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

const ASSERT_SELECT_VALUE = {
  "id": undefined,
  "nome": null
};

const Assert = () => {

  const [newAssert, setNewAssert] = React.useState(false);
  const [editAssert, setEditAssert] = React.useState(false);
  const [deleteAssert, setDeleteAssert] = React.useState(false);
  const [asserSelect, setAssertSelect] = React.useState(ASSERT_SELECT_VALUE);

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Assert</TableCell>
              <TableCell align="right">Valor ($)</TableCell>
              <TableCell align="right">Qtd</TableCell>
              <TableCell align="right">PM ($)</TableCell>
              <TableCell align="right">Investido ($)</TableCell>
              <TableCell align="right">Total ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name} sx={{ '& > *': { borderBottom: 'unset' } }}>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell>
                  <IconButton
                      aria-label="Editar"
                      size="small"
                      onClick={() => { setEditAssert(true) }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Delete"
                      size="small"
                      onClick={() => {
                        setAssertSelect({... {"id": row.fat, "nome": row.name} })
                         setDeleteAssert(true) 
                        }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="add" size="medium" style={fabStyle}
          onClick={() => { setNewAssert(true) }}
        >
          <AddIcon />
        </Fab>
      </Box>
      <NewAssert
        open={newAssert}
        onClose={() => { setNewAssert(false) }}
      />
      <EditAssert
        open={editAssert}
        onClose={() => { setEditAssert(false) }}
      />
      <DeleteAssert
        open={deleteAssert}
        onClose={() => { setDeleteAssert(false) }}
        assert={asserSelect}
      />
    </React.Fragment>
  );
}

export default Assert;