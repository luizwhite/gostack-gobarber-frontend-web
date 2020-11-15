import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  ['data-has-description']: boolean;
}

const toastTypeVariations = {
  info: css`
    background-color: var(--toast-info-bg-color);
    color: var(--info-color);
  `,
  success: css`
    background-color: var(--toast-success-bg-color);
    color: var(--success-color);
  `,

  error: css`
    background-color: var(--toast-error-bg-color);
    color: var(--error-color);
  `,
};

// prettier-ignore
export const Container = styled(animated.div)<ContainerProps>`
  --padding-top: 12px;

  width: 360px;
  display: flex;

  position: relative;
  padding: var(--padding-top) 30px var(--padding-top) var(--padding-top);
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${({ type }) => toastTypeVariations[type || 'info']}

  + div {
    margin-top: .5em;
  }

  > svg {
    margin: 2px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 1.2;
    }
  }

  button {
    position: absolute;
    right: var(--padding-top);
    top: var(--padding-top);
    opacity: 0.6;
    background: transparent;
    line-height: 0.8;
    padding: 2px;
    color: inherit;
  }

  ${(props) => !props['data-has-description'] && css`
    align-items: center;

    svg {
      margin-top: 0;
    }
  `}
`;
