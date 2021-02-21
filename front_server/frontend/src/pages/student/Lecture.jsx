import React, {Component} from 'react';
import {Icon} from '@iconify/react';
import hamburgerMenu from '@iconify/icons-radix-icons/hamburger-menu';
import Frame from "../../components/Frame";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import Color from "../../styles/Color";
import OuterShadow from "../../styles/OuterShadow";
import ReactPlayer from "react-player";
import myVideo from '../../assets/example1.mp4';
import buttonBg from "../../assets/Group 12.png";
import Img1 from "../../assets/financial-administration-flat-vector-illustration_82574-8831.jpg";

class Lecture extends Component {
    constructor(props) {
        super(props);
        this.state={
            Keyword : {"places": ["21.4", "233.33", "246.69", "272.54"], "a graph": ["4.71", "9.21"], "a nice graph": ["9.99"], "inflection points": ["3.29", "16.48", "18.81", "244.82", "258.04"], "T independent variable T": ["11.96"], "the inflection points": ["16.34", "244.5"], "the function f": ["11.09"], "this video": ["0.54"]}
        }
    }
    render() {
        return (
            <Wrapper>
                <Menu>
                    <Icon icon={hamburgerMenu} style={{color: '#2e4467', fontSize: '56px'}}/>
                    <div style={{
                        fontFamily: 'Montserrat Alternates Extrabold',
                        color: '#2e4467',
                        fontSize: '50px',
                        marginLeft: '1vw'
                    }}>
                        Fundamentals of Blockchain
                    </div>
                </Menu>
                <Frame width={'70vw'} height={'80vh'} >
                    <ReactPlayer
                        className='react-player fixed-bottom'
                        url= {myVideo}
                        width='100%'
                        height='100%'
                        borderradius='50px'
                        controls = {true}
                    />
                </Frame>
                <Frame width={'17vw'} height={'80vh'} style={{marginLeft: '3vw', justifyContent: "flex-start"}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontFamily: 'Montserrat Alternates Semibold',
                        color: '#2e4467',
                        fontSize: '30px',
                        marginTop: '2vw'
                    }}>
                        Bookmarks
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            fontFamily: 'Montserrat Alternates Semibold',
                            color: '#2e4467',
                            fontSize: '20px',
                            marginTop: '2vw'
                        }}>
                            places<br/>
                            00:21 03:53 04:06 04:32<br/>
                            <br/>
                            a graph<br/>
                            00.04 00.09<br/>
                            <br/>
                            a nice graph<br/>
                            00.09<br/>
                            <br/>
                            inflection points<br/>
                            00:03 00:16 00:18 04:04 04:18<br/>
                            <br/>
                            T independent variable T<br/>
                            11:96<br/>
                            <br/>
                            the inflection points<br/>
                            00:16 04:04<br/>
                            <br/>
                            the fuction f<br/>
                            00:11<br/>
                            <br/>
                            this video<br/>
                            00:00<br/>
                        </div>
                    </div>
                </Frame>
                <img
                    src={buttonBg}
                    width='10%'
                    alt='Principles of Economics 1'
                    style={{position: "absolute", top: '10px', right: '10px'}}/>
            </Wrapper>
        );
    }
}

export default Lecture;

const Menu = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubjectList = styled.div`
  display: grid;
  margin-top: 2vw;
  margin-left: 2vw;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 60vh;
  width: 66vw;
  column-gap: 2vw;
  row-gap: 2vw;
`;
const Subject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  border: 0;
  ${OuterShadow}
`;
const NameForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20%;
  font-family: "Montserrat Alternates";
  font-size: 20px;
  justify-content: space-between;
  ${Color}  
`;

const ChatButton = styled.button`
  position : absolute;
  
`;