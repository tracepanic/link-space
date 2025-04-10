export function getInitials(name: string): string {
  const wordArray = name.split(" ");
  if (wordArray.length === 0) {
    return "No name provided";
  }
  if (wordArray.length === 1) {
    return wordArray[0].charAt(0).toUpperCase();
  }

  const firstWord = wordArray[0];
  const secondWord = wordArray[1];
  return firstWord.charAt(0).toUpperCase() + secondWord.charAt(0).toUpperCase();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getYoutubeVideoId(url: string): string | null {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

export function generateEmbedCode(url: string): string | null {
  const youtubeId = getYoutubeVideoId(url);

  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`;
  }

  return null;
}

export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}
