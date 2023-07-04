import type { KitPage } from '$lib/types';
import sessionKit from "$lib/assets/images/kits/session-kit.svg"

const kit: KitPage = {
  title: 'Session Kit',
  subtitle: 'Create an experience that your users will love.',
  logo: sessionKit,
  features: [
    {
      title: 'Manage sessions with ease.',
      description: 'Both applications connecting to the blockchain and users connecting with applications rely on sessions. Making sure these sessions are established quickly and reliably is half the battle for any good web app, which is why the Session Kit provides resources for:',
      list: [
        "Logging in and starting a new session",
        "Logging out and ending a session",
        "Automatically persisting a session between log-ins and log-outs, to maintain continuity"
      ],
      link: {
        href: 'https://github.com/wharfkit/session',
        text: 'Go to Wharf Github',
      }
    },
    {
      title: 'Give your users the freedom to interact with the blockchain.',
      description: "The Session Kit simplifies the process of performing actions on-chain and signing transactions, so that you're never limited in the options you can provide to your users.A few examples of actions the Session Kit can orchestrate are:"
    },
    {
      title: 'Provide a smooth user experience.',
      description:
        "UX can make or break an app. That's why the Session Kit provides a Wharf-themed UI Renderer that was created by a professional UX designer, with the primary goal of creating a pleasant and intuitive experience for your users. \n\nThe UI Renderer comes with out-of-the-box functionality that covers a range of common user scenarios, and can be paired with the Session Kit's Localization Engine to support multiple languages."
      ,
      link: {
        href: '#',
        text: 'See it in action',
      }
    },
  ],
  examples: [
    {
      title: 'Sending and receiving tokens',
      description: 'Users can receive tokens from outside services, or initiate in-app transactions to exchange tokens with other users.',
    },
    {
      title: 'Moving NFTs',
      description: 'Provide users with NFTs, or give them the option to send, receive, or store NFTs from other sources.',
    },
    {
      title: 'Voting for block producers',
      description: 'Simplify the on-chain governance process by giving users the option of registering their vote within your app.',
    },
  ],
  cta: {
    title: 'Learn more about the Session Kits with the Technical Previews.',
    link: {
      href: '#',
      text: 'Go to Technical Previews',
    }
  }
};

export default kit;