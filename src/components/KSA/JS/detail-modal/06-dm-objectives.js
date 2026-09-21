import React from "react";

function DetailObjectives({
    detail
}) {
    return (
        <section className="dm-section-objectives">

            <h3>
                วัตถุประสงค์
            </h3>


            <ol className="dm-list">

                {
                    detail.objectives?.map(
                        (item, index) => (

                            <li key={index}>
                                {item}
                            </li>

                        )
                    )
                }

            </ol>

        </section>
    );
}

export default DetailObjectives;