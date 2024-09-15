import { Repository } from 'typeorm';
import { UserInformation } from './user-information.entity';
export declare class UserInformationService {
    private readonly userInformationRepository;
    constructor(userInformationRepository: Repository<UserInformation>);
    create(userInformationData: UserInformation): Promise<UserInformation>;
    findAll(): Promise<UserInformation[]>;
    findOne(id: number): Promise<UserInformation>;
    update(id: number, userInformationData: Partial<UserInformation>): Promise<void>;
    delete(id: number): Promise<void>;
}
