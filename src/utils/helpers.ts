const bcrypt = require("bcryptjs");

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
