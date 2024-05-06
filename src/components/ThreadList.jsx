import { ThreadListTile } from "./ThreadListItem";
import "./ThreadList.scss";
import { useFetchThreads } from "../hooks/useFetchThreads";

export const ThreadList = () => {
    const data = useFetchThreads();

    return (
        <div className="thread-list">
            {data &&
                data.map((data, index) => <ThreadListTile data={data} key={index} />)
            }
        </div>
    )
}