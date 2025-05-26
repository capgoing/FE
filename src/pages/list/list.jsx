import * as s from "../../styles/list/list";
import useGet from "../../hooks/useGet";
import NotList from "../../components/list/notList/notList";
import ListWork from "../../components/list/yesList/list-work";
import Loading from "../../components/quiz/qna/Loading";

const List = () => {
  const { data, loading } = useGet("/graph");
  // console.log(data);
  const graphList = data?.data?.graph;

  return (
    <div className="pageContainer">
      {loading ? (
        <s.PageContainer>
          <Loading />
        </s.PageContainer>
      ) : (
        <s.ListContainer>
          {Array.isArray(graphList) && graphList.length > 0 ? (
            <ListWork data={graphList} />
          ) : (
            <NotList />
          )}
        </s.ListContainer>
      )}
    </div>
  );
};

export default List;
