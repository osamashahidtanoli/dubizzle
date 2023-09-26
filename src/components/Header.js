import React from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import Search from './Search';
import { useDispatch } from 'react-redux';
import { getGistUser } from '../store/reducers';

function Header() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getGistUser())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      <Octicon name="mark-github" mega/>
      <Search />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header
