import { User } from "../entity/User";
export declare class LoginInput implements Partial<User> {
    password: String;
    username: String;
}
