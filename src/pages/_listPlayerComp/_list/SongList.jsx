import * as React from 'react';
import { WithLoading } from '../../../util-components/';
import useSongList from './useSongList';
import { SongListItem } from './_item/SongListItem';

export const SongList = React.memo(({ playlistId }) => {

  const { data, loading, onClick } = useSongList(playlistId);

  const listItems = React.useMemo(() => {
    return data?.getSongs?.map((d) => {
      return(
        <SongListItem data={d} onClick={onClick} />
      )
    })
  }, [data, onClick])

  return(
    <WithLoading loading={loading}>
      {listItems}
    </WithLoading>
  )
});