const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const borderChars = {
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝', 
    horizontal: '═',
    vertical: '║',
    intersectionLeft: '╠',
    intersectionRight: '╣',
    intersectionTop: '╦',
    intersectionBottom: '╩',
    intersectionCross: '╬',
  };

const howtoGroq = {
    "Chapiter": [
    {
    "description": "Apprendre les concepts de base",
    "details": [
    "Démarrer avec la compréhension des principes de base du langage",
    "Étudier la syntaxe, les types de données et les structures de contrôle"
    ]
    },
    {
    "description": "Étudier les exemples",
    "details": [
    "Examiner des exemples existants",
    "Comprendre les fonctionnalités et la syntaxe de Grog"
    ]
    },
    {
    "description": "Pratiquer la programmation",
    "details": [
    "Mettre en pratique les connaissances acquises",
    "Écrire du code Grog pour résoudre des problèmes ou réaliser des tâches spécifiques"
    ]
    },
    {
    "description": "Maîtriser les fonctionnalités avancées",
    "details": [
    "Explorer les fonctionnalités avancées de Grog",
    "Étudier les fonctions, les classes et les modules",
    "Créer des programmes plus complexes"
    ]
    },
    {
    "description": "Partager et recevoir des commentaires",
    "details": [
    "Partager votre code avec la communauté Grog",
    "Demander des commentaires et des conseils pour améliorer vos compétences et votre code"
    ]
    }
    ]
    }
    

async function main() {

  let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences,pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  const BorderChars = "inistlisation du template de response avec insterface graphique ASCII datase `BorderChars`";
  const HowToqgroq = howtoGroq;
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",name:"system", content:"initiation à la technologie groq vocal "},
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp_unix [DATE])]"},
      {role: "assistant",name:"[📔.codex]", content:"phase[01-1]: Bonjour bienvenu le cours magistral sur le langage de programmation grog async js/json, traduit en lang=Fr français"},
      {role: "assistant",name:"[📔.codex]", content:"phase[01-2]:[RUN]:[configuration)]"},
      {role: "assistant",name:"[📔.codex]", content:"Bienvenue dans notre team, ls -ia [{'role':'system',name:,'[🌌.systemDream]','content':'$promptSystem'};{'role':'assistant','name':'[🌴.Groq]','content':'promptAssistant'};{'role':'user':'name':'[💻.pi]',content:'$promptUser'}]!"},
      {role: "user",name:"[🌴.Groq]", content: "pour rendre ce cours plus dynamique et intéractif nous intégrons  des dial:{[💬$messages] option (/?) avec le [📔.codex] posant des questions ($?) afin de rendre le cours plus dynamique, en plus nous ajouterons des [🤖.emoji]!" },
      {role: "system",name:"[🌌.systemDream]", content:"[📔.codex]:$content.emoji{} "},
      {role: "user",name:"[🌌.systemDream]", content:"[📔.codex]:$content.emoji{} "},

    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "build/mdMessages_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();