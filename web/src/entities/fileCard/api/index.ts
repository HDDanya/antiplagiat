import { apiSlice } from 'shared/api';
import { UploadFiles } from 'shared/types';
export const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    uploadFiles: build.mutation<UploadFiles, object>({
      query: (files) => ({
        url: '/upload',
        method: 'POST',
        body: { ...files },
      }),
      invalidatesTags: ['Files'],
    }),
  }),
});
export const { useUploadFilesMutation } = bookApiSlice;
