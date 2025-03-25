import * as s from "../../../styles/list/list";
import ItemWork from "./item-work";

const ListWork = ({ data }) => {
    return (
        <s.ListWorkContainer>
            {data.map((item) => (
                <ItemWork 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                />
            ))}
        </s.ListWorkContainer>
    );
};

export default ListWork;
