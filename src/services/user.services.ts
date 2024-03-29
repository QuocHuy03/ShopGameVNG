import Http from "../helper/http";

const http = new Http();

const login = async (body: any) => {
  const data = {
    type: "client",
    ...body,
  };
  return await http.post("/user/login", data).then((response) => {
    return response;
  });
};

const register = async (body: any) => {
  return await http.post("/user/register", body).then((response) => {
    return response;
  });
};

const getMe = async () => {
  return await http.get("/user/me").then((response) => {
    return response;
  });
};

const updateMe = async (body: any) => {
  return await http.patch("/user/me", body).then((response) => {
    return response;
  });
};

const forgotPassword = async (data: any) => {
  return await http.post("/user/forgot-password", data).then((response) => {
    return response;
  });
};

const resetPassword = async (data: any) => {
  return await http.post("/user/reset-password", data).then((response) => {
    return response;
  });
};

const logout = async (refreshToken: any) => {
  const body = { refreshToken };
  return await http.post("/user/logout", body).then((response) => {
    return response;
  });
};

const changePassword = async (data: any) => {
  return await http.update("/user/change-password", data).then((response) => {
    return response;
  });
};

const getLogs = async () => {
  return await http.get("/user/logs").then((response) => {
    return response;
  });
};

export const userService = {
  login,
  register,
  getMe,
  updateMe,
  getLogs,
  logout,
  changePassword,
  forgotPassword,
  resetPassword,
};
