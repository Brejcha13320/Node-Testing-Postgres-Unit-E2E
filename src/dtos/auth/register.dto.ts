import { regex } from "../../config";

export class RegisterDto {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterDto?] {
    const { name, email, password } = object;

    if (!name) return ["Missing name"];
    if (!email) return ["Missing email"];
    if (!regex.email.test(email)) return ["Email is not valid"];
    if (!password) return ["Missing password"];
    if (password.length < 6) return ["Password too short"];

    return [undefined, new RegisterDto(name, email, password)];
  }
}
