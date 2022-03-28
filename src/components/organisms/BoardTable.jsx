import { TableCell, TableRow } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ko';
function BoardTable({ data }) {
  return (
    <TableRow
      key={data.boardNo}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row" variant="head">
        {data.boardNo}
      </TableCell>
      <TableCell>
        <Link to={`/board/${data.boardNo}`} key={data.boardNo}>
          {data.boardTitle}
        </Link>
      </TableCell>
      <TableCell>{data.boardAuthor}</TableCell>
      <TableCell>{data.boardContent}</TableCell>
      <TableCell>
        {dayjs(data.boardCreatedAt)
          .locale('ko-KR')
          .format('YYYY-MM-DD (dd) HH:mm:ss')}
      </TableCell>
    </TableRow>
  );
}

export default BoardTable;
