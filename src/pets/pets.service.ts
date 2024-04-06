import { Injectable } from '@nestjs/common';
import { Pet } from './pets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {} //  it injects the Pet repository

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createPetInput);
    return this.petRepository.save(newPet); // inserts a new pet into the database
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find(); // selects all pets from the database
  }

  async findOneById(id: number): Promise<Pet> {
    return this.petRepository.findOne({ where: { id } });
  }
}
