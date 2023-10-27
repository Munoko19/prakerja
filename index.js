/*
    1. Buat function untuk update data user;
    2. buat function untuk delete data user;
    3. modifikasi function create user, yang return nya adalah menampilkan data yang
       telah di tambahkan.
*/
import * as UserService from "./services/user.js";

// console.log("ambil data user: ");
// await UserService.getUser();

// console.log("create data user: ");
// await UserService.createUser("Masmun", "Munok@gmail.com", "89072");
// await UserService.createUser("Rovi Fauzan", "rovi@gmail.com", "pass1234");

// console.log("ambil data user: ");
// await UserService.getUser();

console.log("update data user: ");
await UserService.updateUser(2, "Dian Rusdianto", "dika@gmail.com", "pass1234");

// console.log("hapus data user: ");
// await UserService.deleteUser(2);

// console.log("hapus data user: ");
// await UserService.deleteUser(2);
