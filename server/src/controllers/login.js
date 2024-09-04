import { User } from "../models/user.js";
import { createJsonWebToken } from "../service/auth.js";
import { downloadImage } from "../utils/serveImageLocally.js";

export const createUser = async (req, res) => {
  try {
    const { sub, name, image } = req.body;
    if (!sub || !name || !image)
      return res.status(400).send("Missing Required Fields.");
    const filename = `${sub}-${Date.now()}.jpg`;
    await downloadImage(image, filename);

    const user = await User.findOneAndUpdate(
      { sub },
      { name, image: `images/${filename}` },
      { new: true, upsert: true }
    );

    const token = createJsonWebToken(user._id);
    res.cookie("user", token, {
      httpOnly: true,
    });

    return res.status(200).json({ name: user.name, image: user.image });
  } catch (err) {
    return res.status(500).json({ message: "Error saving user data." });
  }
};
