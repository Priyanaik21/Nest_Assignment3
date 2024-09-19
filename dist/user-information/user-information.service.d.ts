import { DataSource } from 'typeorm';
import { UserInformation } from './user-information.entity';
import { CreateUserInformationDto, UpdateUserInformationDto } from './user-information.dto';
export declare class UserInformationService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    create(createUserInformationDto: CreateUserInformationDto): Promise<UserInformation>;
    findAll(): Promise<UserInformation[]>;
    findOne(id: number): Promise<UserInformation>;
    update(id: number, updateUserInformationDto: UpdateUserInformationDto): Promise<void>;
    delete(id: number): Promise<void>;
}
