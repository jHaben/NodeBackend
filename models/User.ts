import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../server';  // assuming you have exported sequelize from your server.ts file

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public food!: string;
    public hobby!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    food: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    hobby: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'users',
});

export default User;

