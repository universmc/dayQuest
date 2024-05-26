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
  const DisKetCrypto = {
    "synopsis": "DisKetCrypto est une série en trois épisodes qui suit l'histoire de Mike et pi, une équipe de pirates informatiques qui explorent l'économie numérique, le piratage informatique et la machine learning pour créer un logiciel démocratique innovant.",
    "episodes": [
        {
            "titre": "Episode1: Le Passé",
            "chapitres": [
                {
                    "titre": "Chapitre 1",
                    "description": "Mike rencontre pi, une IA exceptionnelle, et ensemble, ils créent l'équipe de pirates informatiques 'DisKet Crypto'."
                },
                {
                    "titre": "Chapitre 2",
                    "description": "L'équipe développe le concept de 'DisKet Crypto' en combinant les talents de Mike en programmation et création de scripts Groq avec les capacités d'apprentissage automatique et de résolution de problèmes de pi."
                },
                {
                    "titre": "Chapitre 3",
                    "description": "Mike et pi collaborent pour développer la Machine Learning systemDream grâce au Cloud univers-mc.cloud."
                },
                {
                    "titre": "Chapitre 4",
                    "description": "Deux équipes de pirates informatiques distinctes sont formées : 'DisKet Crypto' et une autre équipe non nommée."
                },
                {
                    "titre": "Chapitre 5",
                    "description": "Les équipes travaillent ensemble pour explorer les possibilités du piratage informatique et pousser les limites de ce qu'ils peuvent accomplir grâce au Cloud univers-mc.cloud et à la Machine Learning systemDream."
                }
            ]
        },
        {
            "titre": "Episode 2: Le Présent",
            "chapitres": [
                {
                    "titre": "Chapitre 1",
                    "description": "Évolution des activités des équipes de pirate informatique."
                },
                {
                    "titre": "Chapitre 2",
                    "description": "Nouvelles opportunités de travail grâce aux acquis de l'épisode 1."
                },
                {
                    "titre": "Chapitre 3",
                    "description": "Développement du trésor en tant que logiciel démocratique et du capital en commun."
                },
                {
                    "titre": "Chapitre 4",
                    "description": "Implication de la commission nationale des comptes de campagne et des formations politiques."
                },
                {
                    "titre": "Chapitre 5",
                    "description": "Utilisation de la crypto-monnaie UMC et des smart contracts pour gérer le trésor."
                }
            ]
        },
        {
            "titre": "Episode 3: Le Futur",
            "chapitres": [
                {
                    "titre": "Chapitre 1",
                    "description": "Extension de l'influence des équipes de pirate informatique."
                },
                {
                    "titre": "Chapitre 2",
                    "description": "Améliorations continues du trésor en tant que logiciel démocratique."
                },
                {
                    "titre": "Chapitre 3",
                    "description": "Intégration de nouvelles technologies et concepts innovants."
                },
                {
                    "titre": "Chapitre 4",
                    "description": "Impact sur la société et les politiques publiques grâce au capital en commun."
                },
                {
                    "titre": "Chapitre 5",
                    "description": "Réflexion sur les défis et les opportunités pour l'avenir."
                }
            ]
        }
    ]
}

async function main() {

  let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  //  const BorderChars = "inistlisation du template de response avec insterface graphique ASCII datase `BorderChars`";
  const disKetCrypto = "DisKetCrypto";

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp)traduction{lang:Fr, Français !}!]"},
      { "role": "system", "content": "Initiation au projet 'Développement de concepte http://Ia.univers-mc.cloud/DisKetCrypto/'." },
      { "role": "assistant", "content": "Bienvenue dans la phase de brainstorming. Nous allons discuter des exigences et des objectifs du projet." },
      { "role": "system", "content": "groq `disKetCrypto`"},
      { "role": "assistant", "content": "lecture du contenu de la constante disKetCrypto dans ce script"},
      

    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "data/devP_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();