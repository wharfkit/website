import sessionKit from "$lib/assets/images/kits/session-kit.svg"
import screenshot1 from "$lib/assets/images/kits/sessionkit/screenshot-1.webp"
import screenshot2 from "$lib/assets/images/kits/sessionkit/screenshot-2.webp"
import screenshot3 from "$lib/assets/images/kits/sessionkit/screenshot-3.webp"

const kit: KitPage = {
  title: "Session Kit",
  subtitle: "Create an experience that your users will love.",
  logo: sessionKit,
  screenshots: [
    screenshot1,
    screenshot2,
    screenshot3,
  ],
  features: [
    {
      title: "Manage sessions with ease.",
      description:
        "Sessions are essential both for applications connecting to the blockchain and for users connecting with applications. The Session Kit helps you to establish these sessions quickly and reliably by providing resources for:",
      list: [
        "Creating sessions for use in scripts or bots",
        "Logging in and starting a new session from web applications",
        "Logging out and ending sessions",
        "Automatically persisting a session between log-ins and log-outs",
      ],
      link: {
        href: "/guides/sessionkit",
        text: "Go to Session Kit Guides",
      },
    },
    {
      title: "Give your users the freedom to interact with the blockchain.",
      description:
        "The Session Kit makes it easy to sign transactions and perform actions on-chain, so that you're never limited in the options you can provide to your users. Here's a few examples of actions that the Session Kit can orchestrate:",
    },
    {
      title: "Provide a smooth user experience.",
      description:
        "UX can make or break an app. That's why the Session Kit provides a Wharf-themed UI Renderer that was created by a professional UX designer, making it simple to create a pleasant and intuitive experience for your users.\n\nThe UI Renderer comes with out-of-the-box functionality that covers a range of common user scenarios, and can be paired with the Session Kit's Localization Engine to support multiple languages.",
      link: {
        href: "https://ui-test.wharfkit.com/",
        text: "See It In Action",
      },
    },
  ],
  examples: [
    {
      title: "Sending and receiving tokens.",
      description:
        "Users can receive tokens from outside services, or initiate in-app transactions to exchange tokens with other users.",
    },
    {
      title: "Moving NFTs.",
      description:
        "Provide users with NFTs, or give them the option to send, receive, or store NFTs from other sources.",
    },
    {
      title: "Voting for block producers.",
      description:
        "Simplify the on-chain governance process by giving users the option of registering their vote within your app.",
    },
  ],
  cta: {
    title: "Learn more about the Session Kit through our guides.",
    link: {
      href: "/guides/sessionkit",
      text: "Go to Guides",
    },
  },
}

export default kit
