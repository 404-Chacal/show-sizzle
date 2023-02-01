import { InMemoryMovieRepository } from '../../../../test/repositories/in-memory-movie-repository';
import { CreateMovie } from './create-movie';

describe('Create movie', () => {
  it('should be able to create a movie', async () => {
    const createMovieRepository = new InMemoryMovieRepository();
    const createMovie = new CreateMovie(createMovieRepository);

    const { content } = await createMovie.execute({
      title: 'string',
      original_title: 'string',
      overview: 'string',
      release_date: 'string',
      poster_image: 'string',
      background_image: 'string',
      published: true,
    });

    console.log(createMovieRepository.movies);

    expect(createMovieRepository.movies).toHaveLength(1);
    expect(createMovieRepository.movies[0]).toEqual(content);
  });
});
