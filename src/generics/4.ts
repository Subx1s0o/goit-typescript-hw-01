type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): void {
  if (initialValues.name) console.log("update name", initialValues.name);
  if (initialValues.surname)
    console.log("update surname", initialValues.surname);
  if (initialValues.email) console.log("update email", initialValues.email);
  if (initialValues.password)
    console.log("update password", initialValues.password);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
