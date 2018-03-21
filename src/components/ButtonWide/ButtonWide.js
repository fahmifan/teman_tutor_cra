import styled from 'styled-components'

import style from '../../assets/style';

export const ButtonWide = styled.button`  
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.color || style.colors.skyBlue};
  height: 40px;
  width: ${props => props.width || 335}px;
  color: ${style.colors.white};
  font-size: ${style.fontSize[1]}px;
  margin-top: ${style.space[2]}px;  
  font-weight: 700;
  outline: none;
  ${props => props.selfEnd && 'align-self: flex-end;'}
  ${props => props.shadow && 'box-shadow: 2px 4px 4px rgba(68,68,68,0.6);'}
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`