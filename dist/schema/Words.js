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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
let Words = class Words {
};
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ nullable: true }),
    __metadata("design:type", String)
], Words.prototype, "word", void 0);
__decorate([
    type_graphql_1.Field(),
    typegoose_1.prop({ nullable: true }),
    __metadata("design:type", String)
], Words.prototype, "meaning", void 0);
__decorate([
    typegoose_1.prop({ nullable: true }),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Words.prototype, "example", void 0);
Words = __decorate([
    type_graphql_1.ObjectType()
], Words);
exports.Words = Words;
exports.WordsModel = typegoose_1.getModelForClass(Words);
//# sourceMappingURL=Words.js.map