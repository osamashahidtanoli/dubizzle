import styled from 'styled-components'
import Octicon from 'react-octicon'
import React from 'react'
import { useDispatch } from 'react-redux';
import { getSearchList } from '../store/reducers';

const Search = () => {
  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch()

  const onSearch = (e) => {
    dispatch(getSearchList(search))
    e.preventDefault();
  }

  return (
    <Wrapper>
      <InputBox>
      <Octicon name="search" />
      <form onSubmit={onSearch}>
      <Input onChange={(e) => setSearch(e.target.value)} placeholder="Search Gists for the username"/>
      </form>
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
