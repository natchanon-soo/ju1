import "./BudgetProcess.css";

const processSteps = [
    {
        id: 1,
        date: "21 ก.ย. 69",
        duration: "15 วัน",
        title: "องค์การนักศึกษา",
        description:
            "พิจารณากลั่นกรองโครงการและงบประมาณขององค์กรกิจกรรม ดำเนินการให้แล้วเสร็จ ตั้งแต่วันที่ออกประกาศ",
        image: "/images/kkusu.png",
        color: "#9B4023"
    },
    {
        id: 2,
        date: "4 ต.ค. 69",
        duration: "10 วัน",
        title: "สภานักศึกษา",
        description:
            "พิจารณาอนุมัติร่างข้อกำหนดโครงการและงบประมาณขององค์กรกิจกรรม (ภายใน 15 วัน นับแต่สภาได้รับเรื่อง)",
        image: "/images/kkusc.png",
        color: "#ff6a13"
    },
    {
        id: 3,
        date: "ภายใน 14 ต.ค. 69",
        duration: "5 วัน",
        title: "คณะอนุกรรมการ",
        description:
            "พิจารณาร่างข้อกำหนดโครงการและงบประมาณฯ ก่อนนำเข้าที่ประชุมคณะกรรมการพัฒนานักศึกษา",
        image: "/images/icon/conversation.png",
        color: "#e8aa43"
    },
    {
        id: 4,
        date: "ภายใน ต.ค. 69",
        duration: "5 วัน",
        title: "นำเข้าฝ่ายพัฒนานักศึกษา",
        description:
            "คณะอนุกรรมการนำร่างข้อกำหนดโครงการและงบประมาณให้คณะกรรมการพัฒนานักศึกษาฯ พิจารณา",
        image: "/images/icon/presentation.png",
        color: "#489bb3"
    },
    {
        id: 5,
        date: "ภายใน ต.ค. 69",
        duration: null,
        title: "ออกประกาศฯ",
        description:
            "กองพัฒนานักศึกษาฯ ออกประกาศผลการพิจารณาข้อกำหนดงบประมาณ ปีงบประมาณ 2570 ครั้งที่ 1 ภายในเดือนตุลาคม 2569",
        image: "/images/icon/email.png",
        color: "#5b4d99"
    }
];


function BudgetProcess() {
    return (
        <section className="budget-process">

            <div>



                <div className="budget-timeline">

                    {processSteps.map((step) => (
                        <article
                            className="budget-timeline-row"
                            key={step.id}
                            style={{
                                "--step-color": step.color
                            }}
                        >

                            <div className="budget-timeline-left">

                                <div className="budget-date">
                                    {step.date}
                                </div>

                                {step.duration && (
                                    <div className="budget-duration">
                                        {step.duration}
                                    </div>
                                )}

                            </div>


                            <div className="budget-timeline-content">

                                <div className="budget-org-icon">
                                    <img
                                        src={step.image}
                                        alt=""
                                    />
                                </div>


                                <div className="budget-org-info">

                                    <h3>
                                        {step.title}
                                    </h3>

                                    <p>
                                        {step.description}
                                    </p>

                                </div>

                            </div>

                        </article>
                    ))}

                </div>


            </div>

        </section>
    );
}


export default BudgetProcess;