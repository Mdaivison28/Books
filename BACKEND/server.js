import "dotenv/config";
import app from "./src/app.js";
import cors from 'cors'; 

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
