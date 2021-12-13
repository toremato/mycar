// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require("axios").default;

const apiURL = "https://cars.mycar.kz/api";

type Response = {
  data: any;
};

export default {
  async getMarks(): Promise<any> {
    // getMarks(): any {
    return axios
      .get(`${apiURL}/auto/mark/?ordering=popularity_index`)
      .then((response: Response) => {
        console.log("API response", response);
        return response.data;
      })
      .catch((error: Error) => {
        console.error(error);
      });
  },
  // https://cars.mycar.kz/api/auto/model/?car_mark__id=10&ordering=name
  async getModels(markId: number): Promise<any> {
    return axios
      .get(`${apiURL}/auto/model/?car_mark__id=${markId}&ordering=name`)
      .then((response: Response) => {
        console.log("API response", response);
        return response.data;
      })
      .catch((error: Error) => {
        console.error(error);
      });
  },
};
