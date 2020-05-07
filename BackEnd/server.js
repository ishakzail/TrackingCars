

const app = require('./src/app');

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`server is ready for connections on port ${PORT}`);
});
