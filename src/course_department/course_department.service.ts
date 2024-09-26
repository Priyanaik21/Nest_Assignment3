import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CourseDepartment } from './course_department.entity';
import { CreateCourseDepartmentDto, UpdateCourseDepartmentDto } from './course_department.dto';
import { Course } from '../courses/courses.entity';
import { Department } from '../department/department.entity';
import { applyPaginationSearchSort } from 'src/utils/paginationSearchSort';

@Injectable()
export class CourseDepartmentService {
  constructor(
    @InjectDataSource() 
    private readonly dataSource: DataSource,
    @InjectRepository(CourseDepartment)
     private readonly courseDepartmentRepository: Repository<CourseDepartment>,
    @InjectRepository(Course)
     private readonly courseRepository: Repository<Course>,
    @InjectRepository(Department)
     private readonly departmentRepository: Repository<Department>,
  ) {}

  async create(createCourseDepartmentDto: CreateCourseDepartmentDto): Promise<CourseDepartment> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const course = await queryRunner.manager.findOne(Course, {
        where: { courseId: createCourseDepartmentDto.courseId },
      });
      const department = await queryRunner.manager.findOne(Department, {
        where: { departmentId: createCourseDepartmentDto.departmentId },
      });

      if (!course || !department) {
        throw new NotFoundException('Course or Department not found');
      }

      const newCourseDepartment = this.courseDepartmentRepository.create({
        course,
        department,
      });

      const savedCourseDepartment = await queryRunner.manager.save(CourseDepartment, newCourseDepartment);
      await queryRunner.commitTransaction();
      return savedCourseDepartment;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(queryParams: any): Promise<CourseDepartment[]> {
    const searchFields=['courseDepartmentId'];
    const { skip, take, order, where } = applyPaginationSearchSort(queryParams, searchFields);
    return this.courseDepartmentRepository.find({
      skip, 
      take, 
      order, 
      where: where || {},
      relations: ['course', 'department'],
    });
  }

  async findOne(id: number): Promise<CourseDepartment> {
    const courseDepartment = await this.courseDepartmentRepository.findOne({
      where: { courseDepartmentId: id },
      relations: ['course', 'department'],
    });

    if (!courseDepartment) {
      throw new NotFoundException('CourseDepartment not found');
    }

    return courseDepartment;
  }

  async update(id: number, updateCourseDepartmentDto: UpdateCourseDepartmentDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const courseDepartment = await queryRunner.manager.findOne(CourseDepartment, {
        where: { courseDepartmentId: id },
        relations: ['course', 'department'],
      });

      if (!courseDepartment) {
        throw new NotFoundException('CourseDepartment not found');
      }

      if (updateCourseDepartmentDto.courseId) {
        const course = await queryRunner.manager.findOne(Course, {
          where: { courseId: updateCourseDepartmentDto.courseId },
        });
        if (course) {
          courseDepartment.course = course;
        }
      }

      if (updateCourseDepartmentDto.departmentId) {
        const department = await queryRunner.manager.findOne(Department, {
          where: { departmentId: updateCourseDepartmentDto.departmentId },
        });
        if (department) {
          courseDepartment.department = department;
        }
      }

      await queryRunner.manager.save(CourseDepartment, courseDepartment);
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
      const result = await queryRunner.manager.delete(CourseDepartment, id);
      if (result.affected === 0) {
        throw new NotFoundException('CourseDepartment not found');
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
