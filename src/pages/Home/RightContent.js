import React from 'react';
import styled from 'styled-components';

import style from '../../assets/style';
import {Text} from '../../components';

const ProfilPic = styled.div`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border: 3px solid #333;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 30px;
`

const MemberCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Members = props => (
  <List>
    <MemberCard>
      <ProfilPic><Text fontSize={style.fontSize[1]} bold>J</Text></ProfilPic>
      <Text fontSize={style.fontSize[1]}>John Doe</Text>
    </MemberCard>
    <MemberCard>
      <ProfilPic><Text fontSize={style.fontSize[1]} bold>J</Text></ProfilPic>
      <Text fontSize={style.fontSize[1]}>John Doe</Text>
    </MemberCard>
    <MemberCard>
      <ProfilPic><Text fontSize={style.fontSize[1]} bold>J</Text></ProfilPic>
      <Text fontSize={style.fontSize[1]}>John Doe</Text>
    </MemberCard>
    <MemberCard>
      <ProfilPic><Text fontSize={style.fontSize[1]} bold>J</Text></ProfilPic>
      <Text fontSize={style.fontSize[1]}>John Doe</Text>
    </MemberCard>    
  </List>
);

export default Members;