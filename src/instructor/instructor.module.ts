import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';
import { Instructor } from './instructor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instructor])],
  providers: [InstructorService],
  controllers: [InstructorController],
})
export class InstructorModule {}
