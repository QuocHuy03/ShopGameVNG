import Http from "../helper/http";

const http = new Http();


const getConfig = async () => {
  return await http.get("/gateway/config").then((response) => {
    return response;
  });
};

export const configService = {
    getConfig
};
