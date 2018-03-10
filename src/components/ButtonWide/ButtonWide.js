import styled from 'styled-components'

import style from '../../assets/style';

export const ButtonWide = styled.button`  
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: ${style.colors.skyBlue};
  height: 40px;
  width: 335px;
  color: ${style.colors.white};
  font-size: ${style.fontSize[1]}px;
  margin-top: ${style.space[2]}px;
  font-weight: 700;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`