export const login = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  try {
    const data = req.body.body;
    //console.log(data);
    const { username, password } = JSON.parse(req.body.body);
    //console.log(username);
    if (password === "cs6440" && username === "cs6440") {
      console.log("Successfully authenticated");
      res.send({
        token: "test123",
      });
    } else res.status(403).json({ message: "Invalid login." });
    //res.status(200).json(feedbackMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
