import { NextApiRequest, NextApiResponse } from "next";
import Database from "@database";

const PieceDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  const database = new Database();

  const id = req.query.id;

  const piece = await database.getById(id as string);

  res.status(200).json(piece);
};

export default PieceDetail;
