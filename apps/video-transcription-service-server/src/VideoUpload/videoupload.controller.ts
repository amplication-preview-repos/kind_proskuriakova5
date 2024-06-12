import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VideoUploadService } from "./videoupload.service";

@swagger.ApiTags("videoUploads")
@common.Controller("videoUploads")
export class VideoUploadController {
  constructor(protected readonly service: VideoUploadService) {}

  @common.Get("/:id/upload-video")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadVideo(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UploadVideo(body);
      }
}
