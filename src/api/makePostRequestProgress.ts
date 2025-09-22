import appAxios from "./appAxios";

const makePostRequestProgress = async (
  endpoint: string,
  body: unknown,
  headers?: object,
  onUploadProgress?: (progressEvent: ProgressEvent) => void
) => {
  const { data } = await appAxios().post(endpoint, body, {
    headers: {
      ...headers,
    },
    //@ts-expect-error ignore
    onUploadProgress,
  });
  return data;
};

export default makePostRequestProgress;
