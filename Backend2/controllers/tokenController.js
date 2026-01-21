const JWT = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const GenerateToken = async (req, res) => {
  try {
    const JWTtoken = JWT.sign(
      { user_id: "11223344" },
      "!@#CCAfdv678678",
      { expiresIn: "10s" }
    );

    res.cookie("token", JWTtoken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 10 * 1000
    });
    return res.status(200).json(JWTtoken);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const Verify = async(req, res) => {
    try {
        const decoded = JWT.verify(req.cookies.token, "!@#CCAfdv678678");
        console.log(decoded);
        return res.status(200).json(decoded);
    }
    catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

module.exports = { GenerateToken, Verify };

