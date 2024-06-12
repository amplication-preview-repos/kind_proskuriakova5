import * as graphql from "@nestjs/graphql";
import { VideoUploadService } from "./videoupload.service";

export class VideoUploadResolver {
  constructor(protected readonly service: VideoUploadService) {}

  @graphql.Query(() => String)
  async UploadVideo(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadVideo(args);
  }
}
