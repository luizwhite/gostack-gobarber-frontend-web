import { createGlobalStyle } from 'styled-components';

export const rootColors = {
  buttonBg: '#ff9000',
  darkDefault: '#312E38',
  grayDefault: '#999591',
  errorColor: '#c53030',
  headerBg: '#28262e',
  infoColor: '#3172b7',
  inputBg: '#232129',
  linkColor: '#f4ede8',
  successColor: '#2e656a',
  toastErrorBgColor: '#fddede',
  toastSuccessBgColor: '#e6fffa',
  toastInfoBgColor: '#ebf8ff',
};

export default createGlobalStyle`
 :root {
   --button-bg: ${rootColors.buttonBg};
   --dark-default: ${rootColors.darkDefault};
   --gray-default: ${rootColors.grayDefault};
   --error-color: ${rootColors.errorColor};
   --header-bg: ${rootColors.headerBg};
   --input-bg: ${rootColors.inputBg};
   --info-color: ${rootColors.infoColor};
   --link-color: ${rootColors.linkColor};
   --success-color: ${rootColors.successColor};
   --toast-error-bg-color: ${rootColors.toastErrorBgColor};
   --toast-success-bg-color: ${rootColors.toastSuccessBgColor};
   --toast-info-bg-color: ${rootColors.toastInfoBgColor};
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
