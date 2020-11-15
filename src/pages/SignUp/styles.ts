/* eslint-disable quotes */
import styled from 'styled-components';
import { shade } from 'polished';
import { rootColors } from '../../styles/global';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

const { linkColor } = rootColors;
export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    width: 340px;
    margin: 80px 0;

    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: var(--link-color);
      display: block;
      margin-top: 24px;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, linkColor)};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    margin-top: 24px;

    color: var(--link-color);
    transition: color 0.3s;

    svg {
      margin-right: 16px;
      height: calc(1em * 1.3125);
    }

    &:hover {
      color: ${shade(0.2, linkColor)};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center / cover;
`;
