declare function thaiTypoCheck(
  inputText: string,
  customWords?: string[]
): boolean;
declare namespace thaiTypoCheck {}

declare function thaiTypoCheckWords(
  inputText: string,
  customWords?: string[]
): string[] | undefined;
declare namespace thaiTypoCheckWords {}

export = thaiTypoCheck;
export = thaiTypoCheckWords;
