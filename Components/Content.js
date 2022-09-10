import { Container } from '@mui/material';
import React from 'react';
import { css, cx } from '@emotion/css';

class Content extends React.Component {
    
    
    render() {
      return(
        <Container className={css`
            width : 60vw;
            height : max-content;
            border : solid 3px black;
            border-radius : 5px;
            padding: 10px;
            @media (max-width : 720px){
              width:100vw;
              border : none;
            }
        `}>
            {this.props.children}
        </Container>
      );
    }
  }

export default Content;