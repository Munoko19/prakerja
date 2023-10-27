import dbPool from "../utils/db.js";

const getData = () => {
  const query = "SELECT user_id, name, email, password, created_at FROM users";

  return dbPool.query(query);
};

const createData = (name, email, password) => {
  let createdAt = new Date();

  const query =
    "INSERT INTO users(name, email, password, created_at) VALUES (?, ?, ?, ?)";
  const values = [name, email, password, createdAt];

  return dbPool.query(query, values);
};

const getDataById = (id) => {
  const query =
    "SELECT user_id, name, email, password, created_at FROM users WHERE user_id = ?";

  return dbPool.query(query, [id]);
};

const updateData = (id, name, email, password) => {
  let updatedAt = new Date();

  const query =
    "UPDATE users SET user_id = ?, name = ?, email = ?, password = ?, updated_at =? ";
  const values = [id, name, email, password, updatedAt];

  return dbPool.query(query, values);
};

const deleteData = (user_id) => {
  const query = "DELETE FROM users WHERE user_id = ?";
  const values = [user_id];

  return dbPool.query(query, values);
};

export { getData, createData, getDataById, updateData, deleteData };
