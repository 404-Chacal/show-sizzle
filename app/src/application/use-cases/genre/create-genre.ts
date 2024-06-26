import { Genre } from '@application/entities/genre';
import { GenreRepository } from '@application/repositories/genre-repository';
import { Injectable } from '@nestjs/common';

interface CreateGenreRequest {
  title: string;
}
interface CreateGenreResponse {
  genre: Genre;
}

@Injectable()
export class CreateGenre {
  constructor(private genreRepository: GenreRepository) {}

  async execute(request: CreateGenreRequest): Promise<CreateGenreResponse> {
    const { title } = request;

    const genre = new Genre({ title });

    await this.genreRepository.create(genre);

    return { genre };
  }
}
