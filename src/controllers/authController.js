const signup = (req, res) => {
  const body = req.body;
  res.send(body);
};

const signin = (req, res) => {
  const body = req.body;
  res.send(body);
};

export default { signin, signup };
