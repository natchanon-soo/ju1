import React from "react";

function DetailSummary({
    budgetAllocated,
    budgetActual,
    budgetRemaining,
    budgetPercent
}) {

    return (

        <div className="dm-summary">

            <div className="dm-card dm-budget-card">

                <div className="dm-budget-title">
                    งบประมาณ
                </div>


                <div className="dm-budget-item">

                    <small>
                        ได้รับจัดสรร
                    </small>

                    <div>

                        <strong>
                            {budgetAllocated.toLocaleString("th-TH")}
                        </strong>

                        <em>
                            บาท
                        </em>

                    </div>

                </div>


                <div className="dm-budget-item">

                    <small>
                        ใช้ไป
                    </small>

                    <div>

                        <strong>
                            {budgetActual.toLocaleString("th-TH")}
                        </strong>

                        <em>
                            บาท
                        </em>

                    </div>

                </div>


                <div className="dm-budget-item dm-budget-remaining">

                    <small>
                        คงเหลือ
                    </small>

                    <div>

                    <strong>
                        {budgetAllocated === 0
                            ? "-"
                            : budgetRemaining.toLocaleString("th-TH")
                        }
                    </strong>

                    {
                        budgetAllocated > 0 && (
                            <em>
                                บาท
                            </em>
                        )
                    }


                    </div>

                </div>


                <div className="dm-budget-item dm-budget-percent">

                    <small>
                        คิดเป็น
                    </small>

                    <div>

                        {
                            budgetActual < budgetAllocated && (

                                <strong>
                                    ↓ {budgetPercent.toFixed(2)}
                                </strong>

                            )
                        }


                        {
                            budgetActual > budgetAllocated && (

                                <strong>
                                    ↑ {budgetPercent.toFixed(2)}
                                </strong>

                            )
                        }


                        {
                            budgetActual === budgetAllocated && (

                                <strong>
                                    → {budgetPercent.toFixed(2)}
                                </strong>

                            )
                        }


                        <em>
                            %
                        </em>


                        {
                            budgetActual < budgetAllocated && (

                                <span>
                                    ลดลง
                                </span>

                            )
                        }


                        {
                            budgetActual > budgetAllocated && (

                                <span>
                                    เพิ่มขึ้น
                                </span>

                            )
                        }


                        {
                            budgetActual === budgetAllocated && (

                                <span>
                                </span>

                            )
                        }

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DetailSummary;