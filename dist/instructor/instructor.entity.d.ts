import { UserInformation } from '../user-information/user-information.entity';
import { InstructorDepartment } from 'src/instructor_department/instructor_department.entity';
export declare class Instructor {
    instructorId: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    created_by: string;
    updated_by: string;
    userInformation: UserInformation;
    instructor_Id: InstructorDepartment;
}
