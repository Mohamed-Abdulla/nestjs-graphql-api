import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pets.entity';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnersModule], //  it imports the TypeOrmModule and specifies the entities that should be loaded
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
