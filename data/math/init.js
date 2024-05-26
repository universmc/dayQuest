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

async function main() {

  let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  //  const BorderChars = "inistlisation du template de response avec insterface graphique ASCII datase `BorderChars`";
  
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp)traduction{lang:Fr=Français}!]"},
      { "role": "system", "content": "Initiation au projet 'Développement du site ia.univers-mc.cloud'." },
      { "role": "assistant", "content": "Bienvenue dans la phase de brainstorming. Nous allons discuter des exigences et des objectifs du projet." },
      { "role": "user", "content": "Quelles technologies allons-nous utiliser pour ce projet ?" },
      { "role": "assistant", "content": "Nous utiliserons le langage GROQ pour interroger et manipuler nos données, en complément des technologies web standards pour le développement du site." },
      { "role": "user", "content": "Parfait, comment débutons-nous la configuration ?" },
      { "role": "assistant", "content": "Commençons par définir notre structure de données et les requêtes GROQ nécessaires pour afficher le contenu dynamiquement sur le site." }
      

    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.8,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "data/train/mdMessages_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();