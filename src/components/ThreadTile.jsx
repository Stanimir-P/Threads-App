import "./ThreadTile.scss";

export const ThreadTile = (props) => {

    return (
        <div className="thread-tile" onClick={props.onClick}>
            <div className="thread-tile-left-column">
                <div className="thread-tile-title">{props.item.subject}</div>
                <p className="thread-tile-question">{props.item.question}</p>
                <p>{props.item.text}</p>
            </div>

            <div className="thread-tile-right-column">
                <p className="thread-team">{props.item.team}</p>
                <p className="thread-date">{props.item.created_at}</p>
            </div>
        </div> 
    );
}