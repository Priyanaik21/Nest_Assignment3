import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CourseSemester } from './course_semester.entity';
import { CreateCourseSemesterDto, UpdateCourseSemesterDto } from './course_semester.dto';
import { Course } from '../courses/courses.entity';
import { Semester } from '../semester/semester.entity';
import { applyPaginationSearchSort } from 'src/utils/paginationSearchSort';

@Injectable()
export class CourseSemesterService {
  constructor(
    @InjectDataSource()
     private readonly dataSource: DataSource,
    @InjectRepository(CourseSemester) 
    private readonly courseSemesterRepository: Repository<CourseSemester>,
    @InjectRepository(Course)
     private readonly courseRepository: Repository<Course>,
    @InjectRepository(Semester) private readonly semesterRepository: Repository<Semester>,
  ) {}

  async create(createCourseSemesterDto: CreateCourseSemesterDto): Promise<CourseSemester> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const course = await queryRunner.manager.findOne(Course, {
        where: { courseId: createCourseSemesterDto.courseId },
      });
      const semester = await queryRunner.manager.findOne(Semester, {
        where: { semesterId: createCourseSemesterDto.semesterId },
      });

      if (!course || !semester) {
        throw new NotFoundException('Course or Semester not found');
      }

      const newCourseSemester = this.courseSemesterRepository.create({
        course,
        semester,
      });

      const savedCourseSemester = await queryRunner.manager.save(CourseSemester, newCourseSemester);
      await queryRunner.commitTransaction();
      return savedCourseSemester;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(queryParams: any): Promise<CourseSemester[]> {
    const searchFields=['courseSemesterId'];
    const { skip, take, order, where } = applyPaginationSearchSort(queryParams, searchFields);

    return this.courseSemesterRepository.find({
        skip, 
        take, 
        order,
        where: where || {},
      relations: ['course', 'semester'],
    });
  }

  async findOne(id: number): Promise<CourseSemester> {
    const courseSemester = await this.courseSemesterRepository.findOne({
      where: { courseSemesterId: id },
      relations: ['course', 'semester'],
    });

    if (!courseSemester) {
      throw new NotFoundException('CourseSemester not found');
    }

    return courseSemester;
  }

  async update(id: number, updateCourseSemesterDto: UpdateCourseSemesterDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const courseSemester = await queryRunner.manager.findOne(CourseSemester, {
        where: { courseSemesterId: id },
        relations: ['course', 'semester'],
      });

      if (!courseSemester) {
        throw new NotFoundException('CourseSemester not found');
      }

      if (updateCourseSemesterDto.courseId) {
        const course = await queryRunner.manager.findOne(Course, {
          where: { courseId: updateCourseSemesterDto.courseId },
        });
        if (course) {
          courseSemester.course = course;
        }
      }

      if (updateCourseSemesterDto.semesterId) {
        const semester = await queryRunner.manager.findOne(Semester, {
          where: { semesterId: updateCourseSemesterDto.semesterId },
        });
        if (semester) {
          courseSemester.semester = semester;
        }
      }

      await queryRunner.manager.save(CourseSemester, courseSemester);
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
      const result = await queryRunner.manager.delete(CourseSemester, id);
      if (result.affected === 0) {
        throw new NotFoundException('CourseSemester not found');
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
