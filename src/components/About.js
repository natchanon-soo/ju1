import { useMemo, useState } from "react";
import { departments } from "../data/councilMembers";

import "./About.css";

/* =====================================================
   VIEW MODES

   1 = หลัก       → ฝ่าย
       อนุกรรมการ → ฝ่าย

   2 = ฝ่าย → หลัก / อนุกรรมการ

   3 = หลัก       → คณะ
       อนุกรรมการ → คณะ

   4 = คณะ → หลัก / อนุกรรมการ
===================================================== */

const VIEW_MODES = {
    ROLE_DEPARTMENT: "role-department",
    DEPARTMENT_ROLE: "department-role",
    ROLE_FACULTY: "role-faculty",
    FACULTY_ROLE: "faculty-role"
};


/* =====================================================
   DATA

   ข้อมูลจริงเขียนในรูปแบบกรณี 2 เท่านั้น

   ฝ่าย
      ├── ตำแหน่งหลัก
      └── อนุกรรมการ
===================================================== */



/* =====================================================
   FLATTEN DATA

   แปลงข้อมูลจาก

   ฝ่าย → กลุ่ม → สมาชิก

   ให้กลายเป็นสมาชิกทั้งหมด

   แต่ละคนจะรู้ว่า
   - อยู่ฝ่ายไหน
   - อยู่กลุ่มไหน
   - อยู่คณะไหน
===================================================== */

function flattenMembers(data) {

    return data.flatMap((department) =>

        department.groups.flatMap((group) =>

            group.members.map((member) => ({

                ...member,

                department: {
                    id: department.id,
                    number: department.number,
                    name: department.name,
                    english: department.english
                },

                group: {
                    id: group.id,
                    name: group.name,
                    english: group.english
                }

            }))

        )

    );

}


/* =====================================================
   GROUP BY HELPER
===================================================== */

function groupBy(items, getKey) {

    return items.reduce((result, item) => {

        const key = getKey(item);

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(item);

        return result;

    }, {});

}


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
                    {member.displayNickname}
                </span>


                <span className="member-position">
                    {member.position}
                </span>


                <strong>
                    {member.name}
                </strong>


                <small>
                    {member.faculty.name}
                </small>

            </div>


            {/* =========================================
                SUIT IMAGE
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
   MEMBER GRID
===================================================== */

function MemberGrid({ members }) {

    const sortedMembers = [...members].sort(
        (a, b) => a.order - b.order
    );

    return (

        <div className="council-card-grid">

            {sortedMembers.map((member) => (

                <MemberCard
                    key={member.memberId}
                    member={member}
                />

            ))}

        </div>

    );

}


/* =====================================================
   SMALL SECTION HEADER

   ใช้สำหรับหัวข้อย่อย เช่น
   - ฝ่ายประธาน
   - คณะวิศวกรรมศาสตร์
===================================================== */

function SubSectionHeader({
    english,
    name,
    number,
    count
}) {

    return (

        <header className="council-group-header">

            {
                number && (

                    <div className="council-sub-number">
                        {number}
                    </div>

                )
            }


            <div className="council-group-name">

                {
                    english && (

                        <span>
                            {english}
                        </span>

                    )
                }

                <h3>
                    {name}
                </h3>

            </div>


            <div
                className="council-group-line"
                aria-hidden="true"
            />


            <small className="council-group-count">

                {String(count).padStart(2, "0")}

            </small>

        </header>

    );

}


/* =====================================================
   LARGE SECTION HEADER

   หัวข้อใหญ่ เช่น
   ตำแหน่งหลัก / อนุกรรมการ / คณะ
===================================================== */

function MainSectionHeader({
    number,
    english,
    name
}) {

    return (

        <header className="council-department-header">

            {
                number && (

                    <div className="council-department-number">
                        {number}
                    </div>

                )
            }


            <div className="council-department-name">

                <span>
                    {english}
                </span>

                <h2>
                    {name}
                </h2>

            </div>

        </header>

    );

}


/* =====================================================
   VIEW 1

   หลัก
       → ฝ่าย

   อนุกรรมการ
       → ฝ่าย

   DEFAULT VIEW
===================================================== */

function ViewRoleDepartment({
    members,
    departments
}) {

    const groupTypes = [
        {
            id: "main",
            name: "ตำแหน่งหลัก",
            english: "EXECUTIVE"
        },

        {
            id: "subcommittee",
            name: "อนุกรรมการ",
            english: "SUBCOMMITTEE"
        }
    ];


    return (

        <>

            {groupTypes.map((groupType) => {

                const roleMembers = members.filter(
                    (member) =>
                        member.group.id ===
                        groupType.id
                );


                if (roleMembers.length === 0) {
                    return null;
                }


                return (

                    <section
                        className="council-department"
                        key={groupType.id}
                    >

                        <MainSectionHeader
                            english={groupType.english}
                            name={groupType.name}
                        />


                        <div className="council-groups">

                            {departments.map(
                                (department) => {

                                    const departmentMembers =
                                        roleMembers.filter(
                                            (member) =>
                                                member.department.id ===
                                                department.id
                                        );


                                    if (
                                        departmentMembers.length ===
                                        0
                                    ) {
                                        return null;
                                    }


                                    return (

                                        <div
                                            className="council-group"
                                            key={
                                                department.id
                                            }
                                        >

                                            <SubSectionHeader
                                                number={
                                                    department.number
                                                }
                                                english={
                                                    department.english
                                                }
                                                name={
                                                    department.name
                                                }
                                                count={
                                                    departmentMembers.length
                                                }
                                            />


                                            <MemberGrid
                                                members={
                                                    departmentMembers
                                                }
                                            />

                                        </div>

                                    );

                                }
                            )}

                        </div>

                    </section>

                );

            })}

        </>

    );

}


/* =====================================================
   VIEW 2

   ฝ่าย
       → หลัก
       → อนุกรรมการ

   ตรงกับโครงสร้าง DATA
===================================================== */

function ViewDepartmentRole({
    departments
}) {

    return (

        <>

            {departments.map((department) => (

                <section
                    className="council-department"
                    key={department.id}
                >

                    <MainSectionHeader
                        number={department.number}
                        english={department.english}
                        name={department.name}
                    />


                    <div className="council-groups">

                        {department.groups.map(
                            (group) => (

                                <div
                                    className="council-group"
                                    key={group.id}
                                >

                                    <SubSectionHeader
                                        english={
                                            group.english
                                        }
                                        name={
                                            group.name
                                        }
                                        count={
                                            group.members.length
                                        }
                                    />


                                    <MemberGrid
                                        members={
                                            group.members
                                        }
                                    />

                                </div>

                            )
                        )}

                    </div>

                </section>

            ))}

        </>

    );

}


/* =====================================================
   VIEW 3

   หลัก
       → คณะ

   อนุกรรมการ
       → คณะ
===================================================== */

function ViewRoleFaculty({
    members
}) {

    const groupTypes = [
        {
            id: "main",
            name: "ตำแหน่งหลัก",
            english: "EXECUTIVE"
        },

        {
            id: "subcommittee",
            name: "อนุกรรมการ",
            english: "SUBCOMMITTEE"
        }
    ];


    return (

        <>

            {groupTypes.map((groupType) => {

                const roleMembers = members.filter(
                    (member) =>
                        member.group.id ===
                        groupType.id
                );


                if (roleMembers.length === 0) {
                    return null;
                }


                const faculties = groupBy(
                    roleMembers,
                    (member) =>
                        member.faculty.id
                );


                return (

                    <section
                        className="council-department"
                        key={groupType.id}
                    >

                        <MainSectionHeader
                            english={
                                groupType.english
                            }
                            name={
                                groupType.name
                            }
                        />


                        <div className="council-groups">

                            {Object.entries(
                                faculties
                            ).map(
                                ([
                                    facultyId,
                                    facultyMembers
                                ]) => {

                                    const faculty =
                                        facultyMembers[0]
                                            .faculty;


                                    return (

                                        <div
                                            className="council-group"
                                            key={facultyId}
                                        >

                                            <SubSectionHeader
                                                english={
                                                    faculty.english
                                                }
                                                name={
                                                    faculty.name
                                                }
                                                count={
                                                    facultyMembers.length
                                                }
                                            />


                                            <MemberGrid
                                                members={
                                                    facultyMembers
                                                }
                                            />

                                        </div>

                                    );

                                }
                            )}

                        </div>

                    </section>

                );

            })}

        </>

    );

}


/* =====================================================
   VIEW 4

   คณะ
       → หลัก
       → อนุกรรมการ

   แต่ละคณะจะแสดงทั้งสองกลุ่มอยู่ภายในคณะเดียวกัน
===================================================== */

function ViewFacultyRole({
    members
}) {

    const faculties = groupBy(
        members,
        (member) => member.faculty.id
    );


    return (

        <>

            {Object.entries(faculties).map(
                ([
                    facultyId,
                    facultyMembers
                ]) => {

                    const faculty =
                        facultyMembers[0].faculty;


                    const mainMembers =
                        facultyMembers.filter(
                            (member) =>
                                member.group.id ===
                                "main"
                        );


                    const subcommitteeMembers =
                        facultyMembers.filter(
                            (member) =>
                                member.group.id ===
                                "subcommittee"
                        );


                    return (

                        <section
                            className="council-department"
                            key={facultyId}
                        >

                            <MainSectionHeader
                                english={
                                    faculty.english
                                }
                                name={
                                    faculty.name
                                }
                            />


                            <div className="council-groups">


                                {/* MAIN */}

                                {
                                    mainMembers.length >
                                    0 && (

                                        <div className="council-group">

                                            <SubSectionHeader
                                                english="EXECUTIVE"
                                                name="ตำแหน่งหลัก"
                                                count={
                                                    mainMembers.length
                                                }
                                            />


                                            <MemberGrid
                                                members={
                                                    mainMembers
                                                }
                                            />

                                        </div>

                                    )
                                }


                                {/* SUBCOMMITTEE */}

                                {
                                    subcommitteeMembers.length >
                                    0 && (

                                        <div className="council-group">

                                            <SubSectionHeader
                                                english="SUBCOMMITTEE"
                                                name="อนุกรรมการ"
                                                count={
                                                    subcommitteeMembers.length
                                                }
                                            />


                                            <MemberGrid
                                                members={
                                                    subcommitteeMembers
                                                }
                                            />

                                        </div>

                                    )
                                }


                            </div>

                        </section>

                    );

                }
            )}

        </>

    );

}


/* =====================================================
   VIEW SWITCHER
===================================================== */

function ViewSwitcher({
    viewMode,
    setViewMode
}) {

    const buttons = [

        {
            id:
                VIEW_MODES.ROLE_DEPARTMENT,

            number: "01",

            title:
                "ประเภท → ฝ่าย",

            description:
                "หลัก / อนุกรรมการ แยกตามฝ่าย"
        },

        {
            id:
                VIEW_MODES.DEPARTMENT_ROLE,

            number: "02",

            title:
                "ฝ่าย → ประเภท",

            description:
                "แต่ละฝ่ายแยกหลัก / อนุกรรมการ"
        },

        {
            id:
                VIEW_MODES.ROLE_FACULTY,

            number: "03",

            title:
                "ประเภท → คณะ",

            description:
                "หลัก / อนุกรรมการ แยกตามคณะ"
        },

        {
            id:
                VIEW_MODES.FACULTY_ROLE,

            number: "04",

            title:
                "คณะ → ประเภท",

            description:
                "แต่ละคณะแยกหลัก / อนุกรรมการ"
        }

    ];


    return (

        <div className="council-view-switcher">

            {buttons.map((button) => {

                const active =
                    viewMode === button.id;


                return (

                    <button
                        key={button.id}
                        type="button"

                        className={
                            `council-view-button ${
                                active
                                    ? "is-active"
                                    : ""
                            }`
                        }

                        onClick={() =>
                            setViewMode(
                                button.id
                            )
                        }

                        aria-pressed={active}
                    >

                        <span className="council-view-number">
                            {button.number}
                        </span>


                        <span className="council-view-text">

                            <strong>
                                {button.title}
                            </strong>

                            <small>
                                {
                                    button.description
                                }
                            </small>

                        </span>

                    </button>

                );

            })}

        </div>

    );

}


/* =====================================================
   ABOUT PAGE
===================================================== */

function About() {

    /*
     * ค่าเริ่มต้น = กรณี 1
     */

    const [
        viewMode,
        setViewMode
    ] = useState(
        VIEW_MODES.ROLE_DEPARTMENT
    );


    /*
     * สร้างสมาชิกทั้งหมดจาก DATA
     *
     * useMemo ทำให้ไม่ต้อง flatten ใหม่
     * ทุกครั้งที่กดเปลี่ยน View
     */

    const allMembers = useMemo(
        () => flattenMembers(departments),
        []
    );


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
                    VIEW SWITCHER
                ====================================== */}

                <ViewSwitcher
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />


                {/* =====================================
                    VIEW 1
                    หลัก → ฝ่าย
                    อนุกรรมการ → ฝ่าย
                ====================================== */}

                {
                    viewMode ===
                    VIEW_MODES.ROLE_DEPARTMENT && (

                        <ViewRoleDepartment
                            members={allMembers}
                            departments={
                                departments
                            }
                        />

                    )
                }


                {/* =====================================
                    VIEW 2
                    ฝ่าย → หลัก / อนุกรรมการ
                ====================================== */}

                {
                    viewMode ===
                    VIEW_MODES.DEPARTMENT_ROLE && (

                        <ViewDepartmentRole
                            departments={
                                departments
                            }
                        />

                    )
                }


                {/* =====================================
                    VIEW 3
                    หลัก → คณะ
                    อนุกรรมการ → คณะ
                ====================================== */}

                {
                    viewMode ===
                    VIEW_MODES.ROLE_FACULTY && (

                        <ViewRoleFaculty
                            members={
                                allMembers
                            }
                        />

                    )
                }


                {/* =====================================
                    VIEW 4
                    คณะ → หลัก / อนุกรรมการ
                ====================================== */}

                {
                    viewMode ===
                    VIEW_MODES.FACULTY_ROLE && (

                        <ViewFacultyRole
                            members={
                                allMembers
                            }
                        />

                    )
                }


            </div>

        </main>

    );

}


export default About;