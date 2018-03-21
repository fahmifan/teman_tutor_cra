import styled from 'styled-components'

import style from '../../assets/style';

export const ButtonLanding = styled.button`  
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
  height: 50px;
  width: ${props => props.width || 160}px;
  margin: 0 20px;
  color: ${style.colors.white};
  font-size: ${style.fontSize[1]}px;
  margin-top: ${style.space[2]}px;
  font-weight: 700;
  outline: none;
  ${props => props.selfEnd && 'align-self: flex-end;'}
  &:hover {
    border: none;
    color: ${style.colors.white};
    background-color: ${style.colors.skyBlue};
    cursor: pointer;
  }
`