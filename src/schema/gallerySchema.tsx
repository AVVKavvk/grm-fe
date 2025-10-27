export interface GalleryMetadataSchema {
  key: string;
  size: string;
  url: string;
}

export interface GalleryGetSchema {
  year: string;
  file_name: string;
  file_content_type: string;
  metadata: GalleryMetadataSchema;
  created_at: string;
}
