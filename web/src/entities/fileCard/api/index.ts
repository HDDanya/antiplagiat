import { apiSlice } from 'shared/api';
import { UploadFiles } from 'shared/types';
export const fileApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    uploadFiles: build.mutation<UploadFiles, FormData>({
      query: (formData) => ({
        url: '/upload',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Files'],
    }),
  }),
});
export const { useUploadFilesMutation } = fileApiSlice;
