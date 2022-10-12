// import React from "react";

const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
}

export const InputTodo = (props) => {
    const { text, onChange, onClick, disabled } = props;
    // console.log(test);
    return (
        <div style={style}>
            <input
                disabled={disabled}
                placeholder="TODOを入力"
                value={text}
                onChange={onChange} />
            <button disabled={disabled} onClick={onClick}>追加</button>
        </div>
    );
}