/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {
  id: string;
  email: string;
  password: string;
  needChangePassword: boolean;
  passwordChangeAt?: Date;
  role: 'superAdmin' | 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDelete: boolean;
}

export interface UserModel extends Model<TUser> {
  // myStaticMethod(): number;
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChange(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
