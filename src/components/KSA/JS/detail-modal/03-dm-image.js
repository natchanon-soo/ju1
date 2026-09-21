import React from "react";

function DetailImage({
    detail,
    Section
}) {
    return (
        <Section title="รูปภาพกิจกรรม">

            <div className="dm-gallery">

                {
                    detail.images?.gallery?.map(
                        (image, index) => (

                            <div
                                className="dm-gallery-item"
                                key={index}
                            >

                                <img
                                    src={image.src}
                                    alt={image.title}
                                />

                            </div>

                        )
                    )
                }

            </div>


            {
                detail.images?.more &&

                <a
                    className="dm-button-link"
                    href={detail.images.more}
                    target="_blank"
                    rel="noreferrer"
                >
                    📷 ดูรูปภาพเพิ่มเติม
                </a>
            }

        </Section>
    );
}

export default DetailImage;