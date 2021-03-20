import styled from "@emotion/styled";
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    cursor: pointer;
    background:#80c064;
    padding:10px 15px;;
    white-space: nowrap;
    outline:none;
    border:none;
    text-decoration:none;
    font-size:14px;
    border-radius:10px;
    font-weight:bold;
    color:white;
`