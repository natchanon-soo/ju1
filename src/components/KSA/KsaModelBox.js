import KsaScoreCard from "./KsaScoreCard";

function KsaModelBox({
    ksa = {},
    scoreSummary = {},
    onHover,
    onLeave,
    DirectoryItem
}) {

    /*
     * =====================================================
     * NORMALIZE SCORE SUMMARY
     * =====================================================
     *
     * รองรับทั้ง:
     *
     * scoreSummary = {
     *     K2: {...},
     *     K3: {...},
     *     S3: {...},
     *     A3: {...}
     * }
     *
     * และกรณี:
     *
     * scoreSummary = {
     *     ksaScoreSummary: {
     *         K2: {...}
     *     }
     * }
     */

    const summaries =
        scoreSummary?.ksaScoreSummary &&
        typeof scoreSummary.ksaScoreSummary === "object"
            ? scoreSummary.ksaScoreSummary
            : (
                scoreSummary &&
                typeof scoreSummary === "object"
                    ? scoreSummary
                    : {}
            );


    /*
     * =====================================================
     * KSA GROUPS
     * =====================================================
     */

    const groups =
        ksa && typeof ksa === "object"
            ? Object.entries(ksa)
            : [];


    /*
     * =====================================================
     * GET SUMMARY
     * =====================================================
     */

    const getSummary = (code) => {

        if (!code) {
            return null;
        }

        const summary = summaries?.[code];

        if (
            !summary ||
            typeof summary !== "object"
        ) {
            return null;
        }

        return summary;
    };


    return (

        <div className="dm-directory-box dm-ksa-model-box">

            <h4>
                📚 KSA Model
            </h4>


            {groups.map(([key, group]) => {

                const items =
                    Array.isArray(group?.items)
                        ? group.items
                        : [];


                /*
                 * =================================================
                 * SCORE ITEMS
                 *
                 * ไม่ดู checked
                 *
                 * ถ้ามีข้อมูลใน ksaScoreSummary
                 * ให้แสดง
                 * =================================================
                 */

                const scoreItems =
                    items.filter(item => {

                        if (!item?.code) {
                            return false;
                        }

                        return Boolean(
                            getSummary(item.code)
                        );

                    });


                return (

                    <div
                        className="dm-eggs-group dm-ksa-group"
                        key={key}
                    >

                        {/* =========================================
                            TITLE
                        ========================================== */}

                        <h5>
                            {group?.title || key}
                        </h5>


                        {/* =========================================
                            KSA ITEMS
                        ========================================== */}

                        <div className="dm-directory-grid grid-3">

                            {items.map((item, index) => (

                                <DirectoryItem
                                    key={
                                        item?.code ||
                                        `${key}-${index}`
                                    }

                                    item={item}

                                    category="ksa"

                                    onHover={onHover}

                                    onLeave={onLeave}
                                />

                            ))}

                        </div>


                        {/* =========================================
                            SCORE CARDS
                        ========================================== */}

                        {scoreItems.length > 0 && (

                            <div className="dm-ksa-score-list">

                                {scoreItems.map(item => {

                                    const summary =
                                        getSummary(item.code);


                                    if (!summary) {
                                        return null;
                                    }


                                    return (

                                        <KsaScoreCard
                                            key={item.code}

                                            code={item.code}

                                            summary={summary}
                                        />

                                    );

                                })}

                            </div>

                        )}

                    </div>

                );

            })}

        </div>

    );
}


export default KsaModelBox;