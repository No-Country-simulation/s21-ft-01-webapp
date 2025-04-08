import { DataTypes, Model, Optional, Sequelize } from "sequelize";

// Atributos del modelo OTP
export interface OTPAttributes {
  id: number;
  token: string;
  userEmail: string;
  expiresAt: Date;
}

// Define el tipo del objeto que se pasa a OTP.create()
export interface OTPInput extends Optional<OTPAttributes, "id"> {}

export class OTP extends Model<OTPAttributes, OTPInput> {
  static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userEmail: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        expiresAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        sequelize: sequelize,
        modelName: "otp",
        paranoid: false,
      }
    );
  }
}
