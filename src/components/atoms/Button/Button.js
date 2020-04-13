import styled, { css } from 'styled-components';

const Button = styled.button`
    font-weight: 600;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
    /* color: ${({ theme }) => theme.textDark}; */
    color: ${({ theme, secondary }) => (secondary ? theme.text.dark : theme.text.light)};
    border: ${({ secondary }) => (secondary ? '1px solid #E8E8E8' : 'none')};
    border-radius: 15px;
    background: ${({ primary, secondary, note, twitter, article }) => {
      switch (true) {
        case primary:
          return `linear-gradient(90deg, rgba(150,239,166,1) 0%, rgba(38,166,181,1) 100%)`;
        case secondary:
          return `rbga(255,255,255,0)`;
        case note:
          return `linear-gradient(90deg, rgba(240,255,135,1) 0%, rgba(255,183,107,1) 100%)`;
        case twitter:
          return `linear-gradient(90deg, rgba(161,163,255,1) 0%, rgba(109,99,239,1) 100%)`;
        case article:
          return `linear-gradient(90deg, rgba(255,179,130,1) 0%, rgba(240,117,144,1) 100%)`;
        default:
          return `#FFF`;
      }
    }};
    ${({ small }) =>
      small &&
      css`
        font-size: 12px;
        padding: 5px 12px !important;
        width: 90px;
        height: 25px;
      `}
    font-size: '14px';
    padding: 8px 30px;
`;

export default Button;
