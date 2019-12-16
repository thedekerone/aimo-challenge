import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
        color:#2e2e2e;
    }
    a{
        text-decoration:none;
        cursor: pointer;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        background: #fefefe;
    }
    html{
        font-size: 9px;

    }
    ul{
        list-style: none
    }
    @media (min-width: 400px) {
        html{
            font-size: 11px;
        }
    }
    @media (min-width: 705px) {
        html{
            font-size: 12px;
        }
    }
    @media (min-width: 1200px) {
        html{
            font-size: 15px;
        }
    }
`;
