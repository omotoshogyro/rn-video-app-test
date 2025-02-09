export function extractFileId(url: string) {
  // Match the file ID using a regular expression
  const match = url.match(/\/file\/d\/([^\/]+)\//);

  // If a match is found, return the file ID
  if (match && match[1]) {
    return match[1];
  }

  // If no match is found, return null or throw an error
  return null;
}

export function generateViewableLink(fileId: string) {
  return `https://drive.google.com/uc?export=download&id=${extractFileId(
    fileId
  )}`;
}
