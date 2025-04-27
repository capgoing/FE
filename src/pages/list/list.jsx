import * as s from "../../styles/list/list";
import useGet from "../../hooks/useGet";
import NotList from "../../components/list/notList/notList";
import ListWork from "../../components/list/yesList/list-work";


const List = () => {
    const { data } = useGet("/graph");
    // console.log(data);
    const graphList = data?.data?.graph;

    return (
        <div className="pageContainer">
            <s.ListContainer>
                {Array.isArray(graphList) && graphList.length > 0 ? (
                    <ListWork data={graphList} />
                    ) : (
                    <NotList />
                )}
            </s.ListContainer>
        </div>
    )
}

export default List;