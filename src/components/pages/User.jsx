/* eslint no-unused-expressions: "off" */

import React from 'react';
import styled from "styled-components";
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `${val}：テストさん`,
        image: "https://source.unsplash.com/gAbO7HRrV-U",
        email: "example@example.co.jp",
        phone: "000-0000-0000",
        company: {
            name: "AA株式会社"
        },
        website: "example.co.jp"
    }
});

console.log(<PrimaryButton />);

export const User = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const onClickChange = () => {
        setUserInfo({ isAdmin: !userInfo.isAdmin });
    }
    return (
        <SContainer>
            <h2>ユーザ一覧</h2>
            <SearchInput />
            <br />
            <SecondaryButton onClick={onClickChange}>切り換え</SecondaryButton>
            <SUserArea>
                {users.map((user) => {
                    return <UserCard key={user.id} user={user} />
                })}
            </SUserArea>
        </SContainer>
    );
}

const SContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 24px;
`
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    grid-gap: 20px;
`