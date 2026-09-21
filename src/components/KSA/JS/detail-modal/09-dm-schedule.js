import React from "react";

function DetailSchedule({
    detail,
    ScheduleImagePreview,
    schedulePreview,
    schedulePreviewVisible,
    scheduleHideTimer,
    handleScheduleMouseEnter,
    handleScheduleMouseLeave
}) {
    return (
        <section className="dm-schedule-section">

            <h3>
                กำหนดการโครงการ
            </h3>


            {
                detail.schedule?.map(
                    (day, index) => (

                        <div
                            className="dm-schedule-day"
                            key={index}
                        >

                            <div
                                className="dm-schedule-day-header"
                                onMouseEnter={() =>
                                    handleScheduleMouseEnter(
                                        day.images
                                    )
                                }
                                onMouseLeave={
                                    handleScheduleMouseLeave
                                }
                                onClick={() => {

                                    if (
                                        day.images?.length
                                    ) {

                                        window.open(
                                            day.images[0].src,
                                            "_blank",
                                            "noopener,noreferrer"
                                        );

                                    }

                                }}
                            >

                                <span className="dm-schedule-date">
                                    {day.date}
                                </span>


                                {
                                    day.images?.length > 0 && (

                                        <span className="dm-schedule-image-link">
                                            🖼️ ดูรูปภาพ
                                        </span>

                                    )
                                }

                            </div>


                            {
                                schedulePreview && (

                                    <ScheduleImagePreview
                                        images={
                                            schedulePreview
                                        }
                                        visible={
                                            schedulePreviewVisible
                                        }
                                        onMouseEnter={() => {

                                            clearTimeout(
                                                scheduleHideTimer.current
                                            );

                                        }}
                                        onMouseLeave={
                                            handleScheduleMouseLeave
                                        }
                                    />

                                )
                            }


                            <div className="dm-schedule-list">

                                {
                                    day.items?.map(
                                        (
                                            item,
                                            itemIndex
                                        ) => (

                                            <div
                                                className="dm-schedule-row"
                                                key={itemIndex}
                                            >

                                                <strong>
                                                    {item.time}
                                                </strong>

                                                <span>
                                                    {item.activity}
                                                </span>

                                            </div>

                                        )
                                    )
                                }

                            </div>

                        </div>

                    )
                )
            }

        </section>
    );
}

export default DetailSchedule;