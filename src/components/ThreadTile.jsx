
export const ThreadTile = (props) => {

    return (
        <div className="thread-tile" onClick={props.onClick}>
            <div>{props.item.subject}</div>
            <p>{props.item.question}</p>
            <p>{props.item.text}</p>

            <p>{props.item.team}</p>
            <p>{props.item.created_at}</p>
        </div> 
    );
}