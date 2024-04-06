import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pets.entity';
import { CreatePetInput } from './dto/create-pet.input';

@Resolver((of: Pet) => Pet) //  it means that the resolver is responsible for the Pet type
export class PetsResolver {
  constructor(private readonly petService: PetsService) {}

  @Query((returns) => [Pet]) //  it means that the query returns an array of pets
  pets(): Promise<Pet[]> {
    return this.petService.findAll();
  }

  @Mutation((returns) => Pet) //mutation to create a new pet
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petService.createPet(createPetInput);
  }

  //get one pet by id

  @Query((returns) => Pet)
  async findOneById(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petService.findOneById(id);
  }
}
