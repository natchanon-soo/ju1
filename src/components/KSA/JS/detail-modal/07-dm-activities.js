import React from "react";

function DetailActivities({
    detail,
    Section
}) {
    return (
        <Section title="รายละเอียดกิจกรรม">

            {
                detail.activities?.map(
                    (activity, index) => (

                        <div
                            className="dm-activity-card"
                            key={index}
                        >

                            <h4>
                                {`4.${index + 1} ${activity.title}`}
                            </h4>


                            {/* =================================================
                                ตาราง Mapping
                            ================================================= */}

                            <table className="dm-activity-table">

                                <thead>

                                    <tr>

                                        <th>
                                            ที่
                                        </th>

                                        <th>
                                            กิจกรรม
                                        </th>

                                        <th>
                                            OKRs
                                        </th>

                                        <th>
                                            SDGs
                                        </th>

                                        <th>
                                            EGGS (Core)
                                        </th>

                                        <th>
                                            K
                                        </th>

                                        <th>
                                            S
                                        </th>

                                        <th>
                                            A
                                        </th>

                                        <th>
                                            Approach
                                        </th>

                                        <th>
                                            EGGS (Sub)
                                        </th>

                                        <th>
                                            K
                                        </th>

                                        <th>
                                            S
                                        </th>

                                        <th>
                                            A
                                        </th>

                                        <th>
                                            Approach
                                        </th>

                                        <th>
                                            ช่วงเวลา
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    <tr>

                                        <td>
                                            {activity.at}
                                        </td>

                                        <td>
                                            {activity.type}
                                        </td>

                                        <td>
                                            {activity.okrs}
                                        </td>

                                        <td>
                                            {activity.sdgs}
                                        </td>

                                        <td>
                                            {activity.eggsCore}
                                        </td>

                                        <td>
                                            {activity.ksaCore?.k}
                                        </td>

                                        <td>
                                            {activity.ksaCore?.s}
                                        </td>

                                        <td>
                                            {activity.ksaCore?.a}
                                        </td>

                                        <td>
                                            {activity.approach}
                                        </td>

                                        <td>
                                            {activity.eggsSub}
                                        </td>

                                        <td>
                                            {activity.ksaSub?.k}
                                        </td>

                                        <td>
                                            {activity.ksaSub?.s}
                                        </td>

                                        <td>
                                            {activity.ksaSub?.a}
                                        </td>

                                        <td>
                                            {activity.approachSub}
                                        </td>

                                        <td>
                                            {activity.period}
                                        </td>

                                    </tr>

                                </tbody>

                            </table>


                            {/* =================================================
                                Assessment
                            ================================================= */}

                            <div className="dm-assessment">

                                <p className="dm-assessment-evaluator">
                                    {activity.description?.[0]}
                                </p>


                                <p className="dm-assessment-description">
                                    {activity.description?.[1]}
                                </p>


                                <ol className="dm-assessment-list">

                                    {
                                        activity.objectives?.map(
                                            (item, i) => (

                                                <li key={i}>
                                                    {item}
                                                </li>

                                            )
                                        )
                                    }

                                </ol>

                            </div>


                            {/* =================================================
                                Rubric
                            ================================================= */}

                            <table className="dm-rubric-table">

                                <thead>

                                    <tr>

                                        <th>
                                            KSA Model
                                        </th>

                                        <th>
                                            แนวทางการประเมิน
                                        </th>

                                        <th>
                                            เกณฑ์การให้คะแนน
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {
                                        activity.rubric?.map(
                                            (item, i) => (

                                                <tr key={i}>

                                                    <td>
                                                        <strong>
                                                            {item.code}
                                                        </strong>
                                                    </td>


                                                    <td>
                                                        {item.name}
                                                    </td>


                                                    <td>
                                                        {item.fullScore} คะแนน
                                                    </td>

                                                </tr>

                                            )
                                        )
                                    }


                                    <tr>

                                        <td
                                            colSpan="2"
                                            style={{
                                                textAlign: "right",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            รวม
                                        </td>


                                        <td>

                                            <strong>
                                                100 คะแนน
                                            </strong>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    )
                )
            }

        </Section>
    );
}

export default DetailActivities;