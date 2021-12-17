const config = {
  env: process.env.NODE_ENV,
  // baseURI: '/api', // http://localhost:8000/api since we config proxy = 8000
  baseURI: process.env.REACT_APP_URL, // http://localhost:8000/api since we config proxy = 8000
  endpoints: {
    auth: {
      login: "/login",
      createAccount: "/register",
      logout: "/logout",
      me: "/users/me",
      profile: "/users",
    },
    form: {
      id: "/forms",
    },
  },
};
export default config;
