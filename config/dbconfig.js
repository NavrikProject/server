import dotenv from "dotenv";
import sql from "mssql";

dotenv.config();
// Create connection to database
const config = {
  authentication: {
    options: {
      userName: process.env.SQL_AZURE_USERNAME, // update me
      password: process.env.SQL_AZURE_PWD, // update me
    },
    type: "default",
  },
  server: process.env.SQL_AZURE_SERVER, // update me
  options: {
    database: process.env.SQL_AZURE_DATABASE, //update me
    encrypt: true,
    TrustServerCertificate: false,
  },
};

export default config;

// Server=tcp:navrikdbserver.database.windows.net,1433;Initial Catalog=navrik;Persist Security Info=False;User ID=navrik;Password={your_password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
