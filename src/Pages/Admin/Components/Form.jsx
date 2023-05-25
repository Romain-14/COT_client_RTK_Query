import React from "react";
import style from "./form.module.css";
import { useAddTeaMutation } from "../../../store/slice/service/teaAPI";

function Form({ data, setType }) {
    const [addTea, response] = useAddTeaMutation();
    console.log(data[0]);
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        await addTea(formData);
        setType("list")

    };

    return (
        <form
            onSubmit={submitHandler}
            encType="multipart/form-data"
            className={style.form}
        >
            <input
                type="text"
                name="mainTitle"
                placeholder="titre principale"
            />
            <input type="text" name="subTitle" placeholder="titre secondaire" />
            <textarea
                placeholder="description"
                name="description"
                id="description"
                cols="30"
                rows="10"
            ></textarea>
            
            <select name="category" id="category">
                {data[0].map((c) => (
                    <option value={c.id} key={Math.random()}>
                        {c.title}
                    </option>
                ))}
            </select>
            <select name="packaging" id="packaging">
                {data[1].map((c) => (
                    <option value={c.id} key={Math.random()}>
                        {c.weight}
                    </option>
                ))}
            </select>
            <input
                type="text"
                name="ref"
                id="ref"
                placeholder="reference du produit"
            />
            <input type="number" name="price" id="price" placeholder="prix" />
            <input type="file" name="photo" id="photo" />
            <input type="submit" value="ajouter" />
        </form>
    );
}

export default Form;
