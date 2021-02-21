import React, {Component, Fragment, useState} from 'react';
import Frame from "../../components/Frame";
import StyledButton from "../../components/StyledButton";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import Color from "../../styles/Color";
import {Link} from "react-router-dom";
import Axios from "axios";
import InnerShadow from "../../styles/InnerShadow";
import OuterShadow from "../../styles/OuterShadow";
import { Typography, Button, Form, message, Input, Icon } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Dropzone from "react-dropzone";

const { TextArea } = Input
const { Title, Text } = Typography

const onDrop = (files) => {
    //올린파일에대한 정보가 files에대입

    let formData = new FormData()
    const config = {
        header: { 'content-type': 'multipart/form-data' ,
            'Access-Control-Allow-Origin': '*'},
    }
    formData.append('file', files[0])
    Axios.defaults.baseURL = "http://localhost:3001/";
    Axios.post('/api/video/uploadfiles', formData, config).then((response) => {
        if (response.data.success) {
            console.log(response.data)
        } else {
            alert('비디오 업로드를 실패했습니다.')
        }
    })
}
class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: null,
            isHidden: true,
        }
    }
    render() {
        return (
            <Wrapper>
                <Frame width={'70vh'} height={'70vh'}>
                    <div style={{marginTop: '50px'}}>Learn ON</div>
                    <div>
                        <Dropzone onDrop={onDrop}
                                  multiple={false}
                                  maxSize={10000000}>
                            {({ getRootProps, getInputProps }) => (
                                <div
                                    style={{
                                        width: '400px',
                                        height: '300px',
                                        border: '0',
                                        borderRadius: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: 'inset 13px 13px 24px #0d275033,inset -15px -15px 21px #ffffff88'
                                    }}
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    <StyledButton width={'29vh'} height={'5vh'}>
                                        Upload Videos
                                    </StyledButton>
                                </div>
                            )}
                        </Dropzone>
                    </div>
                </Frame>
            </Wrapper>
        );
    }
}

export default UploadFile;

const DropBox = styled.div`
  display: flex;
  width: ${props=>props.width};
  height: ${props=>props.height};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 0;
  font-family: "Montserrat Alternates";
  font-size: 25px;
  ${Color};
  ${InnerShadow};
`;

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props=>props.width};
  height: ${props=>props.height};
  border-radius: 20px;
  border: 0;
  font-family: "Montserrat Alternates";
  font-size: 30px;
  &:active {
    box-shadow: 7px 7px 12px #0d275033,
                -5px -5px 11px #fff;
    outline: 0;
  }
  &:focus{
    outline: 0;
  }
  ${Color}
  ${OuterShadow}
`;

/*<DropBox width={'40vh'} height={'30vh'}>
                        {this.state.isHidden &&
                        <StyledInput width={'30h'} height={'5vh'} onClick={this.toggleHidden.bind(this)}
                                     type="file" multiple onChange={this.fileHandler} placeholder={'Search lecture video'}/>}
                        {!this.state.isHidden &&
                        <StyledButton onClick={this.onClickHandler} width={'25vh'} height={'5vh'}>
                            Upload video
                        </StyledButton>}
                    </DropBox>*/