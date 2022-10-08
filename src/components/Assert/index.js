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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell>
          <IconButton
            aria-label="Lancamento"
            size="small"
            onClick={() => { setNewLanch(true) }}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            size="small"
            onClick={() => { setDeleteAssert(true) }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="Editar"
            size="small"
            onClick={() => { setEditAssert(true) }}
          >
            <EditIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Lançamentos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Operação</TableCell>
                    <TableCell align="right">Qtd</TableCell>
                    <TableCell align="right">Preço ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">{historyRow.valor}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          aria-label="Delete"
                          size="small"
                          onClick={() => { setDeleteLaunch(true) }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Assert = () => {

  const [newAssert, setNewAssert] = React.useState(false);
  const [newLaunch, setNewLanch] = React.useState(false);
  const [editAssert, setEditAssert] = React.useState(false);
  const [deleteLaunch, setDeleteLaunch] = React.useState(false);
  const [deleteAssert, setDeleteAssert] = React.useState(false);

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Assert</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">PM ($)</TableCell>
              <TableCell align="right">Valor ($)</TableCell>
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
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="Lancamento"
                      size="small"
                      onClick={() => { setNewLanch(true) }}
                    >
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Delete"
                      size="small"
                      onClick={() => { setDeleteAssert(true) }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Editar"
                      size="small"
                      onClick={() => { setEditAssert(true) }}
                    >
                      <EditIcon />
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
    </React.Fragment>
  );
}

export default Assert;