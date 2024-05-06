import { formatDate, getMessageColor, getTitleColor } from "../utils/helperFunctions";
import "./ThreadTile.scss";

export const ThreadTile = (props) => {
    const formattedDate = formatDate(props.item.created_at);
    const titleColor = getTitleColor(props.item.score);
    const messageColor = getMessageColor(props.item.score);

    return (
        <div className={props.messageCount ? `thread-tile stacked-effect${props.messageCount}` : "thread-tile"} onClick={props.onClick}>
            <div className="thread-tile-left-column">
                <div className={`thread-tile-title title-${titleColor}`}>{props.item.subject}</div>
                <p className="thread-tile-question">{props.item.question}</p>
                <p>{props.item.text}</p>
            </div>

            <div className="thread-tile-right-column">
                <p className="thread-team">{props.item.team}</p>
                <p className="thread-date">{formattedDate}</p>
            </div>

            {props.messageCount &&
                <div className={`thread-tile-messages message-${messageColor}`}>
                    {props.messageCount} messages
                </div>
            }
        </div> 
    );
};