export const IncompleteTodos = (props) => {
    const { incompleteTask, onClickFinish, onClickDelete } = props;
    return (
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>
            {incompleteTask.map((task, index) => {
                return (
                    <div key={task}>
                        <ul className="list-row">
                            <li>{task}</li>
                            <button onClick={() => onClickFinish(index)}>完了</button>
                            <button onClick={() => onClickDelete(index)}>削除</button>
                        </ul>
                    </div>

                )
            })}
        </div>
    );
}