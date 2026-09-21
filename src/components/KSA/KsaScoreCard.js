import React from "react";
import "./css/detail-modal/ksa-score.css";


function KsaScoreCard({
    code = "",
    summary = null,

    // รองรับการส่ง props แบบเดิมด้วย
    score,
    maxScore,

    min,
    mean,
    max,

    minimum,
    maximum,

    median,
    mode,

    sd
}) {

    /* =====================================================
       NORMALIZE SUMMARY
    ===================================================== */

    const data = summary || {};

    /*
     * รองรับชื่อข้อมูลจาก project_SN101.js
     *
     * score
     * fullScore
     * minimum
     * mean
     * maximum
     * Median
     * Mode
     * sd
     */

    const rawScore =
        data.score !== undefined
            ? data.score
            : score;

    const rawMaxScore =
        data.fullScore !== undefined
            ? data.fullScore
            : maxScore;

    const rawMinimum =
        data.minimum !== undefined
            ? data.minimum
            : (
                minimum !== undefined
                    ? minimum
                    : min
            );

    const rawMean =
        data.mean !== undefined
            ? data.mean
            : mean;

    const rawMaximum =
        data.maximum !== undefined
            ? data.maximum
            : (
                maximum !== undefined
                    ? maximum
                    : max
            );

    const rawMedian =
        data.median !== undefined
            ? data.median
            : (
                data.Median !== undefined
                    ? data.Median
                    : median
            );

    const rawMode =
        data.mode !== undefined
            ? data.mode
            : (
                data.Mode !== undefined
                    ? data.Mode
                    : mode
            );

    const rawSd =
        data.sd !== undefined
            ? data.sd
            : sd;


    /* =====================================================
       SAFE VALUES
    ===================================================== */

    const safeScore =
        Number.isFinite(Number(rawScore))
            ? Number(rawScore)
            : 0;

    const safeMaxScore =
        Number.isFinite(Number(rawMaxScore))
            ? Number(rawMaxScore)
            : 0;

    const safeMinimum =
        Number.isFinite(Number(rawMinimum))
            ? Number(rawMinimum)
            : 0;

    const safeMean =
        Number.isFinite(Number(rawMean))
            ? Number(rawMean)
            : 0;

    const safeMaximum =
        Number.isFinite(Number(rawMaximum))
            ? Number(rawMaximum)
            : 0;

    const safeMedian =
        rawMedian !== undefined &&
        rawMedian !== null &&
        rawMedian !== ""
            ? Number(rawMedian)
            : null;

    const safeMode =
        rawMode !== undefined &&
        rawMode !== null &&
        rawMode !== ""
            ? Number(rawMode)
            : null;

    const safeSd =
        Number.isFinite(Number(rawSd))
            ? Number(rawSd)
            : 0;


    /* =====================================================
       HAS SCORE DATA
    ===================================================== */

    const hasScoreData =
        summary !== null
            ? (
                data.score !== undefined &&
                data.fullScore !== undefined &&
                Number(data.fullScore) > 0
            )
            : safeMaxScore > 0;


    /* =====================================================
       SCORE PERCENTAGE
    ===================================================== */

    const percentage =
        safeMaxScore > 0
            ? (safeScore / safeMaxScore) * 100
            : 0;


    /* =====================================================
       SCORE RANGE
    ===================================================== */

    const scoreRange =
        safeMaximum - safeMinimum;


    /* =====================================================
       SCORE POSITION IN MIN → MAX
    ===================================================== */

    const scorePosition =
        scoreRange > 0
            ? (
                (safeScore - safeMinimum) /
                scoreRange
            ) * 100
            : 0;


    const safeScorePosition =
        Math.min(
            100,
            Math.max(
                0,
                scorePosition
            )
        );


    /* =====================================================
       POSITION TEXT
    ===================================================== */

    const getPositionText = () => {

        if (safeScore > safeMean) {
            return "สูงกว่าค่าเฉลี่ย";
        }

        if (safeScore < safeMean) {
            return "ต่ำกว่าค่าเฉลี่ย";
        }

        return "เท่ากับค่าเฉลี่ย";
    };


    /* =====================================================
       POSITION DESCRIPTION
    ===================================================== */

    const getPositionDescription = () => {

        const difference =
            Math.abs(
                safeScore - safeMean
            ).toFixed(2);


        if (safeScore > safeMean) {

            return `สูงกว่าค่าเฉลี่ย ${difference} คะแนน`;

        }


        if (safeScore < safeMean) {

            return `ต่ำกว่าค่าเฉลี่ย ${difference} คะแนน`;

        }


        return "คะแนนอยู่ในระดับเดียวกับค่าเฉลี่ย";
    };


    /* =====================================================
       RESULT LEVEL
    ===================================================== */

const getResultLevel = () => {

    if (percentage >= 90) {
        return "ดีเลิศ (Excellent)";
    }

    if (percentage >= 80) {
        return "ดีมาก (Very Good)";
    }

    if (percentage >= 70) {
        return "ดี (Good)";
    }

    if (percentage >= 60) {
        return "ปานกลาง/พอใช้ (Fair)";
    }

    if (percentage >= 50) {
        return "ผ่านตามที่กำหนด (Pass)";
    }

    return "ต่ำกว่าเกณฑ์ (Fail)";
};


    /* =====================================================
       MARKER POSITION
    ===================================================== */

    const getMarkerPosition = (value) => {

        if (safeMaxScore <= 0) {
            return 0;
        }

        return Math.min(
            100,
            Math.max(
                0,
                (Number(value) / safeMaxScore) * 100
            )
        );
    };


    /* =====================================================
       EMPTY STATE
    ===================================================== */

    if (!hasScoreData) {

        return (

            <div className="dm-ksa-score-card">

                <div className="dm-ksa-score-header">

                    <div className="dm-ksa-score-title">

                        <strong>
                            {code}
                        </strong>

                        <span>
                            คะแนนประเมิน
                        </span>

                    </div>

                    <div className="dm-ksa-score-result">

                        <span className="dm-ksa-no-score">
                            ยังไม่มีข้อมูล
                        </span>

                    </div>

                </div>


                <div className="dm-ksa-empty">

                    <div className="dm-ksa-empty-icon">
                        —
                    </div>

                    <strong>
                        ยังไม่มีข้อมูลคะแนน
                    </strong>

                    <span>
                        ยังไม่มีผลการประเมินสำหรับ {code}
                    </span>

                </div>

            </div>

        );
    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <div className="dm-ksa-score-card">


            {/* =================================================
               HEADER
            ================================================= */}

            <div className="dm-ksa-score-header">

                <div className="dm-ksa-score-title">

                    <strong>
                        {code}
                    </strong>

                    <span>
                        คะแนนประเมิน
                    </span>

                </div>


                <div className="dm-ksa-score-result">

                    <strong>
                        {safeScore}
                    </strong>

                    <span>
                        / {safeMaxScore}
                    </span>

                    <small>
                        {percentage.toFixed(2)}%
                    </small>

                </div>

            </div>


            {/* =================================================
               SCORE CONTENT
            ================================================= */}

            <div className="dm-ksa-chart-new">


                {/* =================================================
                   SCALE
                ================================================= */}

                <div className="dm-ksa-chart-scale">

                    <span>
                        0
                    </span>

                    <span>
                        {safeMaxScore}
                    </span>

                </div>


                {/* =================================================
                   TRACK
                ================================================= */}

                <div className="dm-ksa-chart-track-new">


                    {/* MIN → MAX RANGE */}

                    <div
                        className="dm-ksa-range-new"
                        style={{
                            left:
                                `${getMarkerPosition(
                                    safeMinimum
                                )}%`,

                            width:
                                `${Math.max(
                                    0,
                                    getMarkerPosition(
                                        safeMaximum
                                    ) -
                                    getMarkerPosition(
                                        safeMinimum
                                    )
                                )}%`
                        }}
                    />


                    {/* STANDARD DEVIATION */}

                    {safeSd > 0 && (

                        <div
                            className="dm-ksa-sd-range-new"
                            style={{
                                left:
                                    `${getMarkerPosition(
                                        safeMean - safeSd
                                    )}%`,

                                width:
                                    `${Math.max(
                                        0,
                                        getMarkerPosition(
                                            safeMean + safeSd
                                        ) -
                                        getMarkerPosition(
                                            safeMean - safeSd
                                        )
                                    )}%`
                            }}
                        />

                    )}


                    {/* =================================================
                       MIN
                    ================================================= */}

                    <div
                        className="dm-ksa-marker-new marker-min"
                        style={{
                            left:
                                `${getMarkerPosition(
                                    safeMinimum
                                )}%`
                        }}
                    >

                        <div className="dm-ksa-marker-label">
                            Min
                        </div>

                        <div className="dm-ksa-marker-dot">
                            <span />
                        </div>

                        <strong>
                            {safeMinimum}
                        </strong>

                    </div>


                    {/* =================================================
                       MEAN
                    ================================================= */}

                    <div
                        className="dm-ksa-marker-new marker-mean"
                        style={{
                            left:
                                `${getMarkerPosition(
                                    safeMean
                                )}%`
                        }}
                    >

                        <div className="dm-ksa-marker-label">
                            Mean
                        </div>

                        <div className="dm-ksa-marker-dot">
                            <span />
                        </div>

                        <strong>
                            {safeMean}
                        </strong>

                    </div>


                    {/* =================================================
                       MAX
                    ================================================= */}

                    <div
                        className="dm-ksa-marker-new marker-max"
                        style={{
                            left:
                                `${getMarkerPosition(
                                    safeMaximum
                                )}%`
                        }}
                    >

                        <div className="dm-ksa-marker-label">
                            Max
                        </div>

                        <div className="dm-ksa-marker-dot">
                            <span />
                        </div>

                        <strong>
                            {safeMaximum}
                        </strong>

                    </div>


                    {/* =================================================
                       SCORE
                    ================================================= */}

                    <div
                        className="dm-ksa-marker-new marker-score"
                        style={{
                            left:
                                `${getMarkerPosition(
                                    safeScore
                                )}%`
                        }}
                    >

                        <div className="dm-ksa-marker-dot">
                            <span />
                        </div>


                    </div>


                </div>



                {/* =================================================
                   STATISTICS
                ================================================= */}

                <div className="dm-ksa-stat-grid">

                    <div>
                        <span>
                            Minimum
                        </span>

                        <strong>
                            {safeMinimum}
                        </strong>
                    </div>


                    <div>
                        <span>
                            Mean
                        </span>

                        <strong>
                            {safeMean}
                        </strong>
                    </div>


                    <div>
                        <span>
                            Median
                        </span>

                        <strong>
                            {safeMedian !== null &&
                             Number.isFinite(safeMedian)
                                ? safeMedian
                                : "—"}
                        </strong>
                    </div>


                    <div>
                        <span>
                            Mode
                        </span>

                        <strong>
                            {safeMode !== null &&
                             Number.isFinite(safeMode)
                                ? safeMode
                                : "—"}
                        </strong>
                    </div>


                    <div>
                        <span>
                            Maximum
                        </span>

                        <strong>
                            {safeMaximum}
                        </strong>
                    </div>


                    <div>
                        <span>
                            S.D.
                        </span>

                        <strong>
                            ± {safeSd.toFixed(2)}
                        </strong>
                    </div>

                    <div className="dm-ksa-analysis-card">

                        <span className="dm-ksa-analysis-label">
                            ผลการประเมิน
                        </span>

                        <strong>
                            {getResultLevel()}
                        </strong>

                        <small>
                            คะแนนคิดเป็น {percentage.toFixed(2)}%
                        </small>

                    </div>

                </div>


                {/* =================================================
                   SCORE WEIGHT
                ================================================= */}

                <div className="dm-ksa-weight">

                    <div className="dm-ksa-weight-header">

                        <span>
                            คะแนนสะสม
                        </span>

                        <strong>
                            {safeScore} / 100 คะแนน
                        </strong>

                    </div>


                    <div className="dm-ksa-weight-track">

                        <div
                            className="dm-ksa-weight-bar"
                            style={{
                                width:
                                    `${Math.min(
                                        100,
                                        Math.max(
                                            0,
                                            safeScore
                                        )
                                    )}%`
                            }}
                        />




<div
    className="dm-ksa-weight-limit"
    style={{
        left:
            `${Math.min(
                100,
                Math.max(
                    0,
                    safeMaxScore
                )
            )}%`
    }}
>
    <span>
        {safeMaxScore}
    </span>
</div>

                    </div>


                    <div className="dm-ksa-weight-scale">

                        <span>
                            0
                        </span>


                        <span>
                            100
                        </span>

                    </div>

                </div>



                {/* =================================================
                   FOOTER
                ================================================= */}

                <div className="dm-ksa-summary">

                    <span>
                        คะแนนที่ได้
                    </span>

                    <strong>
                        {safeScore} / {safeMaxScore}
                    </strong>

                    <span>
                        คิดเป็น
                    </span>

                    <strong>
                        {percentage.toFixed(2)}%
                    </strong>

                </div>


            </div>

        </div>

    );
}


export default KsaScoreCard;