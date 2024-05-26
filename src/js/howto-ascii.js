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

  let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences,pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  const BorderChars = 'borderChars';
  
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",name:"system", content:"initiation Machine Learning `[🌌.systemDream]{https://github.com/universmc/systemDream}`.timestamp "},
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[FramWork(session.timestamp_unix [DATE])]"},
      {role: "assistant",name:"[📔.codex]", content:BorderChars},
      {role: "user",name:"[👨🏽‍💻.Mike]:", content:"groq:`borderChars` wirefram interface ascii groq output $message build/.*responses"},

    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.7,
    max_tokens: 512,
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