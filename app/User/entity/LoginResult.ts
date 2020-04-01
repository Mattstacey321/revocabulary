import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass } from '@typegoose/typegoose';

@ObjectType()

export class LoginResult {
    @Field()
    @prop({ nullable: true })
    userID: String;
    @Field()
    @prop({ nullable: true })
    login: Boolean;
    @Field()
    @prop({ nullable: true })
    token: String;


}

