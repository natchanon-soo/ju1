const organizations = [
  {
    organization: "องค์การนักศึกษา",
    img: "/images/kkusu.png",
    budget: 50000+277990+54670+52400+22785+615955+141600+235754+293145,
  },
  {
    organization: "สภานักศึกษา",
    img: "/images/kkusc.png",
    budget: 197430+31540+25050+42268+69416+8364+30525,
  },
  {
    organization: "ชมรมผู้นำธรรมาภิบาล",
    img: "/images/ชมรมผู้นำธรรมาภิบาล 512.png",
    budget: 17960,
  },
  {
    organization: "ชมรมประสานงานนักศึกษาเพื่อน้องผู้ด้อยโอกาสทางการศึกษา",
    img: "/images/ชมรมประสานงานนักศึกษาเพื่อน้องผู้ด้อยโอกาสทางการศึกษา 512.png",
    budget: 43000,
  },
  {
    organization: "ชมรมถ่ายภาพ",
    img: "/images/ชมรมถ่ายภาพ 512.png",
    budget: 23090,
  },
  {
    organization: "ชมรมนักศึกษาวิชาทหาร",
    img: "/images/ชมรมนักศึกษาวิชาทหาร 512.png",
    budget: 8807,
  },
  {
    organization: "ชมรมสตาร์ทอัพ",
    img: "/images/ชมรมสตาร์ทอัพ.jpg",
    budget: 3000,
  },
    {
    organization: "ชมรมนักร้องประสานเสียง",
    img: "/images/ชมรมนักร้องประสานเสียง 512.png",
    budget: 17025,
  },
  {
    organization: "ชมรมสืบสานวัฒนธรรมไทย-จีน",
    img: "/images/ชมรมสืบสานวัฒนธรรมไทย-จีน 512.png",
    budget: 14500+0,
  },
    {
    organization: "ชมรมนักศึกษาเพื่อการพัฒนา",
    img: "/images/ชมรมนักศึกษาเพื่อการพัฒนา 512.png",
    budget: 43585,
  },
  {
    organization: "ชมรมปันรัก",
    img: "/images/ชมรมปันรัก 512.png",
    budget: 2050+1275+5750,
  },
  {
    organization: "ชมรมอีสาน",
    img: "/images/ชมรมอีสาน 512.png",
    budget: 32000,
  },
  {
    organization: "ชมรมอาสาพัฒนา",
    img: "/images/ชมรมอาสาพัฒนา 512.png",
    budget: 6000,
  },
  {
    organization: "ชมรมอนุรักษ์สภาพแวดล้อมและทรัพยากร",
    img: "/images/ชมรมอนุรักษ์สภาพแวดล้อมและทรัพยากร 512.png",
    budget: 28000,
  },
  {
    organization: "ชมรมสมาธิและศิลธรรม",
    img: "/images/ชมรมสมาธิและศีลธรรม 512.png",
    budget: 19000+0+16600,
  },
  {
    organization: "ชมรมมุสลิม",
    img: "/images/ชมรมมุสลิม 512.png",
    budget: 8935,
  },
  {
    organization: "ชมรมพุทธศาสน์และประเพณี",
    img: "/images/ชมรมพุทธศาสน์และประเพณี 512.png",
    budget: 0+10000,
  },
  {
    organization: "ชมรมนักศึกษาคริสเตียน",
    img: "/images/ชมรมนักศึกษาคริสเตียน 512.png",
    budget: 6800+7800,
  },
];

const total = organizations.reduce(
  (sum, item) => sum + item.budget,
  0
);

export const xx = `${total.toLocaleString()} บาท`;
export const axx = xx;
export const bar = total;

export const tattoos = organizations.map((item) => {
  const percent = (item.budget / total) * 100;

  return {
    ...item,
    level: "123",
    wp: percent,
    budget: `${item.budget.toLocaleString()} บาท`,
    percent: `${percent.toFixed(2)} %`,
  };
});


