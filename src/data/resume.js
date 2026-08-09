export const profile = {
  name: "Nguyen Cao Nhan",
  firstName: "Nhan",
  role: "Golang Backend Developer / DevOps Engineer",
  tagline:
    "I build scalable Go backend services and automate CI/CD pipelines — leveling up toward cloud-native infrastructure and systems that stay reliable.",
  email: "caonhan.work@gmail.com",
  phone: "+84 922 060 251",
  linkedin: "https://www.linkedin.com/in/cao-nhan-nguyen-76800533b/",
  github: "https://github.com/nhancaon",
  location: "Ho Chi Minh City, Vietnam",
};

export const about = [
  "I'm a Golang backend developer working toward DevOps engineering — less interested in just shipping features, more interested in what keeps them running: clean service boundaries, deployment pipelines, and infrastructure that doesn't page anyone at 2am.",
  "I care about services that hold up in production and pipelines that make releases boring. Right now I'm going deeper on Go, Kubernetes, and cloud-native infrastructure.",
];

export const stats = [
  { num: "2025", label: "First fresher role" },
  { num: "2", label: "Full-stack team projects" },
  { num: "10+", label: "Core technologies" },
  { num: "3", label: "DevOps certificates" },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    chips: ["Golang", "Java", "Gin", "Fiber v2", "Spring Boot", "Vue 3"],
  },
  {
    title: "Data & Infra",
    chips: ["MongoDB", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    title: "CI/CD & Tooling",
    chips: ["GitLab CI/CD", "Jenkins", "GitHub Actions", "GitHub", "GitLab"],
  },
];

export const experience = [
  {
    when: "07/2025 — 03/2026",
    title: "IT Fresher",
    company: "BambuUP",
    points: [
      "Automated data management with Airtable, cutting manual work and boosting team efficiency.",
      "Maintained a startup's Azure platform — shipped features, fixed data-flow bugs, and refactored for reliability.",
      "Built marketing sites in React & Tailwind CSS; owned the domain, SSL, and Vercel deploys end-to-end.",
      "Integrated LadiFlow with Drupal for seamless lead syncing into a central customer database.",
      "Key technical support for the Vietleap AI Accelerator program.",
    ],
  },
];

export const education = {
  school: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
  degree: "B.Sc. in Information Technology",
  when: "2021 — 2025",
  location: "Ho Chi Minh City, Vietnam",
  details: ["GPA: 3.40/4.00", "Awarded Academic Excellence Scholarship (x2)"],
};

export const projects = [
  {
    slug: "social-chat-app",
    title: "Social Chat App",
    when: "2026",
    kind: "Personal Project",
    description:
      "A full-stack social network built solo: JWT auth, posts, follows, and real-time chat & notifications over WebSocket and gRPC.",
    tech: ["Golang", "Fiber v2", "Vue 3", "Quasar", "MongoDB", "WebSocket", "gRPC", "Docker", "Redis"],
    // TODO: replace with the repo URL and a real screenshot (e.g. /projects/social-chat-app.png in /public)
    github: "https://github.com/nhancaon",
    image: null,
  },
  {
    slug: "e-wallet-platform",
    title: "E-Wallet Platform",
    when: "2024 — 2025",
    kind: "Team Project",
    description:
      "My part of a 3-person e-wallet team: a layered Spring Boot API, an AI chatbot & voice assistant (Gemini) for transfers and bill pay, plus a GitLab CI/CD pipeline shipping into a 3-node Kubernetes cluster with Velero backups.",
    tech: ["Spring Boot", "PostgreSQL", "Gemini LLM", "GitLab CI/CD", "Kubernetes", "Rancher", "Velero", "AWS EC2"],
    github: "https://github.com/nhancaon",
    image: "/e-wallet-platform.png",
  },
  {
    slug: "fast-food-order-cli",
    title: "Fast Food Order CLI",
    when: "2023",
    kind: "Practice Project",
    description:
      "A pure-Bash point-of-sale loop for a fast food counter: browse a 10-item menu, validate every input, tally the total, log the order to a history file, and collect a star rating at the end.",
    tech: ["Bash", "Shell Scripting", "getopts"],
    github: "https://github.com/nhancaon/simple-fast-food-order",
    image: "/fast-food-order-cli.png",
  },
];

export const caseStudies = {
  "social-chat-app": {
    subtitle: "A solo-built real-time social network with a Go backend and a Vue frontend",
    role: "Solo Developer (Full-Stack)",
    timeline: "2026",
    teamSize: "Solo project",
    client: "Personal project",
    // TODO: replace with a YouTube/Vimeo embed URL when the demo is ready
    video: null,
    about: [
      "I wanted to see how far a single Go service could go — auth, a social graph, and real-time messaging — without reaching for a framework that hides the details.",
      "The result pairs a Fiber-based API with a Vue 3 / Quasar frontend: sign up, post, follow people, and chat with them in real time, all self-hosted behind Docker Compose.",
      "Building it solo meant every architecture call — how chat gets delivered, how the API gets documented — was mine to make and mine to live with later.",
    ],
    challenges: [
      {
        title: "Real-time without polling",
        body: "Chat and notifications needed to feel instant, not refresh-and-check. Getting WebSocket connections and internal gRPC calls to stay in sync took more iteration than the plain REST side of the app.",
      },
      {
        title: "A social graph that stays fast",
        body: "Posts, likes, comments, and follows all touch overlapping documents. Once the test follow-graph passed a few hundred users, naive queries for a feed started showing their cost.",
      },
      {
        title: "No one to review the API but me",
        body: "Working solo means no second pair of eyes on the design. I had to document it well enough in Swagger to trust my own past decisions months later.",
      },
    ],
    objectives: [
      {
        title: "Messages that arrive, not messages that wait",
        body: "Deliver chat and notifications the instant they happen — WebSocket to the client, gRPC between internal services — instead of falling back to polling.",
      },
      {
        title: "A feed that doesn't slow down with scale",
        body: "Model posts, follows, and interactions in MongoDB around the queries that actually run — a feed, a follower list — not just the entities on paper.",
      },
      {
        title: "One command to run the whole stack",
        body: "Containerize every service with Docker Compose and document the REST API in Swagger, so the project is reproducible without a setup guide.",
      },
    ],
    approach: [
      "I built the REST API and auth first, then layered WebSocket and gRPC on top once the core data model was solid, rather than designing for real-time from day one.",
      "Redis holds session and presence data so the WebSocket layer never has to hit MongoDB just to check who's online, keeping the chat path fast under load.",
      "I wrote the Swagger docs alongside the API instead of after it — a solo project only has one reviewer, future me, and future me needed the reference.",
    ],
    decisions: [
      {
        title: "gRPC between services, WebSocket to clients",
        body: "Browsers don't speak gRPC well, but it's a strong fit for service-to-service calls. Splitting the two — WebSocket outward, gRPC inward — let each side do the job it's actually good at.",
      },
      {
        title: "MongoDB over a relational database",
        body: "Posts, comments, and likes are naturally nested and read far more than they're joined. Documents matched that access pattern better than normalizing everything into separate tables.",
      },
      {
        title: "Redis for presence, not just caching",
        body: "Checking who's online by querying MongoDB on every WebSocket ping would add load for no reason. Redis's in-memory reads made presence checks cheap enough to run constantly.",
      },
    ],
    results:
      "The full stack — Go API, Vue frontend, MongoDB, Redis — comes up with a single docker compose up, and the REST API is documented in Swagger well enough that picking the project back up after a break doesn't mean re-reading the source first.",
  },
  "e-wallet-platform": {
    subtitle: "Backend architecture, AI features, and the delivery pipeline behind a cross-platform wallet app",
    role: "Backend & DevOps Engineer",
    timeline: "2024 – 2025",
    teamSize: "3 developers",
    client: "Team project — no external client",
    video: "https://www.youtube.com/embed/RIV9xlWVg1A",
    about: [
      "The team set out to build a wallet app that behaves the same whether you're on the website or the mobile app — checking balances, sending money, paying bills — all backed by one Spring Boot service.",
      "My side of it was everything under the hood: the API layer, an AI chatbot and voice assistant built on Gemini that lets people transfer money or pay a bill by talking to it, and the infrastructure that keeps all of it running.",
      "Because two other developers were building the web and mobile clients against whatever I shipped, most of my early decisions came down to API stability — get that wrong and both frontends break at once.",
    ],
    challenges: [
      {
        title: "One backend, two frontends racing ahead",
        body: "Web and mobile were being built at the same time, against the same endpoints. Any change to a response shape risked breaking whichever client had updated last, so the API had to be stable before either team could move fast.",
      },
      {
        title: "A cluster with no dedicated ops person",
        body: "None of us had run Kubernetes in production before. Three nodes on VMware and no safety net — a bad manifest or a crashed node could take the whole service down with nobody paged to catch it.",
      },
      {
        title: "Voice and chat aren't just another endpoint",
        body: "Wiring Gemini into transfers and bill payments meant the model's output had to map onto real, money-moving API calls — a bad parse couldn't just show an error, it had to fail safely.",
      },
      {
        title: "A login session isn't enough to move money",
        body: "Being signed in proves who you are, not that you meant to send this transfer right now. That gap had to be closed inside the API itself, without turning every payment into a multi-screen ordeal.",
      },
    ],
    objectives: [
      {
        title: "One API, zero drift",
        body: "Ship a layered Spring Boot service — Controller → Service → Repository → Entity → DTO — that both the web and mobile teams could build against without special-casing either client.",
      },
      {
        title: "A second factor on every transfer",
        body: "Enforce OTP and PIN checks in the service layer, not the UI, so a transfer or bill payment can't clear on a client-side assumption — the backend has to agree it happened.",
      },
      {
        title: "A balance that's never a step behind",
        body: "Commit a transfer's balance update in the same transaction as the transfer itself, so the account view reflects reality the instant a request returns instead of catching up on the next refresh.",
      },
      {
        title: "Infrastructure that recovers by itself",
        body: "Run the service on a Kubernetes cluster with Rancher for visibility and Velero + MinIO backups, so a bad rollout or node failure is a restore, not a 2am incident.",
      },
    ],
    approach: [
      "I started from the API contract both frontends needed and built the layered backend around it, locking down request and response shapes early so the mobile and web teams could work in parallel instead of blocking on me.",
      "For the AI side, I kept the Gemini integration behind the same service layer as everything else — the chatbot calls the same transfer and bill-pay logic a button tap would, so there's one code path to trust, not two.",
      "Infrastructure came last, once the service itself was stable: containerize, automate the pipeline, then move it onto a cluster built to survive a node going down.",
    ],
    decisions: [
      {
        title: "Kubernetes over a single VM",
        body: "A single VM is simpler to set up but has one failure mode: it goes down, the app goes down. A 3-node cluster meant the service could keep running through a node failure — worth the extra setup for something meant to outlast the semester.",
      },
      {
        title: "GitLab CI/CD over manual deploys",
        body: "With three people pushing changes, manual deploys were going to be the first thing skipped under deadline pressure. Automating build → push → deploy meant a release was exactly as reliable on a rushed day as a calm one.",
      },
      {
        title: "Velero + MinIO for backup, not just monitoring",
        body: "Rancher gives visibility, but visibility doesn't undo a bad rollout. Velero snapshots meant a broken deploy could be rolled back to a known-good state in minutes instead of being debugged live.",
      },
      {
        title: "Synchronous balance updates over eventual consistency",
        body: "A transfer could have been queued and reconciled later, which is the usual way to keep a system fast. For money, 'eventually correct' isn't good enough, so the balance write happens in the same transaction as the transfer — a heavier write path in exchange for a number you can trust the moment it's shown.",
      },
    ],
    results:
      "The API stayed stable enough that the web and mobile teams never had to special-case each other's requests, and OTP/PIN checks living in the service layer meant no client could authorize a transfer on its own. The GitLab pipeline meant every release after the first went out the same way — merge, build, deploy, no manual steps — and when we lost a node during testing, Velero's backups turned what could've been an afternoon of debugging into a restore that took minutes.",
  },
  "fast-food-order-cli": {
    subtitle: "A pure-Bash point-of-sale loop, built to get genuinely comfortable with shell scripting",
    role: "Solo Developer",
    timeline: "2023",
    teamSize: "Solo project",
    client: "Practice project",
    video: "none",
    about: [
      "This one's small on purpose: a single Bash script that runs a fast food counter — show the menu, take an order, validate every answer, tally the total, and ask for a rating on the way out.",
      "No framework, no language runtime to lean on — just getopts, associative arrays, and read loops. The point wasn't the fast food menu, it was getting fluent in the kind of shell scripting that DevOps work actually leans on.",
    ],
    challenges: [
      {
        title: "Bash doesn't really have data structures",
        body: "The menu needed 10 items, each with its own prices and sizes. Bash's associative arrays can map a key to a value, but there's no clean way to nest a list of sizes under an item the way you'd reach for an object or struct in any other language.",
      },
      {
        title: "No exceptions, no types — just text",
        body: "Every menu choice, size, and quantity comes in as a raw string from read. Nothing stops a customer from typing 'seven' instead of 7 unless the script checks for it explicitly, every single time.",
      },
    ],
    objectives: [
      {
        title: "Model the menu without a real data structure",
        body: "Use associative arrays to map each item to its prices and size options directly, instead of juggling parallel indexed arrays that can drift out of sync.",
      },
      {
        title: "Validate everything, trust nothing",
        body: "Check every read against the valid range for that step — menu number, size, quantity — and reject bad input with a clear message instead of letting it silently break the order.",
      },
      {
        title: "Leave a paper trail",
        body: "Append every completed order — timestamp, customer name, price — to a plain history file, so past orders are auditable without needing a database for a single-file script.",
      },
    ],
    approach: [
      "I built the menu display and price lookup first, then layered on quantity and running totals, then the repeat-order loop, and left history logging and the rating flow for last — get one order working end to end before worrying about looping it.",
      "getopts handled the auxiliary flags (-t, -d, -g for time, date, and guidelines) as a separate concern from the interactive ordering loop, so the informational commands didn't tangle with the actual order state machine.",
    ],
    decisions: [
      {
        title: "Associative arrays over parallel indexed arrays",
        body: "Parallel arrays (one for names, one for prices, one for sizes, all lined up by index) are a classic way to fake a record in Bash, but one insertion out of sync breaks every lookup silently. Associative arrays keyed by item name made the mapping explicit at the cost of Bash's clunkier array syntax.",
      },
      {
        title: "A plain text log over a database",
        body: "his.txt is just append-only text. For a single-file script with one till and no concurrent writers, a database would have been solving a problem this project doesn't have.",
      },
    ],
    results:
      "Clone the repo, run ./restaurant.sh, and the whole flow works: pick items, get validated on every input, watch the total add up, order again if you want, then leave a rating. It's a small project, but the kind of shell-scripting fluency it forced — associative arrays, input validation, getopts — is exactly what shows up later in writing CI/CD scripts and deployment tooling.",
  },
};

export const certificates = [
  { org: "Axon Active", title: "Software Development With Scrum" },
  { org: "DevOpsEdu.vn", title: "DevOps for Fresher; Kubernetes Course" },
  { org: "Cloud Ace", title: "Google Cloud Training Day – Core Infrastructure Fundamentals" },
];

export const languages = [
  { name: "Vietnamese", level: "Native" },
  { name: "English", level: "IELTS 6.0" },
  { name: "Chinese", level: "HSK 3" },
];
