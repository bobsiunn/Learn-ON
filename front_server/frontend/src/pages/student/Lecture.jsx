import React, {Component} from 'react';
import {Icon} from '@iconify/react';
import hamburgerMenu from '@iconify/icons-radix-icons/hamburger-menu';
import Frame from "../../components/Frame";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import InvisibleButton from "../../components/InvisibleButton";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Wrapper from "../../components/Wrapper";

class Lecture extends Component {
    render() {
        return (
            <Wrapper>
                <Icon icon={hamburgerMenu} style={{color: '#2e4467', fontSize: '56px'}} />
                <Frame width={'70vh'} height={'70vh'}>
                </Frame>
                <Frame width={'20vh'} height={'70vh'}>
                </Frame>
            </Wrapper>
        );
    }
}

export default Lecture;
