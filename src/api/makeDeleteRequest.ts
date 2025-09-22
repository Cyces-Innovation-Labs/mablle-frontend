import appAxios from "./appAxios";

const makeDeleteRequest = async (
  endpoint: string,
  params = {},
  headers = {}
) => {
  const { data } = await appAxios().delete(endpoint, {
    headers: {
      ...headers,
    },
    params: params,
    paramsSerializer: {
      indexes: null,
    },
  });
  return data;
};

export default makeDeleteRequest;
