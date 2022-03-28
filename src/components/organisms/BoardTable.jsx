import { TableCell, TableRow } from '@mui/material';

function BoardTable(props) {
  const { data } = props;
  return (
    <TableRow
      key={data.boardNo}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row" variant="head">
        {data.boardNo}
      </TableCell>
      <TableCell>{data.boardTitle}</TableCell>
      <TableCell>{data.boardAuthor}</TableCell>
      <TableCell>{data.boardContent}</TableCell>
      <TableCell>{data.boardCreatedAt}</TableCell>
    </TableRow>
    // <div
    //   style={{
    //     display: 'flex',
    //   }}
    // >
    //   <p>{data.boardNo} </p>
    //   <p>{data.boardTitle} </p>
    //   <p>{data.boardAuthor} </p>
    //   <p>{data.boardContent} </p>
    //   <p>{data.boardCreatedAt} </p>
    // </div>
  );
}

export default BoardTable;
