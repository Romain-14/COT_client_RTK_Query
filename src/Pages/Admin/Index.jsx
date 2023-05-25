import React, { useState } from "react";
import Menu from "./Components/Menu";
import { useGetTeaCategoryQuery } from "../../store/slice/service/teaAPI";
import TeaList from "./Components/TeaList";
import Form from "./Components/Form";
import CategoryList from "./Components/CategoryList";


function Admin() {
    const {
        data: { tea, category, packaging },
    } = useGetTeaCategoryQuery();

    const [type, setType] = useState(null);

    const display = () => {
        switch (type) {
            case "listTea":
                return <TeaList data={tea} />;
            case "addTea":
                return <Form data={[category, packaging]} setType={setType}/>;

            case "listCategory":
                return <CategoryList data={category} />;

            case "addCategory":
                return <Form data={[category, packaging]} setType={setType}/>;

            default:
        }
    };

    return (
        <>
            <Menu setType={setType} />
            {
                !type && <p>Dérouler le menu ci-dessus pour afficher des données !</p>
            }
            {display()}
        </>
    );
    
}

export default Admin;
