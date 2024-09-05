import { Note } from "../models/notes.js";
import { User } from "../models/user.js";
// import { downloadImage } from "../utils/serveImageLocally.js";
import { getCloudinaryImageURL } from "../utils/serveImageFromCloudinary.js";

export const getNotesOfAUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const notes = await Note.find({ user: userId }).populate("user");

    return res.status(200).send(notes);
  } catch (err) {
    return res.status(400).send("error in finding notes.");
  }
};

export const createNotesOfAUser = async (req, res) => {
  try {
    const { title, desc, image, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User Not Found");
    }

    const imageURL = null;
    if (image !== "") {
      const filename = `${user._id}-${Date.now()}.jpg`;
      imageURL = await getCloudinaryImageURL(image,"note_images");
      // imagePath = `images/${filename}`;
    }

    const note = new Note({
      title,
      desc,
      image: imageURL,
      user: user._id,
    });
    await note.save();

    return res.status(200).send(note);
  } catch (err) {
    return res.status(400).json({ message: "Error in Creating Notes" });
  }
};
