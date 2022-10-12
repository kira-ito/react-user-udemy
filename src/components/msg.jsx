import React from "react";

export const Msg = (props) => {
    // console.log(props.text);
    const { color, children } = props;
    const style = {
        color,
        fontSize: "14px",
        fontWeight: "bold"
    };
    return (
        <p style={style}>{children}</p>
    );
}