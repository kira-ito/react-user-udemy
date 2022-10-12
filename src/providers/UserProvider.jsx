import { createContext } from "react";
import React from "react";
import { useState } from "react";

/*
* コンテキストオブジェクト
* このオブジェクトをuseContextの引数に指定する
*/
export const UserContext = createContext({}); 
console.log(UserContext);

export const UserProvider = (props) => {
    const { children } = props;

    const [userInfo, setUserInfo] = useState(null);
    const contextName = "テストサンプル";
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}