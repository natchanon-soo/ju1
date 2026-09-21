import "./ProjectRow.css";

function ProjectRow({
    project,
    totalBudget,
    onClick
}) {

const budgetAllocated =
    project.budget?.allocated?.amount || 0;

const budgetActual =
    project.budget?.actual?.amount || 0;

    // % ของงบจัดสรรโครงการ เมื่อเทียบกับงบจัดสรรรวม
const allocatedPercent =
    totalBudget > 0
        ? (budgetAllocated / totalBudget) * 100
        : 0;

    // % ของงบใช้จริง เมื่อเทียบกับงบจัดสรรรวม
const actualPercent =
    totalBudget > 0
        ? (budgetActual / totalBudget) * 100
        : 0;

const actualBarPercent =
    Math.min(actualPercent, 100);

const isOverBudget =
    budgetActual > budgetAllocated;

    return (
        <button
            className="trow svelte-1qtl1gk"
            type="button"
            style={{ "--d": 1 }}
            onClick={() => onClick(project)}
        >

            <span className="cell name svelte-1qtl1gk">
                <span className="tw svelte-1qtl1gk">

                    <span className="dot svelte-1qtl1gk">
                        •
                    </span>

                    <span
                        className="lbl svelte-1qtl1gk"
                        title={project.name}
                    >
                        {project.name}
                    </span>

                </span>
            </span>

            <span className="cell tag faint svelte-1qtl1gk padding-left-8px">
                {project.type || "โครงการ"}
            </span>

            <span className="cell num tnum svelte-1qtl1gk">
                {budgetAllocated.toLocaleString("th-TH")} บาท
            </span>

            <span className="cell num tnum svelte-1qtl1gk">
                {budgetActual.toLocaleString("th-TH")} บาท
            </span>

            <span className="cell bar svelte-1qtl1gk">

                <span className="track svelte-1qtl1gk">

                    {/* ใช้จริง */}
                    <span
    className={`fill project svelte-1qtl1gk ${
        isOverBudget ? "over-budget" : ""
    }`}
    style={{
        width: actualBarPercent + "%"
    }}
/>

                    {/* ขีดงบจัดสรร */}
                    <span
                        className="budget-limit"
                        style={{
                            left:
                                allocatedPercent + "%"
                        }}
                    />

                </span>

            </span>

            <span className="cell pc tnum faint svelte-1qtl1gk">
                {actualPercent.toFixed(2)} %
            </span>
        </button>
    );
}

export default ProjectRow;