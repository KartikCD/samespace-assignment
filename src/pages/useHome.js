import * as React from 'react';
import { useLazyQuery } from "@apollo/client"
import { GET_SONGS } from '../graphql/queries';

export default function useHome() {
  const [ queryBlock, {data, loading, error} ] = useLazyQuery(GET_SONGS);
  
  React.useEffect(() => {
    queryBlock({
      variables: {
        playlistId: 1
      }
    });
  }, [queryBlock])

  console.log(data);

  const queryParameters = React.useMemo(() => (
    {
      playlistId: 1
    }
  ), [])


  return {
    queryParameters,
    queryBlock,
    data,
    loading,
    error
  }
}