import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';
import { Instructor } from './instructor.entity';
import { UserInformation } from '../user-information/user-information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instructor, UserInformation])],
  providers: [InstructorService],
  controllers: [InstructorController],
})
export class InstructorModule {}
