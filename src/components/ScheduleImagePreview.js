import React from "react";
import "./KSA/css/detail-modal/07-dm-schedule.css";

function ScheduleImagePreview({
    images,
    visible,
    onMouseEnter,
    onMouseLeave
}) {
    if (!images?.length) return null;

    return (
        <div
            className={`dm-schedule-image-panel ${
                visible ? "show" : "hide"
            }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt || ""}
                />
            ))}
        </div>
    );
}

export default ScheduleImagePreview;