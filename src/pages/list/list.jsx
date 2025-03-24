import * as s from "../../styles/list/list";
import useGet from "../../hooks/useGet";
import NotList from "../../components/list/notList/notList";
import ListWork from "../../components/list/yesList/list-work";


const List = () => {
    const { data } = useGet("/users");

    return (
        <div className="pageContainer">
            <s.ListContainer>
                {Array.isArray(data) && data.length > 0 ? (
                    <ListWork data={data} />
                    ) : (
                    <NotList />
                )}
            </s.ListContainer>
        </div>
    )
}

export default List;