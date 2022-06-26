import * as React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_SONGS } from "../../../graphql/queries";

export default function useSongList(playlistId) {
  const [queryBlock, { data, loading, error }] = useLazyQuery(GET_SONGS);

  React.useEffect(() => {
    queryBlock({
      variables: {
        playlistId: playlistId
      },
    });
  }, [queryBlock, playlistId]);
  
  const onClick = React.useCallback((d) => {
    console.log(d)
  }, []);

  return {
    data,
    loading,
    error,
    onClick
  };
}
