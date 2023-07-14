import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "7fb29da887msh5efadf4fef76570p1bdde3jsnfffd29567807");

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
    getSongDetails: builder.query({ query: ({ songid }) => `/shazam-songs/get-details/?locale=en-US&id=${songid}` }),
    getSongRelated: builder.query({query: ({songid}) => `/shazam-songs/list-similarities/?locale=en-US&id=track-similarities-id-${songid}`})
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery } = shazamCoreApi;

// 659236090
// 666419045
