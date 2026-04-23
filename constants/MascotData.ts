export interface Mascot {
  id: string;
  name: string;
  emoji: string;
  description: string;
  trait: string;
  color: string;
  imageUrl: string;
  videoUrl?: string;
}

// Cloudinary helper: injects quality/format params right after /upload/
function cl(url: string): string {
  return url.replace(
    '/upload/',
    '/upload/q_100,f_png,fl_preserve_transparency/'
  )
}

export const MASCOTS: Mascot[] = [
  {
    id: "BOY",
    name: "Alp",
    emoji: "👦",
    description: "Cesur ve meraklı, her maceraya hazır olan Alp, çocukların en yakın dostu!",
    trait: "Cesur Kaşif",
    color: "bg-blue-100 text-blue-600",
    imageUrl: cl("https://res.cloudinary.com/diiovewsn/image/upload/v1776817454/mascots/boy/b3k2b0yiasybno554woe.png"),
  },
  {
    id: "GIRL",
    name: "Zeynep",
    emoji: "👧",
    description: "Zeki ve hayalperest Zeynep, yıldızlara ulaşmayı ve yeni hikayeler keşfetmeyi çok sever.",
    trait: "Yıldız Gezgini",
    color: "bg-pink-100 text-pink-600",
    imageUrl: cl("https://res.cloudinary.com/diiovewsn/image/upload/v1776817464/mascots/girl/qmxbr5drjeghkmptbmx0.png"),
  },
  {
    id: "PRINCESS",
    name: "Prenses",
    emoji: "👸",
    description: "Büyülü sarayının sevgi dolu lideri. Kalbiyle yönetir, her zorluğu cesaretle aşar.",
    trait: "Büyülü Prenses",
    color: "bg-rose-100 text-rose-600",
    imageUrl: cl("https://res.cloudinary.com/diiovewsn/image/upload/v1776817223/mascots/princess/glrzyknwst6rbxqxq9n3.png"),
  },
  {
    id: "KNIGHT",
    name: "Şövalye",
    emoji: "⚔️",
    description: "Gümüş zırhı ve altın kalbiyle, iyiliğin temsilcisi olan cesur bir savaşçı.",
    trait: "Kalenin Muhafızı",
    color: "bg-gray-100 text-gray-700",
    imageUrl: cl("https://res.cloudinary.com/diiovewsn/image/upload/v1776816927/mascots/knight/fgzjqabsk4daynwza9ik.png"),
  },
  {
    id: "SCIENTIST",
    name: "Bilim İnsanı",
    emoji: "🧪",
    description: "Deneyler yapmayı ve yeni icatlar keşfetmeyi çok seven meraklı bir deha.",
    trait: "Geleceğin Mucidi",
    color: "bg-purple-100 text-purple-600",
    imageUrl: cl("https://res.cloudinary.com/diiovewsn/image/upload/v1776815251/mascots/scientist/bn3pcbu7tklyjagqqlp3.png"),
  },
  {
    id: "SCIENTIST_GIRL",
    name: "Bilim İnsanı",
    emoji: "🔬",
    description: "Mikroskobundan hiç ayırmadığı gözleriyle dünyayı keşfeden genç bir bilim insanı.",
    trait: "Laboratuvar Dahisi",
    color: "bg-violet-100 text-violet-600",
    imageUrl: cl("https://res.cloudinary.com/diiovewsn/image/upload/v1776815381/mascots/scientist_girl/fzjwhcuqfk05fle5w4v5.png"),
  },
  {
    id: "ASTRONAUT",
    name: "Astronot",
    emoji: "👨‍🚀",
    description: "Evrenin en uzak köşelerinden gelen bu kahraman, bilinmeyenin peşindedir.",
    trait: "Galaksi Koruyucusu",
    color: "bg-slate-100 text-slate-700",
    imageUrl: cl("https://res.cloudinary.com/diiovewsn/image/upload/v1776815948/mascots/astronaut/say20li73pgwjqo8htvz.png"),
  },
  {
    id: "ASTRONAUT_GIRL",
    name: "Astronot",
    emoji: "👩‍🚀",
    description: "Yıldızların arasında süzülen bu cesur kız, evreni fethetmeye kararlı.",
    trait: "Uzay Kâşifi",
    color: "bg-indigo-100 text-indigo-600",
    imageUrl: cl("https://res.cloudinary.com/diiovewsn/image/upload/v1776816149/mascots/astronaut_girl/wpum3my2mjrc9m4cgm5b.png"),
  },
];
