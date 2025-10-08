const getHostAPIUrl = () => {
  const ENV = import.meta.env.VITE_PUBLIC_NODE_ENV;

  if (ENV == "staging") {
    return `https://api-staging-linode.marzi.life/`;
  } else if (ENV == "uat") {
    return `https://api-staging-linode.marzi.life/`;
  } else if (ENV == "production") {
    return `https://production.com/`;
  }
  // For testing, let's use a mock API or the staging backend
  return `https://api-staging-linode.marzi.life/`;
};
export default getHostAPIUrl;
  