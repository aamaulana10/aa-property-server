import dotenv from "dotenv"
dotenv.config()

import app from "./app"

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT || '8080', 10);

app.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`);
});