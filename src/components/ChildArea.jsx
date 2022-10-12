import {memo} from "react";

export const ChileArea = memo((props) => {
    const { show, onClickClose } = props;
    // const data = [...Array(1000).keys()];
    // const test = [...Array(3000)];
    // console.log("再レンダリング");
    // data.forEach(()=> {
    //     console.log("///");
    // })
    return (
        <>
            {show ? (
                <div>
                    <p>子コンポーネント</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div >
            ) : null}
        </>
    );
})