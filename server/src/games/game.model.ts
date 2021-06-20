import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Role} from "../roles/role.model";

interface GameCreationAttributes {
    title: string;
    release_date: Date;

}

@Table({tableName: 'games'})
export class Game extends Model<Game, GameCreationAttributes> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.DATE })
    release_date: Date;
}
