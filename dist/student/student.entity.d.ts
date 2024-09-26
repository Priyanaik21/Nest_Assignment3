import { UserInformation } from '../user-information/user-information.entity';
export declare class Student {
    studentId: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    userInformation: UserInformation;
}
