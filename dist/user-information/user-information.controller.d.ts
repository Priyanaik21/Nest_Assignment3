import { UserInformationService } from './user-information.service';
import { CreateUserInformationDto, UpdateUserInformationDto } from './user-information.dto';
export declare class UserInformationController {
    private readonly userInformationService;
    constructor(userInformationService: UserInformationService);
    create(createUserInformationDto: CreateUserInformationDto): Promise<import("./user-information.entity").UserInformation>;
    findAll(query: any): Promise<import("./user-information.entity").UserInformation[]>;
    findOne(id: number): Promise<import("./user-information.entity").UserInformation>;
    update(id: number, updateUserInformationDto: UpdateUserInformationDto): Promise<void>;
    delete(id: number): Promise<void>;
}
