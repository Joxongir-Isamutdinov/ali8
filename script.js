let name = prompt("Ismingizni kiriting:");
let id = prompt("Space ID ni kiriting (faqat raqam):");
let password = prompt("Parolingizni kiriting:");
function validate(name, id, password) {
  if (!name) return "Ism kiritilmagan";
  if (!id) return "ID kiritilmagan";
  if (!/^\d+$/.test(id)) return "ID faqat raqam bo‘lishi kerak";
  if (!password) return "Parol kiritilmagan";
  if (password.length < 4) return "Parol juda qisqa (kamida 4 ta belgidan bo‘lsin)";
  return null;
}

let error = validate(name, id, password);

if (error) {
  console.log("❌ Xato: " + error);
} else {
  let masked = "*".repeat(password.length);
  let user = {
    name: name,
    id: id
  };

  console.log("✔️ Kirish muvaffaqiyatli!");

  console.log("Foydalanuvchi:");
  console.log(user);

  console.log("Maskalangan parol:", masked);
}