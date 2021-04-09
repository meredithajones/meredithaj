import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#5F9EA0' : '#010606')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '24px 58px' : '22px 34px')};
    color: ${({dark}) => (dark ? '#00008B' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '30px' : '18px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#010606')};
    }

    
`