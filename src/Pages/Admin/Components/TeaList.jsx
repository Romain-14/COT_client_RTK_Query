import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {
    faPen,
    faTrash,
    faMagnifyingGlass,
    faHeart
} from "@fortawesome/free-solid-svg-icons";

import ModalPackaging from "./ModalPackaging";
import { useDeleteTeaMutation } from "../../../store/slice/service/teaAPI";

function TeaList({ data }) {
    const [toggleModalPackaging, setToggleModalPackaging] = useState(false);
    const [teaID, setTeaID] = useState(null);

    const [deleteTea, response] = useDeleteTeaMutation();

    const displayModalPackaging = (id) => {
        setTeaID(id);
        setToggleModalPackaging(!toggleModalPackaging);
    };

    return (
        <>
            {toggleModalPackaging && <ModalPackaging id={teaID} />}
            {data?.length ? <table>
                <thead>
                    <tr>
                        {/* {Object.keys(data[0]).map((d, i) => (
                            <Fragment key={Math.random()}>
                                <th>{d}</th>
                            </Fragment>
                        ))} */}
                        <th>id</th>
                        <th>titre</th>
                        <th>photo</th>
                        <th><FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} /></th>
                        <th>package</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.mainTitle}</td>
                            <td><img src={"http://localhost:9000/img/tea/" + d.url_img} alt="" /></td>
                            <td>
                                {
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        style={{
                                            color: d.isFavorite
                                                ? "#24f54e"
                                                : "red",
                                        }}
                                    />
                                }
                            </td>
                            <td onClick={() => displayModalPackaging(d.id)}>
                                {
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        style={{}}
                                    />
                                }
                            </td>
                            <td onClick={() => console.log("CLICK", d.id)}>
                                <FontAwesomeIcon
                                    icon={faPen}
                                    style={{ color: "royalblue" }}
                                />
                            </td>
                            <td onClick={() => deleteTea(d.id)}>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    style={{ color: "red" }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> : <p>Pas de thé en BDD !!!</p>}
            
        </>
    );
}

export default TeaList;
