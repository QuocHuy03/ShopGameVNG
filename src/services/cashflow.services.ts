import Http from "../helper/http";

const http = new Http();

const getCashflowList = async () => {
  return await http.get("/gateway/cashflow").then((response) => {
    return response;
  });
};

export const cashflowService = {
  getCashflowList,
};
