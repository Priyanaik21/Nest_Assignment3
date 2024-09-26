import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Semester } from './semester.entity';
import { CreateSemesterDto, UpdateSemesterDto } from './semester.dto';
import { applyPaginationSearchSort } from 'src/utils/paginationSearchSort';

@Injectable()
export class SemesterService {
  constructor(
    @InjectRepository(Semester)
    private readonly semesterRepository: Repository<Semester>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async create(createSemesterDto: CreateSemesterDto): Promise<Semester> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newSemester = this.semesterRepository.create(createSemesterDto);
      const savedSemester = await queryRunner.manager.save(Semester, newSemester);
      await queryRunner.commitTransaction();
      return savedSemester;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(queryParams: any): Promise<Semester[]> {
    const searchFields = ['semesterName','semesterId'];
    const { skip, take, order, where } = applyPaginationSearchSort(queryParams, searchFields);

    return this.semesterRepository.find({
      skip,
      take,
      order, 
      where: where || {}, 
    });
  }

  async findOne(id: number): Promise<Semester> {
    const semester = await this.semesterRepository.findOne({
      where: { semesterId: id },
    });

    if (!semester) {
      throw new NotFoundException('Semester not found');
    }

    return semester;
  }

  async update(id: number, updateSemesterDto: UpdateSemesterDto): Promise<Semester> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const semester = await queryRunner.manager.findOne(Semester, {
        where: { semesterId: id },
      });

      if (!semester) {
        throw new NotFoundException('Semester not found');
      }

      Object.assign(semester, updateSemesterDto);
      const updatedSemester = await queryRunner.manager.save(Semester, semester);
      await queryRunner.commitTransaction();
      return updatedSemester;
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
      const semester = await queryRunner.manager.findOne(Semester, {
        where: { semesterId: id },
      });

      if (!semester) {
        throw new NotFoundException('Semester not found');
      }

      await queryRunner.manager.delete(Semester, id);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
