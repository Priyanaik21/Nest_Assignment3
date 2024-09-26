import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Department } from './department.entity';
import { CreateDepartmentDto, UpdateDepartmentDto } from './department.dto';
import { applyPaginationSearchSort } from 'src/utils/paginationSearchSort';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newDepartment = this.departmentRepository.create(createDepartmentDto);
      const savedDepartment = await queryRunner.manager.save(Department, newDepartment);
      await queryRunner.commitTransaction();
      return savedDepartment;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(queryParams:any): Promise<Department[]> {
    const searchFields = ['departmentName','departmentId'];
    const { skip, take, order, where } = applyPaginationSearchSort(queryParams, searchFields);

    return this.departmentRepository.find({
      skip, 
      take,
      order, 
      where: where || {}, 
    });
    }

    async findOne(id: number): Promise<Department> {
    const department = await this.departmentRepository.findOneBy({ departmentId: id });
    if (!department) {
      throw new NotFoundException('Department not found');
    }
    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const department = await queryRunner.manager.findOne(Department, {
        where: { departmentId: id },
      });
      if (!department) {
        throw new NotFoundException('Department not found');
      }
      Object.assign(department, updateDepartmentDto);
      await queryRunner.manager.save(Department, department);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async delete(id: number): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const department = await queryRunner.manager.findOne(Department, {
        where: { departmentId: id },
      });
      if (!department) {
        throw new NotFoundException('Department not found');
      }

      await queryRunner.manager.delete(Department, id);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
