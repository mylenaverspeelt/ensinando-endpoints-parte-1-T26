export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type UsuarioModificado =
  | { user: User; message?: undefined }
  | { message: string; user?: undefined };

export type UsuarioRemovido = {
  message: string;
};

const database: User[] = [];

const db = () => {
  const message = "nao foi possivel encontrar, informacao invalida!";

  const getIndice = (id: number) =>
    database.findIndex((user) => user.id === id);

  return {
    findById: (id: number) => {
      const user = database.find((user) => user.id == id);

      if (!user) {
        message: "informacao nao encontrada";
      }

      return user;
    },
    findAll: () => database,
    create: (user: User) => {
      const newUser = {
        id: database.length + 1,
        name: user.name,
        email: user.email,
        password: user.password,
      };
      database.push(newUser);
      return newUser;
    },
    updateById: (id: number, user: User) => {
      const { name, email, password } = user;
      const indice = getIndice(id);
      if (indice >= 0) {
        const actualUser = database[indice];

        actualUser.name = name ? name : actualUser.name;
        actualUser.email = email ? email : actualUser.email;
        actualUser.password = password ? password : actualUser.password;

        database[indice] = actualUser;

        return { user: actualUser };
      }
      return { message };
    },
    remove: (id: number) => {
      const indice = getIndice(id);
      if (indice >= 0) {
        database.splice(indice, 1);
        return { message: "removido com sucesso! " };
      }
      return { message };
    },
  };
};

export default db();
