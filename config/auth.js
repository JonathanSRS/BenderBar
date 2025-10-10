export function apiKeyMiddleware(req, res, next) {
  const apiKey = req.header("x-api-key");
  const SECRET_KEY = process.env.API_KEY || "MINHA_CHAVE_SECRETA";

  // Aplica apenas em POST, PUT, DELETE
  if (["POST", "PUT", "DELETE"].includes(req.method)) {
    if (!apiKey || apiKey !== SECRET_KEY) {
      return res.status(401).json({ error: "Chave de API inválida" });
    }
  }
  next();
}
