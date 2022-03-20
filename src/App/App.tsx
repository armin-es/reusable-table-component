// import React, { useEffect } from 'react';
// import { Table } from '../Table';
// import './App.css';

import data from '../accounts-ui.json'
import { PaginatedTable } from './../PaginatedTable';
function App() {
  
  return (
    <div style={{maxWidth: '95vw'}}>
      <PaginatedTable data={data} />
    </div>
  );
}

export default App;
