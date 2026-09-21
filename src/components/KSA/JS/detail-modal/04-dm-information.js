import React from "react";

function DetailInformation({
    detail,
    Section,
    Info
}) {
    return (
        <Section title="ข้อมูลโครงการ">

            <Info
                label="สถานที่"
                value={detail.location}
            />

<div className="dm-info">

    <span>
        กลุ่มเป้าหมาย
    </span>

    <div className="dm-info-target">

        {
            detail.target?.groups?.map(
                (group, index) => (

                    <div
                        className="dm-info-target-row"
                        key={index}
                    >

                        <span>
                            {group.name}
                        </span>

                        <strong>
                            {
                                group.amount?.toLocaleString(
                                    "th-TH"
                                )
                            }
                        </strong>

                        <em>
                            คน
                        </em>

                    </div>

                )
            )
        }


        <div className="dm-info-target-total">

            <span>
                รวม
            </span>

            <strong>
                {
                    detail.target?.total?.toLocaleString(
                        "th-TH"
                    )
                }
            </strong>

            <em>
                คน
            </em>

        </div>

    </div>

</div>

            {/* =================================================
                ผู้รับผิดชอบ
            ================================================= */}

            <Info
                label="ผู้รับผิดชอบ"
                value={
                    detail.staff?.join(", ")
                }
            />


            {/* =================================================
                ที่ปรึกษา
            ================================================= */}

            <Info
                label="ที่ปรึกษา"
                value={
                    Array.isArray(detail.advisor)
                        ? detail.advisor.join(", ")
                        : detail.advisor
                }
            />

        </Section>
    );
}

export default DetailInformation;