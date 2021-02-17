/* eslint-disable quotes */
import styled from 'styled-components';
import { shade } from 'polished';
import { rootColors } from '../../styles/global';

const { linkColor, buttonBg } = rootColors;

const profileAvatarSize = 186;
const formVerticalMargin = 80;

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;
    height: 144px;

    background-color: var(--header-bg);

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        width: 24px;
        height: 24px;
        color: var(--gray-default);
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: ${-formVerticalMargin - profileAvatarSize / 2}px auto 0 auto;

  form {
    display: flex;
    flex-direction: column;
    width: 340px;
    margin: ${formVerticalMargin}px 0;

    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
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

    div[data-input-name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: ${profileAvatarSize}px;
    height: ${profileAvatarSize}px;
    border-radius: 50%;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    background: var(--button-bg);

    border-radius: 50%;
    border: 0;
    position: absolute;
    right: 0;
    bottom: 0;

    transition: background-color 0.2s;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      color: var(--dark-default);
    }

    input {
      display: none;
    }

    &:hover {
      background: ${shade(0.2, buttonBg)};
    }
  }
`;
