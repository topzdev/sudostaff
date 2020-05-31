import genQuery from "@/utils/genQuery";
import parseData from "@/utils/parseData";

class ApiClient {
  constructor() {
    this.config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    this.genQuery = genQuery;
    this.parseData = parseData;
  }
}

export default ApiClient;
