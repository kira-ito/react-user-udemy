export const CompleteTodos = (props) => {
    const {completeTask, onClickBack} = props;
    return (
        <div className="complete-area">
            <p className="title">完了のTODO</p>
            {completeTask.map((task, index) => {
                return (
                    <div key={task}>
                        <ul className="list-row">
                            <li>{task}</li>
                            <button onClick={() => onClickBack(index)}>戻す</button>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}