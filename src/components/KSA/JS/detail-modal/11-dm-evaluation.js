import React from "react";

function DetailEvaluation({
    detail,
    Section
}) {
    return (
        <Section
            title="ตารางประเมินผลกิจกรรม"
        >

            {
                detail.evaluation?.url && (

                    <a
                        className="dm-button-link"
                        href={detail.evaluation.url}
                        target="_blank"
                        rel="noreferrer"
                    >

                        📊 เปิดตารางประเมินผลกิจกรรม

                    </a>

                )
            }

        </Section>
    );
}

export default DetailEvaluation;