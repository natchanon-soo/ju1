import CouncilBudgetOverview from "./CouncilBudgetOverview";
import {
    CouncilBudgetOverview2,
    CouncilBudgetOverview3
} from "./CouncilBudgetOverview2";

import "./home.css";

import BudgetProcess from "./BudgetProcess";
import BudgetProcess55 from "./BudgetProcess copy";

import "./CouncilBudgetOverview.css";
import "./0DyBrSfIE.css";
import "./2CLeO9pUB.css";
import "./5FtLSuawi.css";
import "./DetailPanel.DLHqIwKR.css";
import "./DivergingBars.DvZH0DK9.css";
import "./OrgLogo.CuT3kSqv.css";

import Councilhero from "./home/council-hero";

import MagicTree from "./MagicTree/MagicTree.jsx";

function Home() {
    return (
        <main className="council-hero-page">

            <Councilhero />

            <div className="container page svelte-1uha8ag">

                <header className="budget-process-head">
                    <span className="budget-process-eyebrow">
                        BUDGET PROCESS
                    </span>

                    <h2>
                        ผลการพิจารณาข้อกำหนดงบประมาณโครงการองค์กรกิจกรรมนักศึกษา
                    </h2>

                    <p>
                        ประจำปีงบประมาณ 2559 ครั้งที่ 2
                        ( ระยะเวลางบประมาณ กุมภาพันธ์ 2569 – ตุลาคม 2569 )
                    </p>
                </header>

                <div
                    className="my-frame"
                    style={{
                        width: "600px",
                        height: "600px",
                    }}
                >
                    <MagicTree
                        qr="https://your-site.com"
                        season="spring"
                        palette="natural"
                        interactive={true}
                    />
                </div>

                <CouncilBudgetOverview />
                <BudgetProcess />
                <BudgetProcess55 />

            </div>

        </main>
    );
}

export default Home;