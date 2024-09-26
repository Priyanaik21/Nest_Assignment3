import { DataSource, Repository } from 'typeorm';
import { UserInformation } from './user-information.entity';
import { CreateUserInformationDto, UpdateUserInformationDto } from './user-information.dto';
export declare class UserInformationService {
    private readonly dataSource;
    private readonly userInformationRepository;
    constructor(dataSource: DataSource, userInformationRepository: Repository<UserInformation>);
    create(createUserInformationDto: CreateUserInformationDto): Promise<UserInformation>;
    findAll(queryParams: any): Promise<UserInformation[]>;
    findOne(id: number): Promise<UserInformation>;
    update(id: number, updateUserInformationDto: UpdateUserInformationDto): Promise<void>;
    delete(id: number): Promise<void>;
    findOneByEmail(email: string): Promise<UserInformation | undefined>;
    validateUser(email: string, pass: string): Promise<any>;
}
