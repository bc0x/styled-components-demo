import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal, ThemeProvider } from "styled-components";
import { Wrapper, Button, ButtonWrapper, Title } from "./components";
import theme from "./theme";

injectGlobal`
  body {
    margin: 0;
    font-size: 20px;
    font-family: sans-serif;
    text-align: center;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello Team Blitz</Title>
      <ButtonWrapper>
        <Button>Regular Button</Button>
        <Button primary>Primary Button</Button>
        <Button alert>Alert Button</Button>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Button>Themed Button</Button>
            <Button alert>Themed Alert Button</Button>
          </React.Fragment>
        </ThemeProvider>
      </ButtonWrapper>
    </Wrapper>
  );
}

// ONE
// <Wrapper>
//   <h1>Hello Team Blitz</h1>
// </Wrapper>

// TWO
// <Wrapper>
//   <Title>Hello Team Blitz</Title>
// </Wrapper>

// THREE
// injectGlobal`
//   body {
//     margin: 0;
//     font-size: 20px;
//     font-family: sans-serif;
//     text-align: center;
//   }
// `;

// FOUR
// <Wrapper>
//   <Title>Hello Team Blitz</Title>
//   <ButtonWrapper>
//     <Button>Regular Button</Button>
//     <Button primary>Primary Button</Button>
//     <Button alert>Alert Button</Button>
//   </ButtonWrapper>
// </Wrapper>

// FIVE
// <Wrapper>
//   <Title>Hello Team Blitz</Title>
//   <ButtonWrapper>
//     <Button>Regular Button</Button>
//     <Button primary>Primary Button</Button>
//     <Button alert>Alert Button</Button>
//     <ThemeProvider theme={theme}>
//       <React.Fragment>
//         <Button>Themed Button</Button>
//         <Button alert>Themed Alert Button</Button>
//       </React.Fragment>
//     </ThemeProvider>
//   </ButtonWrapper>
// </Wrapper>x

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
