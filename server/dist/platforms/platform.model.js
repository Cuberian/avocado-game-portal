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
exports.Platform = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const game_platforms_model_1 = require("../games/game-platforms.model");
const game_model_1 = require("../games/game.model");
let Platform = class Platform extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Platform.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Platform.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => game_model_1.Game, () => game_platforms_model_1.GamePlatforms),
    __metadata("design:type", Array)
], Platform.prototype, "platforms", void 0);
Platform = __decorate([
    sequelize_typescript_1.Table({ tableName: 'platforms' })
], Platform);
exports.Platform = Platform;
//# sourceMappingURL=platform.model.js.map