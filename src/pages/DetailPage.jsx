import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailPage() {
  const { boardNo } = useParams();
  return (
    <div>
      <h1>샘플용 상세 페이지</h1>
      HELLO WORLD {boardNo}
    </div>
  );
}

export default DetailPage;
