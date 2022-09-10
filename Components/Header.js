import { Box } from '@mui/material';
import React from 'react';
import { css, cx } from '@emotion/css';

class Header extends React.Component {
    render() {
      return(
        <Box className={css`
            width : 100vw;
            height : max-content;
            max-height : 150px;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: flex-start;
            align-items: center;
            @media (max-width: 720px) {
              border-bottom : solid 5px black;
            }
        `}>
            <h1>QR Code Generator</h1>
        </Box>
      );
    }
  }

export default Header;