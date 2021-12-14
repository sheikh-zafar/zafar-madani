import { tafseerdata } from "../../../tafseerdata";

export default function handler(req, res) {
  res.status(200).json(tafseerdata);
}
