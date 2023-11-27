import app from "./app";


const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(process.env.PORT || 9000, handleListening);