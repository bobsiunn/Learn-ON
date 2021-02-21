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
            ,isHidden1 : true,isHidden2 : true,isHidden3 : true,isHidden4 : true,isHidden5 : true,isHidden6 : true, isHidden7: true
        }
    }
    toggleHidden1 () {
        this.setState({
            isHidden1: !this.state.isHidden1
        })
    }
    toggleHidden2 () {
        this.setState({
            isHidden2: !this.state.isHidden2
        })
    }
    toggleHidden3 () {
        this.setState({
            isHidden3: !this.state.isHidden3
        })
    }
    toggleHidden4 () {
        this.setState({
            isHidden4: !this.state.isHidden4
        })
    }
    toggleHidden5 () {
        this.setState({
            isHidden5: !this.state.isHidden5
        })
    }
    toggleHidden6 () {
        this.setState({
            isHidden6: !this.state.isHidden6
        })
    }
    toggleHidden7 () {
        this.setState({
            isHidden7: !this.state.isHidden7
        })
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
                            alignItems: 'flex-start',
                            fontFamily: 'Montserrat Alternates Semibold',
                            color: '#2e4467',
                            fontSize: '20px',
                            marginTop: '2vw'
                        }}>
                            <div onClick={this.toggleHidden1.bind(this)}> places<br/> </div>
                            00:21 03:53 04:06 04:32<br/>
                            <br/>
                            <div onClick={this.toggleHidden2.bind(this)}>a graph<br/></div>
                            00.04 00.09<br/>
                            <br/>
                            <div onClick={this.toggleHidden3.bind(this)}> inflection points </div>
                            00:03 00:16 00:18 04:04 04:18<br/>
                            <br/>
                            <div onClick={this.toggleHidden4.bind(this)}>T independent variable T<br/></div>
                            11:96<br/>
                            <br/>
                            <div onClick={this.toggleHidden5.bind(this)}>the inflection points<br/></div>
                            00:16 04:04<br/>
                            <br/>
                            <div onClick={this.toggleHidden6.bind(this)}>the function f<br/></div>
                            00:11<br/>
                            <br/>
                            <div onClick={this.toggleHidden7.bind(this)}>this video<br/></div>
                            00:00<br/>
                        </div>
                    </div>
                </Frame>
                {!this.state.isHidden1 && <Modal1/>}
                {!this.state.isHidden2 && <Modal2/>}
                {!this.state.isHidden3 && <Modal3/>}
                {!this.state.isHidden4 && <Modal4/>}
                {!this.state.isHidden5 && <Modal5/>}
                {!this.state.isHidden6 && <Modal6/>}
                {!this.state.isHidden7 && <Modal7/>}
                <img
                    src={buttonBg}
                    width='10%'
                    alt='Principles of Economics 1'
                    style={{position: "absolute", top: '10px', right: '10px'}}/>

            </Wrapper>
        );
    }
}
class Modal1 extends Component{
    render() {
        return(
            <Frame style={{position:'absolute', width: '50vw', height: '15vh',
                alignItems: 'flex-start',
                fontFamily: 'Montserrat Alternates',
                color: '#2e4467',
                fontSize: '18px',
                marginTop: '-600px', borderRadius: '20px' , paddingRight: '30px', paddingLeft: '30px'}}>
                00:21 Well, remember, inflection points are places where the con cavity changes, so it's a good idea to remember what Con cavity is.
                <br/>03:53 Then we turned down So these green points of the places where we change the direction in which returning and the white along the white intervals were turning up along the red intervals were turning down.
                <br/>04:06 These are the places where we change the direction in which returning. So in this case it looks like there are altogether five inflection points.
                <br/>04:32 Those are the places where the can cavity changes",
            </Frame>
        );
    }
}
class Modal2 extends Component{
    render() {
        return(
            <Frame style={{position:'absolute', width: '50vw', height: '10vh',
                fontFamily: 'Montserrat Alternates',
                color: '#2e4467',alignItems: 'flex-start',
                fontSize: '18px',
                marginTop: '-450px', borderRadius: '20px' , paddingRight: '30px', paddingLeft: '30px'}}>
                00.04 this video is going to explain how to find inflection points on a graph.
                <br/>00.09 So let's suppose we have a graph.
            </Frame>
        );
    }
}
class Modal3 extends Component{
    render() {
        return(
            <Frame style={{position:'absolute', width: '50vw', height: '10vh',
                fontFamily: 'Montserrat Alternates',
                color: '#2e4467',
                fontSize: '18px',alignItems: 'flex-start',
                marginTop: '-200px', borderRadius: '20px', paddingRight: '30px', paddingLeft: '30px'}}>
                00:03 This video is going to explain how to find inflection points on a graph. So let's suppose we have a graph. <br/>
                00:16 This is the function f of T independent variable T and were asked to find What are the inflection points? <br/>
                00:18 Well, remember, inflection points are places where the con cavity changes, so it's a good idea to remember what Con cavity is. <br/>
            </Frame>
        );
    }
}
class Modal4 extends Component{
    render() {
        return(
            <Frame style={{position:'absolute', width: '50vw', height: '10vh',
                fontFamily: 'Montserrat Alternates',
                color: '#2e4467',
                fontSize: '18px',alignItems: 'flex-start',
                marginTop: '-80px', borderRadius: '20px', paddingRight: '30px', paddingLeft: '30px'}}>
                11:96 This is the function f of T independent variable T and were asked to find What are the inflection points?
            </Frame>
        );
    }
}
class Modal5 extends Component{
    render() {
        return(
            <Frame style={{position:'absolute', width: '50vw', height: '10vh',
                fontFamily: 'Montserrat Alternates',
                color: '#2e4467',alignItems: 'flex-start',
                fontSize: '18px',
                marginTop: '60px', borderRadius: '20px', paddingRight: '30px', paddingLeft: '30px'}}>
                00:16 This is the function f of T independent variable T and were asked to find What are the inflection points?
                <br/>04:04 So these, in fact, are the inflection points.
            </Frame>
        );
    }
}
class Modal6 extends Component{
    render() {
        return(
            <Frame style={{position:'absolute', width: '50vw', height: '10vh',
                fontFamily: 'Montserrat Alternates',
                color: '#2e4467',alignItems: 'flex-start',
                fontSize: '18px',
                marginTop: '200px', borderRadius: '20px', paddingRight: '30px', paddingLeft: '30px'}}>
                00:11 This is the function f of T independent variable T and were asked to find What are the inflection points?
            </Frame>
        );
    }
}
class Modal7 extends Component{
    render() {
        return(
            <Frame style={{position:'absolute', width: '50vw', height: '10vh',
                fontFamily: 'Montserrat Alternates',
                color: '#2e4467',
                fontSize: '18px',alignItems: 'flex-start',
                marginTop: '400px', borderRadius: '20px', paddingRight: '30px', paddingLeft: '30px'}}>
                00:00 This video is going to explain how to find inflection points on a graph. So let's suppose we have a graph.
            </Frame>
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