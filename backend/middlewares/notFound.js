export const notFound = (req, res) => {
  res.status(400).json({ message: "Route does not exist" });
};
