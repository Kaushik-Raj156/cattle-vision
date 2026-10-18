# Cattle Vision

## Run locally on Windows

Open two terminals from the project folder.

1. Start the API with `backend\run.bat`.
2. Start the web app with `cd frontend` and `npm run dev`.
3. Open the local URL printed by Vite, usually `http://localhost:5173`.

The API documentation is available at `http://localhost:8000/docs`. The API loads
the breed and disease models from `backend\models` when each model is first used.
