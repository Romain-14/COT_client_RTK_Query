import React from "react";

import { useGetTeaCategoryQuery } from "../../store/slice/service/teaAPI.js";

function HOC({ child }) {
    const Child = child;

	const { data, isError, isLoading, isFetching, isSuccess } = useGetTeaCategoryQuery();

    return (
        <>
            {(isLoading || isFetching) && <p>loading</p>}
            {isError && <p>not found 404</p>}
            {isSuccess && (
              <Child data={data}/>
            )}
        </>
    );
}

export default HOC;
