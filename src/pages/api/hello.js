// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { pid } = req.body;

  res.status(200).send(`is a hoe`);
}
