/* eslint-disable import/prefer-default-export */
const data = [
  {
    id: 1,
    nom: "Roger",
    partage: ["Explorer la nature", " - Cueillette"],
    service: [
      "Cueillir des champignons",
      " - Découverte des plantes comestibles",
    ],
    disponibilité: ["Matin", " - Weekend"],
    lieu: "Place de l'église",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940416.png?token=exp=1652430036~hmac=87c2e5d02e31f7fd4d21fedd322ecc8a",
  },
  {
    id: 2,
    nom: "Mathieu",
    partage: ["Energie verte"],
    service: ["Fabriquer un bac de récupération d'eau de pluie"],
    disponibilité: ["Weekend"],
    lieu: "Route de la Loire",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940446.png?token=exp=1652433229~hmac=e0d56677d1b0fea1faee7c308a342278",
  },
  {
    id: 3,
    nom: "Chantal",
    partage: ["Gérer un jardin", " - Explorer la nature"],
    service: ["Entretenir un potager", " Prendre soin de ses poules"],
    disponibilité: ["Matin", " - Weekend"],
    lieu: "Place de l'église",
    url:"https://cdn-icons.flaticon.com/png/512/3940/premium/3940421.png?token=exp=1652430072~hmac=cb9e52fcc2e5fa827b1188adcc34abf4",
  },
  {
    id: 4,
    nom: "Joël",
    partage: ["Hygiène"],
    service: [
      "Fabriquer ses propres produits ménagers",
      "- Faire ses propres savons",
    ],
    disponibilité: ["Après-midi"],
    lieu: "Route du héron",
    url: "https://cdn-icons-png.flaticon.com/512/3940/3940403.png",
  },
  {
    id: 5,
    nom: "Louise",
    partage: ["Faire des bocaux"],
    service: [
      "Faire ses propres confitures",
      " - Faire des conserves de légumes",
    ],
    disponibilité: ["Weekend"],
    lieu: "Avenue du Général de Gaulle",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940423.png?token=exp=1652433730~hmac=613f8074f7857bd0ff90f6935ee33999",
  },
  {
    id: 6,
    nom: "André",
    partage: ["Textile", " Artisanat"],
    service: ["Fabriquer ses propres vêtements", " - Fabriquer des paniers"],
    disponibilité: ["Semaine", " - Soirée"],
    lieu: "Rue de la grenouille",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940442.png?token=exp=1652433858~hmac=dd7a6f3c235b45026ce90523f1b9e632",
  },
  {
    id: 7,
    nom: "Marilène",
    partage: ["Cueillette", " - Gérer un jardin"],
    service: ["Cueillir des produits marins", " - Pailler son jardin"],
    disponibilité: ["Weekend", " - Matin"],
    lieu: "Route du sel",
    url: "https://cdn-icons-png.flaticon.com/512/3940/3940405.png",
  },
  {
    id: 8,
    nom: "Enzo",
    partage: ["Artisanat"],
    service: ["Fabriquer sa propre vaisselle"],
    disponibilité: ["Weekend"],
    lieu: "Avenue de la terre",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940435.png?token=exp=1652430597~hmac=0f50dcd8f2cbb2682a31dd73050a915e",
  },
  {
    id: 9,
    nom: "Agathe",
    partage: ["Energie verte"],
    service: ["Installer des panneaux solaires"],
    disponibilité: ["Weekend", " - Après-midi"],
    lieu: "Impasse des goélands",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940419.png?token=exp=1652433304~hmac=3109959a3021e4b8654dc798e04cfbdf",
  },
  {
    id: 10,
    nom: "Albert",
    partage: ["Cueillette", " - Artisanat"],
    service: ["Choisir ses pommes", " - Faire son propre jus de pommes"],
    disponibilité: ["Weekend"],
    lieu: "Chemin des écureuils",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940448.png?token=exp=1652433453~hmac=40e2abc4c5e3ff780460e53fb6188b6f",
  },
  {
    id: 11,
    nom: "Laurette",
    partage: ["Artisanat", " - Explorer la nature"],
    service: [
      "Fabriquer son propre cerf-volant",
      "Reconnaître les essences d'arbre",
    ],
    disponibilité: ["Matin", " - Semaine"],
    lieu: "Rue de la grive",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940449.png?token=exp=1652430727~hmac=110e0a5714bc7d7dd83c5638efd9996f",
  },
  {
    id: 12,
    nom: "Joseph",
    partage: ["Artisanat"],
    service: ["Fabriquer des jouets en bois"],
    disponibilité: ["Weekend", " - Après-midi"],
    lieu: "Rue du grand héron",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940432.png?token=exp=1652430761~hmac=2906e5441d767dcfcbf20d7ce053a573",
  },
  {
    id: 13,
    nom: "Laurence",
    partage: ["Textile"],
    service: ["Faire des rideaux en crochet", " - Coudre ses propres robes"],
    disponibilité: ["Semaine", " - Matin"],
    lieu: "Route du grand chêne",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940426.png?token=exp=1652433794~hmac=f8f94400451955204261f8bf08c4b112",
  },
  {
    id: 14,
    nom: "Virginie",
    partage: ["Hygiène"],
    service: ["Faire ses propres produits de beauté"],
    disponibilité: ["Weekend", " - Matin"],
    lieu: "Mail Pablo Picasso",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940430.png?token=exp=1652433597~hmac=70d7cbdd13c11dbd7a6fa025d6cda47b",
  },
  {
    id: 15,
    nom: "Laurent",
    partage: ["Réparation"],
    service: ["Réparer son vélo", " - Réparer son scooter"],
    disponibilité: ["Weekend"],
    lieu: "Rue Marie Curie",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940412.png?token=exp=1652430910~hmac=c6ee3014e4e34772864ddeebb375e3b8",
  },
  {
    id: 16,
    nom: "Mireille",
    partage: ["Explorer la nature"],
    service: ["Balade sur le front de mer"],
    disponibilité: ["Semaine"],
    lieu: "Avenue du grenier",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940432.png?token=exp=1652430959~hmac=5e903f75278c07c7ebed9e572b1dc82b",
  },
  {
    id: 17,
    nom: "Mustapha",
    partage: ["Cueillette", " - Artisanat"],
    service: ["Faire ses propres compositions florales"],
    disponibilité: ["Weekend"],
    lieu: "Rue de la foire",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940416.png?token=exp=1652430036~hmac=87c2e5d02e31f7fd4d21fedd322ecc8a",
  },
  {
    id: 18,
    nom: "Luis",
    partage: ["Gérer un jardin"],
    service: [
      "Gérer son lombricomposteur",
      " - Fabriquer ses propres répulsifs",
    ],
    disponibilité: ["Semaine", " - Après-midi"],
    lieu: "Rue du moulin",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940412.png?token=exp=1652433120~hmac=5a447357b8521d35278590914ac8edd3",
  },
  {
    id: 19,
    nom: "Basile",
    partage: ["Artisanat"],
    service: ["Fabriquer des instruments de musique en bois"],
    disponibilité: ["Weekend"],
    lieu: "Route de Paris",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940448.png?token=exp=1652430183~hmac=bf5544d47d4799b5a8eff47fe6cb10ef",
  },
  {
    id: 20,
    nom: "Julia",
    partage: ["Explorer la nature"],
    service: ["Randonnée dans les marais"],
    disponibilité: ["Weekend", " - Après-midi"],
    lieu: "Rue du loup",
    url:"https://cdn-icons.flaticon.com/png/512/3940/premium/3940421.png?token=exp=1652430072~hmac=cb9e52fcc2e5fa827b1188adcc34abf4",
  },
  {
    id: 21,
    nom: "Désiré",
    partage: ["Artisanat"],
    service: ["Fabriquer son propre pain au levain naturel"],
    disponibilité: ["Weekend", " - Matin"],
    lieu: "Route du grand jardin",
    url: "https://cdn-icons-png.flaticon.com/512/3940/3940403.png",
  },
  {
    id: 22,
    nom: "Anne-Camille",
    partage: ["Cueillette", " - Faire des bocaux"],
    service: ["Cueillette de mûres sauvages", " Faire sa gelée de mûres"],
    disponibilité: ["Semaine", " - Weekend"],
    lieu: "Route de pliane",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940434.png?token=exp=1652433510~hmac=4a101df2c97fc0628be9565f4eb343a4",
  },
  {
    id: 23,
    nom: "Kate",
    partage: ["Réparation"],
    service: ["Réparer son petit électroménager"],
    disponibilité: ["Weekend"],
    lieu: "Rue du chapeau rouge",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940430.png?token=exp=1652430502~hmac=56ec886a0c7a0adedf685ddf45ca4f56",
  },
  {
    id: 24,
    nom: "Lucrezia",
    partage: ["Textile", " - Réparation"],
    service: ["Répriser les doudous de ses enfants"],
    disponibilité: ["Weekend", " - Matin"],
    lieu: "Route de la chapelle",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940415.png?token=exp=1652433920~hmac=1b37635ebbe15ef253d1152d7618166d",
  },
  {
    id: 25,
    nom: "Georges",
    partage: ["Textile", " - Cueillette", " - Artisanat"],
    service: ["Faire ses propres teintures végétales"],
    disponibilité: ["Semaine", " - Après-midi"],
    lieu: "Chemin des érables",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940411.png?token=exp=1652433952~hmac=f655cad542a967eaf7511cca3b5c52cd",
  },
  {
    id: 26,
    nom: "Andreï",
    partage: ["Hygiène", " - Cueillette"],
    service: ["Fabriquer ses propres parfums avec des fleurs sauvages"],
    disponibilité: ["Weekend"],
    lieu: "Route des fleurs",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940437.png?token=exp=1652433657~hmac=89660f9fa43537e277512ecd3437db85",
  },
  {
    id: 27,
    nom: "Christian",
    partage: ["Cueillette", " - Artisanat"],
    service: ["Fabriquer son eau de vie de prune"],
    disponibilité: ["Weekend"],
    lieu: "Chemin des petits galets",
    url: "https://cdn-icons-png.flaticon.com/512/3940/3940400.png",
  },
  {
    id: 28,
    nom: "Anouck",
    partage: ["Explorer la nature"],
    service: ["Visite de la ferme"],
    disponibilité: ["Semaine", " - Weekend"],
    lieu: "La bergerie",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940449.png?token=exp=1652430727~hmac=110e0a5714bc7d7dd83c5638efd9996f",
  },
  {
    id: 29,
    nom: "Zlatan",
    partage: ["Energie verte"],
    service: ["Découverte du fonctionnement d'un moulin à vent"],
    disponibilité: ["Weekend"],
    lieu: "Rue de la forêt",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940429.png?token=exp=1652433342~hmac=1d8f71bbd6c39e79f031815fc8ae5e2b",
  },
  {
    id: 30,
    nom: "Paola",
    partage: ["Gérer un jardin"],
    service: ["Faire ses propres boutures"],
    disponibilité: ["Semaine", " - Après-midi"],
    lieu: "Rue des anchois",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940434.png?token=exp=1652433157~hmac=b7e00dc833d88fe57b667c359446e8c7",
  },
  {
    id: 31,
    nom: "Richard",
    partage: ["Artisanat"],
    service: ["Fabriquer sa propre peinture"],
    disponibilité: ["Weekend"],
    lieu: "Rue du rouleau",
    url: "https://cdn-icons.flaticon.com/png/512/3940/premium/3940412.png?token=exp=1652430910~hmac=c6ee3014e4e34772864ddeebb375e3b8",
  },
];

export default data;
