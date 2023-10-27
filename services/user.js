import {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
} from "../repositories/users.js";

export const createUser = async (name, email, password) => {
  let [result] = await createData(name, email, password);

  if (result.insertId > 0) {
    console.log(`berhasil menambahkan user dengan id : ${result.insertId}`);
    let [data] = await getDataById(result.insertId);
    if (data.length > 0) {
      console.log(data[0]);
    } else {
      console.log("tidak ada data user");
    }
  } else {
    console.log("gagal menambahkan user");
  }
};

export const getUser = async () => {
  let [result] = await getData();

  if (result.length > 0) {
    console.log(result);
  } else {
    console.log("tidak ada data user");
  }
};

export const getUserDetail = async (id) => {
  let [result] = await getDataById(id);

  if (result.length > 0) {
    console.log(result[0]);
  } else {
    console.log(`user dengan id ${id} tidak ditemukan`);
  }
};

export const updateUser = async (id, name, email, password) => {
  let [result] = await updateData(id, name, email, password);

  if (result.updateId > 0) {
    console.log(`berhasil menambahkan update dengan id : ${result.updateId}`);
  } else {
    console.log("gagal menambahkan user");
  }
};

export const deleteUser = async (user_id) => {
  let [result] = await deleteData(user_id);

  if (result.affectedRows > 0) {
    console.log(`Berhasil menghapus user dengan ID: ${user_id}`);
  } else {
    console.log(`Gagal menghapus user dengan ID: ${user_id}`);
  }
};
