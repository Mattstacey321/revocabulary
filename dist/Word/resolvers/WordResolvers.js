"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Words_1 = require("../schema/Words");
const Words_2 = require("../schema/Words");
const WordInput_1 = require("../input/WordInput");
const cross_fetch_1 = require("cross-fetch");
let WordResolver = class WordResolver {
    async returnAllWord() {
        return await Words_2.WordsModel.find();
    }
    async createNewWord({ word, meaning, example, word_type }) {
        var getPhonetic = `https://api.dictionaryapi.dev/api/v1/entries/en/${word}`;
        cross_fetch_1.fetch(getPhonetic).then(async (v) => {
            var text = await v.text();
            var jsonParse = JSON.parse(text);
            var phonetic = jsonParse[0].phonetic;
            return Words_2.WordsModel.create({
                word,
                meaning,
                example, word_type,
                phonetic
            }).then((v) => {
                return v;
            }).catch((err) => {
                console.log(err);
            });
        }).catch((_) => {
            return "";
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Words_1.Words]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WordResolver.prototype, "returnAllWord", null);
__decorate([
    type_graphql_1.Mutation(() => Words_1.Words),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WordInput_1.WordInput]),
    __metadata("design:returntype", Promise)
], WordResolver.prototype, "createNewWord", null);
WordResolver = __decorate([
    type_graphql_1.Resolver()
], WordResolver);
exports.WordResolver = WordResolver;
//# sourceMappingURL=WordResolvers.js.map