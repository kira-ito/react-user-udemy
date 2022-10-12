import React from "react";
export const InlineStyle = () => {

    const divStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "solid 1px blue",
        borderRadius: "20px"
    };
    const titleStyle = {
        color: "green",
    };
    const buttonStyle = {
        backgroundColor: "efefef",
        border: "none",
        padding: "10px",
        borderRadius: "20px"
    };
    return(
        <div style={divStyle}>
            <p style={titleStyle}>- InlineStyle -</p>
            <button style={buttonStyle}>Fight!</button>
        </div>
    );
}