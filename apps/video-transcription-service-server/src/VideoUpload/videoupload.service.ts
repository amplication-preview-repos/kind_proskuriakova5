import { Injectable } from "@nestjs/common";

@Injectable()
export class VideoUploadService {
  constructor() {}
  async UploadVideo(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
