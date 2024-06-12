import { Module } from "@nestjs/common";
import { VideoUploadService } from "./videoupload.service";
import { VideoUploadController } from "./videoupload.controller";
import { VideoUploadResolver } from "./videoupload.resolver";

@Module({
  controllers: [VideoUploadController],
  providers: [VideoUploadService, VideoUploadResolver],
  exports: [VideoUploadService],
})
export class VideoUploadModule {}
