import Http from "../helper/http";

const http = new Http();

const create = async (body: any) => {
  return await http.post("/order", body).then((response) => {
    return response;
  });
};


const list = async () => {
  return await http.get("/order").then((response) => {
    return response;
  });
};

export const orderService = {
  create,
  list,
};
