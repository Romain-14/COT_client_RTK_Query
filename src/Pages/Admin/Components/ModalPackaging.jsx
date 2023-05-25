import React, { Fragment } from "react";
import { useGetTeaPackagingQuery } from "../../../store/slice/service/teaAPI";

function ModalPackaging({ id }) {
    const { data, isLoading, isFetching, isSuccess, isError } =
        useGetTeaPackagingQuery(id);

    console.log(data);
    return (
        <>
            {(isLoading || isFetching) && <p>loading</p>}
            {isError && <p>not found 404</p>}
            <ul>
                {isSuccess &&
                    data.map((p) => (
                        <Fragment key={p.ref} >
                            <li>REF: {p.ref} | poids: {p.weight}</li>
                        </Fragment>
                    ))}
            </ul>
        </>
    );
}

export default ModalPackaging;
