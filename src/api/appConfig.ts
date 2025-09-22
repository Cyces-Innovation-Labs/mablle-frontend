const getHostAPIUrl = () => {
  const ENV = import.meta.env.VITE_PUBLIC_NODE_ENV;

  if (ENV == "staging") {
    return `https://staging.com/`;
  } else if (ENV == "uat") {
    return `https://uat.com/`;
  } else if (ENV == "production") {
    return `https://production.com/`;
  }
  return `https://staging.com/`;
};
export default getHostAPIUrl;
