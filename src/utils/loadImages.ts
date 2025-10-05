// src/utils/loadImages.ts

// Load all images from the GRM_22_Photos folder
const grm22Images = import.meta.glob(
  "@/assets/GRM_22_Photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

// Load all images from the GRM_23_Photos folder
const grm23Images = import.meta.glob(
  "@/assets/GRM_23_Photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

// Load all images from the GRM_24_Photos folder
const grm24Images = import.meta.glob(
  "@/assets/GRM_24_Photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

// Helper function to convert the import.meta.glob result to an array of image URLs
const extractImageUrls = (imageModules: Record<string, unknown>): string[] => {
  return Object.entries(imageModules).map(([path, module]) => {
    const src = (module as { default: string }).default;
    return src;
  });
};

// Export the image arrays
export const Images2022 = extractImageUrls(grm22Images);
export const Images2023 = extractImageUrls(grm23Images);
export const Images2024 = extractImageUrls(grm24Images);

// Export individual year modules if needed
export { grm22Images, grm23Images, grm24Images };
