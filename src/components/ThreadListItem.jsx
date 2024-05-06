import { useState } from "react";
import { ThreadTile } from "./ThreadTile";
import "./ThreadListItem.scss";

export const ThreadListTile = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const messageCount = props.data.length;
    const isExpandable = messageCount > 1;

    const handleExpand = () => {
        setIsExpanded(true);
    }

    return (
        <div className="thread-list-item">
            {isExpanded 
                ? props.data.map(tile => <ThreadTile item={tile} key={tile.id} />)
                : <ThreadTile 
                    item={props.data[0]}
                    messageCount={isExpandable ? messageCount : undefined}
                    onClick={isExpandable ? handleExpand : undefined}
                    />
            }
        </div>
    )
}