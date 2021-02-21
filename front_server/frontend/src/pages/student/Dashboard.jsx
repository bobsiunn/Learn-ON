import React, {Component} from 'react';
import {Icon} from '@iconify/react';
import hamburgerMenu from '@iconify/icons-radix-icons/hamburger-menu';
import Frame from "../../components/Frame";
import styled from "styled-components";
import Img1 from "../../assets/financial-administration-flat-vector-illustration_82574-8831.jpg";
import Img2 from "../../assets/financial-management-vector-illustration-flat_159144-69.jpg";
import Img3 from "../../assets/istockphoto-1080436866-612x612.jpg";
import {Link} from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import Color from "../../styles/Color";
import OuterShadow from "../../styles/OuterShadow";

class Dashboard extends Component {
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
                        Dashboard
                    </div>
                </Menu>
                <Frame width={'70vw'} height={'80vh'} style={{alignItems: "flex-start", justifyContent: "flex-start"}}>
                    <div style={{
                        fontFamily: 'Montserrat Alternates Semibold',
                        color: '#2e4467',
                        fontSize: '36px',
                        marginTop: "2vw",
                        marginLeft: "2vw"
                    }}>
                        My Subjects
                    </div>
                    <SubjectList>
                        <Subject>
                            <img
                                src={Img1}
                                width='100%'
                                height='80%'
                                alt='Principles of Economics 1'
                                style={{borderRadius: '20px 20px 0 0'}}/>
                            <NameForm>
                                <div>Principles of Economics 1</div>
                                <div style={{fontFamily: "Kakao OTF Regular"}}>신혜원 교수님</div>
                            </NameForm>
                        </Subject>

                        <Subject>
                            <Link to={"/student/lecture"} width='100%' height='80%'>
                            <img
                                src={Img2}
                                width='100%'
                                height='100%'
                                alt='Financial Management'
                                style={{borderRadius: '20px 20px 0 0'}}/>
                            </Link>
                            <NameForm>
                                <div>Financial Management</div>
                                <div style={{fontFamily: "Kakao OTF Regular"}}>서정원 교수님</div>
                            </NameForm>
                        </Subject>

                        <Subject>
                            <img
                                src={Img3}
                                width='100%'
                                height='80%'
                                alt='Intermediate Accounting'
                                style={{borderRadius: '20px 20px 0 0'}}/>
                            <NameForm>
                                <div>Intermediate Accounting</div>
                                <div style={{fontFamily: "Kakao OTF Regular"}}>최관 교수님</div>
                            </NameForm>
                        </Subject>
                        <Subject>
                            <img
                                src={Img1}
                                width='100%'
                                height='80%'
                                alt='Principles of Economics 1'
                                style={{borderRadius: '20px 20px 0 0'}}/>
                            <NameForm>
                                <div>Principles of Economics 1</div>
                                <div style={{fontFamily: "Kakao OTF Regular"}}>신혜원 교수님</div>
                            </NameForm>
                        </Subject>
                    </SubjectList>
                </Frame>
                <Frame width={'17vw'} height={'80vh'} style={{marginLeft: '3vw', justifyContent: "flex-start"}}>
                    <div style={{
                        fontFamily: 'Montserrat Alternates Semibold',
                        color: '#2e4467',
                        fontSize: '30px',
                        marginTop: '2vw'
                    }}>
                        Recently Learned
                    </div>
                    {/*TODO: Recently Learned 항목 추가*/}
                </Frame>
            </Wrapper>
        );
    }
}

export default Dashboard;

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