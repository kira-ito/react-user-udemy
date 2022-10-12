import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = (props) => {
    return (
        <SFooter>
            &copy; 2022 xxx Inc.
        </SFooter>
    );
}

const SFooter = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`;