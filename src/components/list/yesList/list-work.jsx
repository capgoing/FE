import * as s from "../../../styles/list/list";
import ItemWork from "./item-work";

const ListWork = ({ data }) => {
    // console.log(data);
    return (
        <s.ListWorkContainer>
            {data.map((item) => (
                <ItemWork 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    listenUpPerfect={item.listenUpPerfect}
                    connectPerfect={item.connectPerfect}
                    picturePerfect={item.picturePerfect}
                />
            ))}
        </s.ListWorkContainer>
    );
};

export default ListWork;
