import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { area, type } = req.query;

  // Validar área e tipo
  const validAreas = ["tecnologia", "bombeiro", "comercio"];
  const validTypes = ["completo", "resumido"];

  if (!validAreas.includes(area) || !validTypes.includes(type)) {
    return res.status(400).json({ error: "Parâmetros inválidos" });
  }

  try {
    // Construir caminho do arquivo
    const filePath = path.join(
      process.cwd(),
      "public",
      "curriculos",
      area,
      `cv-${type}.pdf`
    );

    // Verificar se arquivo existe
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Arquivo não encontrado" });
    }

    // Obter estatísticas do arquivo
    const stat = fs.statSync(filePath);

    // Configurar headers
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=cv-${area}-${type}.pdf`
    );

    // Stream do arquivo
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Erro ao processar download:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

// Configurar limites de tamanho do corpo da requisição
export const config = {
  api: {
    bodyParser: false,
    responseLimit: "10mb",
  },
};
