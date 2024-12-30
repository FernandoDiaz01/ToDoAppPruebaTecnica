import axios from 'axios'

const API_URL = 'http://localhost:5000/api/tasks';


export const getTasks = async (filter = '') => {
    try {
      const url = filter ? `${API_URL}?completed=${filter}` : API_URL;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      throw error;
    }
  };
  

export const createTask = async (title, description) => {
  try {
    const response = await axios.post(API_URL, { title, description });
    console.log('Tarea creada correctamente', response.data)
    return response.data;
  } catch (error) {
    console.error('Error al crear la tarea:', error);
    throw error; 
  }
};

export const updateTask = async (id, updateTask) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updateTask);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la tarea:', error);
    throw error; 
  }
};

export const deleteTask = async (id) => {
  try {
    console.log(`Eliminando tarea con ID: ${id}`);
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la tarea:', error);
    throw error;  
  }
};
