import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --background-color: #E4E4E4;
        --color:#1f1f1f;
        --header-background: #EE1B24;
        --card-background: #c4c4c4;
        --button-background: #d1d1d1;
        --button-hover: #acacac;
        --select-background: #ddd;
        --select-hover: #bbb;
        --scrollbar-background: #bbb;
        --scrollbar-thumb-background: #999;
        --transition: .2s ease-in-out;
        --division-line: #474747;
    }

    ${({ isDark }) => {
        if (isDark) {
            return css`
                :root{
                    --background-color: #2e2e2e;
                    --color: #fff;
                    --header-background: #af141c;
                    --card-background: #3d3d3d;
                    --button-background: #555555;
                    --button-hover: #292929;
                    --select-background: #e4e4e4;
                    --select-hover: #ccc;
                    --scrollbar-background: #aaa;
                    --scrollbar-thumb-background: #888;
                    --division-line: #cccccc;
                }
            `
        }
    }}

    html{
        font-family: "Work sans", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: var(--color);
    }

    ul { 
        list-style: none;
    }

    img { 
        width: 100%;
        height: 100%
    }
`