import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])], //  it imports the TypeOrmModule and specifies the entities that should be loaded
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}