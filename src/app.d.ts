// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

declare module "*.md"

interface MarkdownFile {
  metadata?: {
    [key: string]: any;
  };
  default: {
    render: () => {
      html: string;
    };
  };
  // This feels like a hack, but it fixes the type error
  render?: () => {
    html: string;
  }
}
