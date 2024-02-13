import app from "./api/app.js";

const HOSTNAME = "localhost";
const PORT = 3010;

app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});