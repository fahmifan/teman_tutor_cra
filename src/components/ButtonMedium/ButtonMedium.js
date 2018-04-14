import styled from 'styled-components'

import style from '../../assets/style';

export const ButtonMedium = styled.button`  
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  color: ${style.colors.white};
  background-color: ${props => props.color || style.colors.green};
  ${props => props.idJoined && 
    `color: ${style.colors.green}; 
    background-color: ${style.colors.white}
    border: 1px solid ${style.colors.green}`
  }
  height: ${props => props.height || 45}px;;
  width: ${props => props.width || 140}px;
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