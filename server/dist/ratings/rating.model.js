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
exports.Rating = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../users/user.model");
const game_model_1 = require("../games/game.model");
let Rating = class Rating extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Rating.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.FLOAT, allowNull: false }),
    __metadata("design:type", Number)
], Rating.prototype, "rating", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => game_model_1.Game),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Rating.prototype, "game_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => game_model_1.Game, 'game_id'),
    __metadata("design:type", game_model_1.Game)
], Rating.prototype, "game", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Rating.prototype, "user_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User, 'user_id'),
    __metadata("design:type", user_model_1.User)
], Rating.prototype, "user", void 0);
Rating = __decorate([
    sequelize_typescript_1.Table({ tableName: 'ratings' })
], Rating);
exports.Rating = Rating;
//# sourceMappingURL=rating.model.js.map