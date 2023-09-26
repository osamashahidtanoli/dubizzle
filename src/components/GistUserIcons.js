import React from 'react';
import styled from 'styled-components';
import {IoGitBranchOutline} from 'react-icons/io5';
import {FiFile} from 'react-icons/fi';
import {BiCommentDots} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';

const GistUserIcons = ({comments, files}) => {
  return (
    <UserIcons>
        <TextIcons>
        <FiFile style={{color: '#1B73DA'}} />
        <TextPara>{files || 0}  Files</TextPara>
        </TextIcons>
        <TextIcons>
        <IoGitBranchOutline style={{color: '#1B73DA'}} />
        <TextPara>Forks</TextPara>
        </TextIcons>
        <TextIcons>
        <BiCommentDots style={{color: '#1B73DA'}} />
        <TextPara>{comments || 0} Comments</TextPara>
        </TextIcons>
        <TextIcons>
        <AiFillStar style={{color: '#1B73DA'}} />
        <TextPara>Stars</TextPara>
        </TextIcons>
        </UserIcons>
  )
}

const UserIcons = styled.div`
display: flex;
gap: 1rem;
width: 100%;
`;

const TextIcons = styled.div`
display: flex;
gap: 0.3rem;
align-items: center;
`;

const TextPara = styled.div`
color: #1B73DA;
font-size: 0.8rem;
font-weight: bold;
`;

export default  GistUserIcons;