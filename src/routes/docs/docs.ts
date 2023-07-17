import { makeDocs } from "$lib/utils";

/**
 * Change the order of the docs in each section
 * Comment out a line to hide that page
 */

const sessionKit = await Promise.all([
  import("$lib/docs/SessionKit/Architecture.md") as Promise<MarkdownFile>,
  import("$lib/docs/SessionKit/Plugins.md") as Promise<MarkdownFile>,
  import("$lib/docs/SessionKit/Session.md") as Promise<MarkdownFile>,
  // import("$lib/docs/SessionKit/WebRenderer.md") as Promise<MarkdownFile>,
])

const antelope = await Promise.all([
  import("$lib/docs/Antelope/ABI.md") as Promise<MarkdownFile>,
  import("$lib/docs/Antelope/Action.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/ABISerializableObject.md") as Promise<MarkdownFile>,
  import("$lib/docs/Antelope/APIClient.md") as Promise<MarkdownFile>,
  import("$lib/docs/Antelope/Asset.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/Authority.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/Basics.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/Bytes.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/Checksum.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/Float.md") as Promise<MarkdownFile>,
  import("$lib/docs/Antelope/Int.md") as Promise<MarkdownFile>,
  import("$lib/docs/Antelope/Name.md") as Promise<MarkdownFile>,
  import("$lib/docs/Antelope/P2PClient.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/PermissionLevel.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/PrivateKey.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/PublicKey.md") as Promise<MarkdownFile>,
  import("$lib/docs/Antelope/Signature.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/Struct.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/Time.md") as Promise<MarkdownFile>,
  // import("$lib/docs/Antelope/Transaction.md") as Promise<MarkdownFile>,
]);

/**
 * Order the sections here
 */
const orderedDocs = [
  makeDocs({ sessionKit }),
  makeDocs({ antelope }),
];

export default orderedDocs;
