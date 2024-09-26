import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { InstructorDepartment } from './instructor_department.entity';
import { CreateInstructorDepartmentDto, UpdateInstructorDepartmentDto } from './instructor_department.dto';
import { Instructor } from '../instructor/instructor.entity';
import { Department } from '../department/department.entity';
import { applyPaginationSearchSort } from 'src/utils/paginationSearchSort';

@Injectable()
export class InstructorDepartmentService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    @InjectRepository(InstructorDepartment) private readonly instructorDepartmentRepository: Repository<InstructorDepartment>,
    @InjectRepository(Instructor) private readonly instructorRepository: Repository<Instructor>,
    @InjectRepository(Department) private readonly departmentRepository: Repository<Department>,
  ) {}

  async create(createInstructorDepartmentDto: CreateInstructorDepartmentDto): Promise<InstructorDepartment> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const instructor = await queryRunner.manager.findOne(Instructor, {
        where: { instructorId: createInstructorDepartmentDto.instructorId },
      });
      const department = await queryRunner.manager.findOne(Department, {
        where: { departmentId: createInstructorDepartmentDto.departmentId },
      });

      if (!instructor || !department) {
        throw new NotFoundException('Instructor or Department not found');
      }
  
      const newInstructorDepartment = this.instructorDepartmentRepository.create({
        instructor,
        
        department,
      });

      const savedInstructorDepartment = await queryRunner.manager.save(InstructorDepartment, newInstructorDepartment);
      await queryRunner.commitTransaction();
      return savedInstructorDepartment;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(queryParams: any): Promise<InstructorDepartment[]> {
    const searchFields = ['instructorDepartmentId'];
    const { skip, take, order, where } = applyPaginationSearchSort(queryParams, searchFields);

    return this.instructorDepartmentRepository.find({
      skip,
      take, 
      order, 
      where: where || {},
     
      relations: ['instructor','department'],
    });
  }

  async findAllDetails(queryParams: any): Promise<InstructorDepartment[]> {
    const searchFields = ['instructorDepartmentId'];
    const { skip, take, order, where } = applyPaginationSearchSort(queryParams, searchFields);

    return this.instructorDepartmentRepository.find({
      skip,
      take, 
      order, 
      where: where || {},
      relations: ['instructor','department'],
    });
  }

  async findOne(id: number): Promise<InstructorDepartment> {
    const instructorDepartment = await this.instructorDepartmentRepository.findOne({
      where: { instructorDepartmentId: id },
      relations: ['instructor', 'department'],
    });

    if (!instructorDepartment) {
      throw new NotFoundException('InstructorDepartment not found');
    }

    return instructorDepartment;
  }

  async update(id: number, updateInstructorDepartmentDto: UpdateInstructorDepartmentDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const instructorDepartment = await queryRunner.manager.findOne(InstructorDepartment, {
        where: { instructorDepartmentId: id },
        relations: ['instructor', 'department'],
      });

      if (!instructorDepartment) {
        throw new NotFoundException('InstructorDepartment not found');
      }

      if (updateInstructorDepartmentDto.instructorId) {
        const instructor = await queryRunner.manager.findOne(Instructor, {
          where: { instructorId: updateInstructorDepartmentDto.instructorId },
        });
        if (instructor) {
          instructorDepartment.instructor = instructor;
        }
      }

      if (updateInstructorDepartmentDto.departmentId) {
        const department = await queryRunner.manager.findOne(Department, {
          where: { departmentId: updateInstructorDepartmentDto.departmentId },
        });
        if (department) {
          instructorDepartment.department = department;
        }
      }

      await queryRunner.manager.save(InstructorDepartment, instructorDepartment);
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
      const result = await queryRunner.manager.delete(InstructorDepartment, id);
      if (result.affected === 0) {
        throw new NotFoundException('InstructorDepartment not found');
      }

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
