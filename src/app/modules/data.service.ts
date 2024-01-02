import { DataModel } from "./data.model";

const getData = async () => {
    const result = await DataModel.find();
    return result;
  };


  export const DataServices = {
    getData,
  }