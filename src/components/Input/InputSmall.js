import styled from 'styled-components';

import style from '../../assets/style';

export const InputSmall = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: #e5e5e5;
  height: 40px;
  width: 320px;
  margin-top: 10px;
  padding-left: ${style.space[2]}px;
  color: ${style.colors.black};
  font-size: 14px;
  &:focus {
    outline: none;
  }
`