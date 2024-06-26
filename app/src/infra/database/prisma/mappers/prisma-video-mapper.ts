import { Video } from '@application/entities/video';

import { Media as PrismaVideo } from '@prisma/client';

export class PrismaVideoMapper {
  static toPrisma(video: Video) {
    return {
      id: video.id,
      title: video.title,
      type: video.type,
      format: video.format,
      link: video.link,
      createdAt: video.createdAt,
      updatedAt: video.updatedAt,
    };
  }

  static toDomain(video: PrismaVideo) {
    return new Video(
      {
        title: video.title,
        type: video.type,
        format: video.format,
        link: video.link,
      },
      video.id,
    );
  }
}
