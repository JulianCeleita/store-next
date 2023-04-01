import { IncomingMessage, ServerResponse } from "http";
import Database from "@database";

const allPieces = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const database = new Database();
  const allEntries = await database.getAll();
  const length = allEntries.length;

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ data: allEntries, length }));
};

export default allPieces;
