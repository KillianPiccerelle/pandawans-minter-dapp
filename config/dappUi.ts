// This configuration file keeps all UI constants and settings

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Pandawans',
  description:
    "We've created a fantastical panda-themed nft collection, and we'd want to organize a treasure hunt!This treasure would be the money gained through the sale of nfts. As a result, the larger the cagnotte will get as more NFTs are sold. During the distribution of this, the winner will receive 80% of the total amount of nfts sold. The remaining 20% will be directly injected into pandawans to aid in their future development.We have some project ideas and want to be able to start a new business using pandawans within the Elrond ecosystem.",
  image: `${dappHostname}/og-image.png`,
};

// FAQ section data
export const faq = [
  {
    question: 'What is an ESDT on Elrond?',
    answer:
      'ESDT stands for Elrond Standard Digital Token. Custom tokens at native speed and scalability, without ERC20. The Elrond network natively supports the issuance of custom tokens, without the need for contracts such as ERC20, but addressing the same use-cases. And due to the native in-protocol support, transactions with custom tokens do not require the VM at all. In effect, this means that custom tokens are as fast and as scalable as the native EGLD token itself.',
  },
  {
    question: 'What is an NFT on Elrond?',
    answer:
      'The Elrond protocol introduces native NFT support by adding metadata and attributes on top of the already existing ESDT. This way, one can issue a semi-fungible token or a non-fungible token which is quite similar to an ESDT, but has a few more attributes, as well as an assignable URI. Once owning a quantity of a NFT/SFT, users will have their data store directly under their account, inside the trie.',
  },
  {
    question:
      'Why knowing the collection ticker and minter smart contract is essential?',
    answer:
      'It is crucial because these two prove that the NFTs come from a verified source. The NFT project should always show the collection ticker and minter smart contract to gain trust.',
  },
  {
    question: 'What is Elven Tools?',
    answer:
      'The Elven Tools is an open-source toolset including the CLI tool, Smart Contract for handling the NFT collections, and this dapp template. You can, of course, use each tool separately. But the CLI helps with smart contract deployments and the setup process. You can also interact with the smart contract using the CLI or even use it as a buyer.',
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'Q4 2022',
    points: [
      'Deployment of nfts on the smart contract',
      'UI improvement',
      'Start of NFT sale',
    ],
  },
  {
    title: 'Q1 2023',
    points: [
      'NFT engraving test phase',
      'Start treasure hunt',
      'More functionality for logged in user',
      'Blog feature implementation',
    ],
  },
  {
    title: 'Q2 2023',
    points: [
      'Backend cache (Redis?)',
      'Image optimization (Cloudinary?)',
      '...sky is the limit!',
    ],
  },
];

export const team = [
  {
    name: 'Killian Piccerelle',
    bio: 'Smart Contract programmer & Web designer ',
    imageUrl: '/john.svg',
    socialMediaLinks: [
      'https://www.twitter.com',
      'https://www.linkedin.com/in/killian-piccerelle-886b1a1a6/',
      'https://github.com/KillianPiccerelle',
    ],
  },
  {
    name: 'Samy Alexandre',
    bio: 'Web designer and artist',
    imageUrl: '/mark.svg',
    socialMediaLinks: [
      'https://www.twitter.com',
      'https://github.com/samy-alexandre',
      'https://www.linkedin.com/in/samy-alexandre-1b22551b7/',
      'https://www.behance.net',
      'https://www.dribbble.com',
    ],
  },
];
