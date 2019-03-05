import app from './app';
// const app = require("./app.ts");

const PORT = process.env.PORT || '8000';
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});