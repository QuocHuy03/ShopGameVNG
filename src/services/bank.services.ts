import Http from "../helper/http";

const http = new Http();


const getBankList = async () => {
  return await http.get("/bank/list").then((response) => {
    return response;
  });
};

const getListBankUserAuto = async () => {
  return await http.get("/gateway/bank").then((response) => {
    return response;
  });
};

export const bankService = {
  getBankList,
  getListBankUserAuto,
};
