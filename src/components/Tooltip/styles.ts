import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    padding: 8px;

    background-color: var(--button-bg);
    border-radius: 4px;
    color: var(--dark-default);
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s, visibility 0.4s;

    position: absolute;
    right: 50%;
    top: -12px;
    transform: translate(50%, -100%);

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--button-bg) transparent;
      border-width: 6px 6px 0 6px;
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      bottom: calc(-12px + 6px);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
