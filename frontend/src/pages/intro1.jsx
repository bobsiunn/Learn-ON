import React, {Component} from 'react';
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import userOutlined from '@iconify/icons-ant-design/user-outlined';

class intro1 extends Component{
    render(){
        return (
            <Bg>
                <Frame>
                    Learn ON
                    <div style = {{display: "flex"}}>
                        <Icon icon={userOutlined} style={{color: '#2e4467', fontSize: '50px'}} />
                        <InputEmail/>
                    </div>
                </Frame>
            </Bg>
        );
    }
}

export default intro1;

const Frame = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vh;
    height: 80vh;
    top: 50%;
    left: 50%;
    margin-left: -40vh;
    margin-top: -40vh;
    border-radius: 50px;
    background: #ecf0f3;
    box-shadow: 28px 28px 50px #0d275033,
                -23px -23px 45px #fff;
    font-family: "Montserrat Alternates ExtraBold";
    font-size: 5em;
    color: #2e4467;
`;

const Bg = styled.div`
    position: absolute;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: #ecf0f3;
`;

const InputEmail = styled.input`
     background-color: #FFFFFF00;
     border-top: 0px;
     border-left: 0px;
     border-right: 0px;
     border-bottom: 1px #ecf0f3;
     width: 30em;
 `;
