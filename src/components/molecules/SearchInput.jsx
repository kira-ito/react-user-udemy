import React, {memo} from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/Input';
import styled from "styled-components";


export const SearchInput = () => {
    console.log("SearchInput");
    return (
        <SContainer>
            {/* <input placeholder="検索したい" /> */}
            <Input placeholder="検索条件を入力" />
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
            <br />
        </SContainer>
    );
};
const SContainer = styled.div`
    display: flex;
    align-items: center;
`;


const SButtonWrapper = styled.div`
    padding-left: 8px;
`;