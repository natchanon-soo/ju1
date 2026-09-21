const departments = [

    
    /* =================================================
       01 : ประธาน
    ================================================= */

    {
        id: "president",
        number: "01-03",
        name: "ประธาน",
        english: "PRESIDENT",

        groups: [

            {
                id: "main",
                name: "คณะกรรมการบริหาร",
                english: "EXECUTIVE",

                members: [
                    {
                        memberId: "SN-001",
                        displayNickname: "Name",
                        order: 1,
                        name: "นายสิทธิพร กุมภาษี",
                        position: "ประธานสภานักศึกษา",
                        faculty: {
                            id: "ED",
                            name: "คณะศึกษาศาสตร์",
                            english: "EDUCATION"
                        },
                        studentImage: "/images/members/main-01-student.png",
                        suitImage: "/images/members/main-01-suit.png",

                        suitScale: 1.35,
                        suitX: "0px",
                        suitY: "-14%"
                    },
                    {
                        memberId: "SN-002",
                        displayNickname: "Nestle",
                        order: 2,
                        name: "นางสาวนรียา คณิสาร",
                        position: "รองประธาน คนที่ 1",
                        faculty: {
                            id: "TE",
                            name: "คณะเทคโนโลยี",
                            english: "TECHNOLOGY"
                        },
                        studentImage: "/images/members/main-02-student.png",
                        suitImage: "/images/members/main-02-suit.png",

                        suitScale: 1.20,
                        suitX: "0px",
                        suitY: "-12%"
                    },
                    {
                        memberId: "SN-003",
                        displayNickname: "Zigzag",
                        order: 3,
                        name: "นายธนารักษ์ เตียงแก้ว",
                        position: "รองประธาน คนที่ 2",
                        faculty: {
                            id: "HS",
                            name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
                            english: "HUMANITIES AND SOCIAL SCIENCES"
                        },
                        studentImage: "/images/members/main-03-student.png",
                        suitImage: "/images/members/main-03-suit.png",

                        suitScale: 1.12,
                        suitX: "10px",
                        suitY: "-18%"
                    },
                ]
            }

        ]
    },


    /* =================================================
       04 : ฝ่ายเลขานุการ
    ================================================= */

    {
        id: "secretary",

        number: "04",
        name: "ฝ่ายเลขานุการ",
        english: "SECRETARY",

        groups: [
            {
                id: "main",
                name: "คณะกรรมการบริหาร",
                english: "EXECUTIVE",

                members: [
                    {
                        memberId: "SN-004",
                        displayNickname: "Namtan",
                        order: 1,
                        name: "นางสาวปิยธิดา ประเสริฐ",
                        position: "เลขานุการสภานักศึกษา",
                        faculty: {
                            id: "HS",
                            name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
                            english: "HUMANITIES AND SOCIAL SCIENCES"
                        },
                        studentImage: "/images/members/main-04-student.png",
                        suitImage: "/images/members/main-04-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-007",
                        displayNickname: "Mumi",
                        order: 2,
                        name: "นายภูชิต ภูบาลชื่น",
                        position: "รองเลขานุการสภานักศึกษา",
                        faculty: {
                            id: "FA",
                            name: "คณะศิลปกรรมศาสตร์",
                            english: "FINE AND APPLIED ARTS"
                        },
                        studentImage: "/images/members/main-21-student.png",
                        suitImage: "/images/members/main-21-suit.png",

                        suitScale: 1.15,
                        suitX: "0px",
                        suitY: "-8%"
                    }
                ]
            },
            {
                id: "subcommittee",
                name: "อนุกรรมการ",
                english: "SUBCOMMITTEE",

                members: [
                    {
                        memberId: "SC-008",
                        displayNickname: "03",
                        order: 3,
                        name: "นายตัวอย่าง คนที่แปด",
                        position: "อนุกรรมการฝ่ายเลขานุการ",
                        faculty: {
                            id: "SC",
                            name: "คณะวิทยาศาสตร์",
                            english: "SCIENCE"
                        },
                        studentImage: "/images/members/secretary-21-student.png",
                        suitImage: "/images/members/secretary-21-suit.png",

                        suitScale: 1.25,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            }
        ]
    },


    /* =================================================
       05 : ฝ่ายประชาสัมพันธ์
    ================================================= */

    {
        id: "public_relations",

        number: "05",
        name: "ฝ่ายประชาสัมพันธ์",
        english: "PUBLIC RELATIONS",

        groups: [
            {
                id: "main",
                name: "คณะกรรมการบริหาร",
                english: "EXECUTIVE",

                members: [
                    {
                        memberId: "SN-005",
                        displayNickname: "Oam-Aem",
                        order: 1,
                        name: "นางสาวพนิดา อุปถัมภ์",
                        position: "กรรมการฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "VM",
                            name: "คณะสัตวแพทยศาสตร์",
                            english: "VETERINARY MEDICINE"
                        },
                        studentImage: "/images/members/main-05-student.png",
                        suitImage: "/images/members/main-05-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-020",
                        displayNickname: "Music",
                        order: 2,
                        name: "นายณัฐชนนท์ ศูนย์จันทร์",
                        position: "รองฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "EN",
                            name: "คณะวิศวกรรมศาสตร์",
                            english: "ENGINEERING"
                        },
                        studentImage: "/images/members/main-20-student.png",
                        suitImage: "/images/members/main-20-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            },
            {
                id: "subcommittee",
                name: "อนุกรรมการ",
                english: "SUBCOMMITTEE",

                members: [
                    {
                        memberId: "SN-ANU-PR-R1-01",
                        displayNickname: "ออม",
                        order: 1,
                        name: "นางสาววิชชุอร  ไชยารักษ์",
                        position: "อนุกรรมการฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "BS",
                            name: "คณะบริหารธุรกิจและการบัญชี",
                            english: "BUSINESS ADMINISTRATION AND ACCOUNTANCY"
                        },
                        studentImage: "/images/members/anu-pr-01-student.png",
                        suitImage: "/images/members/anu-pr-01-student.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-ANU-PR-R1-02",
                        displayNickname: "ฟ้าใส",
                        order: 1,
                        name: "รามนรี วงศ์สีดา",
                        position: "อนุกรรมการฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "BS",
                            name: "คณะบริหารธุรกิจและการบัญชี",
                            english: "BUSINESS ADMINISTRATION AND ACCOUNTANCY"
                        },
                        studentImage: "/images/members/anu-pr-02-student.png",
                        suitImage: "/images/members/anu-pr-02-student.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-ANU-PR-R1-03",
                        displayNickname: "ใบเตย",
                        order: 1,
                        name: "ศิรินภา โรจนกร",
                        position: "อนุกรรมการฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "BS",
                            name: "คณะบริหารธุรกิจและการบัญชี",
                            english: "BUSINESS ADMINISTRATION AND ACCOUNTANCY"
                        },
                        studentImage: "/images/members/anu-pr-03-student.png",
                        suitImage: "/images/members/anu-pr-03-student.png",

                        suitScale: 1.2,
                        suitX: "-10px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-ANU-PR-R1-04",
                        displayNickname: "เหมย",
                        order: 1,
                        name: "วราภรณ์ บุญเทียม",
                        position: "อนุกรรมการฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "BS",
                            name: "คณะบริหารธุรกิจและการบัญชี",
                            english: "BUSINESS ADMINISTRATION AND ACCOUNTANCY"
                        },
                        studentImage: "/images/members/anu-pr-04-student.png",
                        suitImage: "/images/members/anu-pr-04-student.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-ANU-PR-R1-05",
                        displayNickname: "น้ำแป้ง",
                        order: 1,
                        name: "วราภรณ์ บุญเทียม",
                        position: "อนุกรรมการฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "AM",
                            name: "คณะเทคนิคการแพทย์",
                            english: "ASSOCIATED MEDICAL SCIENCES"
                        },
                        studentImage: "/images/members/anu-pr-05-student.png",
                        suitImage: "/images/members/anu-pr-05-student.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-ANU-PR-R1-06",
                        displayNickname: "อุ่ยอุ้ย",
                        order: 1,
                        name: "นางสาวปรียฉัตร นวะศรี",
                        position: "อนุกรรมการฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "HS",
                            name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
                            english: "HUMANITIES AND SOCIAL SCIENCES"
                        },
                        studentImage: "/images/members/anu-pr-06-student.png",
                        suitImage: "/images/members/anu-pr-06-student.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-ANU-PR-R1-07",
                        displayNickname: "เฟรนด์",
                        order: 1,
                        name: "นายญาณวุฒิ ไสว",
                        position: "อนุกรรมการฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "HS",
                            name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
                            english: "HUMANITIES AND SOCIAL SCIENCES"
                        },
                        studentImage: "/images/members/anu-pr-07-student.png",
                        suitImage: "/images/members/anu-pr-07-student.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-ANU-PR-R1-08",
                        displayNickname: "อ๊ะอาย ",
                        order: 1,
                        name: "รัตนาวดี ประเสริฐธรรม",
                        position: "อนุกรรมการฝ่ายประชาสัมพันธ์",
                        faculty: {
                            id: "HS",
                            name: "คณะมนุษยศาสตร์และสังคมศาสตร์",
                            english: "HUMANITIES AND SOCIAL SCIENCES"
                        },
                        studentImage: "/images/members/anu-pr-08-student.png",
                        suitImage: "/images/members/anu-pr-08-suit.png",

                        suitScale: 1.25,
                        suitX: "-10px",
                        suitY: "-10%"
                    }
                ]
            }
        ]
    },


    /* =================================================
       06 : ฝ่ายประชาสัมพันธ์
    ================================================= */

    {
        id: "budget_audit_committee",

        number: "06",
        name: "กรรมการฝ่ายพิจารณางบประมาณ",
        english: "BUDGET AUDIT COMMITTEE",

        groups: [
            {
                id: "main",
                name: "คณะกรรมการบริหาร",
                english: "EXECUTIVE",

                members: [
                    {
                        memberId: "SN-006",
                        displayNickname: "O-Aey",
                        order: 1,
                        name: "นางสาวนิภาพรรณ วรรณวัตร",
                        position: "กรรมการฝ่ายพิจารณางบประมาณ",
                        faculty: {
                            id: "NU",
                            name: "คณะพยาบาลศาสตร์",
                            english: "NURSING"
                        },
                        studentImage: "/images/members/main-06-student.png",
                        suitImage: "/images/members/main-06-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },

                    {
                        memberId: "SN-024",
                        displayNickname: "Boat",
                        order: 2,
                        name: "นายกฤตภาส ผางเวศ",
                        position: "รองฝ่ายพิจารณางบประมาณ",
                        faculty: {
                            id: "COPA",
                            name: "วิทยาลัยกิจการและนโยบายสาธารณะ",
                            english: "COLLEGE OF PUBLIC AFFAIRS AND POLICY"
                        },
                        studentImage: "/images/members/main-24-student.png",
                        suitImage: "/images/members/main-24-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-022",
                        displayNickname: "Save",
                        order: 3,
                        name: "นายปรเมธ โกฎิทอง",
                        position: "ผู้ช่ายฝ่ายพิจารณางบประมาณ",
                        faculty: {
                            id: "CP",
                            name: "วิทยาลัยการคอมพิวเตอร์",
                            english: "COLLEGE OF COMPUTING"
                        },
                        studentImage: "/images/members/main-22-student.png",
                        suitImage: "/images/members/main-22-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },
                    {
                        memberId: "SN-030",
                        displayNickname: "Khem",
                        order: 4,
                        name: "นางสาวเขมาภรณ์ กาฬภักดี",
                        position: "ผู้ช่ายฝ่ายพิจารณางบประมาณ",
                        faculty: {
                            id: "PH",
                            name: "คณะสาธารณสุขศาสตร์",
                            english: "PUBLIC HEALTH"
                        },
                        studentImage: "/images/members/main-30-student.png",
                        suitImage: "/images/members/main-30-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            },
            {
                id: "subcommittee",
                name: "อนุกรรมการ",
                english: "SUBCOMMITTEE",

                members: [
                    {
                        memberId: "SC-008",
                        displayNickname: "03",
                        order: 3,
                        name: "นายตัวอย่าง คนที่แปด",
                        position: "อนุกรรมการฝ่ายเลขานุการ",
                        faculty: {
                            id: "SC",
                            name: "คณะวิทยาศาสตร์",
                            english: "SCIENCE"
                        },
                        studentImage: "/images/members/secretary-03-student.png",
                        suitImage: "/images/members/secretary-03-suit.png",

                        suitScale: 1.25,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            }
        ]
    },

    
    /* =================================================
       07 : ฝ่ายประชาสัมพันธ์
    ================================================= */

    {
        id: "student_activities_monitoring_committee",

        number: "07",
        name: "กรรมการฝ่ายตรวจสอบองค์กรกิจกรรมนักศึกษา",
        english: "STUDENT ACTIVITIES MONITORING COMMITTEE",

        groups: [
            {
                id: "main",
                name: "คณะกรรมการบริหาร",
                english: "EXECUTIVE",

                members: [
                    {
                        memberId: "SN-007",
                        displayNickname: "Title",
                        order: 1,
                        name: "นายชนาธิป พิทักษ์สงคราม",
                        position: "กรรมการฝ่ายตรวจสอบองค์กรกิจกรรมนักศึกษา",
                        faculty: {
                            id: "LW",
                            name: "คณะนิติศาสตร์",
                            english: "LAW"
                        },
                        studentImage: "/images/members/main-07-student.png",
                        suitImage: "/images/members/main-07-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },

                    {
                        memberId: "SN-011",
                        displayNickname: "Kim",
                        order: 2,
                        name: "นายสิทธิชัย จันทะวงษ์",
                        position: "รองฝ่ายตรวจสอบองค์กรกิจกรรมนักศึกษา",
                        faculty: {
                            id: "AG",
                            name: "คณะเกษตรศาสตร์",
                            english: "AGRICULTURE"
                        },
                        studentImage: "/images/members/main-11-student.png",
                        suitImage: "/images/members/main-11-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            },
            {
                id: "subcommittee",
                name: "อนุกรรมการ",
                english: "SUBCOMMITTEE",

                members: [
                    {
                        memberId: "SN-008",
                        displayNickname: "03",
                        order: 3,
                        name: "นายตัวอย่าง คนที่แปด",
                        position: "อนุกรรมการฝ่ายเลขานุการ",
                        faculty: {
                            id: "SC",
                            name: "คณะวิทยาศาสตร์",
                            english: "SCIENCE"
                        },
                        studentImage: "/images/members/secretary-03-student.png",
                        suitImage: "/images/members/secretary-03-suit.png",

                        suitScale: 1.25,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            }
        ]
    },

    
    /* =================================================
       08 : ฝ่ายประชาสัมพันธ์
    ================================================= */

    {
        id: "student_rights_and_welfare_committee",

        number: "08",
        name: "กรรมการฝ่ายสิทธิและสวัสดิการนักศึกษา",
        english: "STUDENT RIGHTS AND WELFARE COMMITTEE",

        groups: [
            {
                id: "main",
                name: "คณะกรรมการบริหาร",
                english: "EXECUTIVE",

                members: [
                    {
                        memberId: "SN-008",
                        displayNickname: "Taliw",
                        order: 1,
                        name: "นายวรายุส สีคาม",
                        position: "กรรมการฝ่ายสิทธิและสวัสดิการนักศึกษา",
                        faculty: {
                            id: "ED",
                            name: "คณะศึกษาศาสตร์",
                            english: "EDUCATION"
                        },
                        studentImage: "/images/members/main-08-student.png",
                        suitImage: "/images/members/main-08-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },

                    {
                        memberId: "SN-019",
                        displayNickname: "Nutchy",
                        order: 2,
                        name: "นายนิชนันท์ พงษ์เพชร",
                        position: "รองฝ่ายสิทธิและสวัสดิการนักศึกษา",
                        faculty: {
                            id: "EN",
                            name: "คณะวิศวกรรมศาสตร์",
                            english: "ENGINEERING"
                        },
                        studentImage: "/images/members/main-19-student.png",
                        suitImage: "/images/members/main-19-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            },
            {
                id: "subcommittee",
                name: "อนุกรรมการ",
                english: "SUBCOMMITTEE",

                members: [
                    {
                        memberId: "SN-008",
                        displayNickname: "03",
                        order: 3,
                        name: "นายตัวอย่าง คนที่แปด",
                        position: "อนุกรรมการฝ่ายเลขานุการ",
                        faculty: {
                            id: "SC",
                            name: "คณะวิทยาศาสตร์",
                            english: "SCIENCE"
                        },
                        studentImage: "/images/members/secretary-03-student.png",
                        suitImage: "/images/members/secretary-03-suit.png",

                        suitScale: 1.25,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            }
        ]
    },

    
    /* =================================================
       09 : ฝ่ายประชาสัมพันธ์
    ================================================= */

    {
        id: "student_health_promotion_committee",

        number: "09",
        name: "กรรมการฝ่ายส่งเสริมสุขภาพนักศึกษา",
        english: "STUDENT HEALTH PROMOTION COMMITTEE",

        groups: [
            {
                id: "main",
                name: "คณะกรรมการบริหาร",
                english: "EXECUTIVE",

                members: [
                    {
                        memberId: "SN-009",
                        displayNickname: "Nami",
                        order: 1,
                        name: "นายนันทวัฒน์ พรมนอก",
                        position: "กรรมการฝ่ายส่งเสริมสุขภาพนักศึกษา",
                        faculty: {
                            id: "NU",
                            name: "คณะพยาบาลศาสตร์",
                            english: "NURSING"
                        },
                        studentImage: "/images/members/main-09-student.png",
                        suitImage: "/images/members/main-09-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },

                    {
                        memberId: "SN-007",
                        displayNickname: "02",
                        order: 2,
                        name: "นางสาวตัวอย่าง คนที่เจ็ด",
                        position: "รองเลขานุการสภานักศึกษา",
                        faculty: {
                            id: "ED",
                            name: "คณะศึกษาศาสตร์",
                            english: "EDUCATION"
                        },
                        studentImage: "/images/members/main-05-student.png",
                        suitImage: "/images/members/main-05-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            },
            {
                id: "subcommittee",
                name: "อนุกรรมการ",
                english: "SUBCOMMITTEE",

                members: [
                    {
                        memberId: "SC-008",
                        displayNickname: "03",
                        order: 3,
                        name: "นายตัวอย่าง คนที่แปด",
                        position: "อนุกรรมการฝ่ายเลขานุการ",
                        faculty: {
                            id: "SC",
                            name: "คณะวิทยาศาสตร์",
                            english: "SCIENCE"
                        },
                        studentImage: "/images/members/secretary-03-student.png",
                        suitImage: "/images/members/secretary-03-suit.png",

                        suitScale: 1.25,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            }
        ]
    },

    
    /* =================================================
       09 : ฝ่ายประชาสัมพันธ์
    ================================================= */

    {
        id: "committee_for_the_development_of_educational_potential_and_quality",

        number: "10",
        name: "กรรมการฝ่ายพัฒนาศักยภาพและคุณภาพการศึกษา",
        english: "COMMITTEE FOR THE DEVELOPMENT OF EDUCATIONAL POTENTIAL AND QUALITY",

        groups: [
            {
                id: "main",
                name: "คณะกรรมการบริหาร",
                english: "EXECUTIVE",

                members: [
                    {
                        memberId: "SN-010",
                        displayNickname: "Bas",
                        order: 1,
                        name: "นายพลพล ทองคำมา",
                        position: "กรรมการฝ่ายพัฒนาศักยภาพและคุณภาพการศึกษา",
                        faculty: {
                            id: "BS",
                            name: "คณะบริหารธุรกิจและการบัญชี",
                            english: "BUSINESS ADMINISTRATION AND ACCOUNTANCY"
                        },
                        studentImage: "/images/members/main-10-student.png",
                        suitImage: "/images/members/main-10-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },

                    {
                        memberId: "SC-007",
                        displayNickname: "02",
                        order: 2,
                        name: "นางสาวตัวอย่าง คนที่เจ็ด",
                        position: "รองเลขานุการสภานักศึกษา",
                        faculty: {
                            id: "ED",
                            name: "คณะศึกษาศาสตร์",
                            english: "EDUCATION"
                        },
                        studentImage: "/images/members/main-05-student.png",
                        suitImage: "/images/members/main-05-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            },
            {
                id: "subcommittee",
                name: "อนุกรรมการ",
                english: "SUBCOMMITTEE",

                members: [
                    {
                        memberId: "SC-008",
                        displayNickname: "03",
                        order: 3,
                        name: "นายตัวอย่าง คนที่แปด",
                        position: "อนุกรรมการฝ่ายเลขานุการ",
                        faculty: {
                            id: "SC",
                            name: "คณะวิทยาศาสตร์",
                            english: "SCIENCE"
                        },
                        studentImage: "/images/members/secretary-03-student.png",
                        suitImage: "/images/members/secretary-03-suit.png",

                        suitScale: 1.25,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            }
        ]
    }




];

export { departments };