import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teaApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/api/v1/" }),
    endpoints: (builder) => ({
        getTeaCategory: builder.query({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const teaFetch = await fetchWithBQ("/tea");
                if (teaFetch.error) return { error: teaFetch.error };
                const tea = teaFetch.data;

                const categoryFetch = await fetchWithBQ("/category");
                const category = categoryFetch.data;

                if (categoryFetch.error) return { error: categoryFetch.error };

                const packagingFetch = await fetchWithBQ("/packaging");
                const packaging = packagingFetch.data;

                return { data: { tea, category, packaging } };
            },
            providesTags: ["teaPosted", "categoryPosted", "deletedTea"],
        }),
        getTeaPackaging: builder.query({
            query: (id) => `teaPackaging/${id}`,
        }),
        addTea: builder.mutation({
            query: (payload) => ({
                url: "/tea/add",
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["teaPosted"],
        }),
        addCategory: builder.mutation({
            query: (payload) => ({
                url: "/category/add",
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["categoryPosted"],
        }),
        deleteTea: builder.mutation({
            query: (id) => ({
                url: `/tea/${id}`,
                method: "delete",
            }),
            invalidatesTags: ["deletedTea"],
        }),
    }),
});

export const {
    useGetTeaCategoryQuery,
    useGetTeaPackagingQuery,
    useAddTeaMutation,
    useDeleteTeaMutation
} = teaApi;
