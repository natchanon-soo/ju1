import { useState } from "react";
import Organization from "./Organization_131243";
import DetailModal from "./DetailModal";
import { tattoos } from "./data_131243";
import "./main.css";

function Main_131243() {

    // องค์กรที่กำลังเปิด
    const [openId, setOpenId] = useState(null);

    // รูปแบบการเรียงองค์กร
    const [sortMode, setSortMode] = useState("default");

    // ข้อมูล Modal
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedOrganization, setSelectedOrganization] = useState(null);


    // =========================
    // เปิด / ปิด องค์กร
    // =========================

    const handleToggle = (id) => {

        setOpenId(
            openId === id
                ? null
                : id
        );

    };


    // =========================
    // เปิด Modal
    // =========================

    const handleProjectClick = (
        project,
        organization
    ) => {

        setSelectedProject(project);

        setSelectedOrganization(
            organization
        );

    };


    // =========================
    // ปิด Modal
    // =========================

    const closeModal = () => {

        setSelectedProject(null);

        setSelectedOrganization(null);

    };


    // =========================
    // งบจัดสรรรวม
    // =========================

    const totalAllocated =
        tattoos.reduce(
            (sum, org) =>
                sum + (org.budget || 0),
            0
        );


    // =========================
    // ใช้จริงรวม
    // =========================

    const totalActual =
        tattoos.reduce(
            (sum, org) =>
                sum +
                (org.projects || []).reduce(
                    (s, project) =>
                        s +
                        (
                            project.budget?.actual?.amount ||
                            0
                        ),
                    0
                ),
            0
        );


    // =========================
    // เรียงองค์กร
    // =========================

    const sortedTattoos =
        [...tattoos].sort((a, b) => {

            // -------------------------
            // ตามจำนวนงบใช้จริง
            // -------------------------

            if (sortMode === "actual") {

                const aActual =
                    (a.projects || []).reduce(
                        (sum, project) =>
                            sum +
                            (
                                project.budget?.actual?.amount ||
                                0
                            ),
                        0
                    );

                const bActual =
                    (b.projects || []).reduce(
                        (sum, project) =>
                            sum +
                            (
                                project.budget?.actual?.amount ||
                                0
                            ),
                        0
                    );

                return bActual - aActual;
            }


            // -------------------------
            // ตามจำนวนได้รับจัดสรร
            // -------------------------

            if (sortMode === "allocated") {

                return (
                    (b.budget || 0) -
                    (a.budget || 0)
                );

            }


            // -------------------------
            // ตามปกติ
            // -------------------------

            return 0;

        });


    return (

        <main className="container page svelte-1w567vk">


            {/* ================= Header ================= */}

            <div className="page-head svelte-1w567vk">

                <h1 className="svelte-1w567vk">

                    สรุปงบประมาณที่องค์การนักศึกษา
                    สภานักศึกษา
                    และชมรมนักศึกษายื่นเสนอครั้งที่ 2

                </h1>


            </div>


            {/* ================= ปุ่มเรียง ================= */}
<div className="page-subhead">

    <p className="muted">
        หมวด 131243 อุดหนุนบำรุงกิจกรรมองค์การนักศึกษา
        และชมรมกิจกรรมองค์การนักศึกษา
    </p>

            <div className="sort-buttons">



                <button
                    type="button"
                    className={
                        sortMode === "default"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setSortMode("default")
                    }
                >
                    ตามประเภท
                </button>


                <button
                    type="button"
                    className={
                        sortMode === "allocated"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setSortMode("allocated")
                    }
                >
                    ตามจำนวนได้รับจัดสรร
                </button>


                <button
                    type="button"
                    className={
                        sortMode === "actual"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        setSortMode("actual")
                    }
                >
                    ตามจำนวนงบใช้จริง
                </button>

            </div>
</div>

            {/* ================= Tree ================= */}

            <div className="layout svelte-1w567vk">

                <div className="tree card svelte-1w567vk">


                    {/* ================= Header ================= */}

                    <div className="t-head svelte-1w567vk">

                        <div className="th-name">
                            รายการ
                        </div>

                        <div className="th-tag">
                            ระดับ
                        </div>

                        <div className="th-num-requested">
                            ได้รับจัดสรร
                        </div>

                        <div className="th-num-actual">
                            ใช้จริง
                        </div>

                        <div className="th-bar">
                        </div>

                        <div className="th-pc">
                            %
                        </div>

                    </div>


                    {/* ================= Total ================= */}

                    <div className="t-total svelte-1w567vk">

                        <span className="tt-name">
                            งบรวมทั้งหมด
                        </span>


                        <span></span>


                        <strong className="tnum tt-num">

                            {totalAllocated.toLocaleString("th-TH")}
                            {" "}
                            บาท

                        </strong>


                        <strong className="tnum tt-num">

                            {totalActual.toLocaleString("th-TH")}
                            {" "}
                            บาท

                        </strong>


                        <span className="tt-bar">

                            <span className="track">

                                <span
                                    className={`fill ${
                                        totalActual >
                                        totalAllocated
                                            ? "over-budget"
                                            : ""
                                    }`}
                                    style={{
                                        width:
                                            totalAllocated > 0
                                                ? Math.min(
                                                    (
                                                        totalActual /
                                                        totalAllocated
                                                    ) * 100,
                                                    100
                                                ) + "%"
                                                : "0%"
                                    }}
                                />

                            </span>

                        </span>


                        <strong className="tnum tt-percent">

                            {
                                totalAllocated > 0
                                    ? (
                                        (
                                            totalActual /
                                            totalAllocated
                                        ) * 100
                                    ).toFixed(2)
                                    : "0.00"
                            }

                            {" "}%

                        </strong>

                    </div>


                    {/* ================= Body ================= */}

                    <div className="t-body svelte-1w567vk">

                        {

                            sortedTattoos.map(
                                (tattoo) => (

                                    <Organization

                                        key={tattoo.id}

                                        tattoo={tattoo}

                                        open={
                                            openId ===
                                            tattoo.id
                                        }

                                        onToggle={() =>
                                            handleToggle(
                                                tattoo.id
                                            )
                                        }

                                        onProjectClick={
                                            handleProjectClick
                                        }

                                        sortMode={sortMode}

                                    />

                                )
                            )

                        }

                    </div>

                </div>

            </div>


            {/* ================= Modal ================= */}

            {

                selectedProject && (

                    <DetailModal

                        project={
                            selectedProject
                        }

                        organization={
                            selectedOrganization
                        }

                        onClose={
                            closeModal
                        }

                    />

                )

            }

        </main>

    );

}

export default Main_131243;