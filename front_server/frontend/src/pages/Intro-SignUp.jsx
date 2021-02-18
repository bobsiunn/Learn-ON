import React, {Component} from 'react';
import {Icon} from '@iconify/react';
import userOutlined from '@iconify/icons-ant-design/user-outlined';
import lockPasswordLine from '@iconify/icons-ri/lock-password-line';
import emailIcon from '@iconify/icons-carbon/email';
import Frame from "../components/Frame";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Wrapper from "../components/Wrapper";

class IntroSignUp extends Component {
    state = { checked: false }

    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
    }
    render() {
        return (
            <Wrapper>
                <Frame width={'70vh'} height={'70vh'}>
                    <div style={{marginTop: '50px'}}>Learn ON</div>
                    <form>
                        <div style={{display: "flex", marginBottom: "3vh", borderBottom: "3px solid #2e4467"}}>
                            <Icon icon={userOutlined} style={{color: '#2e4467', fontSize: '40px'}}/>
                            <StyledInput placeholder={"First Name"} type="text"/>
                        </div>
                        <div style={{display: "flex", marginBottom: "3vh",borderBottom: "3px solid #2e4467"}}>
                            <Icon icon={userOutlined} style={{color: '#2e4467', fontSize: '40px'}}/>
                            <StyledInput placeholder={"Last Name"} type="text"/>
                        </div>
                        <div style={{display: "flex", marginBottom: "3vh",borderBottom: "3px solid #2e4467"}}>
                            <Icon icon={emailIcon} style={{color: '#2e4467', fontSize: '40px'}} />
                            <StyledInput placeholder={"Email"} type="text"/>
                        </div>
                        <div style={{display: "flex", borderBottom: "3px solid #2e4467"}}>
                            <Icon icon={lockPasswordLine} style={{color: '#2e4467', fontSize: '40px'}}/>
                            <StyledInput placeholder={"Password"} type="password"/>
                        </div>
                    </form>
                    <ButtonForm style={{marginTop: -10}}>
                        <Link to={"/instructor/chooseSubject"} style={{ textDecoration: 'none' }}>
                            <span style={{ marginBottom: 30, fontSize: '20px'}}>Are you an instructor?</span>
                        </Link>
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <StyledButton width={'30vh'} height={'5vh'}>
                                Sign Up
                            </StyledButton>
                        </Link>
                    </ButtonForm>
                </Frame>
            </Wrapper>
        );
    }
}

export default IntroSignUp;

const ButtonForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  width: 30vh;
  justify-content: space-evenly;
`
