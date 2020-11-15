import styled from 'styled-components';
import { shade } from 'polished';
import { rootColors } from '../../styles/global';

const { buttonBg } = rootColors;

export const Container = styled.button`
  height: 56px;
  width: 100%;
  padding: 0 16px;
  margin-top: 16px;

  background-color: var(--button-bg);
  border-radius: 10px;

  color: var(--dark-default);
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${shade(0.2, buttonBg)};
  }
`;
