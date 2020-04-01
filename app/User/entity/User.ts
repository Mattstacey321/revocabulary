import { ObjectType, Field} from "type-graphql";
import { prop, getModelForClass} from '@typegoose/typegoose';

@ObjectType()

export class User{
    @Field()
    @prop({ nullable: true })
    username:String;
    @Field()
    @prop({ nullable: true })
    password:String;
    

}
export const UserModel = getModelForClass(User);
