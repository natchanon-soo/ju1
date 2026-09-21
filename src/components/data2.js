const organizations = [
  {
    organization: "องค์การนักศึกษา",
    img: "/images/kkusu.png",
    budget: 478070+652630+142610+396600,
  },
  {
    organization: "ชมรมเทเบิลเทนนิส",
    img: "/images/ชมรมเทเบิลเทนนิส 512.png",
    budget: 4800+5540+3840,
  },
  {
    organization: "ชมรมเซปักตะกร้อ",
    img: "/images/ชมรมเซปักตะกร้อ 512.png",
    budget: 15960,
  },
  {
    organization: "ชมรมบริดจ์",
    img: "/images/ชมรมบริดจ์ 512.png",
    budget: 4300,
  },
  {
    organization: "ชมรมเปตอง",
    img: "/images/ชมรมเปตอง 512.png",
    budget: 11100+28000,
  },
  {
    organization: "ชมรมฟุตบอล",
    img: "/images/ชมรมฟุตบอล 512.png",
    budget: 26610+18380,
  },
  {
    organization: "ชมรมวอลเลย์บอล",
    img: "/images/ชมรมวอลเลย์บอล 512.png",
    budget: 13350+10100,
  },
    {
    organization: "ชมรมกรีฑา",
    img: "/images/ชมรมกรีฑา 512.png",
    budget: 3160,
  },
  {
    organization: "ชมรมครอสเวิร์ด",
    img: "/images/ชมรมครอสเวิร์ด 512.png",
    budget: 0+3600,
  },
    {
    organization: "ชมรมยิงธนู",
    img: "/images/ชมรมยิงธนู 512.png",
    budget: 14250+5481,
  },
  {
    organization: "ชมรมฟันดาบ",
    img: "/images/ชมรมฟันดาบ 512.png",
    budget: 6000,
  },
  {
    organization: "ชมรมฟุตซอล",
    img: "/images/ชมรมฟุตซอล 512.png",
    budget: 10430+18100,
  },
  {
    organization: "ชมรมบาสเกตบอล",
    img: "/images/ชมรมบาสเกตบอล 512.png",
    budget: 22810,
  },
  {
    organization: "ชมรมเทนนิส",
    img: "/images/ชมรมเทนนิส 711.png",
    budget: 4105+9900,
  },
  {
    organization: "ชมรมจานร่อน",
    img: "/images/ชมรมจานร่อน 512.png",
    budget: 15758+12100,
  },
  {
    organization: "ชมรมยิงปืน",
    img: "/images/ชมรมยิงปืน 512.png",
    budget: 22950+13300,
  },
  {
    organization: "ชมรมยูโด",
    img: "/images/ชมรมยูโด 512.png",
    budget: 0+10480,
  },
  {
    organization: "ชมรมคาราเต้-โด / ชมรมเทควันโด",
    img: "/images/ชมรมเทควันโด 512.png",
    budget: 0,
  }
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


