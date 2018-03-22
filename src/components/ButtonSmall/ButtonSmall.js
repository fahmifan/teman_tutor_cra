import styled from 'styled-components';

import style from '../../assets/style';

const BtnSmall = styled.button`
box-sizing: border-box;
border: none;
width: 60px;
height: 25px;
border-radius: 5px;
background-color: ${props => props.color || '#2296F3'};
color: ${style.colors.white};
position: absolute;
right: 0;
bottom: 0;
margin-bottom: 10px;
margin-right: 20px;
&:hover {
  cursor: pointer;
}
`

export default BtnSmall;