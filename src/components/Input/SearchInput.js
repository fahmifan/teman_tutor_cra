import React, { Component } from 'react';
import styled from 'styled-components';


import SearchIcon from '../../assets/icons/SearchIcon.png';

export const SearchInput = styled.input`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  width: 150px;
  box-sizing: border-box;
  border: 2px solid #CCC;
  border-radius: 4px;
  font-size: 16px;
  background-image: url(${SearchIcon});
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  margin: 50px 10px 50px 10px;
  right: 220px;
  position: absolute;
  transition: width 0.4s ease-in-out;
  &:focus {
    width: 220px;
  } 
`