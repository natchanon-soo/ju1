import "./CouncilBudgetOverview.css";

function CouncilBudgetOverview() {
    return (
        <section className="budget-kpis">

    <article className="budget-kpi">
        <span className="budget-kpi-label">
            งบประมาณทั้งหมด
        </span>

        <strong className="budget-kpi-value">
            30,690
        </strong>

        <span className="budget-kpi-unit">
            บาท
        </span>
    </article>

    <article className="budget-kpi">
        <span className="budget-kpi-label">
            งบประมาณที่จัดสรร
        </span>

        <strong className="budget-kpi-value">
            25,000
        </strong>

        <span className="budget-kpi-unit">
            บาท
        </span>
    </article>

    <article className="budget-kpi">
        <span className="budget-kpi-label">
            เบิกจ่ายจริง
        </span>

        <strong className="budget-kpi-value">
            18,500
        </strong>

        <span className="budget-kpi-unit">
            บาท
        </span>
    </article>

    <article className="budget-kpi">
        <span className="budget-kpi-label">
            คงเหลือ
        </span>

        <strong className="budget-kpi-value">
            6,500
        </strong>

        <span className="budget-kpi-unit">
            บาท
        </span>
    </article>

</section>
    );
}

export default CouncilBudgetOverview;