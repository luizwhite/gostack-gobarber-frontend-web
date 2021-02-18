/* eslint-disable object-curly-newline */
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Input from '../../components/Input';

jest.mock('@unform/core', () => ({
  useField() {
    return {
      fieldName: 'email',
      defaultValue: '',
      error: '',
      registerField: jest.fn(),
    };
  },
}));

describe('Input component', () => {
  it('should be able to render and input', () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: var(--button-bg);');
      expect(containerElement).toHaveStyle('color: var(--button-bg);');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: var(--input-bg);');
      expect(containerElement).toHaveStyle('color: #666360;');
    });
  });

  it('should keep input border highlight when input filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);
    fireEvent.change(inputElement, {
      target: { value: 'johndoe@example.com.br' },
    });

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: var(--button-bg);');
      expect(containerElement).toHaveStyle('color: var(--button-bg);');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('color: var(--button-bg);');
    });
  });
});
