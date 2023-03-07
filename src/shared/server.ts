import { databaseConnection } from "../config/mongo/connection";

(async () => {
  try {
    const App = require("./app").default;
    const app = new App();

    await databaseConnection();

    app.listen();
  } catch (err: any) {
    console.error(
      "Something went wrong when initializing the server:\n",
      err.stack
    );
  }
})();
