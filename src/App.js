// import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BoardTable from './components/organisms/BoardTable'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'


function App() {
  const [board, setBoard] = useState([])
  useEffect(() => {

    async function getBoardData() {
      const { data } = await axios.get("http://localhost:8080/board")
      setBoard(data)
    }

    getBoardData()

  }, [])
  return (
    <div className="main" >
      <h1>샘플용 보드</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>게시글 번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>글쓴이</TableCell>
              <TableCell>내용물</TableCell>
              <TableCell>작성일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {board.map((val, idx) => <BoardTable data={val} key={idx} />)}
          </TableBody>
        </Table>


      </TableContainer>


    </div>
  );
}

export default App;
