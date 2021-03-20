import React from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyle = () => {
    return (
        <Global
            styles={css`
                *{
                    margin: 0;
                    padding:0;
                    box-sizing:border-box;
                    font-family:'Helvetica', sans-serif;
                    font-size:62.5%;
                }
                body{
                    background-color:#f7f7f7;
                }
            `}
        />
        
    )
}

export default GlobalStyle
