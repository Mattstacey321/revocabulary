import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UserInput } from "../input/createUserInput";
import { UserModel } from "../entity/User";
import { LoginInput } from "../input/loginInput";
import {sign}  from 'jsonwebtoken';
import { LoginResult } from "../entity/LoginResult";


@Resolver()
export class UserResolver {
    @Query(() => LoginResult)
    async login(@Arg("data") { username, password }: LoginInput) {
        return UserModel.findOne({ "username": username, "password": password }).then((v) => {
            var token = sign({
                "userID": v?._id
            }, "a321");
           return {
                "userID":v?._id,
                "login": true,
                "token": token
            }
        

        })
    }

    @Mutation(() => Boolean)
    async createUser(@Arg("data") { password,username }: UserInput) {
        
        return UserModel.create({
            password,
            username
        }).then((_) => {
            return true;
        }).catch((_) => {
            return false;
        });


    }
    
}