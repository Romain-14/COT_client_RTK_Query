import React, { useState } from "react";
import { useGetTeaCategoryQuery } from "../../store/slice/service/teaAPI";
import Form from "./Components/Form";
import TeaList from "./Components/TeaList";

function Tea() {
    const {
        data: { tea, category, packaging },
    } = useGetTeaCategoryQuery();
    const [type, setType] = useState("list");

    const display = () => {
        switch (type) {
            case "list":
                return <TeaList data={tea} />;

            case "add":
                return <Form data={[category, packaging]}  setType={setType}/>;

            default:
                return <p>loading</p>;
        }
    };

    return (
        <>
            <ul>
                <button onClick={() => setType("list")}>liste</button>
                <button onClick={() => setType("add")}>ajouter</button>
            </ul>

            {display()}
        </>
    );
}

export default Tea;
