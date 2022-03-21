import { PaginatedTable } from './../PaginatedTable';
import { useGetUsers } from './useGetUsers';

function App() {
  const { loading, error, users } = useGetUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user accounts data</p>;

  return (
    <div style={{ maxWidth: '95vw' }}>
      <PaginatedTable
        data={users}
        filterKeys={['firstName', 'lastName', 'country', 'mfa']}
        sortingConfig={{ amount: 'number', createdAt: 'date' }}
        rowsPerPage={20}
      />
    </div>
  );
}

export default App;
