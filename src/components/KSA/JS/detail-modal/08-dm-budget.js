import React from "react";

function DetailBudget({
    detail,
    Section
}) {
    return (
        <Section title="รายการงบประมาณ">

            {
                detail.budgetGroups?.map(
                    (group, index) => (

                        <div
                            className="dm-table-card"
                            key={index}
                        >

                            <h4>

                                {group.title}

                                <span>
                                    {" "}

                                    {
                                        group.total
                                            ?.toLocaleString("th-TH")
                                    }

                                    {" "}
                                    บาท
                                </span>

                            </h4>


                            <table>

                                <tbody>

                                    {
                                        group.items?.map(
                                            (item, i) => (

                                                <tr key={i}>

                                                    <td>
                                                        {item.name}
                                                    </td>

                                                    <td>

                                                        {
                                                            item.amount
                                                                ?.toLocaleString("th-TH")
                                                        }

                                                        {" "}
                                                        บาท

                                                    </td>

                                                </tr>

                                            )
                                        )
                                    }

                                </tbody>

                            </table>

                        </div>

                    )
                )
            }


            <div className="dm-budget-total">

                <span>
                    รวมงบประมาณทั้งโครงการ
                </span>

                <strong>

                    {
                        detail.budgetGroups
                            ?.reduce(
                                (sum, group) =>
                                    sum + group.total,
                                0
                            )
                            ?.toLocaleString("th-TH")
                    }

                    {" "}
                    บาท

                </strong>

            </div>

        </Section>
    );
}

export default DetailBudget;