import { useState } from "react";
import { ThreadTile } from "./ThreadTile";

export const ThreadListTile = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
    }

    return (
        <div>
            {isExpanded 
                ? props.data.map(tile => <ThreadTile item={tile} key={tile.id} />)
                : <ThreadTile item={props.data[0]} onClick={handleExpand}/>
            }
        </div>
    )
}