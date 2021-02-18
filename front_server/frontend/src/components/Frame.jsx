import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: ${props=>props.width};
  height: ${props=>props.height};
  border-radius: 50px;
  background: #ecf0f3;
  box-shadow: 28px 28px 50px #0d275033,
              -23px -23px 45px #fff;
  font-family: "Montserrat Alternates SemiBold";
  font-size: 5em;
  color: #2e4467;
`;
