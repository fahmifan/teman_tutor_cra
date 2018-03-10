import styled from 'styled-components'

import style from '../../assets/style';

export const Text = styled.p`
  padding: 0;
  margin: 0;
  padding: 5px;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  font-weight: ${props => props.bold && 700};
`