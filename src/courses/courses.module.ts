import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseService } from './courses.service';
import { CourseController } from './courses.controller';
import { Course } from './courses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
