/* =====================================================
   CSS
===================================================== */

import "./KSA/css/detail-modal/detail-modal.css";

import "./KSA/css/detail-modal/modal.css";
import "./KSA/css/detail-modal/01-dm-header.css";
import "./KSA/css/detail-modal/02-dm-summary.css";

import "./KSA/css/detail-modal/dm-section.css";
import "./KSA/css/detail-modal/content.css";
import "./KSA/css/detail-modal/table.css";

import "./KSA/css/detail-modal/03-dm-reason.css";
import "./KSA/css/detail-modal/04-dm-information.css";
import "./KSA/css/detail-modal/04-dm-objectives.css";
import "./KSA/css/detail-modal/05-dm-assessment.css";
import "./KSA/css/detail-modal/06-dm-budget.css";
import "./KSA/css/detail-modal/07-dm-schedule.css";
import "./KSA/css/detail-modal/10-dm-process.css";

import "./KSA/css/detail-modal/11-dm-fee-certificate.css";

import "./KSA/css/detail-modal/document.css";

import "./KSA/css/detail-modal/rubric.css";
import "./KSA/css/detail-modal/schedule.css";
import "./KSA/css/detail-modal/gallery.css";

import "./KSA/css/detail-modal/ksa-score.css";
import "./KSA/css/detail-modal/ksa-model.css";

import "./KSA/css/detail-modal/performance.css";

import "./KSA/css/directory/directory.css";
import "./KSA/css/directory/tooltip.css";
import "./KSA/css/directory/sdg.css";

import "./KSA/css/description/description-panel.css";

import "./insert.css";






import DetailHeader from "./KSA/JS/detail-modal/01-dm-header.js";
import DetailSummary from "./KSA/JS/detail-modal/02-dm-summary.js";
import DetailImage from "./KSA/JS/detail-modal/03-dm-image.js";
import DetailInformation from "./KSA/JS/detail-modal/04-dm-information.js";
import DetailReason from "./KSA/JS/detail-modal/05-dm-reason.js";
import DetailObjectives from "./KSA/JS/detail-modal/06-dm-objectives.js";
import DetailActivities from "./KSA/JS/detail-modal/07-dm-activities.js";
import DetailBudget from "./KSA/JS/detail-modal/08-dm-budget.js";
import DetailSchedule from "./KSA/JS/detail-modal/09-dm-schedule.js";
import DetailProcess from "./KSA/JS/detail-modal/10-dm-process.js";
import DetailDocument from "./KSA/JS/detail-modal/10-dm-document.js";
import DetailEvaluation from "./KSA/JS/detail-modal/11-dm-evaluation.js";
import DetailDirectory from "./KSA/JS/detail-modal/12-dm-directory.js";

import DetailFeeCertificate from "./KSA/JS/detail-modal/11-dm-fee-certificate.js";

/* =====================================================
   React
===================================================== */

import { useState, useRef } from "react";
import { createPortal } from "react-dom";


/* =====================================================
   Components
===================================================== */

import DescriptionPanel from "./DescriptionPanel";
import KsaModelBox from "./KSA/KsaModelBox.js";
import DirectoryItem from "./DirectoryItem";
import ScheduleImagePreview from "./ScheduleImagePreview";


/* =====================================================
   Data
===================================================== */

import descriptions from "./descriptions";


function DetailModal({
    project,
    organization,
    onClose
}) {

    /* =================================================
       SCHEDULE IMAGE PREVIEW
    ================================================= */
    const [schedulePreview, setSchedulePreview] = useState(null);
    const [schedulePreviewVisible, setSchedulePreviewVisible] =
        useState(false);

    const scheduleHideTimer = useRef(null);

    const handleScheduleMouseEnter = (images) => {
        clearTimeout(scheduleHideTimer.current);

        setSchedulePreview(images);
        setSchedulePreviewVisible(true);
    };

    const handleScheduleMouseLeave = () => {
        clearTimeout(scheduleHideTimer.current);

        scheduleHideTimer.current = setTimeout(() => {
            setSchedulePreviewVisible(false);
        }, 500);
    };


    /* =================================================
       DESCRIPTION PANEL
    ================================================= */

    const [hoverDescription, setHoverDescription] =
        useState(null);

    const hideTimer = useRef(null);

    const [visible, setVisible] =
        useState(false);


    const handleDescriptionHover = (info) => {

        clearTimeout(hideTimer.current);

        setHoverDescription(info);

        setVisible(true);

    };


    const handleDescriptionLeave = () => {

        hideTimer.current =
            setTimeout(() => {

                setVisible(false);

            }, 1000);

    };


    /* =================================================
       PROJECT CHECK
    ================================================= */

    if (!project) {
        return null;
    }


    /* =================================================
       DETAIL
    ================================================= */

    const detail =
        project.detail || {};


    /* =================================================
       BUDGET
    ================================================= */

const budgetProposed =
    project.budget?.proposed?.amount || 0;

const budgetStudentOrg =
    project.budget?.studentOrg?.amount || 0;

const budgetStudentCouncil =
    project.budget?.studentCouncil?.amount || 0;

const budgetAllocated =
    project.budget?.allocated?.amount || 0;

const budgetActual =
    project.budget?.actual?.amount || 0;

const budgetRemaining =
    budgetAllocated - budgetActual;

const budgetPercent =
    budgetAllocated > 0
        ? (budgetActual / budgetAllocated) * 100
        : 0;

const isOverBudget =
    budgetActual > budgetAllocated;

    return (

        <div
            className="dm-backdrop"
            onClick={onClose}
        >

            <div
                className="dm-modal"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >


                {/* =====================================================
                    HEADER
                ===================================================== */}
                <DetailHeader
                    project={project}
                    organization={organization}
                    onClose={onClose}
                />

                {/* =====================================================
                    SUMMARY
                ====================================================== */}
                <DetailSummary
                    budgetProposed={budgetProposed}
                    budgetStudentOrg={budgetStudentOrg}
                    budgetStudentCouncil={budgetStudentCouncil}
                    budgetAllocated={budgetAllocated}
                    budgetActual={budgetActual}
                    budgetRemaining={budgetRemaining}
                    budgetPercent={budgetPercent}
                    isOverBudget={isOverBudget}
                />

                {/* =====================================================
                    IMAGE
                ===================================================== */}
                <DetailImage
                    detail={detail}
                    Section={Section}
                />

                {/* =====================================================
                    INFORMATION
                ===================================================== */}
                <DetailInformation
                    detail={detail}
                    Section={Section}
                    Info={Info}
                />

                {/* =====================================================
                    REASON
                ===================================================== */}
                <DetailReason
                    detail={detail}
                />

                {/* =====================================================
                    OBJECTIVE
                ===================================================== */}
                <DetailObjectives
                    detail={detail}
                />


                <DetailProcess process={detail.process} />

                {/* =====================================================
                    ACTIVITIES
                ===================================================== */}
                <DetailActivities
                    detail={detail}
                    Section={Section}
                />
<DetailFeeCertificate
    fee={detail.fee}
    certificate={detail.certificate}
/>
                {/* =====================================================
                    BUDGET
                ===================================================== */}
                <DetailBudget
                    detail={detail}
                    Section={Section}
                />

                {/* =====================================================
                    SCHEDULE
                ===================================================== */}
                <DetailSchedule
                    detail={detail}
                    ScheduleImagePreview={ScheduleImagePreview}
                    schedulePreview={schedulePreview}
                    schedulePreviewVisible={schedulePreviewVisible}
                    scheduleHideTimer={scheduleHideTimer}
                    handleScheduleMouseEnter={handleScheduleMouseEnter}
                    handleScheduleMouseLeave={handleScheduleMouseLeave}
                />


                {/* =====================================================
                    DOCUMENT
                ===================================================== */}

                <DetailDocument
                    detail={detail}
                    Section={Section}
                />

                {/* =====================================================
                    EVALUATION
                ===================================================== */}
                <DetailEvaluation
                    detail={detail}
                    Section={Section}
                />
                {/* =====================================================
                    DIRECTORY
                ===================================================== */}

                <DetailDirectory
                    detail={detail}
                    Section={Section}
                    DirectoryBox={DirectoryBox}
                    SdgGrid={SdgGrid}
                    KsaModelBox={KsaModelBox}
                    DirectoryItem={DirectoryItem}
                    handleDescriptionHover={handleDescriptionHover}
                    handleDescriptionLeave={handleDescriptionLeave}
                />

                {/* =====================================================
                    KPI PERFORMANCE
                ===================================================== */}

                <Section title="ตัวชี้วัดความสำเร็จ">

                    <KpiResult
                        items={
                            detail.performanceKpi || []
                        }
                    />

                </Section>


                {/* =====================================================
                    DESCRIPTION PANEL
                ===================================================== */}

                {
                    hoverDescription &&
                    createPortal(

                        <DescriptionPanel

                            data={
                                hoverDescription
                            }

                            visible={
                                visible
                            }

                            onClose={() => {

                                setVisible(false);

                            }}

                            onMouseEnter={() => {

                                clearTimeout(
                                    hideTimer.current
                                );

                            }}

                            onMouseLeave={() => {

                                hideTimer.current =
                                    setTimeout(
                                        () => {

                                            setVisible(false);

                                        },
                                        500
                                    );

                            }}

                        />,

                        document.body

                    )
                }

            </div>

        </div>

    );

}


/* =====================================================
   SDG GRID
===================================================== */

function SdgGrid({
    items = [],
    onHover,
    onLeave
}) {

    const sdgList =
        Object.values(
            descriptions.sdgs || {}
        );


    return (

        <div className="dm-directory-box">

            <h4>
                🌍 SDGs
            </h4>


            <div className="dm-sdg-grid">

                {
                    sdgList.map(
                        (sdg) => {

                            const isActive =
                                items.some(
                                    (item) => {

                                        const itemCode =
                                            typeof item === "string"
                                                ? item
                                                : item.code;

                                        return (
                                            itemCode ===
                                            sdg.code
                                        );

                                    }
                                );


                            const info = {

                                ...sdg,

                                checked:
                                    isActive

                            };


                            return (

                                <img

                                    key={
                                        sdg.code
                                    }

                                    className={
                                        `dm-sdg-item ${isActive
                                            ? "active"
                                            : "inactive"
                                        }`
                                    }

                                    src={
                                        sdg.image
                                    }

                                    alt={
                                        sdg.name
                                    }

                                    title={
                                        sdg.name
                                    }

                                    draggable={
                                        false
                                    }

                                    onMouseEnter={() =>
                                        onHover?.(
                                            info
                                        )
                                    }

                                    onMouseLeave={() =>
                                        onLeave?.()
                                    }

                                />

                            );

                        }
                    )
                }

            </div>

        </div>

    );

}


/* =====================================================
   SDG ITEM
===================================================== */

function SdgItem({
    item,
    onHover,
    onLeave
}) {

    const info =
        descriptions.sdgs?.[
        item.code
        ] || {

            code:
                item.code,

            name:
                item.code,

            image:
                "",

            detail:
                {}

        };


    return (

        <img

            className={
                `dm-sdg-item ${item.checked
                    ? "active"
                    : "inactive"
                }`
            }

            src={
                info.image
            }

            alt={
                info.name
            }

            title={
                info.name
            }

            draggable={
                false
            }

            onMouseEnter={() =>
                onHover(info)
            }

            onMouseLeave={
                onLeave
            }

        />

    );

}


/* =====================================================
   SECTION
===================================================== */

function Section({
    title,
    children,
    className = ""
}) {

    return (

        <section
            className={
                `dm-section ${className}`
            }
        >

            <h3>
                {title}
            </h3>

            {children}

        </section>

    );

}


/* =====================================================
   INFO
===================================================== */

function Info({
    label,
    value
}) {

    return (

        <div className="dm-info">

            <span>
                {label}
            </span>

            <strong>
                {value}
            </strong>

        </div>

    );

}


/* =====================================================
   DIRECTORY BOX
===================================================== */

function DirectoryBox({
    title,
    items = [],
    children,
    grid = "grid-2",
    icon,
    onHover,
    onLeave
}) {

    return (

        <div className="dm-directory-box">

            <h4>
                {icon} {title}
            </h4>


            {
                children
                    ? (

                        children

                    )
                    : (

                        <div
                            className={
                                `dm-directory-grid ${grid}`
                            }
                        >

                            {
                                items.map(
                                    (item, index) => (

                                        <DirectoryItem

                                            key={
                                                item.code ||
                                                index
                                            }

                                            item={
                                                item
                                            }

                                            onHover={
                                                onHover
                                            }

                                            onLeave={
                                                onLeave
                                            }

                                        />

                                    )
                                )
                            }

                        </div>

                    )
            }

        </div>

    );

}


/* =====================================================
   KPI RESULT
===================================================== */

function KpiResult({
    items = []
}) {

    return (

        <>

            {
                items.map(
                    (item, index) => {

                        const percent =
                            item.target
                                ? (
                                    item.actual /
                                    item.target
                                ) * 100
                                : 0;


                        const width =
                            Math.min(
                                percent,
                                100
                            );


                        return (

                            <div

                                key={
                                    index
                                }

                                className={
                                    `
dm-performance-card
${percent >= item.goal
                                        ? "success"
                                        : "warning"
                                    }
`
                                }

                            >

                                <div
                                    className="dm-performance-header"
                                >

                                    <span>
                                        {item.name}
                                    </span>

                                    <strong>
                                        {percent.toFixed(2)}%
                                    </strong>

                                </div>


                                <div
                                    className="dm-progress"
                                >

                                    <div
                                        className="dm-progress-bar"
                                        style={{
                                            width:
                                                `${width}%`
                                        }}
                                    />


                                    <div
                                        className="dm-progress-target"
                                        style={{
                                            left:
                                                `${item.goal}%`
                                        }}
                                    />

                                </div>


                                <div
                                    className="dm-performance-detail"
                                >

                                    <span>

                                        เป้าหมาย :
                                        {" "}

                                        {
                                            item.target
                                                ?.toLocaleString(
                                                    "th-TH"
                                                )
                                        }

                                        {" "}

                                        {
                                            item.unit
                                        }

                                    </span>


                                    <span>

                                        จริง :
                                        {" "}

                                        {
                                            item.actual
                                                ?.toLocaleString(
                                                    "th-TH"
                                                )
                                        }

                                        {" "}

                                        {
                                            item.unit
                                        }

                                    </span>

                                </div>


                                <small>

                                    วิธีประเมิน :
                                    {" "}

                                    {
                                        item.method
                                    }

                                </small>

                            </div>

                        );

                    }
                )
            }

        </>

    );

}


export default DetailModal;