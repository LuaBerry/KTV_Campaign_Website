import app from "./app";

const PORT = process.env.PORT || 9000;

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);