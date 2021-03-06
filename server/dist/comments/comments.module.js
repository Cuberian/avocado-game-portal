"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_controller_1 = require("./comments.controller");
const comment_model_1 = require("./comment.model");
const sequelize_1 = require("@nestjs/sequelize");
const news_model_1 = require("../news/news.model");
const user_model_1 = require("../users/user.model");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    common_1.Module({
        providers: [comments_service_1.CommentsService],
        controllers: [comments_controller_1.CommentsController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([comment_model_1.Comment, user_model_1.User, news_model_1.News])
        ]
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map