const Task = require('../models/Task');
const { validationResult } = require('express-validator');


exports.createTask = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description } = req.body;

  try {
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};

exports.getTasks = async (req, res) => {
  const { completed } = req.query;

  try {
    const tasks = completed !== undefined 
      ? await Task.find({ completed }) 
      : await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};

exports.getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la tarea' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

exports.deleteTask = async (req, res) => {
  const { _id } = req.params;
  console.log(`Recibiendo solicitud para eliminar la tarea con id: ${id}`);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(200).json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};
