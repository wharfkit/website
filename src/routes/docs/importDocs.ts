import { makeDocs } from "$lib/utils";

/**
 * Change the order of the docs in each section, or
 * comment out a line to hide that page.
 */
const sessionKit: Array<MarkdownFile> = await Promise.all([
  import("$lib/docs/SessionKit/Architecture.md"),
  import("$lib/docs/SessionKit/Plugins.md"),
  import("$lib/docs/SessionKit/Session.md"),
  // import("$lib/docs/SessionKit/WebRenderer.md"),
])

const antelope: Array<MarkdownFile> = await Promise.all([
  import("$lib/docs/Antelope/ABI.md"),
  import("$lib/docs/Antelope/Action.md"),
  // import("$lib/docs/Antelope/ABISerializableObject.md"),
  import("$lib/docs/Antelope/APIClient.md"),
  import("$lib/docs/Antelope/Asset.md"),
  // import("$lib/docs/Antelope/Authority.md"),
  // import("$lib/docs/Antelope/Basics.md"),
  // import("$lib/docs/Antelope/Bytes.md"),
  // import("$lib/docs/Antelope/Checksum.md"),
  // import("$lib/docs/Antelope/Float.md"),
  import("$lib/docs/Antelope/Int.md"),
  import("$lib/docs/Antelope/Name.md"),
  import("$lib/docs/Antelope/P2PClient.md"),
  // import("$lib/docs/Antelope/PermissionLevel.md"),
  // import("$lib/docs/Antelope/PrivateKey.md"),
  // import("$lib/docs/Antelope/PublicKey.md"),
  import("$lib/docs/Antelope/Signature.md"),
  // import("$lib/docs/Antelope/Struct.md"),
  // import("$lib/docs/Antelope/Time.md"),
  // import("$lib/docs/Antelope/Transaction.md"),
]);

/**
 * Order and title the sections here.
 */
const orderedDocs = [
  makeDocs({ "SessionKit": sessionKit }),
  makeDocs({ "Antelope": antelope }),
];

export default orderedDocs;
