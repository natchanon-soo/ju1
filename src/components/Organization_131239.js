import ProjectRow from "./ProjectRow";
import { totalBudget } from "./data_131239";
import "./Organization.css";

function Organization_131239({
    tattoo,
    open,
    onToggle,
    onProjectClick,
    sortMode
}) {

    
    const budgetAllocated =
    tattoo.projects?.reduce(
        (sum, project) =>
            sum + (project.budget?.allocated?.amount || 0),
        0
    ) || 0;

const budgetActual =
    tattoo.projects?.reduce(
        (sum, project) =>
            sum + (project.budget?.actual?.amount || 0),
        0
    ) || 0;

const allocatedPercent =
    totalBudget > 0
        ? (budgetAllocated / totalBudget) * 100
        : 0;

const actualPercent =
    totalBudget > 0
        ? (budgetActual / totalBudget) * 100
        : 0;

const actualBarPercent =
    Math.min(actualPercent, 100);

const isOverBudget =
    budgetActual > budgetAllocated;

const sortedProjects =
    [...(tattoo.projects || [])].sort((a, b) => {

        if (sortMode === "type") {
            return (a.type || "").localeCompare(
                b.type || "",
                "th"
            );
        }

        if (sortMode === "allocated") {
            return (
                (b.budget?.allocated?.amount || 0) -
                (a.budget?.allocated?.amount || 0)
            );
        }

        if (sortMode === "actual") {
            return (
                (b.budget?.actual?.amount || 0) -
                (a.budget?.actual?.amount || 0)
            );
        }

        return 0;
    });

    return (
        <>

            {/* ================= องค์กร ================= */}

            <button
                className="trow svelte-1qtl1gk"
                type="button"
                style={{ "--d": 0 }}
                onClick={onToggle}
            >

                <span className="cell name svelte-1qtl1gk">

                    <span className="tw svelte-1qtl1gk">

                        <span
                            className="caret svelte-1qtl1gk"
                            style={{
                                transform: open
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                                transition: ".2s"
                            }}
                        >

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>

                        </span>


                        <img
                            className="org-logo svelte-11f6rk9"
                            src={tattoo.img}
                            alt=""
                        />


                        <span
                            className="lbl svelte-1qtl1gk"
                            title={tattoo.organization}
                        >
                            {tattoo.organization}

                            {(!tattoo.projects || tattoo.projects.length === 0) && (
                                <span className="no-project-text">
                                    {" "} ( ไม่ยื่นของบประมาณ )
                                </span>
                            )}
                        </span>


                    </span>

                </span>


                <span className="cell tag faint svelte-1qtl1gk">
                    {tattoo.level}
                </span>


                <span className="cell num tnum svelte-1qtl1gk">
                    {budgetAllocated.toLocaleString("th-TH")} บาท
                </span>

                <span className="cell num tnum svelte-1qtl1gk">
                    {budgetActual.toLocaleString("th-TH")} บาท
                </span>

                <span className="cell bar svelte-1qtl1gk">
    <span className="track svelte-1qtl1gk">

        <span
            className={`fill svelte-1qtl1gk ${
                isOverBudget ? "over-budget" : ""
            }`}
            style={{
                width: actualBarPercent + "%"
            }}
        />

        <span
            className="budget-limit"
            style={{
                left: allocatedPercent + "%"
            }}
        />

    </span>
</span>


                <span className="cell pc tnum faint svelte-1qtl1gk">
    {actualPercent.toFixed(2)} %
</span>


            </button>



            {/* ================= โครงการ ================= */}


            {
                open &&
                sortedProjects.map((project) => (

                    <ProjectRow
                        key={project.id}
                        project={project}
                        totalBudget={totalBudget}
                        sortMode={sortMode}
                        onClick={() =>
                            onProjectClick(project, tattoo)
                        }
                    />

                ))
            }


        </>
    );

}


export default Organization_131239;