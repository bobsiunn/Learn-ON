import styled from "styled-components";
import Color from "../styles/Color";
export default styled.button`
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
`;
