import styled from 'styled-components'

import style from '../../assets/style';

export const Text = styled.p`
  padding: 0;
  margin: 0;
  padding: ${props => props.padding || 5}px;
  font-size: ${props => props.fontSize || 12}px;
  color: ${props => props.color || style.colors.black};
  opacity: ${props => props.opacity || 1};
  font-weight: ${props => props.bold && 700};
  ${props => props.timeline && 'align-self: flex-start;'}
`