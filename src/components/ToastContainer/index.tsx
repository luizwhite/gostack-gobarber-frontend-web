import React from 'react';
import { useTransition } from 'react-spring';
import * as easings from 'd3-ease';

import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, ({ id }) => id, {
    config: { duration: 800, easing: easings.easeCubic },
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: {
      right: '-120%',
      opacity: 0,
    },
  });

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props: style }) => (
        <Toast {...{ key, style, ...item }} />
      ))}
    </Container>
  );
};

export default ToastContainer;
