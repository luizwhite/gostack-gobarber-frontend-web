import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { useToast, ToastMessage } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps extends ToastMessage {
  style: object;
}

const icons = {
  info: <FiInfo size={22} />,
  success: <FiCheckCircle size={22} />,
  error: <FiAlertCircle size={22} />,
};

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  description,
  style,
}) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <Container {...{ type, style }} data-has-description={!!description}>
      {icons[type || 'info']}
      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
      <button onClick={() => removeToast(id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
