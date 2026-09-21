import React from "react";

function DetailDocument({
    detail,
    Section
}) {
    return (
        <Section title="เอกสารที่เกี่ยวข้อง">

            <div className="dm-document-list">

                {
                    detail.documents?.map(
                        (doc, index) => (

                            <a
                                key={index}
                                className="dm-button-link"
                                href={doc.url}
                                target="_blank"
                                rel="noreferrer"
                            >

                                📄 {doc.name}

                            </a>

                        )
                    )
                }

            </div>

        </Section>
    );
}

export default DetailDocument;