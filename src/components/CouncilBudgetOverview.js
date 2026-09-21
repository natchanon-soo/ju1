
var x = 4584558;
var y = 4500000;
var z = (((x / y) * 100) - 100);

function CouncilBudgetOverview() {
    return (


        <div class="grid kpis svelte-1uha8ag">

            <div class="kpi card svelte-15czyw8 accent">
                <div class="k-label svelte-15czyw8 text-shadow">
                    งบประมาณรวมทั้งสิ้น
                </div>

                <div class="k-value tnum svelte-15czyw8 text-shadow">
                    4,584,558 บาท
                </div>

                <div class="k-foot svelte-15czyw8">
                    <span class="muted svelte-15czyw8 text-shadow">
                        4,500,000 บาท
                    </span>

                    <span class="badge up">
                        +{z.toFixed(2)}%
                    </span>
                </div>
            </div>


            <div class="kpi card svelte-15czyw8">
                <div class="k-label svelte-15czyw8">
                    หมวดอุดหนุนบำรุงกิจกรรม 131243
                </div>

                <div class="k-value tnum svelte-15czyw8">
                    2,600,244 บาท
                </div>

                <div class="k-foot svelte-15czyw8">
                    <span class="muted svelte-15czyw8">
                        2,500,000 บาท
                    </span>

                    <span class="badge up">
                        +{z.toFixed(2)}%
                    </span>
                </div>
            </div>

            <div class="kpi card svelte-15czyw8">
                <div class="k-label svelte-15czyw8">
                    หมวดอุดหนุนบำรุงกีฬา 131239
                </div>

                <div class="k-value tnum svelte-15czyw8">
                    1,984,314 บาท
                </div>

                <div class="k-foot svelte-15czyw8">
                    <span class="muted svelte-15czyw8">
                        2,000,000 บาท
                    </span>

                    <span class="badge up">
                        +{z.toFixed(2)}%
                    </span>
                </div>
            </div>


            <div class="kpi card svelte-15czyw8">
                <div class="k-label svelte-15czyw8">
                    องค์กร / โครงการ
                </div>

                <div class="k-value tnum svelte-15czyw8">
                    52 / 71
                </div>

                <div class="k-foot svelte-15czyw8">
                    <span class="muted svelte-15czyw8">
                        หน่วยรับงบประมาณ
                    </span>
                </div>
            </div>


        </div>




    );
}

export default CouncilBudgetOverview;