export interface Auth extends Document {
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}
