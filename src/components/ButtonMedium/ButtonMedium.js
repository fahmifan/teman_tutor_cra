import styled from 'styled-components'

import style from '../../assets/style';

export const ButtonMedium = styled.button`  
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.color || style.colors.green};
  height: 45px;
  width: ${props => props.width || 140}px;
  color: ${style.colors.white};
  font-size: ${style.fontSize[1]}px;
  margin-top: ${style.space[2]}px;
  font-weight: 700;
  outline: none;
  ${props => props.selfEnd && 'align-self: flex-end;'}
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`