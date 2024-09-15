import { UserInformationService } from './user-information.service';
import { UserInformation } from './user-information.entity';
export declare class UserInformationController {
    private readonly userInformationService;
    constructor(userInformationService: UserInformationService);
    create(userInformationData: UserInformation): Promise<UserInformation>;
    findAll(): Promise<UserInformation[]>;
    findOne(id: number): Promise<UserInformation>;
    update(id: number, userInformationData: Partial<UserInformation>): Promise<void>;
    delete(id: number): Promise<void>;
}
