import { createGlobalStyle } from 'styled-components';
import * as theme from '@Components/theme';

const GlobalStyle = createGlobalStyle`
    @keyframes flash {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    html,
    body {
        padding: 0;
        margin:0;
        background: ${theme.colors.white};
        color: ${theme.colors.grey};
        font-family: 'Montserrat', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    h1 {
        font-size: 48px;

        &::before {
            content: '_';
            position: relative;
            display: inline-block;
            animation: flash 0.5s none infinite alternate;
        }
    }
`;

export default GlobalStyle;
