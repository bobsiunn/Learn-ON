import React, {Component, Fragment} from 'react';
import Frame from "../../components/Frame";
import StyledButton from "../../components/StyledButton";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import {Icon} from '@iconify/react';
import chevronDown from '@iconify/icons-akar-icons/chevron-down';
import Color from "../../styles/Color";
import DragAndDrop from "../../components/DragAndDrop";
import {Link} from "react-router-dom";
import axios from "axios";
import InnerShadow from "../../styles/InnerShadow";
class UploadFile extends Component {
    /*constructor(props){
        super(props);
        this.state = {
            selectedFile: null,
        }
    }
    handleFileInput(e){
        this.setState({
            selectedFile : e.target.files[0],
        })
    }
    handlePost(){
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        axios.defaults.baseURL = "localhost:3001";
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        return axios.post("/api/upload", formData).then(res => {
            alert('성공')
        }).catch(err => {
            alert('실패')
        })
    }*/
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
                    <DropBox width={'40vh'} height={'30vh'}>
                        {this.state.isHidden && <StyledButton width={'30h'} height={'5vh'} onClick={this.toggleHidden.bind(this)}>
                            Search lecture video
                        </StyledButton>}
                        {!this.state.isHidden && <StyledButton width={'25vh'} height={'5vh'}>
                            Upload video
                        </StyledButton>}
                    </DropBox>
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