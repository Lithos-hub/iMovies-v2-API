import { hash, compare } from "bcrypt";

const encrypt = async (pass: string) => await hash(pass, 10);

const verified = async (pass: string, encryptedPass: string) =>
  await compare(pass, encryptedPass);

export { encrypt, verified };
