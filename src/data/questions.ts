export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct answer (0-4)
  difficulty: 'easy' | 'medium' | 'hard';
}

export const questionBank: Question[] = [
  {
    id: 1,
    category: "Protocol & Tech Alpha",
    question: "What is Stork?",
    options: [
      "A layer-1 blockchain",
      "A decentralized perpetuals DEX",
      "An AI-powered data oracle",
      "A community-owned memecoin",
      "A liquid staking protocol"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 2,
    category: "Protocol & Tech Alpha",
    question: "Who is the CEO & Co-Founder of Stork?",
    options: [
      "Jayronimooo",
      "Meredith Pitkoff",
      "AhmedBolantaa",
      "CaptainLaos",
      "Satoshi Nakamoto"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 3,
    category: "Protocol & Tech Alpha",
    question: "Stork's CEO recently announced Stork powers how many of the top 10 perp DEXs?",
    options: [
      "2",
      "4",
      "7",
      "8",
      "All 10"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 4,
    category: "Protocol & Tech Alpha",
    question: "Stork recently rolled out support for what real-world event data market?",
    options: [
      "Polymarket",
      "Augur",
      "Gnosis",
      "Kalshi",
      "PredictIt"
    ],
    correctAnswer: 3,
    difficulty: 'medium'
  },
  {
    id: 5,
    category: "Protocol & Tech Alpha",
    question: "What new pre-market feed did Stork launch for @megaeth_labs?",
    options: [
      "MEGA/ETH",
      "MEGAUSDMARK",
      "STORK/MEGA",
      "MEGA-PRE",
      "ETHUSD-MEGA"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 6,
    category: "Protocol & Tech Alpha",
    question: "How quickly did Stork add support for the METUSD feed after its spot listing?",
    options: [
      "Within 3 weeks",
      "Within 3 days",
      "Within 3 hours",
      "Within 30 minutes",
      "Within 3 minutes"
    ],
    correctAnswer: 4,
    difficulty: 'hard'
  },
  {
    id: 7,
    category: "Protocol & Tech Alpha",
    question: "The Stork team is primarily based in what city?",
    options: [
      "London",
      "Dubai",
      "Singapore",
      "New York City (NYC)",
      "Lagos"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 8,
    category: "Protocol & Tech Alpha",
    question: "Which of these perp DEXs is NOT powered by Stork price feeds?",
    options: [
      "@Lighter_xyz",
      "@OrderlyNetwork",
      "@GainsNetwork_io",
      "@paradex",
      "@Uniswap"
    ],
    correctAnswer: 4,
    difficulty: 'medium'
  },
  {
    id: 9,
    category: "Protocol & Tech Alpha",
    question: "Stork's CEO recently announced they are hiring for what two lead roles?",
    options: [
      "Community Mod & Graphic Designer",
      "Smart Contract Auditor & CFO",
      "BD/Sales & Marketing Lead",
      "CEO & Co-Founder",
      "Protocol Researcher & HR"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 10,
    category: "Protocol & Tech Alpha",
    question: "In the 'Radio vs. Your Phone' analogy, what does the 'Radio' represent?",
    options: [
      "The Pull Model",
      "The Stork Model",
      "The Push Model",
      "The On-Demand Model",
      "The Kalshi Model"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 11,
    category: "Protocol & Tech Alpha",
    question: "What is the core benefit of Stork's 'Pull Model'?",
    options: [
      "Data is broadcast to everyone at once",
      "It's more centralized but faster",
      "It's more secure but slower",
      "Apps only request and pay for the exact data they need",
      "It only works for perpetuals"
    ],
    correctAnswer: 3,
    difficulty: 'medium'
  },
  {
    id: 12,
    category: "Protocol & Tech Alpha",
    question: "According to the 'Complete Engine' post, what are the three components of Stork's economic flywheel?",
    options: [
      "Devs, VCs, and Users",
      "Staking, Burning, and Minting",
      "Speed, Security, and Cost",
      "Publishers, Protocols, and Community",
      "EVM, StarkEx, and Kadena"
    ],
    correctAnswer: 3,
    difficulty: 'hard'
  },
  {
    id: 13,
    category: "Protocol & Tech Alpha",
    question: "Who are the 'Publishers' in the Stork ecosystem?",
    options: [
      "Community members who write tweets",
      "The Stork development team",
      "Elite, professional sources like HFT firms and exchanges",
      "Anyone who runs a node",
      "Venture Capital partners"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 14,
    category: "Protocol & Tech Alpha",
    question: "Why do Protocols ('Subscribers') choose to pay for Stork's data?",
    options: [
      "It's the only option available",
      "It's a requirement for a grant",
      "It's cheaper, faster, and gives them a competitive edge",
      "They get free EGGs for using it",
      "To support the community"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 15,
    category: "Protocol & Tech Alpha",
    question: "What is the primary benefit of Stork's native integration with StarkEx?",
    options: [
      "It's slightly faster than the EVM version",
      "It provides maximum security and seamless compatibility",
      "It allows Stork to control the StarkEx network",
      "It's cheaper than using EVM",
      "It only works for NFTs"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 16,
    category: "Community",
    question: "What does GMORK stand for?",
    options: [
      "Good Morning, Ready to Work",
      "General Market Oracle Research Kit",
      "Good Morning + Stork",
      "Go Make Oracle Revenue King",
      "Guild Members Of Revolutionary Knowledge"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 17,
    category: "Community",
    question: "What emoji is most associated with Stork?",
    options: [
      "🚀",
      "🦩",
      "🐦",
      "🥚",
      "🦅"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 18,
    category: "Community",
    question: "What does 'LFStork' mean in the community?",
    options: [
      "Looking For Stork",
      "Let's Fly Stork",
      "Long Form Stork",
      "Liquidity For Stork",
      "Last Flight Stork"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 19,
    category: "Alpha",
    question: "What is the main purpose of Stork's oracle network?",
    options: [
      "To compete with Chainlink",
      "To provide high-quality, low-latency price feeds",
      "To create a new blockchain",
      "To build a DEX",
      "To offer staking rewards"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 20,
    category: "Alpha",
    question: "Which blockchain ecosystems does Stork support?",
    options: [
      "Only EVM chains",
      "Only Solana",
      "Only Cosmos",
      "EVM, StarkEx, and more",
      "Bitcoin only"
    ],
    correctAnswer: 3,
    difficulty: 'medium'
  },
  {
    id: 21,
    category: "Protocol & Tech Alpha",
    question: "What makes Stork different from traditional oracle solutions?",
    options: [
      "It's completely free",
      "It uses a pull-based model for on-demand data",
      "It only works on Ethereum",
      "It doesn't use validators",
      "It's centralized"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 22,
    category: "Community",
    question: "What is the Stork community's battle cry?",
    options: [
      "To the moon!",
      "GMORK!",
      "WAGMI",
      "Let's go!",
      "Diamond hands!"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 23,
    category: "Alpha",
    question: "What type of data feeds does Stork specialize in?",
    options: [
      "Weather data",
      "Social media metrics",
      "Price feeds for DeFi",
      "Gaming statistics",
      "Sports scores"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 24,
    category: "Protocol & Tech Alpha",
    question: "How does Stork ensure data accuracy?",
    options: [
      "Single source verification",
      "Community voting",
      "Multiple publisher sources and cryptographic verification",
      "AI prediction",
      "Random selection"
    ],
    correctAnswer: 2,
    difficulty: 'hard'
  },
  {
    id: 25,
    category: "Alpha",
    question: "What is a key advantage of Stork's low latency?",
    options: [
      "Better user experience for games",
      "Critical for high-frequency trading and perp DEXs",
      "Faster NFT minting",
      "Quicker social media posts",
      "Improved video streaming"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 26,
    category: "Community",
    question: "What do Stork community members call themselves?",
    options: [
      "Storkies",
      "Birders",
      "Flockers",
      "Nestlers",
      "Flyers"
    ],
    correctAnswer: 0,
    difficulty: 'easy'
  },
  {
    id: 27,
    category: "Protocol & Tech Alpha",
    question: "What problem does Stork solve in DeFi?",
    options: [
      "High gas fees",
      "Slow transaction speeds",
      "Oracle reliability and speed for price feeds",
      "NFT liquidity",
      "Wallet security"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 28,
    category: "Alpha",
    question: "Why is data freshness important for perp DEXs?",
    options: [
      "It's not important",
      "To prevent manipulation and ensure accurate liquidations",
      "To make the UI look better",
      "To increase gas fees",
      "To attract more users"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 29,
    category: "Community",
    question: "What does 'Nesting' mean in Stork terms?",
    options: [
      "Selling your tokens",
      "Building and accumulating position",
      "Taking a break",
      "Creating content",
      "Staking rewards"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 30,
    category: "Protocol & Tech Alpha",
    question: "What is Stork's approach to decentralization?",
    options: [
      "Fully centralized",
      "Decentralized publisher network with verified sources",
      "Single node operation",
      "No validators",
      "Community-run servers"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 31,
    category: "Protocol & Tech Alpha",
    question: "Which of these is a sophisticated data type Stork brings on-chain from its partnership with Kalshi?",
    options: [
      "Weather forecasts",
      "Open Interest",
      "User email addresses",
      "Twitter sentiment",
      "The CEO's favorite color"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 32,
    category: "Protocol & Tech Alpha",
    question: "The statement 'undisputed king of perps' refers to Stork powering what?",
    options: [
      "The single largest perp DEX",
      "The fastest perp DEX",
      "A majority of the top 10 perp DEXs by volume",
      "All Solana-based perp DEXs",
      "A new perp DEX built by the team"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 33,
    category: "Protocol & Tech Alpha",
    question: "In Stork's 4-layer architecture, which layer is responsible for collecting data from professional sources?",
    options: [
      "The On-Chain Layer",
      "The Aggregator Layer",
      "The Publisher Layer",
      "The Transport Layer",
      "The Community Layer"
    ],
    correctAnswer: 2,
    difficulty: 'hard'
  },
  {
    id: 34,
    category: "Community",
    question: "What is the main goal of the Stork Flight School?",
    options: [
      "To give away free EGGs",
      "To test the website's speed",
      "To find new developers",
      "To create a fun and engaging way to educate the community",
      "To replace the Discord server"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 35,
    category: "Protocol & Tech Alpha",
    question: "Beyond perpetuals, Stork is seeing the 'buzziest' demand for data in what category, according to meredith's word in an X space?",
    options: [
      "Real World Assets (RWAs)",
      "Forex",
      "Memecoins",
      "Prediction Markets",
      "NFTs"
    ],
    correctAnswer: 3,
    difficulty: 'medium'
  },
  {
    id: 36,
    category: "Protocol & Tech Alpha",
    question: "What is the purpose of the data.stork.network dashboard for end users?",
    options: [
      "To trade tokens",
      "To check their EGGs balance",
      "To verify the speed and authenticity of price feeds themselves",
      "To apply for jobs at Stork",
      "To chat with the team"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 37,
    category: "Protocol & Tech Alpha",
    question: "Stork's architecture is designed to prevent what common oracle problem?",
    options: [
      "Slow data",
      "Expensive data",
      "Centralized points of failure",
      "Inaccurate data",
      "All of the above"
    ],
    correctAnswer: 4,
    difficulty: 'hard'
  },
  {
    id: 38,
    category: "Protocol & Tech Alpha",
    question: "What does it mean when data is 'cryptographically signed' by a Publisher?",
    options: [
      "The data is encrypted and secret",
      "The data has a digital, verifiable signature proving its source and integrity",
      "The data has been approved by the community",
      "The data is only for crypto-related assets",
      "The data is stored in a special format"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 39,
    category: "Protocol & Tech Alpha",
    question: "Who is the CTO of Stork?",
    options: [
      "Jayronimoo",
      "Meredith Pitkoff",
      "Aaron (DevBird)",
      "Sapis",
      "Ethan Yish"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 40,
    category: "Protocol & Tech Alpha",
    question: "What is the primary advantage of Stork's 4-layer architecture?",
    options: [
      "It makes the system more centralized but efficient",
      "It separates tasks for maximum performance, security, and scalability",
      "It's a marketing term for their team structure",
      "It requires four different tokens to operate",
      "It only allows four data publishers at a time"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 41,
    category: "Protocol & Tech Alpha",
    question: "What does 'low-latency' mean in the context of Stork's data?",
    options: [
      "The data is updated very infrequently",
      "There is a very short delay between a real-world event and the data being available",
      "The data is low-quality",
      "The data is only for low-volume assets",
      "The data uses a lot of bandwidth"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 42,
    category: "Protocol & Tech Alpha",
    question: "Which of these is a real-world, non-crypto asset type Stork has added support for?",
    options: [
      "Weather data",
      "Sports scores",
      "Forex (Foreign Exchange)",
      "Movie ticket sales",
      "Local election results"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 43,
    category: "Protocol & Tech Alpha",
    question: "Stork's partnership with Kalshi allows developers to build dApps based on what?",
    options: [
      "Crypto price predictions",
      "The outcome of real-world events",
      "The weather in New York City",
      "The price of NFTs",
      "The price of Bitcoin only"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 44,
    category: "Protocol & Tech Alpha",
    question: "The term 'oracle' in blockchain refers to a service that:",
    options: [
      "Predicts the future price of crypto",
      "Stores all transaction data",
      "Provides external, real-world data to smart contracts",
      "Audits smart contract code for bugs",
      "Allows for cross-chain token swaps"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 45,
    category: "Protocol & Tech Alpha",
    question: "What does 'on-chain' mean?",
    options: [
      "A transaction or data that is recorded and verified on the blockchain",
      "A secret message between developers",
      "A feature that is coming soon",
      "A project that has its own token",
      "A meeting that happens in real life"
    ],
    correctAnswer: 0,
    difficulty: 'easy'
  },
  {
    id: 46,
    category: "Protocol & Tech Alpha",
    question: "What does 'EVM' stand for?",
    options: [
      "Electronic Verification Machine",
      "Ethereum Virtual Machine",
      "Encrypted Virtual Message",
      "External Verification Module",
      "Easy Virtual Method"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 47,
    category: "Protocol & Tech Alpha",
    question: "What is a 'dApp'?",
    options: [
      "A new type of digital apple",
      "A downloadable application from the App Store",
      "A decentralized application that runs on a blockchain network",
      "A database for applications",
      "A private chat application for developers"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 48,
    category: "Protocol & Tech Alpha",
    question: "What is a 'perpetual DEX'?",
    options: [
      "A decentralized exchange that never closes",
      "A decentralized exchange for trading leveraged future contracts with no expiry date",
      "A decentralized exchange that only lists one asset",
      "The first decentralized exchange ever created",
      "A testnet decentralized exchange"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 49,
    category: "Protocol & Tech Alpha",
    question: "Stork's business model creates a 'two-sided marketplace' between which two groups?",
    options: [
      "VCs and Developers",
      "Users and the Community",
      "Publishers and Subscribers (Protocols)",
      "The Stork Team and the Community",
      "EVM chains and non-EVM chains"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 50,
    category: "Protocol & Tech Alpha",
    question: "What does 'RWA' stand for in the context of Stork's data feeds?",
    options: [
      "Really Weird Assets",
      "Real World Assets",
      "Random Weighted Average",
      "Rollup With Authority",
      "Risk-Weighted Asset"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 51,
    category: "Protocol & Tech Alpha",
    question: "The primary job of Stork's 'Aggregator' layer is to:",
    options: [
      "Market the protocol to new partners",
      "Collect data from all Publishers, verify it, and create a single, reliable feed",
      "Manage the community Discord server",
      "Decide which new assets to support",
      "Pay the Publishers"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 52,
    category: "Protocol & Tech Alpha",
    question: "A key benefit of Stork's pull model for developers is a massive reduction in what cost?",
    options: [
      "Marketing costs",
      "Hiring costs",
      "Gas fees",
      "Legal fees",
      "Hardware costs"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 53,
    category: "Protocol & Tech Alpha",
    question: "Stork provides data for how many chains?",
    options: [
      "10+",
      "25+",
      "50+",
      "70+",
      "Only Ethereum"
    ],
    correctAnswer: 3,
    difficulty: 'medium'
  },
  {
    id: 54,
    category: "Community",
    question: "In the Stork Flight School concept, what is the pilot's X (Twitter) handle called?",
    options: [
      "Their Handle",
      "Their Callsign",
      "Their Username",
      "Their Flight Name",
      "Their X-Tag"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 55,
    category: "Community",
    question: "In the Flight School's 'Standard Flight,' the score is based on correct answers and what other factor?",
    options: [
      "The number of Twitter followers you have",
      "Your current Discord rank",
      "The time remaining",
      "The number of times you've taken the quiz",
      "A random bonus"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 56,
    category: "Protocol & Tech Alpha",
    question: "What does the term 'tamper-proof' mean in relation to Stork's data?",
    options: [
      "The data is difficult to understand",
      "The data cannot be secretly or illegitimately altered",
      "The data is only for experts",
      "The data is hidden from the public",
      "The data is temporary"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 57,
    category: "Protocol & Tech Alpha",
    question: "What key advantage allows Stork to launch new, custom data feeds in minutes, not weeks?",
    options: [
      "Centralized control",
      "A very large development team",
      "Their efficient, agile architecture",
      "A partnership with Google",
      "They copy other oracles"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 58,
    category: "Community",
    question: "Which team member's X page was mentioned as the place to find recordings of the Flock Hangouts?",
    options: [
      "Meredith Pitkoff",
      "Aaron (DevBird)",
      "AhmedBolanta",
      "Jayronimoo",
      "Riel"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 59,
    category: "Protocol & Tech Alpha",
    question: "Stork's ability to support non-financial data like sports scores or weather (if they chose to) demonstrates what core principle?",
    options: [
      "It's decentralized",
      "It's extensible and data-agnostic",
      "It's expensive",
      "It's only for finance",
      "It's slow but steady"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 60,
    category: "Community",
    question: "What does 'Proof of Value' mean in the Stork community?",
    options: [
      "Proving the value of the Stork token",
      "A system where community contributions are recognized as a form of work that creates value",
      "A new type of consensus mechanism",
      "The final valuation of the company",
      "A marketing slogan"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 61,
    category: "Protocol & Tech Alpha",
    question: "What is a 'pre-market' feed?",
    options: [
      "A feed for a token that has been trading for a long time",
      "A price feed for a token before it has been officially listed or launched on main exchanges",
      "A feed that is not yet ready for use",
      "A feed that is only available in the morning",
      "A feed for a physical stock market"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 62,
    category: "Protocol & Tech Alpha",
    question: "The primary risk of a centralized oracle is:",
    options: [
      "It's too slow",
      "It's too expensive",
      "It has a single point of failure that can be attacked or manipulated",
      "It's too complicated for developers",
      "It doesn't support enough assets"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 63,
    category: "Protocol & Tech Alpha",
    question: "What is the main purpose of a 'signature' in Stork's data feeds?",
    options: [
      "To make the data look official",
      "To provide a verifiable, cryptographic proof of the data's origin and integrity",
      "To encrypt the data so no one can read it",
      "To tell the community who the best publisher is",
      "To slow down the network for security"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 64,
    category: "Protocol & Tech Alpha",
    question: "Stork's infrastructure is designed to be 'chain-agnostic,' which means:",
    options: [
      "It doesn't care about blockchains",
      "It can operate on or provide data to any blockchain, regardless of its design",
      "It is against certain types of blockchains",
      "It only works on one specific chain",
      "It is managed by a company called Agnostic"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 65,
    category: "EGGs & Ranks",
    question: "Which rank is one level ABOVE Songbird?",
    options: [
      "Skymaster",
      "Winged",
      "Peep",
      "Wayfinder",
      "Ranked Flock"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 66,
    category: "Community",
    question: "What is the title of the 'Flash Flight' mode in the Stork Flight School?",
    options: [
      "The Quickie",
      "The 60-Second Scramble",
      "The Speed Run",
      "The Alpha Burst",
      "The Fast and the Furious"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 67,
    category: "EGGs & Ranks",
    question: "The EGGs system is a form of 'Proof of...' what?",
    options: [
      "Stake",
      "Work",
      "Value",
      "History",
      "Authority"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 68,
    category: "Protocol & Tech Alpha",
    question: "A key problem Stork solves for perp DEXs is preventing bad liquidations caused by what?",
    options: [
      "High trading volume",
      "Low liquidity",
      "Laggy or stale price data",
      "Government regulations",
      "Smart contract bugs"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 69,
    category: "Protocol & Tech Alpha",
    question: "Stork's economic flywheel is designed for what primary purpose?",
    options: [
      "Short-term hype",
      "Long-term sustainability",
      "Attracting VCs",
      "To be confusing",
      "To pay the team"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 70,
    category: "Protocol & Tech Alpha",
    question: "In the 'data superhighway' analogy, what problem does Stork solve?",
    options: [
      "Slow transaction speeds",
      "Data fragmentation and unreliability",
      "High gas fees on Ethereum",
      "The lack of good wallets",
      "Poor marketing in crypto"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 71,
    category: "Community",
    question: "The phrase 'the engine is insane' was used to describe what?",
    options: [
      "The community's growth",
      "The speed and transparency of the data dashboard",
      "The CEO's car",
      "The difficulty of the poker game",
      "The office computer"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 72,
    category: "Protocol & Tech Alpha",
    question: "What is a key benefit for an end-user of the data.stork.network dashboard?",
    options: [
      "It lets them trade directly",
      "It shows them how many EGGs they have",
      "They can verify data, ensuring fairness and security",
      "They can chat with other users",
      "It's a news aggregator"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 73,
    category: "Community",
    question: "What is the primary topic of the chat-only AMA with the CTO, Aaron?",
    options: [
      "Marketing plans",
      "The future token price",
      "Stork Engineering & the tech stack",
      "Community event schedules",
      "His favorite food"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 74,
    category: "Community",
    question: "What is the community's signature sign-off?",
    options: [
      "WAGMI",
      "To the moon!",
      "Gmork frens",
      "LFG",
      "Stay safe"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 75,
    category: "Protocol & Tech Alpha",
    question: "What is Stork's vision regarding the decentralized and real-world economies?",
    options: [
      "To keep them separate",
      "To replace the real-world economy",
      "To be the secure bridge that connects them",
      "To only focus on the decentralized economy",
      "To invest in real-world companies"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 76,
    category: "Protocol & Tech Alpha",
    question: "The 'unbreakable chain of proof' in Stork's data is created by what technological feature?",
    options: [
      "A private database",
      "Community voting",
      "AI analysis",
      "Cryptographic signatures",
      "IPFS storage"
    ],
    correctAnswer: 3,
    difficulty: 'hard'
  },
  {
    id: 77,
    category: "Protocol & Tech Alpha",
    question: "The term 'Total Value Secured' (TVS) for an oracle refers to what?",
    options: [
      "The total value of the oracle's token",
      "The total value of assets in protocols that are secured by the oracle's data",
      "The total trading volume on protocols using the oracle",
      "The amount of money the oracle company has raised",
      "The value of the company's insurance policy"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 78,
    category: "Protocol & Tech Alpha",
    question: "What is a 'Temporal Numeric Value' (TNV) in the context of Stork's core technology?",
    options: [
      "A temporary token for testing",
      "A primitive that can represent any number at a specific point in time",
      "The total number of validators on the network",
      "A type of NFT used for community rewards",
      "The final score in the Flight School quiz"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 79,
    category: "Protocol & Tech Alpha",
    question: "What is the primary benefit for a developer of Stork's 'integrate once, use everywhere' cross-chain design?",
    options: [
      "It makes their dApp look more impressive",
      "It massively reduces the time and complexity of launching on multiple chains",
      "It provides a grant for each new chain they launch on",
      "It automatically translates their dApp into different languages",
      "It's a marketing slogan with no real technical benefit"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 80,
    category: "Protocol & Tech Alpha",
    question: "What specific Stork product is designed for ultra-low-latency, sub-10 millisecond use cases like high-frequency trading?",
    options: [
      "Stork for StarkEx",
      "Stork for Real Time",
      "Stork for Monad",
      "Stork for Kalshi",
      "Stork for Perps"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 81,
    category: "Protocol & Tech Alpha",
    question: "Stork's primary and original use case, for which it was founded, is providing data for:",
    options: [
      "NFT marketplaces",
      "Lending and borrowing protocols",
      "Perpetual DEXs",
      "Memecoin launchpads",
      "Real-world asset tokenizers"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 82,
    category: "Community",
    question: "The 'everyone wins' philosophy at Stork community games on discord is best demonstrated by which game mechanic?",
    options: [
      "The winner of poker gets a special role",
      "Everyone who participates fully in a game gets EGGs",
      "The Gartic prize is split three ways",
      "The top 10 on the leaderboard get a bonus",
      "You can buy EGGs from the team"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 83,
    category: "Community",
    question: "The 'great ponmo debate' in a community hangout centered on what nutritional component?",
    options: [
      "Vitamin C",
      "Iron",
      "Collagen",
      "Vitamin B12",
      "Fiber"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 84,
    category: "Community",
    question: "What is 0xxAlfredo's funny method for balancing his diet called?",
    options: [
      "The Stork Diet",
      "The 'minus cancel minus' method",
      "The All-or-Nothing method",
      "The Keto method",
      "The Workout method"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 85,
    category: "Community",
    question: "Which of these individuals is NOT recognized as a 'Smash Karts terrorist'?",
    options: [
      "Amar",
      "SageDotLisha",
      "Jayronimoo",
      "Hustlar",
      "Ezcolm"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 86,
    category: "EGGs & Ranks",
    question: "What is the primary purpose of the EGGs system?",
    options: [
      "To give people something to trade",
      "To track member contributions and assign roles",
      "To pay for transaction fees on a future Stork chain",
      "To vote on governance proposals",
      "It's just a meme"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 87,
    category: "EGGs & Ranks",
    question: "What is the name of the role you get after 'Winged'?",
    options: [
      "Wayfinder",
      "Songbird",
      "Skymaster",
      "Ranked Flock",
      "Peep"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 88,
    category: "EGGs & Ranks",
    question: "What happens to your EGGs if you leave a Poker or Smash Karts game early?",
    options: [
      "You get double EGGs",
      "You get half EGGs",
      "You do not receive the participation reward",
      "You get a bonus",
      "Nothing, the reward is given at the start"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 89,
    category: "EGGs & Ranks",
    question: "What is the color of the 'Peep' role in Discord?",
    options: [
      "Blue",
      "Green",
      "Red",
      "Yellow",
      "Purple"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 90,
    category: "EGGs & Ranks",
    question: "What is the color of the 'Songbird' role in Discord?",
    options: [
      "Blue",
      "Green",
      "Red",
      "Yellow",
      "Purple"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 91,
    category: "EGGs & Ranks",
    question: "EGGs rewards distribution is a manual process. How often is it recommended to inquire about miscounted EGGs?",
    options: [
      "Every hour",
      "Daily",
      "On a weekly basis",
      "Every month",
      "Never, you should not ask"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 92,
    category: "EGGs & Ranks",
    question: "Besides events and content, you can also earn EGGs by participating in social raids via which channel?",
    options: [
      "#general",
      "#flock-hangouts",
      "#nest-quests",
      "#memes",
      "#real-eggs"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 93,
    category: "EGGs & Ranks",
    question: "The 'Ranked Flock' is a group of members who have achieved which roles?",
    options: [
      "Only Skymaster",
      "Only Wayfinder and Skymaster",
      "Winged, Songbird, Wayfinder, and Skymaster",
      "Only Peeps",
      "It is a separate role you apply for"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 94,
    category: "EGGs & Ranks",
    question: "Do Ranked Flock members have a time limit for content submissions?",
    options: [
      "Yes, the same 1-hour window as everyone else",
      "Yes, a 2-hour window",
      "No, they can submit at any time",
      "Yes, a 30-minute window",
      "Yes, but only on weekends"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 95,
    category: "EGGs & Ranks",
    question: "What is the starting rank for every new verified member of the Stork Discord?",
    options: [
      "Winged",
      "Egg",
      "Storkie",
      "Peep",
      "Flockling"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 96,
    category: "EGGs & Ranks",
    question: "What is one of the biggest benefits of being in the Ranked Flock, as mentioned in the announcements?",
    options: [
      "You get paid in USDC",
      "You get to be a moderator",
      "You are a recipient of 'alpha' (early info, new challenges, etc.)",
      "You get free merchandise",
      "You get to choose the next game"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 97,
    category: "EGGs & Ranks",
    question: "How many EGGs are required for the 'Winged' rank?",
    options: [
      "1,000",
      "5,000",
      "10,000",
      "15,000",
      "25,000"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 98,
    category: "EGGs & Ranks",
    question: "The EGGs system is designed to evolve based on what?",
    options: [
      "The price of Ethereum",
      "The CEO's decisions",
      "Community needs",
      "The number of people in the Discord",
      "A random weekly vote"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 99,
    category: "EGGs & Ranks",
    question: "Who can reward additional EGGs for efforts that provide significant, unlisted value?",
    options: [
      "Only the CEO",
      "Only the Community Lead",
      "Moderators and the team",
      "Any Skymaster",
      "No one, the rules are strict"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 100,
    category: "EGGs & Ranks",
    question: "'Proof of Value' is a concept where EGGs represent:",
    options: [
      "The monetary value of your contributions",
      "A receipt or proof of your valuable contributions to the ecosystem",
      "How many people you have invited to the server",
      "Your score in the poker game",
      "The number of tweets you have liked"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 101,
    category: "EGGs & Ranks",
    question: "Which rank is described as 'A Storkie who goes above and beyond usual community engagement'?",
    options: [
      "Peep",
      "Winged",
      "Songbird",
      "Wayfinder",
      "Skymaster"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 102,
    category: "EGGs & Ranks",
    question: "Which rank is described as having a 'specialty in areas such as content creation, memes, artwork, or more'?",
    options: [
      "Peep",
      "Winged",
      "Songbird",
      "Wayfinder",
      "Skymaster"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 103,
    category: "EGGs & Ranks",
    question: "Which rank is 'Reserved only for the best of the best'?",
    options: [
      "Peep",
      "Winged",
      "Songbird",
      "Wayfinder",
      "Skymaster"
    ],
    correctAnswer: 4,
    difficulty: 'easy'
  },
  {
    id: 104,
    category: "Community",
    question: "What is the role of EGGs in the 'Stork Flight School' quiz concept?",
    options: [
      "You pay EGGs to take the quiz",
      "The score is converted directly into EGGs",
      "EGGs are not related to the Flight School quiz",
      "You can buy hints with EGGs",
      "The top scorer wins all the EGGs"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 105,
    category: "Protocol & Tech Alpha",
    question: "In the Stork economic flywheel, what is the role of the community?",
    options: [
      "To provide the initial data",
      "To pay for the data feeds",
      "To drive adoption and growth",
      "To write the smart contracts",
      "To moderate the Discord server"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 106,
    category: "Community",
    question: "What is the primary way to get notified of upcoming Stork events in Discord?",
    options: [
      "DM the community lead",
      "Check the #announcements channel every 5 minutes",
      "Click 'Interested' on Discord Events and get the event roles",
      "Follow the announcements on X (Twitter) only",
      "Ask in #general chat"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 107,
    category: "EGGs & Ranks",
    question: "Which of these is NOT a stated way to earn EGGs?",
    options: [
      "Participating in REAL EGGS challenges",
      "Creating high-quality content",
      "Participating in community game nights",
      "Being the first to say 'gmork' every day",
      "Participating in Nest Quests"
    ],
    correctAnswer: 3,
    difficulty: 'medium'
  },
  {
    id: 108,
    category: "EGGs & Ranks",
    question: "The EGGs system turns community members from passive fans into what?",
    options: [
      "Moderators",
      "Developers",
      "Active stakeholders",
      "Investors",
      "Marketers"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 109,
    category: "Community",
    question: "A key rule for all official Stork games to earn EGGs is:",
    options: [
      "You must win the game",
      "You must stream your gameplay on Twitch",
      "You must use your Discord Username as your in-game name or take screenshots when required",
      "You must invite a friend to play",
      "You must be at least a Songbird"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 110,
    category: "Community",
    question: "The concept of 'Participation Rewards' for games reinforces what community value?",
    options: [
      "Winning is the only thing that matters",
      "Only skilled gamers are valued",
      "Showing up and participating is valued, regardless of skill level",
      "The community prefers poker over all other games",
      "You should only play if you have a lot of time"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 111,
    category: "Protocol & Tech Alpha",
    question: "The fact that Stork can provide data for both massive static lending pools and hyper-fast perp DEXs proves it can serve which two metrics well?",
    options: [
      "TVS and TTV",
      "Speed and Cost",
      "EVM and Non-EVM",
      "Community and VCs",
      "Hype and Utility"
    ],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 112,
    category: "Protocol & Tech Alpha",
    question: "The 'Publisher Agent' is an example of what kind of tool Stork provides for builders?",
    options: [
      "A marketing tool",
      "A legal compliance tool",
      "An open-source, plug-and-play developer tool",
      "A community moderation bot",
      "A tool for designing PFPs"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 113,
    category: "Protocol & Tech Alpha",
    question: "What is the primary risk of using an oracle that relies on a 'multisig' for security?",
    options: [
      "It's too slow",
      "It's too expensive",
      "It creates a small, centralized point of failure that can be compromised",
      "It's too complicated for developers",
      "It only works on Bitcoin"
    ],
    correctAnswer: 2,
    difficulty: 'hard'
  },
  {
    id: 114,
    category: "EGGs & Ranks",
    question: "What is the name of the role between Peep and Songbird?",
    options: [
      "Fledgling",
      "Wayfinder",
      "Winged",
      "Skymaster",
      "There is no role in between"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 115,
    category: "Community",
    question: "A key aspect of Stork's community is that recognition is primarily based on what?",
    options: [
      "How much money you have",
      "Who you know on the team",
      "Organic, genuine contribution",
      "The number of followers you have",
      "How long you've been in the server"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 116,
    category: "Community",
    question: "What is the primary purpose of the !eggs OR /eggs command in the Discord?",
    options: [
      "To see the price of Bitcoin",
      "To check your personal EGGs balance",
      "To see the top 10 EGGs holders",
      "To tip other users with EGGs",
      "To buy EGGs"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 117,
    category: "Community",
    question: "Which of these individuals is a Community Mod for Stork?",
    options: [
      "Meredith Pitkoff",
      "Jayronimoo",
      "Aaron (DevBird)",
      "AhmedBolanta",
      "Ezcolm"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 118,
    category: "Community",
    question: "What is the primary function of the '#nest-quests' channel?",
    options: [
      "For general chat",
      "To announce new partnerships",
      "To host limited-time challenges and social raids",
      "To share pictures of bird nests",
      "To apply for a job"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 119,
    category: "EGGs & Ranks",
    question: "Which of these is a stated benefit for being in the 'Ranked Flock'?",
    options: [
      "A monthly USDC stipend",
      "A guaranteed job at Stork",
      "Access to exclusive alpha and new community challenges",
      "The ability to ban other users",
      "Free entry to all poker tournaments"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 120,
    category: "Community",
    question: "What is the name of the Discord channel where you submit content?",
    options: [
      "#creative-corner",
      "#Flock-contributions",
      "#art-and-memes",
      "#alpha-drops",
      "You must DM a mod to submit content"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 121,
    category: "EGGs & Ranks",
    question: "The EGGs system is a form of:",
    options: [
      "Airdrop farming",
      "A marketing budget",
      "Gamified contribution tracking",
      "A governance token",
      "A memecoin"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 122,
    category: "EGGs & Ranks",
    question: "Which rank is described as being for 'a truly active member of the Flock'?",
    options: [
      "Peep",
      "Winged",
      "Songbird",
      "Wayfinder",
      "Skymaster"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 123,
    category: "Community",
    question: "The weekly public EGGs update demonstrates what community principle?",
    options: [
      "Speed",
      "Exclusivity",
      "Transparency",
      "Security",
      "Profitability"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 124,
    category: "Protocol & Tech Alpha",
    question: "What is the core difference between Stork's Publisher network and a single-source data provider?",
    options: [
      "The single source is faster",
      "The single source is cheaper",
      "Stork's network is decentralized and resilient to a single point of failure",
      "The single source is more accurate",
      "There is no difference"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 125,
    category: "EGGs & Ranks",
    question: "Which rank is one level below Skymaster?",
    options: [
      "Peep",
      "Nest keeper",
      "Songbird",
      "Wayfinder",
      "There is no rank below Skymaster"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 126,
    category: "Community",
    question: "What is the name of the weekly community hangout on X Spaces?",
    options: [
      "The Stork Stage",
      "The Nest",
      "The Flock Hangout",
      "The Oracle Hour",
      "The Weekly Alpha"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 127,
    category: "Community",
    question: "Who is the primary host of the Saturday Stork Poker game?",
    options: [
      "Jayronimoo",
      "Captain Laos (Viemt)",
      "Captain Nigeria (AhmedBolanta)",
      "Sapis",
      "DevBird"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 128,
    category: "Community",
    question: "In a recent Flock Hangout, the community had a deep discussion and debate about what health topic?",
    options: [
      "Intermittent Fasting",
      "Veganism",
      "Ketosis",
      "CrossFit",
      "The importance of sleep"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 129,
    category: "Community",
    question: "Which community member is known for his sophisticated Ghanaian accent and for initiating the Ketosis discussion?",
    options: [
      "Sapis",
      "OMA_TSOLA",
      "Blvckiss (BLVCKIVX)",
      "Kingsleyupdate",
      "0xxAlfredo"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 130,
    category: "Community",
    question: "What food item, also known as cow skin, caused a hilarious debate during a hangout?",
    options: [
      "Sushi",
      "Jollof Rice",
      "Pizza",
      "Ponmo",
      "Burgers"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 131,
    category: "Community",
    question: "Which community member is known for speaking French and singing in Latin during hangouts?",
    options: [
      "Riel_Revs",
      "Sapis",
      "JayJaynomics",
      "Julz",
      "HaizanAjide"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 132,
    category: "Community",
    question: "What is the name of the role given to the winner of the poker tournament?",
    options: [
      "The Gambler",
      "The Royal Flush",
      "Poker Champ",
      "The Ace",
      "The High Roller"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 133,
    category: "Community",
    question: "What is the prize pool for a typical Smash Karts event?",
    options: [
      "10,000 EGGs",
      "20,000 EGGs",
      "30,000 EGGs",
      "50,000 EGGs",
      "100,000 EGGs"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 134,
    category: "Community",
    question: "The Smash Karts event is described as FCFS, which stands for:",
    options: [
      "Fun, Cool, Fast, Slow",
      "For Community, For Stork",
      "First Come, First Served",
      "Free Cheese For Storkies",
      "Fast Carts, Fast Storkies"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 135,
    category: "Community",
    question: "In the drawing game Gartic, what happens if you spell out or reveal the answer in the chat?",
    options: [
      "You get bonus points",
      "Nothing, it's allowed",
      "You will be kicked from the game and no eggs for you",
      "You lose all your points",
      "The game restarts"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 136,
    category: "Community",
    question: "What is the nickname for the community lead, Jayronimoo in the community?",
    options: [
      "Captain Canada",
      "The Egg Master",
      "Captain Jayluff Jekwu",
      "The Oracle King",
      "The Community Captain"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 137,
    category: "Community",
    question: "Which community member is known for being quick to notice newbies and guide them?",
    options: [
      "Jamestanvirqaz",
      "GojoBadass",
      "Ezcolm",
      "ByOma",
      "LoveAbby1109"
    ],
    correctAnswer: 0,
    difficulty: 'easy'
  },
  {
    id: 138,
    category: "Community",
    question: "What is the primary platform for the weekly Flock Hangout on Mondays'?",
    options: [
      "Discord Stage",
      "X (Twitter) Spaces",
      "Telegram Voice Chat",
      "Zoom",
      "YouTube Live"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 139,
    category: "Community",
    question: "What is the core rule of the 'REAL EGGs Daily Challenge'?",
    options: [
      "You must decorate an egg and share it",
      "You must take a picture of a real egg and write an instructed caption",
      "You must write a story about an egg",
      "You must find a hidden egg emoji in the Discord",
      "You must cook a meal with an egg"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 140,
    category: "Community",
    question: "What platform must you link to your DRIP account to verify that you follow Stork on social media?",
    options: [
      "Instagram",
      "Facebook",
      "LinkedIn",
      "X (Twitter)",
      "TikTok"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 141,
    category: "Community",
    question: "Who is the Community Mod for Stork, also known as Captain Nigeria?",
    options: [
      "Meredith Pitkoff",
      "Jayronimoo",
      "AhmedBolanta",
      "Blvckiss",
      "Sapis"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 142,
    category: "Protocol & Tech Alpha",
    question: "Stork's integration with a new chain like Monad before it's even public is an example of what strategy?",
    options: [
      "Being a follower",
      "A first-mover advantage",
      "A risky bet",
      "A requirement from their VCs",
      "A community vote"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 143,
    category: "Community",
    question: "What is a unique aspect of the Flock Hangouts?",
    options: [
      "They only discuss Stork's price",
      "They feature random, life-shaping discussions, not just crypto",
      "They are always hosted by the CEO",
      "They last for exactly 10 minutes",
      "You must be a Skymaster to speak"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 144,
    category: "Community",
    question: "What is the name of the new community challenge for the Ranked Flock?",
    options: [
      "Guess the next partnership",
      "Guess the next community game",
      "Guess the next price feed to be announced",
      "Design the next Stork sticker",
      "Write the next Stork anthem"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 145,
    category: "Protocol & Tech Alpha",
    question: "What does 'collateral' mean in a lending market?",
    options: [
      "The interest you pay on a loan",
      "The asset you borrow",
      "An asset you pledge as security for a loan",
      "The platform's treasury funds",
      "The fees you pay to the protocol"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 146,
    category: "Community",
    question: "Stork Poker games happen on Tuesday and what other day?",
    options: [
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Wednesday"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 147,
    category: "Community",
    question: "In Smash Karts, if you are below Level 5, how do you prove your participation?",
    options: [
      "You don't need to, it's automatic",
      "Send a screenshot of your completed round in the designated chat",
      "DM the host after the game",
      "Type your score in the chat",
      "You are not eligible for rewards"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 148,
    category: "EGGs & Ranks",
    question: "What is the name of the role one rank below Wayfinder?",
    options: [
      "Peep",
      "Winged",
      "Songbird",
      "Skymaster",
      "Ranked Flock"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 149,
    category: "EGGs & Ranks",
    question: "What is the name of the role one rank above Winged?",
    options: [
      "Peep",
      "Wayfinder",
      "Songbird",
      "Skymaster",
      "Ranked Flock"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 150,
    category: "Community",
    question: "The term 'gmork' is a combination of 'gm' and what project's name?",
    options: [
      "Monad",
      "Starknet",
      "GMX",
      "Stork",
      "Ostium"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 151,
    category: "Community",
    question: "What is the name of the Discord channel where you check your EGGs balance?",
    options: [
      "#balance-check",
      "#eggs-count",
      "#bot-commands",
      "#your-wallet",
      "#real-eggs"
    ],
    correctAnswer: 0,
    difficulty: 'easy'
  },
  {
    id: 152,
    category: "Community",
    question: "What is the name of the drawing game played during STORK GAMING events?",
    options: [
      "Skribbl.io",
      "Pictionary",
      "Gartic",
      "Art Attack",
      "Draw Something"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 153,
    category: "Protocol & Tech Alpha",
    question: "Which of these is a 'hot reason' for an end-user to care about Stork's data dashboard?",
    options: [
      "It has a cool dark mode",
      "It shows the future price of tokens",
      "It proves their funds are safer and they get a fair price",
      "It lets them earn EGGs",
      "It shows the team's location"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 154,
    category: "Protocol & Tech Alpha",
    question: "The 'undisputed king of perps' is a title Stork earned by:",
    options: [
      "Launching its own perp DEX",
      "Having the most expensive data feeds",
      "Powering a majority of the top perp DEXs by volume",
      "Inventing the perpetual contract",
      "Sponsoring a trading competition"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 155,
    category: "Community",
    question: "What is the name of the community poker host on Tuesdays'?",
    options: [
      "Captain Canada",
      "Captain Laos",
      "Captain Nigeria",
      "Captain America",
      "The Poker Captain"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 156,
    category: "Protocol & Tech Alpha",
    question: "What does the 'on-chain contracts' layer do in Stork's architecture?",
    options: [
      "It holds all the community's EGGs",
      "It acts as the final, impartial judge, verifying signatures before data is made public",
      "It's where the team stores their development funds",
      "It's the smart contract for the poker game",
      "It connects to the Kalshi exchange"
    ],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    id: 157,
    category: "Community",
    question: "The community culture is described as being the opposite of a 'farm,' meaning:",
    options: [
      "It's an urban community",
      "The events are fun and engaging, not a mindless grind",
      "The community dislikes agriculture",
      "There are no rewards",
      "All events happen at night"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 158,
    category: "Community",
    question: "The 'REAL EGGs Daily Challenge' runs on which days of the week?",
    options: [
      "Weekends only",
      "Every day",
      "Weekdays (Monday-Friday)",
      "Tuesdays and Thursdays",
      "Only on the first of the month"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 159,
    category: "Community",
    question: "What is the core sentiment expressed in the phrase 'Stork is family for me'?",
    options: [
      "The team members are all related",
      "It's a deep, supportive, and genuine community bond",
      "It's a registered family business",
      "The community is very small",
      "Everyone has the same last name"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 160,
    category: "Community",
    question: "What is the game 'Gartic' about?",
    options: [
      "Racing cars",
      "Playing poker",
      "Drawing a word while others guess",
      "Answering trivia questions",
      "A first-person shooter game"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 161,
    category: "EGGs & Ranks",
    question: "What is the name of the role that requires 250,000 EGGs?",
    options: [
      "Peep",
      "Winged",
      "Songbird",
      "Wayfinder",
      "Skymaster"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 162,
    category: "Community",
    question: "Why are there often two 'windows' or rounds for STORK GAMING events?",
    options: [
      "To make the event last longer",
      "To accommodate the schedules of members in different time zones",
      "Because the game crashes after one round",
      "To give players a break in between",
      "To allow moderators to switch hosting duties"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 163,
    category: "Community",
    question: "What is the primary purpose of RSVPing to an event in the Stork Discord?",
    options: [
      "To reserve a spot, as space is limited",
      "To get a notification right before the event starts",
      "To earn 100 bonus EGGs",
      "To let the host know how many people are coming",
      "It's just a formality with no function"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 164,
    category: "Community",
    question: "What is a key rule when submitting to the REAL EGGs challenge?",
    options: [
      "The egg must be blue",
      "The picture must be professionally taken",
      "You must use a real egg and a specific caption",
      "The egg must be cooked",
      "You can only submit once in your lifetime"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 165,
    category: "Community",
    question: "A 'social raid' organized in the #nest-quests channel is a coordinated effort to do what?",
    options: [
      "Play an online game together",
      "Engage with a specific social media post to boost its visibility",
      "Report a scammer's account",
      "All join a Discord voice channel at once",
      "Spam another project's server"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 166,
    category: "Community",
    question: "Which of these is NOT a real community role in the Stork Discord?",
    options: [
      "Peep",
      "Winged",
      "Flockling",
      "Songbird",
      "Wayfinder"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 167,
    category: "Community",
    question: "If you see a new member asking for basic information, the community culture encourages you to:",
    options: [
      "Ignore them",
      "Tell them to read the docs",
      "Helpfully guide them and point them to the right channels",
      "Tell them to ask a moderator",
      "Make a joke about them being a newbie"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 168,
    category: "EGGs & Ranks",
    question: "Which of these is a key responsibility of the 'Ranked Flock'?",
    options: [
      "To moderate all channels",
      "To vote on all team decisions",
      "To set an example and help guide newer members",
      "To distribute all EGGs rewards",
      "To host all community events"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 169,
    category: "Community",
    question: "Why is patience requested from the community regarding EGGs distribution?",
    options: [
      "The bot is very slow",
      "The team is very small",
      "It's a manual process to ensure fairness and accuracy",
      "The blockchain is congested",
      "It's a test of loyalty"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 170,
    category: "Community",
    question: "The 'Flock' is the official name for what?",
    options: [
      "Stork's investors",
      "Stork's development team",
      "The Stork community as a whole",
      "The top 100 EGGs holders",
      "The moderator team"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 171,
    category: "Community",
    question: "What is the primary reward for the 'Guess the Next Price Feed' challenge for the Ranked Flock?",
    options: [
      "USDC",
      "A custom PFP",
      "A promotion to the next rank",
      "1,000 EGGs",
      "A private call with the CEO"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 172,
    category: "Community",
    question: "If you see a new Stork partnership announced, the community culture encourages you to:",
    options: [
      "Immediately ask 'when token?'",
      "Research the partner and discuss the strategic value",
      "Ignore it unless it affects you directly",
      "Wait for the team to explain it",
      "Ask how many EGGs you will get for it"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 173,
    category: "Community",
    question: "The 'Flock Forum' is a more formal, structured event compared to what other regular community call?",
    options: [
      "The Gartic game",
      "The Poker tournament",
      "The Flock Hangout",
      "The REAL EGGs Challenge",
      "The daily gm call"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 174,
    category: "Community",
    question: "What is the core community principle reinforced by giving free, upgraded PFPs for organic contribution?",
    options: [
      "You must pay to get recognized",
      "Recognition is earned, not bought, and the team is watching",
      "Only artists get recognized",
      "The team gives out PFPs randomly",
      "You must be a moderator to get a PFP"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 175,
    category: "Protocol & Tech Alpha",
    question: "The 'data superhighway' is an analogy for what Stork is building?",
    options: [
      "A new type of internet cable",
      "A universal, high-performance data layer for the multichain",
      "A road for self-driving cars",
      "A new social media platform",
      "A faster version of Discord"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 176,
    category: "Community",
    question: "What does the term 'alpha' mean in a crypto community context?",
    options: [
      "The first letter of the Greek alphabet",
      "A type of male personality",
      "Valuable, insider, or early information",
      "A bug in the software",
      "The leader of the community"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 177,
    category: "EGGs & Ranks",
    question: "The entire EGGs and Ranks system is designed to create a clear path of what for community members?",
    options: [
      "Earning money",
      "Becoming a moderator",
      "Progression and recognition",
      "Getting a job at Stork",
      "Learning to code"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 178,
    category: "Protocol & Tech Alpha",
    question: "Stork's ability to support both DeFi and RWA data shows it is:",
    options: [
      "Only focused on finance",
      "A small, niche project",
      "Versatile and expanding its use cases",
      "Confused about its direction",
      "Partnered with the government"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 179,
    category: "Protocol & Tech Alpha",
    question: "The core job of an oracle is to solve what problem for smart contracts?",
    options: [
      "They are too slow",
      "They are not secure",
      "They cannot access external, real-world data on their own",
      "They are too expensive to deploy",
      "They are hard to write"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 180,
    category: "Community",
    question: "When a community member receives a custom PFP from the team, it is a sign of what?",
    options: [
      "They won a random lottery",
      "They paid for the art",
      "Recognition for their outstanding and organic contributions",
      "They are being promoted to moderator",
      "They are a new member"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 181,
    category: "Community",
    question: "The community values 'organic' contribution, which means what?",
    options: [
      "Contributions must be about nature",
      "Contributions that are genuine, not forced or done just for rewards",
      "You can only use organic materials for the REAL EGGs challenge",
      "All conversations must be in English",
      "Only developers can contribute"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 182,
    category: "Community",
    question: "What is the name of the car racing game played during STORK GAMING events?",
    options: [
      "Mario Kart",
      "Need for Speed",
      "Asphalt 9",
      "Smash Karts",
      "Rocket League"
    ],
    correctAnswer: 3,
    difficulty: 'easy'
  },
  {
    id: 183,
    category: "Community",
    question: "If the team announces a 'chat-only AMA,' what does that mean?",
    options: [
      "The AMA will be held in the general text channel",
      "You can only ask questions via private DMs",
      "The speakers will be on voice, but the audience asks questions via text in the stage channel",
      "The entire AMA is conducted through text with no voice",
      "The chat will be closed during the AMA"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 184,
    category: "Community",
    question: "In the PokerNow tutorial, what is the most important step for getting EGGs rewards?",
    options: [
      "Winning the tournament",
      "Using your Discord Username, not Display Name",
      "Bluffing at least once",
      "Playing for at least one hour",
      "Joining the table first"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 185,
    category: "Community",
    question: "What is the primary function of the '#announcements' channel?",
    options: [
      "For community members to announce their personal projects",
      "For the team to post official news, updates, and events",
      "For anyone to post news about the crypto market",
      "For announcing the winners of community games",
      "For the CEO to post her daily thoughts"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 186,
    category: "Protocol & Tech Alpha",
    question: "What does the 'undisputed king of perps' statement refer to?",
    options: [
      "The CEO is the best perpetuals trader",
      "Stork has the highest-valued token among oracle projects",
      "Stork powers a majority of the top perpetual DEXs by volume",
      "Stork invented perpetual contracts",
      "The community's poker champion is also a great trader"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 187,
    category: "Community",
    question: "What does it mean to be 'on-brand' in the Stork community?",
    options: [
      "To only wear Stork merchandise",
      "To create content that aligns with the project's values of intelligence, performance, and community",
      "To only talk about Stork and nothing else",
      "To have a PFP that was made by the team",
      "To be an official employee of the company"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 188,
    category: "Community",
    question: "The Stork community is often described as being the opposite of 'toxic,' which means it is:",
    options: [
      "Very small and inactive",
      "Supportive, positive, and welcoming",
      "Strictly moderated with many rules",
      "Only for professional developers",
      "Focused only on making money"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 189,
    category: "Community",
    question: "What is the primary purpose of the 'Hint' in the 'Guess the Next Price Feed' challenge?",
    options: [
      "To give away the answer",
      "To make the challenge harder",
      "To provide a clue to guide the predictions",
      "It's a joke",
      "To promote a partner project"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 190,
    category: "Community",
    question: "The official Stork comic, 'The Legend of Storkie,' is a unique project primarily because it was:",
    options: [
      "Funded entirely by community donations",
      "Created completely by members of the Stork community",
      "Translated into 15 different languages",
      "The first comic ever made by a crypto project",
      "A collaboration with Marvel Comics"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 191,
    category: "Community",
    question: "Who is credited as the original lore writer for 'The Legend of Storkie'?",
    options: [
      "@varok",
      "@NOPH",
      "@Lisha",
      "@Uniquepaschal",
      "@Jayronimooooo"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 192,
    category: "Community",
    question: "What is the name of the Discord channel where the chat-only AMA with the CTO takes place?",
    options: [
      "#general",
      "#ama-zone",
      "#stork-stage",
      "#tech-talk",
      "#dev-chat"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 193,
    category: "Community",
    question: "The primary purpose of the '#stork-github' channel is to provide the community with:",
    options: [
      "A place to report bugs",
      "A direct line to the engineering team for feature requests",
      "Real-time, transparent updates on technical development progress",
      "A place for developers to collaborate on their own projects",
      "Tutorials on how to use GitHub"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 194,
    category: "Community",
    question: "What is a 'commit' in the context of the #stork-github channel?",
    options: [
      "A promise from the team to release a new feature",
      "A snapshot of changes made to the project's codebase",
      "A new partnership agreement",
      "A community member's pledge to contribute",
      "A bug report that has been confirmed"
    ],
    correctAnswer: 1,
    difficulty: 'easy'
  },
  {
    id: 195,
    category: "Community",
    question: "The 'Flock Shoutout' channel was created for what specific purpose?",
    options: [
      "For members to promote their own X posts",
      "For the team to highlight community members who show exceptional effort",
      "For shouting out partnerships and new price feeds",
      "For members to give each other compliments",
      "A place for the team to shout out their own achievements"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    id: 196,
    category: "Community",
    question: "Community member @Kevin was given a 'Flock Shoutout' and boosted to the Songbird role primarily for what reason?",
    options: [
      "Creating the best memes",
      "Winning the most poker games",
      "Providing exemplary and accurate support to other Flock members",
      "Being the most active member in voice chat",
      "Referring the most new members to the server"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 197,
    category: "Community",
    question: "The 'Nest Spotlight' channel is a special initiative designed to recognize the progress of which group?",
    options: [
      "Only the Ranked Flock",
      "The moderator team",
      "The top 10 EGGs holders",
      "@Peeps who are showing exceptional progress and engagement",
      "The winners of the weekly games"
    ],
    correctAnswer: 3,
    difficulty: 'medium'
  },
  {
    id: 198,
    category: "Community",
    question: "According to the new content creation criteria, what is the key difference between 'Educational' and 'Accurate' content?",
    options: [
      "There is no difference",
      "Educational content is for beginners, Accurate content is for experts",
      "Educational content explains concepts simply, while Accurate content must be 100% aligned with official docs",
      "Educational content earns more EGGs than Accurate content",
      "Educational content is for X, Accurate content is for Discord"
    ],
    correctAnswer: 2,
    difficulty: 'hard'
  },
  {
    id: 199,
    category: "Community",
    question: "Who is the official artist credited with drawing the Stork Custom PFPs?",
    options: [
      "@varok",
      "@Uniquepaschal",
      "@PeaceBreak",
      "@jimmy",
      "@Lisha"
    ],
    correctAnswer: 2,
    difficulty: 'easy'
  },
  {
    id: 200,
    category: "Community",
    question: "The Stork team has explicitly stated that they will NEVER ask you for what?",
    options: [
      "Feedback on new features",
      "Participation in community events",
      "Funds or personal information for allocations or rewards",
      "A follow on X",
      "Your Discord username"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 201,
    category: "Community",
    question: "The creation of the 'stork-vietnam' channel, moderated by @Captain East Laos, is an example of what community initiative?",
    options: [
      "A partnership with a Vietnamese project",
      "The team's plan to move to Vietnam",
      "Supporting regional communities in their native languages",
      "A marketing campaign targeted at Southeast Asia",
      "A temporary channel for a special event"
    ],
    correctAnswer: 2,
    difficulty: 'medium'
  },
  {
    id: 202,
    category: "Community",
    question: "The Stork Content Leaderboard is a weekly feature that highlights the top creators from which group?",
    options: [
      "The entire Flock",
      "The Ranked Flock only",
      "The Peep Flock",
      "The moderator team",
      "The Stork Team"
    ],
    correctAnswer: 0,
    difficulty: 'easy'
  }
];

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questionBank.length));
};

export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard', count: number): Question[] => {
  const filtered = questionBank.filter(q => q.difficulty === difficulty);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, filtered.length));
};
