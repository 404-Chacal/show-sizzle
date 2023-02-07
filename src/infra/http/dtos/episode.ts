import { IsBoolean, IsNotEmpty, IsUUID, Length } from 'class-validator';

export class EpisodeDTOS {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  @Length(0)
  episode_number: number;
  overview?: string;
  background_image?: string;
  release_date?: string;
  @IsBoolean()
  isPublished: boolean;
  @IsNotEmpty()
  @IsUUID()
  seasonId: string;
}
