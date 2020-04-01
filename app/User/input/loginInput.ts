import { InputType, Field } from "type-graphql";
import { User } from "../entity/User";

@InputType()
export class LoginInput implements Partial<User>{
    @Field()
    password: String;
    @Field()
    username: String
}