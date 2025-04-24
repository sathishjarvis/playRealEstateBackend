const Directory = require('../model/directory.model.list');

// Get all directories
exports.getAllDirectories = async (req, res) => {
  try {
    const directories = await Directory.find({});
    console.log('Fetched directories:', directories); // Log to console
    res.status(200).json(directories);
  } catch (err) {
    console.error('Error fetching directories:', err);
    res.status(500).json({ error: err.message });
  }
};

// Get single directory
exports.getDirectory = async (req, res) => {
  try {
    const directory = await Directory.findById(req.params.id);
    if (!directory) {
      return res.status(404).json({ message: 'Directory not found' });
    }
    console.log('Fetched directory:', directory); // Log to console
    res.status(200).json(directory);
  } catch (err) {
    console.error('Error fetching directory:', err);
    res.status(500).json({ error: err.message });
  }
};

// Create new directory
exports.createDirectory = async (req, res) => {
  try {
    const directory = new Directory(req.body);
    const savedDirectory = await directory.save();
    console.log('Created directory:', savedDirectory); // Log to console
    res.status(201).json(savedDirectory);
  } catch (err) {
    console.error('Error creating directory:', err);
    res.status(400).json({ error: err.message });
  }
};

// Update directory
exports.updateDirectory = async (req, res) => {
  try {
    const directory = await Directory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!directory) {
      return res.status(404).json({ message: 'Directory not found' });
    }
    console.log('Updated directory:', directory); // Log to console
    res.status(200).json(directory);
  } catch (err) {
    console.error('Error updating directory:', err);
    res.status(400).json({ error: err.message });
  }
};

// Delete directory
exports.deleteDirectory = async (req, res) => {
  try {
    const directory = await Directory.findByIdAndDelete(req.params.id);
    if (!directory) {
      return res.status(404).json({ message: 'Directory not found' });
    }
    console.log('Deleted directory:', directory); // Log to console
    res.status(200).json({ message: 'Directory deleted successfully' });
  } catch (err) {
    console.error('Error deleting directory:', err);
    res.status(500).json({ error: err.message });
  }
};