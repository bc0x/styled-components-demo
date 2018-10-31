import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  background: papayawhip;
`;

export const wrapperWrapped = styled(Wrapper)`
  
`;

export const Title = styled.section`
  padding: .5em;
  font-size: 2.5em;
  text-align: center;
  color: darkcyan;
  font-family: monospace,monospace
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around
`;

export const Button = styled.button`
  display: flex;
  flex: 1 1 auto;
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: palevioletred;
  margin .5em;
  border: 2px solid;
  font-size: 1.5em;
  padding: .5em;

  // Primary
  ${props =>
    props.primary &&
    css`
      color: darkturquoise;
      border: 2px solid darkturquoise;
  `}

  // ALERT
  ${props =>
    props.alert &&
    css`
      color: orange;
      border: 2px solid orange;
  `}

  // THEMED
  ${props =>
    props.theme &&
    css`
      color: ${props => props.theme.primaryColor};
      border: 2px solid ${props => props.theme.primaryColor};
  `}

  // THEMED ALERT
  ${props =>
    props.theme &&
    props.alert &&
    css`
      color: ${props => props.theme.alert};
      border: 2px solid ${props => props.theme.alert};
  `}

`;
