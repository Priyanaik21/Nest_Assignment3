import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Course } from './courses.entity';
import { CreateCourseDto, UpdateCourseDto } from './courses.dto';
import { applyPaginationSearchSort } from 'src/utils/paginationSearchSort';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newCourse = this.courseRepository.create(createCourseDto);
      const savedCourse = await queryRunner.manager.save(Course, newCourse);
      await queryRunner.commitTransaction();
      return savedCourse;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(queryParams: any): Promise<Course[]> {
    const searchFields = ['courseName',];
    const { skip, take, order, where } = applyPaginationSearchSort(queryParams, searchFields);
    return this.courseRepository.find({ 
      skip, 
      take, 
      order, 
      where: where || {},
      relations: ['courseDepartments'] });
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.courseRepository.findOne({
      where: { courseId: id },
      relations: ['courseDepartments'],
    });
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const course = await queryRunner.manager.findOne(Course, {
        where: { courseId: id },
        relations: ['courseDepartments'],
      });
      if (!course) {
        throw new NotFoundException('Course not found');
      }
      Object.assign(course, updateCourseDto);
      await queryRunner.manager.save(Course, course);
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
      const course = await queryRunner.manager.findOne(Course, {
        where: { courseId: id },
      });

      if (!course) {
        throw new NotFoundException('Course not found');
      }

      await queryRunner.manager.delete(Course, id);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
