// contectController.js

import Contect from "../models/contectModel.js";

export const createContect = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newContect = new Contect({
      name,
      email,
      phone,
      message,
    });

    await newContect.save();
    res.status(201).json(newContect);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
