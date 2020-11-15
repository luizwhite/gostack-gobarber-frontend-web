import { createGlobalStyle } from 'styled-components';

export const rootColors = {
  buttonBg: '#ff9000',
  inputBg: '#232129',
  linkColor: '#f4ede8',
  errorColor: '#c53030',
  darkDefault: '#312E38',
};

export default createGlobalStyle`
 :root {
   --input-bg: ${rootColors.inputBg};
   --button-bg: ${rootColors.buttonBg};
   --link-color: ${rootColors.linkColor};
   --error-color: ${rootColors.errorColor};
   --dark-default: ${rootColors.darkDefault}
 }

 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
   outline: 0;
 }

 body {
   background-color: var(--dark-default);
   color: #FFF;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }

 input, textarea {
   color: #FFF;
 }

 body, input, button {
   font-family: 'Roboto Slab', serif;
   font-size: 16px;
 }

 h1, h2, h3, h4, h5, h6, strong {
   font-weight: 500;
 }

 button {
   cursor: pointer;
   border: none;
 }

 li {
   list-style: none;
 }

 a {
   text-decoration: none;
   color: inherit;
 }
`;
