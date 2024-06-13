import Admin from "../models/admin.model.js";
const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    await admin.save();
    res.status(201).send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).send(admins);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).send("Admin not found");
    }
    res.status(200).send(admin);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!admin) {
      return res.status(404).send("Admin not found");
    }
    res.status(200).send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).send("Admin not found");
    }
    res.status(200).send(admin);
  } catch (error) {
    res.status(500).send(error);
  }
};
export { createAdmin, getAdmins, getAdmin, updateAdmin, deleteAdmin };
