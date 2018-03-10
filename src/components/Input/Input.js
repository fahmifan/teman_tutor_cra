import styled from 'styled-components';

import style from '../../assets/style';

export const Input = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: #e5e5e5;
  height: 40px;
  width: 335px;
  padding-left: ${style.space[2]}px;
  color: ${style.colors.black};
  font-size: ${style.fontSize[1]}px;
  margin-top: ${style.space[2]}px;
  &:focus {
    outline: none;
  }
`