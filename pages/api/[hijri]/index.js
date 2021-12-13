import { mausamiyatdata } from "../../../mausamiyatdata";

export default function handler(req, res) {
  const { hijri } = req.query;
  const year = mausamiyatdata.filter((dars) => dars.hijri === hijri);
  res.status(200).json(year);
}
