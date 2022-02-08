import React from 'react';
import styled from 'styled-components';
// Stretch goal
const StoryButtonStyled = (prop) => {
  return <StyledStoryBtn onClick={prop}></StyledStoryBtn>;
};

export default StoryButtonStyled;

const StyledStoryBtn = styled.button`
  margin: 5px;
  border-color: #d5e5c6;
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: var(--attribute);
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;
  }

  &:hover,
  &:focus{
    color: var(--attribute);
    border-color: #888;
    outline: 0;
  }
 
 &:hover {
    color: var(--focus);
    background-color: #d5e5c6;
    border-color: #d5e5c6;
  }
`;
