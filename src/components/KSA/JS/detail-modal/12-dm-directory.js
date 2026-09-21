import React from "react";

function DetailDirectory({
    detail,
    Section,
    DirectoryBox,
    SdgGrid,
    KsaModelBox,
    DirectoryItem,
    handleDescriptionHover,
    handleDescriptionLeave
}) {
    return (
        <Section title="Directory Mapping">


            {/* =================================================
                METHODS
            ================================================= */}

            <DirectoryBox
                title="รูปแบบการจัดกิจกรรม"
                icon="📋"
                grid="grid-2"
                items={
                    detail.directory?.methods || []
                }
                onHover={
                    handleDescriptionHover
                }
                onLeave={
                    handleDescriptionLeave
                }
            />


            {/* =================================================
                OKRs
            ================================================= */}

            <DirectoryBox
                title="OKRs"
                icon="🎯"
                grid="grid-2"
                items={
                    detail.directory?.okrs || []
                }
                onHover={
                    handleDescriptionHover
                }
                onLeave={
                    handleDescriptionLeave
                }
            />


            {/* =================================================
                SDGs
            ================================================= */}

            <SdgGrid
                items={
                    detail.directory?.sdgs || []
                }
                onHover={
                    handleDescriptionHover
                }
                onLeave={
                    handleDescriptionLeave
                }
            />


            {/* =================================================
                RUBRIC LEVEL
            ================================================= */}

            {
                detail.rubricLevel && (

                    <div className="dm-directory-box">

                        <h4>
                            📊 {detail.rubricLevel.title}
                        </h4>


                        <table className="dm-rubric-level-table">

                            <thead>

                                <tr>

                                    <th>
                                        {
                                            detail.rubricLevel
                                                .headers[0]
                                        }
                                    </th>

                                    <th>
                                        {
                                            detail.rubricLevel
                                                .headers[1]
                                        }
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {
                                    detail.rubricLevel.items.map(
                                        (item, index) => (

                                            <tr key={index}>

                                                <td>
                                                    {item.score}
                                                </td>

                                                <td>
                                                    {item.level}
                                                </td>

                                            </tr>

                                        )
                                    )
                                }

                            </tbody>

                        </table>


                        <p className="dm-rubric-note">

                            * {detail.rubricLevel.note}

                        </p>

                    </div>

                )
            }


            {/* =================================================
                APPROACH
            ================================================= */}

            <DirectoryBox
                title="Approach"
                grid="grid-4"
                icon="📝"
                items={
                    detail.directory?.approach || []
                }
                onHover={
                    handleDescriptionHover
                }
                onLeave={
                    handleDescriptionLeave
                }
            />


            {/* =================================================
                KSA MODEL + SCORE
            ================================================= */}

            <KsaModelBox
                ksa={
                    detail.directory?.ksa || {}
                }

                scoreSummary={
                    detail.ksaScoreSummary || {}
                }

                onHover={
                    handleDescriptionHover
                }

                onLeave={
                    handleDescriptionLeave
                }

                DirectoryItem={
                    DirectoryItem
                }
            />


            {/* =================================================
                EGGS
            ================================================= */}

            <div className="dm-directory-box">

                <h4>
                    🐣 EGGS Identity
                </h4>


                {
                    Object.entries(
                        detail.directory?.eggs || {}
                    ).map(
                        ([key, group]) => (

                            <div
                                key={key}
                                className="dm-eggs-group"
                            >

                                <h5>
                                    {group.title}
                                </h5>


                                <div className="dm-directory-grid grid-3">

                                    {
                                        group.items?.map(
                                            (item, index) => (

                                                <DirectoryItem
                                                    key={
                                                        item.code ||
                                                        index
                                                    }

                                                    item={
                                                        item
                                                    }

                                                    category="eggs"

                                                    onHover={
                                                        handleDescriptionHover
                                                    }

                                                    onLeave={
                                                        handleDescriptionLeave
                                                    }
                                                />

                                            )
                                        )
                                    }

                                </div>

                            </div>

                        )
                    )
                }

            </div>

        </Section>
    );
}

export default DetailDirectory;