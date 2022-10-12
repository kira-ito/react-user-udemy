import React from 'react';
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
    const { user } = props;
    return (
        <>
            <Card>
                <UserIconWithName image={user.image} name={user.name} />
                <SDl>
                    <dt>メール</dt>
                    <dd>{user.email}</dd>
                    <dt>TEL</dt>
                    <dd>{user.phone}</dd>
                    <dt>会社名</dt>
                    <dd>{user.company.name}</dd>
                    <dt>リンク</dt>
                    <dd>{user.website}</dd>
                </SDl>
            </Card>
        </>
    );
}

const SDl = styled.dl`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    dt {
        width: 30%;
        padding-bottom: 20px;
        margin-bottom: 10px;
        background-color: #DADADA;
      }
      dd {
        width: 70%;
        background-color: #F3F3F3;
        margin-bottom: 10px;
        margin-top: 0;
        margin-right: 0;
        margin-left: 0;
        overflow-wrap: break-word;
      }
`