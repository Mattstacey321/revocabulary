import { UserInput } from "../input/createUserInput";
import { LoginInput } from "../input/loginInput";
export declare class UserResolver {
    login({ username, password }: LoginInput): Promise<{
        userID: any;
        login: boolean;
        token: string;
    }>;
    createUser({ password, username }: UserInput): Promise<boolean>;
}
