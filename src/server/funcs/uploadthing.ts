import type { OurFileRouter } from "@/app/(api)/api/uploadthing/core";
import { generateComponents } from "@uploadthing/react";

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
