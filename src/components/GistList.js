import React from 'react'
import Gist from './Gist'
import { useSelector } from 'react-redux'

const GistList = () => {
  const gistUserList = useSelector(state => state.gistUsers.gistUsers) ?? [];
  const isLoading = useSelector(state => state.gistUsers.isLoading);
  const isError = useSelector(state => state.gistUsers.isError);

  if(isLoading) return <p style={{textAlign: 'center'}}>Loading...</p>

  if(isError) return <p>{isError}</p>

  if(gistUserList.length === 0) return (<p>Not Found </p>)
  
  return( 
    gistUserList.map(gistUser => <Gist key={gistUser.id} gist={gistUser} />)
  )
}

export default GistList
