/// <reference types="vite/client" />

declare module 'split-type' {
  interface SplitTypeOptions {
    absolute?: boolean;
    tagName?: string;
    lineClass?: string;
    wordClass?: string;
    charClass?: string;
    splitClass?: string;
    types?: string; // 'lines,words,chars'
    // add other options as needed
  }

  export default class SplitType {
    constructor(target: string | HTMLElement | HTMLElement[] | NodeList, options?: SplitTypeOptions);
    chars: HTMLElement[] | null;
    words: HTMLElement[] | null;
    lines: HTMLElement[] | null;
    revert(): void;
    split(options: SplitTypeOptions): void;
  }
}
