import express from "express";

const app = express();

const PORT = process.env.PORT || 27017;

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
  console.log("✋ Press Ctrl + C to Stop");
});

app.get("/", (_req, res) => {
  console.log("Test funcionando correctamente");
  res.send("Test funcionando correctamente");
});

export default app;
