import { FindManyMovieRequest, MovieRepository } from '@application/repositories/movie-repository';
import { Injectable } from '@nestjs/common';
import { Content } from '../../entities/content';

interface FindManyMovieResponse {
  page: number;
  total: number;
  content: Content[];
}
@Injectable()
export class FindManyMovie {
  constructor(private contentRepository: MovieRepository) {}

  async execute(request: FindManyMovieRequest): Promise<FindManyMovieResponse> {
    const { skip, take, filters } = request;

    const { content, total } = await this.contentRepository.findMany({ skip, take, filters });

    return {
      content: content,
      total: total,
      page: skip,
    };
  }
}
