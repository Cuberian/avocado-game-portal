import { Model } from "sequelize-typescript";
interface GameCreationAttributes {
    title: string;
    release_date: Date;
}
export declare class Game extends Model<Game, GameCreationAttributes> {
    id: number;
    title: string;
    release_date: Date;
}
export {};
