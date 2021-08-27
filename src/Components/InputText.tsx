import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

export interface IInputText extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'number';
}

const InputText = styled.input<IInputText>(({ theme }) => {
  const { breakpoints, colors, sizes, typography } = theme;

  return `
    border: 1px solid ${colors.text.onSurface};
    font-size: ${typography.size.sm};
    padding: ${sizes.space.xs};
    width: 100%;
    
    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${typography.size.reg};
      padding: ${sizes.space.sm};
    }
  `;
});

export default InputText;
