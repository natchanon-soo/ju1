
var x = 2600244;
var y = 2500000;
var z = (((x / y) * 100) - 100);

function CouncilBudgetOverview2() {
    return (


        <div class="grid kpis svelte-1uha8ag">

            <div class="kpi card svelte-15czyw8 accent">
                <div class="k-label svelte-15czyw8">
                    งบประมาณรวมทั้งสิ้น
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
                    จำนวนรายการงบประมาณ
                </div>

                <div class="k-value tnum svelte-15czyw8">
                    2
                </div>

                <div class="k-foot svelte-15czyw8">
                    <span class="muted svelte-15czyw8">
                        รายการ
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


            <div class="kpi card svelte-15czyw8">
                <div class="k-label svelte-15czyw8">
                    รายจ่ายประจำ : ลงทุน
                </div>

                <div class="k-value tnum svelte-15czyw8">
                    79% : 21%
                </div>

                <div class="k-foot svelte-15czyw8">
                    <span class="muted svelte-15czyw8">
                        3 ล้านล้านบาท / 789.2 พันล้านบาท
                    </span>
                </div>
            </div>

        </div>




    );
}




var xx = 1984314;
var yy = 2000000;
var zz = (((xx / yy) * 100) - 100);

function CouncilBudgetOverview3() {
    return (


        <div class="grid kpis svelte-1uha8ag">

            <div class="kpi card svelte-15czyw8 accent">
                <div class="k-label svelte-15czyw8">
                    งบประมาณรวมทั้งสิ้น
                </div>

                <div class="k-value tnum svelte-15czyw8">
                    2,600,244 บาท
                </div>

                <div class="k-foot svelte-15czyw8">
                    <span class="muted svelte-15czyw8">
                        2,500,000 บาท
                    </span>

                    <span class="badge up">
                        {zz.toFixed(2)}%
                    </span>
                </div>
            </div>


            <div class="kpi card svelte-15czyw8">
                <div class="k-label svelte-15czyw8">
                    จำนวนรายการงบประมาณ
                </div>

                <div class="k-value tnum svelte-15czyw8">
                    2
                </div>

                <div class="k-foot svelte-15czyw8">
                    <span class="muted svelte-15czyw8">
                        รายการ
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


            <div class="kpi card svelte-15czyw8">
                <div class="k-label svelte-15czyw8">
                    รายจ่ายประจำ : ลงทุน
                </div>

                <div class="k-value tnum svelte-15czyw8">
                    79% : 21%
                </div>

                <div class="k-foot svelte-15czyw8">
                    <span class="muted svelte-15czyw8">
                        3 ล้านล้านบาท / 789.2 พันล้านบาท
                    </span>
                </div>
            </div>

        </div>




    );
}


export {
    CouncilBudgetOverview2,
    CouncilBudgetOverview3
};