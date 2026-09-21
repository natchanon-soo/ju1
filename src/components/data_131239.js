import project_131239_SU_01_01 from "./projects/131239/project_131239_SU_01_องค์การนักศึกษา_01";
import project_131239_SU_01_02 from "./projects/131239/project_131239_SU_01_องค์การนักศึกษา_02";
import project_131239_SU_01_03 from "./projects/131239/project_131239_SU_01_องค์การนักศึกษา_03";
import project_131239_SU_01_04 from "./projects/131239/project_131239_SU_01_องค์การนักศึกษา_04";

import project_131239_SR_01_01 from "./projects/131239/project_131239_SR_01_ชมรมเทเบิลเทนนิส_01";
import project_131239_SR_01_02 from "./projects/131239/project_131239_SR_01_ชมรมเทเบิลเทนนิส_02";
import project_131239_SR_01_03 from "./projects/131239/project_131239_SR_01_ชมรมเทเบิลเทนนิส_03";

import project_131239_SR_02_01 from "./projects/131239/project_131239_SR_02_ชมรมเซปักตะกร้อ_01";
import project_131239_SR_03_01 from "./projects/131239/project_131239_SR_03_ชมรมบริดจ์_01";
import project_131239_SR_04_01 from "./projects/131239/project_131239_SR_04_ชมรมเปตอง_01";
import project_131239_SR_04_02 from "./projects/131239/project_131239_SR_04_ชมรมเปตอง_02";
import project_131239_SR_05_01 from "./projects/131239/project_131239_SR_05_ชมรมฟุตบอล_01";
import project_131239_SR_05_02 from "./projects/131239/project_131239_SR_05_ชมรมฟุตบอล_02";
import project_131239_SR_06_01 from "./projects/131239/project_131239_SR_06_ชมรมวอลเลย์บอล_01";
import project_131239_SR_06_02 from "./projects/131239/project_131239_SR_06_ชมรมวอลเลย์บอล_02";
import project_131239_SR_07_01 from "./projects/131239/project_131239_SR_07_ชมรมกรีฑา_01";
import project_131239_SR_08_01 from "./projects/131239/project_131239_SR_08_ชมรมครอสเวิร์ด_01";
import project_131239_SR_08_02 from "./projects/131239/project_131239_SR_08_ชมรมครอสเวิร์ด_02";

import project_131239_SR_09_01 from "./projects/131239/project_131239_SR_09_ชมรมยิงธนู_01";
import project_131239_SR_09_02 from "./projects/131239/project_131239_SR_09_ชมรมยิงธนู_02";

import project_131239_SR_10_01 from "./projects/131239/project_131239_SR_10_ชมรมฟันดาบ_01";
import project_131239_SR_11_01 from "./projects/131239/project_131239_SR_11_ชมรมฟุตซอล_01";
import project_131239_SR_11_02 from "./projects/131239/project_131239_SR_11_ชมรมฟุตซอล_02";

import project_131239_SR_12_01 from "./projects/131239/project_131239_SR_12_ชมรมบาสเกตบอล_01";
import project_131239_SR_13_01 from "./projects/131239/project_131239_SR_13_ชมรมเทนนิส_01";
import project_131239_SR_13_02 from "./projects/131239/project_131239_SR_13_ชมรมเทนนิส_02";

import project_131239_SR_14_01 from "./projects/131239/project_131239_SR_14_ชมรมจานร่อน_01";
import project_131239_SR_14_02 from "./projects/131239/project_131239_SR_14_ชมรมจานร่อน_02";
import project_131239_SR_14_03 from "./projects/131239/project_131239_SR_14_ชมรมจานร่อน_03";
import project_131239_SR_14_04 from "./projects/131239/project_131239_SR_14_ชมรมจานร่อน_04";

import project_131239_SR_15_01 from "./projects/131239/project_131239_SR_15_ชมรมยิงปืน_01";
import project_131239_SR_15_02 from "./projects/131239/project_131239_SR_15_ชมรมยิงปืน_02";

import project_131239_SR_16_01 from "./projects/131239/project_131239_SR_16_ชมรมยูโด_01";
import project_131239_SR_16_02 from "./projects/131239/project_131239_SR_16_ชมรมยูโด_02";

import project_131239_SR_17_01 from "./projects/131239/project_131239_SR_17_ชมรมคาราเต้-โด_01";


const organizations = [
    {
        id: "SU",
        organization: "องค์การนักศึกษา",
        level: "องค์กร",
        img: "/images/kkusu.png",

        projects: [
            project_131239_SU_01_01,
            project_131239_SU_01_02,
            project_131239_SU_01_03,
            project_131239_SU_01_04
        ]
    },
    {
        id: "SR_01",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมเทเบิลเทนนิส",
        img: "/images/ชมรมเทเบิลเทนนิส 512.png",
        projects: [
            project_131239_SR_01_01,
            project_131239_SR_01_02,
            project_131239_SR_01_03,
        ]
    },
    {
        id: "SR_02",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมเซปักตะกร้อ",
        img: "/images/ชมรมเซปักตะกร้อ 512.png",
        projects: [
            project_131239_SR_02_01
        ]
    },
    {
        id: "SR_03",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมบริดจ์",
        img: "/images/ชมรมบริดจ์ 512.png",
        projects: [
            project_131239_SR_03_01
        ]
    },
    {
        id: "SR_04",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมเปตอง",
        img: "/images/ชมรมเปตอง 512.png",
        projects: [
            project_131239_SR_04_01,
            project_131239_SR_04_02
        ]
    },
    {
        id: "SR_05",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมฟุตบอล",
        img: "/images/ชมรมฟุตบอล 512.png",
        projects: [
            project_131239_SR_05_01,
            project_131239_SR_05_02
        ]
    },
    {
        id: "SR_06",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมวอลเลย์บอล",
        img: "/images/ชมรมวอลเลย์บอล 512.png",
        projects: [
            project_131239_SR_06_01,
            project_131239_SR_06_02
        ]
    },
    {
        id: "SR_07",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมกรีฑา",
        img: "/images/ชมรมกรีฑา 512.png",
        projects: [
            project_131239_SR_07_01
        ]
    },
    {
        id: "SR_08",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมครอสเวิร์ด",
        img: "/images/ชมรมครอสเวิร์ด 512.png",
        projects: [
            project_131239_SR_08_01,
            project_131239_SR_08_02
        ]
    },
    {
        id: "SR_09",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมยิงธนู",
        img: "/images/ชมรมยิงธนู 512.png",
        projects: [
            project_131239_SR_09_01,
            project_131239_SR_09_02
        ]
    },
    {
        id: "SR_10",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมฟันดาบ",
        img: "/images/ชมรมฟันดาบ 512.png",
        projects: [
            project_131239_SR_10_01
        ]
    },
    {
        id: "SR_11",
        organization: "ชมรมฟุตซอล",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        img: "/images/ชมรมฟุตซอล 512.png",
        projects: [
            project_131239_SR_11_01,
            project_131239_SR_11_02
        ]
    },
    {
        id: "SR_12",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมบาสเกตบอล",
        img: "/images/ชมรมบาสเกตบอล 512.png",
        projects: [
            project_131239_SR_12_01
        ]
    },
    {
        id: "SR_13",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมเทนนิส",
        img: "/images/ชมรมเทนนิส 711.png",
        projects: [
            project_131239_SR_13_01,
            project_131239_SR_13_02
        ]
    },
    {
        id: "SR_14",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมจานร่อน",
        img: "/images/ชมรมจานร่อน 512.png",
        projects: [
            project_131239_SR_14_01,
            project_131239_SR_14_02,
            project_131239_SR_14_03,
            project_131239_SR_14_04
        ]
    },
    {
        id: "SR_15",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมยิงปืน",
        img: "/images/ชมรมยิงปืน 512.png",
        projects: [
            project_131239_SR_15_01,
            project_131239_SR_15_02
        ]
    },
    {
        id: "SR_16",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมยูโด",
        img: "/images/ชมรมยูโด 512.png",
        projects: [
            project_131239_SR_16_01,
            project_131239_SR_16_02
        ]
    },
    {
        id: "SR_17",
        level: "ชมรมด้านกีฬาและนันทนาการ",
        organization: "ชมรมคาราเต้-โด / ชมรมเทควันโด",
        img: "/images/ชมรมเทควันโด 512.png",
        projects: [
            project_131239_SR_17_01
        ]
    }
];


// =========================
// Calculate Budget
// =========================

organizations.forEach(org => {

    org.budget = org.projects.reduce(
        (sum, project) =>
            sum + (project.budget?.allocated?.amount || 0),
        0
    );

});


// =========================
// Total Budget
// =========================

export const totalBudget = organizations.reduce(
    (sum, org) =>
        sum + org.budget,
    0
);


// =========================
// Organization Data
// =========================

export const tattoos = organizations.map(org => {

    const percent =
        totalBudget > 0
            ? (org.budget / totalBudget) * 100
            : 0;

return {

    ...org,

    budgetText:
        org.budget.toLocaleString("th-TH") +
        " บาท",

    wp:
        percent,

    percent:
        percent.toFixed(2),

    projects:
        org.projects.map(project => {

            const projectBudget =
                project.budget?.allocated?.amount || 0;

            const projectPercent =
                totalBudget > 0
                    ? (projectBudget / totalBudget) * 100
                    : 0;

            return {

                ...project,

                organization:
                    org.organization,

                img:
                    org.img,

                budgetText:
                    projectBudget.toLocaleString("th-TH") +
                    " บาท",

                wp:
                    projectPercent,

                percent:
                    projectPercent.toFixed(2)

            };

        })

};

});   // ← ต้องมีบรรทัดนี้

export const totalBudgetText =
    totalBudget.toLocaleString("th-TH") +
    " บาท";


export default organizations;