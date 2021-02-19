import React, {Component, Fragment} from 'react';
import Frame from "../../components/Frame";
import StyledButton from "../../components/StyledButton";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import {Icon} from '@iconify/react';
import chevronDown from '@iconify/icons-akar-icons/chevron-down';
import Color from "../../styles/Color";

/*TODO: Choose your subject 이름 바뀌게 해야함*/

class ChooseSubject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: true
        }
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        return (
            <Wrapper>
                <Frame width={'70vh'} height={'70vh'}>
                    <div style={{marginTop: '50px'}}>Learn ON</div>
                    <div>
                        <Dropdown width={'40vh'} height={'5vh'} onClick={this.toggleHidden.bind(this)} style={{marginBottom:20}}>
                            <div style={{marginLeft : 10}}>Choose your subject</div>
                            <Icon icon={chevronDown} style={{color: '#2e4467', fontSize: '24px'}} />
                        </Dropdown>
                        {!this.state.isHidden && <Subjects width={'40vh'} height={'15vh'}>
                            <Subject onClick={this.toggleHidden.bind(this)}>Fluid Mechanics</Subject>
                            <Subject onClick={this.toggleHidden.bind(this)}>Dynamics</Subject>
                            <Subject onClick={this.toggleHidden.bind(this)} style={{borderBottom: 0}}>Mechanics of Solids</Subject>
                        </Subjects>}
                        {this.state.isHidden && <div style={{height:'15vh'}}></div>}
                    </div>
                    <StyledButton width={'20vh'} height={'5vh'} style={{marginLeft: '20vh'}}>
                        Upload file
                    </StyledButton>
                </Frame>
            </Wrapper>
        );
    }
}

export default ChooseSubject;

const Dropdown = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props=>props.width};
  height: ${props=>props.height};
  border-radius: 20px;
  border: 0;
  
  font-family: "Montserrat Alternates";
  font-size: 25px;
  &:active {
    box-shadow: 7px 7px 12px #0d275033,
                -5px -5px 11px #fff;
    outline: 0;
  }
  &:focus{
    outline: 0;
  }
  ${Color}
`;

const Subjects = styled.div`
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: space-around;
  width: ${props=>props.width};
  height: ${props=>props.height};
  border-radius: 20px;
  border: 0;
  font-family: "Montserrat Alternates";
  font-size: 25px;
  ${Color}
`;
const Subject = styled.div`
  display: flex;
  align-items: center;
  
  margin: 0;
  padding-left : 15px;
  padding-right : 15px;
  height: 5vh;
  border-bottom: 3px solid #2e4467;
  
`;
