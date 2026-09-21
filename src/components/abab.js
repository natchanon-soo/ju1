import "./About.css";


/* =====================================================
   DATA
===================================================== */

const departments = [

    /* =================================================
       04 : ฝ่ายประธาน
       ใช้ members ปกติ เพราะไม่มีการแบ่งกลุ่มย่อย
    ================================================= */

    {
        number: "04",
        name: "ฝ่ายประธาน",
        english: "PRESIDENT",

        members: [
            {
                id: "01",
                name: "นายตัวอย่าง คนที่หนึ่ง",
                position: "ประธานสภานักศึกษา",
                faculty: "คณะวิศวกรรมศาสตร์",

                studentImage:
                    "/images/members/president-01-student.png",

                suitImage:
                    "/images/members/president-01-suit.png",

                suitScale: 1.3,
                suitX: "0px",
                suitY: "-20%"
            },

            {
                id: "02",
                name: "นายตัวอย่าง คนที่สอง",
                position: "รองประธานสภานักศึกษา คนที่ 1",
                faculty: "คณะวิศวกรรมศาสตร์",

                studentImage:
                    "/images/members/president-02-student.png",

                suitImage:
                    "/images/members/president-02-suit.png",

                suitScale: 1.25,
                suitX: "0px",
                suitY: "-20%"
            },

            {
                id: "03",
                name: "นายตัวอย่าง คนที่สาม",
                position: "รองประธานสภานักศึกษา คนที่ 2",
                faculty: "คณะวิศวกรรมศาสตร์",

                studentImage:
                    "/images/members/president-03-student.png",

                suitImage:
                    "/images/members/president-03-suit.png",

                suitScale: 1.25,
                suitX: "0px",
                suitY: "-20%"
            }
        ]
    },


    /* =================================================
       05 : เลขา
       ใช้ groups เพราะแบ่ง
       - ตำแหน่งหลัก
       - อนุกรรมการ
    ================================================= */

    {
        number: "05",
        name: "เลขา",
        english: "SECRETARY",

        groups: [

            /* -------------------------
               ตำแหน่งหลัก
            -------------------------- */

            {
                id: "main",
                name: "ตำแหน่งหลัก",
                english: "EXECUTIVE",

                members: [
                    {
                        id: "01",
                        name: "นายตัวอย่าง คนที่หนึ่ง",
                        position: "เลขานุการ",
                        faculty: "คณะวิศวกรรมศาสตร์",

                        studentImage:
                            "/images/members/secretary-01-student.png",

                        suitImage:
                            "/images/members/secretary-01-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    },

                    {
                        id: "02",
                        name: "นางสาวตัวอย่าง คนที่สอง",
                        position: "รองเลขานุการ",
                        faculty: "คณะศึกษาศาสตร์",

                        studentImage:
                            "/images/members/secretary-02-student.png",

                        suitImage:
                            "/images/members/secretary-02-suit.png",

                        suitScale: 1.15,
                        suitX: "0px",
                        suitY: "-8%"
                    }
                ]
            },


            /* -------------------------
               อนุกรรมการ
            -------------------------- */

            {
                id: "subcommittee",
                name: "อนุกรรมการ",
                english: "SUBCOMMITTEE",

                members: [
                    {
                        id: "03",
                        name: "นายตัวอย่าง คนที่สาม",
                        position: "อนุกรรมการ",
                        faculty: "คณะวิทยาศาสตร์",

                        studentImage:
                            "/images/members/secretary-03-student.png",

                        suitImage:
                            "/images/members/secretary-03-suit.png",

                        suitScale: 1.25,
                        suitX: "0px",
                        suitY: "-10%"
                    },

                    {
                        id: "04",
                        name: "นางสาวตัวอย่าง คนที่สี่",
                        position: "อนุกรรมการ",
                        faculty: "คณะนิติศาสตร์",

                        studentImage:
                            "/images/members/secretary-04-student.png",

                        suitImage:
                            "/images/members/secretary-04-suit.png",

                        suitScale: 1.2,
                        suitX: "0px",
                        suitY: "-10%"
                    }
                ]
            }
        ]
    }

];


/* =====================================================
   MEMBER CARD
===================================================== */

function MemberCard({ member }) {

    return (

        <article className="member-3d-card">


            {/* =========================================
                STUDENT UNIFORM
            ========================================== */}

            <div className="member-wrapper">

                <img
                    src={member.studentImage}
                    alt={member.name}
                    className="member-cover-image"
                />

            </div>


            {/* =========================================
                MEMBER INFORMATION
            ========================================== */}

            <div className="member-title">

                <span className="member-no">
                    {member.id}
                </span>

                <span className="member-position">
                    {member.position}
                </span>

                <strong>
                    {member.name}
                </strong>

                <small>
                    {member.faculty}
                </small>

            </div>


            {/* =========================================
                SUIT IMAGE
                แสดงตอน Hover
            ========================================== */}

            <img
                src={member.suitImage}
                alt=""
                aria-hidden="true"
                className="member-character"

                style={{
                    "--suit-scale":
                        member.suitScale ?? 1,

                    "--suit-x":
                        member.suitX ?? "0px",

                    "--suit-y":
                        member.suitY ?? "0%"
                }}
            />

        </article>

    );

}


/* =====================================================
   NORMAL MEMBER LIST
===================================================== */

function MemberList({ members }) {

    return (

        <div className="council-card-grid">

            {members.map((member) => (

                <MemberCard
                    key={member.id}
                    member={member}
                />

            ))}

        </div>

    );

}


/* =====================================================
   MEMBER GROUPS
===================================================== */

function MemberGroups({ groups }) {

    return (

        <div className="council-groups">

            {groups.map((group) => (

                <div
                    className="council-group"
                    key={group.id}
                >


                    {/* GROUP HEADER */}

                    <header className="council-group-header">

                        <div className="council-group-name">

                            <span>
                                {group.english}
                            </span>

                            <h3>
                                {group.name}
                            </h3>

                        </div>


                        <div
                            className="council-group-line"
                            aria-hidden="true"
                        />


                        <small className="council-group-count">

                            {String(
                                group.members.length
                            ).padStart(2, "0")}

                        </small>

                    </header>


                    {/* MEMBERS */}

                    <MemberList
                        members={group.members}
                    />

                </div>

            ))}

        </div>

    );

}


/* =====================================================
   ABOUT PAGE
===================================================== */

function About() {

    return (

        <main className="council-page">

            <div className="council-container">


                {/* =====================================
                    PAGE HEADER
                ====================================== */}

                <header className="council-page-header">

                    <span className="council-page-label">
                        KKU STUDENT COUNCIL
                    </span>

                    <h1>
                        ทำเนียบสมาชิกสภานักศึกษา
                    </h1>

                    <p>
                        สภานักศึกษา มหาวิทยาลัยขอนแก่น
                    </p>

                </header>


                {/* =====================================
                    DEPARTMENTS
                ====================================== */}

                {departments.map((department) => (

                    <section
                        className="council-department"
                        key={department.number}
                    >


                        {/* =============================
                            DEPARTMENT HEADER
                        ============================== */}

                        <header className="council-department-header">

                            <div className="council-department-number">
                                {department.number}
                            </div>


                            <div className="council-department-name">

                                <span>
                                    {department.english}
                                </span>

                                <h2>
                                    {department.name}
                                </h2>

                            </div>

                        </header>


                        {/* =============================
                            MEMBERS

                            ถ้ามี groups
                            -> แสดงแบบแบ่งกลุ่ม

                            ถ้าไม่มี groups
                            -> แสดง members ปกติ
                        ============================== */}

                        {department.groups ? (

                            <MemberGroups
                                groups={department.groups}
                            />

                        ) : (

                            <MemberList
                                members={department.members ?? []}
                            />

                        )}


                    </section>

                ))}


            </div>

        </main>

    );

}


export default About;