import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
html, body, #root{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f3;
  width: 100%;
  height: 100%;
}
.fade-enter {
  opacity: 0.01;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}

.fade-exit {
  opacity: 1;
}

.fade-exit.fade-exit-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}

div.transition-group {
  position: relative;
  width: 100%;
  height: 100%;
}

section.route-section {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
`;