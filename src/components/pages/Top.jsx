import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { UserContext } from '../../providers/UserProvider';
import { SecondaryButton } from "./../atoms/button/SecondaryButton"

export const Top = () => {
    const navigate = useNavigate();
    const { setUserInfo } = useContext(UserContext);


    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true});
        navigate("/user");
    }
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false});
        navigate("/user");
    }
    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
            <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
        </SContainer>
    );
}

const SContainer = styled.div`
 text-align: center;
`