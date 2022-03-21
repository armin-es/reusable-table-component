import { useQuery } from '@apollo/client';
import { GET_USERS } from './query';

export const useGetUsers = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  return { loading, error, users: data?.users };
};
