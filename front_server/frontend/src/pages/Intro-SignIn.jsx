import React, {Component} from 'react';
import {Icon} from '@iconify/react';
import emailIcon from '@iconify/icons-carbon/email';
import lockPasswordLine from '@iconify/icons-ri/lock-password-line';
import Frame from "../components/Frame";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import InvisibleButton from "../components/InvisibleButton";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Wrapper from "../components/Wrapper";

class IntroSignIn extends Component {
    render() {
        return (
            <Wrapper>
                <Frame width={'70vh'} height={'70vh'}>
                    <div style={{marginTop: '50px'}}>Learn ON</div>
                    <form>
                        <div style={{display: "flex", marginBottom: "3vh", borderBottom: "3px solid #2e4467"}}>
                            <Icon icon={emailIcon} style={{color: '#2e4467', fontSize: '40px'}} />
                            <StyledInput placeholder={"Email"} type="text"/>
                        </div>
                        <div style={{display: "flex", borderBottom: "3px solid #2e4467"}}>
                            <Icon icon={lockPasswordLine} style={{color: '#2e4467', fontSize: '40px'}}/>
                            <StyledInput placeholder={"Password"} type={"password"}/>
                        </div>
                    </form>
                    <div>
                        <Link to={"/student/dashboard"} style={{ textDecoration: 'none' }}>
                            <StyledButton width={'30vh'} height={'5vh'}>
                                Sign In
                            </StyledButton>
                        </Link>
                        <ButtonForm>
                            <Link to={"/signup"} style={{ textDecoration: 'none' }}><InvisibleButton>Sign Up</InvisibleButton></Link>
                            <InvisibleButton>Forgot Password?</InvisibleButton>
                        </ButtonForm>
                    </div>
                </Frame>
            </Wrapper>
        );
    }
}

export default IntroSignIn;

const ButtonForm = styled.div`
  display: flex;
  margin-top: 3vh;
  width: 30vh;
  justify-content: space-evenly;
`
