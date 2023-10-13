const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @Param {string} text
export const generateHash = async (text: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(text, salt);
    return hash;
  } catch (error) {
    throw new Error(error);
  }
};

// @Param {string} text
// @Param {string} hash
export const compareHash = async (text: string, hash: string) => {
  try {
    const isMatch = await bcrypt.compare(text, hash);
    return isMatch;
  } catch (error) {
    throw new Error(error);
  }
};

// Generate JWT Access Token
// @Param {string} id
// @Param {string} email

export const generateJWT = async (id: number, email: string) => {
  try {
    const token = jwt.sign({ id, email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};
