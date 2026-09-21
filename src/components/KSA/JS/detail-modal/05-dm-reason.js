import React from "react";

function DetailReason({
    detail
}) {
    return (
        <section className="dm-section-reason">

            <h3>
                หลักการและเหตุผล
            </h3>


            <div className="dm-text">

                {
                    detail.reason?.map(
                        (text, index) => (

                            <p key={index}>
                                {text}
                            </p>

                        )
                    )
                }

            </div>

        </section>
    );
}

export default DetailReason;