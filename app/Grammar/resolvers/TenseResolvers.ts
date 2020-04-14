import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { TenseModel, Tense } from "../entities/TenseModel";
import { TenseInput } from "../input/TenseInput";


@Resolver()
export class TenseResolvers{
    @Query(()=>[Tense])
    async getTense() {
        return TenseModel.find();
    }
    @Query(()=>Tense)
    async getTenseByName(@Arg("type") type: string){
        return TenseModel.findOne({"type":type});
    }
    @Mutation(() => Tense)
    async addTense(@Arg("input") tenseInput :TenseInput) {
        var createGrammar = TenseModel.create(tenseInput);
    }
}