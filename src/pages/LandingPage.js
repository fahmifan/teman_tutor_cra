import React, { Component } from 'react';
import styled from 'styled-components';

import style from '../assets/style';
import Auxi from '../hoc/Auxi'; 
import { Navbar, TemanTutorGroup, ButtonLanding } from '../components';
import bgLandingImage from '../assets/backgrounds/bgLandingImage2.png';
import temanTutorLogo from '../assets/icons/TemanTutorLogos4.png';


const LandingStart = styled.div`
  width: 100%;
  height: 600px;
`

const BgImage = styled.div`
  height: 100%;
  background-image: url(${bgLandingImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

const LandingStartBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
`

const LandingStartLogo = styled.div`
    width: 350px;
    height: 370px;
    margin: 0 auto;
    background-size: cover;
    background-repeat: no-repeat;
`

const LandingStartButton = styled.div`
    margin: 0 auto;
`

const Img = styled.img`
    max-width: 100%;
    max-height: 100%
`
const LandingGroup = styled.div`
    background-color: #fff;
    width: 100%;
    height: wrap-content;
    padding: 40px 0;
`

const H3 = styled.h3`
    color: ${style.colors.darkgrey};
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin: 0;
`
const H3Line = styled.div`
    height: 3px;
    width: 50px;
    background-color: ${style.colors.skyBlue};
    margin: 30px auto 30px auto;
`

const Footer = styled.div`
    width: 100%
    height: 370px;
    background-color: ${style.colors.darkgrey};
    padding-top: 40px;
    position: relative;
`

const FooterUp = styled.div`

    width: 500px
    height: 370px;
    margin-left: 80px;
    padding 10px;

`

const H4 = styled.h4`
    color: ${style.colors.white};
    font-size: 25px;
    font-weight: 700;
    margin: 0;
`
const P = styled.p`
    color: #fff;
    font-Size: 14px;
    font-weight: 0;
    margin-bottom: 30px;
`
const P2 = styled.p`
    color: #fff;
    font-Size: 13px;
    font-weight: 0;
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 30px;
`
const P3 = styled.p`
    color: #fff;
    font-Size: 14px;
    font-weight: 0;
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 30px;
    padding-left: 80px;
`


const FooterDown = styled.div`

    width: 100%
    height: 50px;
    background-color: #2f3235;
    position: absolute;
    bottom: 0;
`

export class LandingPage extends Component {
  render() {
    return (
      <Auxi>
        <Navbar />
        <LandingStart>
            <BgImage>
                <LandingStartBox>
                    <LandingStartLogo>
                        <Img src={temanTutorLogo} />
                    </LandingStartLogo>
                    <LandingStartButton>
                        <ButtonLanding>Sign Up</ButtonLanding>  
                        <ButtonLanding>Log In</ButtonLanding>
                    </LandingStartButton>
                </LandingStartBox>
            </BgImage>
        </LandingStart>
        <LandingGroup>    
            <H3>Recent Study Group</H3>
            <H3Line />
            <TemanTutorGroup />
        </LandingGroup>
        <Footer>
            <FooterUp>
                <H4> Teman Tutor </H4>
                <P2>Aplikasi Website bagi mahasiswa untuk saling berbagi dan belajar bersama dalam study group buatan mereka sendiri. Di aplikasi ini, mereka yg memiliki ilmu lebih di bidangnya, dapat menjadi tutor untuk para mahasiswa yg kurang mahir dalam bidang tersebut.</P2>
        
                <P>
                      <strong>Headquarters:</strong><br/>
                      Departemen Ilmu Komputer Unpad<br/>
                      Jln. Raya Bandung-Sumedang Km. 21. Jatinangor
                </P>
                <P>
                    <strong>Phone:</strong><span> (+62) 8579 7068 654 </span><br/>
                    <strong>Line:</strong><span> (+62) 8579 7068 654 </span><br/>
                    <strong>Email:</strong><span> temantutorku@gmail.com </span><br/>
                </P>
            </FooterUp>
            <FooterDown>
                <P3>Copyrights &copy; 2018 All Rights Reserved by TemanTutor Inc.</P3>
            </FooterDown>
        </Footer>
      </Auxi>
    );
  }
}