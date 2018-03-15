import styled from 'styled-components';

export const Background = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 1024px;
  height: 100%;
  background-color: #fbfbfb;
  margin: 0 auto;
  padding-top: 10px;
  ${props => props.paddingNul && 'padding-top: 0px;'}
  z-index: 0;
`