import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

import { rootColors } from '../../styles/global';

const { errorColor } = rootColors;

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

// prettier-ignore
export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 16px;
  color: #666360;

  display: flex;
  align-items: center;

  background-color: var(--input-bg);
  border-radius: 10px;
  border: 2px solid var(--input-bg);

  & + div {
    margin-top: 8px;
  }

  ${({ isErrored }) => isErrored
    && css`
      border-color: var(--error-color);
    `}

  ${({ isFocused }) => isFocused
    && css`
      color: var(--button-bg);
      border-color: var(--button-bg);
    `}

  ${({ isFilled }) => isFilled
    && css`
      color: var(--button-bg);
    `}

  input {
    flex: 1;
    border: 0;
    background-color: transparent;

    &::placeholder {
      color: #666360;
    }
  }

  & > svg {
    margin-right: 16px;
  }
`;

export const ErrorAlert = styled(Tooltip)`
  margin-left: calc(1em * 0.6);

  span {
    background-color: var(--error-color);
    color: #fff;
    box-shadow: 0 0 4px ${shade(0.8, errorColor)};

    &::before {
      border-color: var(--error-color) transparent;
    }
  }
`;
