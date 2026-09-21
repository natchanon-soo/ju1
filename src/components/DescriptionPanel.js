export default function DescriptionPanel({

    data,

    visible,

    onClose,

    onMouseEnter,

    onMouseLeave

}) {

    if (!data) return null;

    const detail = data.detail || {};

const copyDescription = async () => {
    try {
        const body = document.querySelector(".dm-description-body");

        if (!body) return;

        const text =
            `${data.code}\n` +
            `${data.name}\n\n` +
            body.innerText;

        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(error);
    }
};

    console.log(data);
    return (

        <div

            className={`dm-description-panel ${visible ? "show" : "hide"}`}

            onMouseEnter={onMouseEnter}

            onMouseLeave={onMouseLeave}

        >

            {/* HEADER */}
<div className="dm-description-header">

    <div className="dm-description-title">

        {
            data.image ? (
                <img
                    className="dm-description-image"
                    src={data.image}
                    alt={data.code}
                />
            ) : (
                <h3>{data.code}</h3>
            )
        }

        <h4>{data.name}</h4>

    </div>

    <div className="dm-description-actions">

        <button
            className="dm-description-copy"
            onClick={copyDescription}
        >
            📋 คัดลอก
        </button>
        <button
            className="dm-description-close"
            onClick={onClose}
        >
            ✕
        </button>
        
    </div>

</div>
            {/* BODY */}

            <div className="dm-description-body">

                {

                    Object.entries(detail).map(

                        ([key, value]) => (

                            <DescriptionItem

                                key={key}

                                title={key}

                                value={value}

                            />

                        )

                    )

                }

            </div>

        </div>

    );

}



function DescriptionItem({

    title,

    value

}) {

    if (!value) return null;

    return (

        <section className="dm-description-section">

            <h5>

                {translateTitle(title)}

            </h5>

            {

                Array.isArray(value)

                    ?

                    <ul>

                        {

                            value.map((item, index) => (

                                <li key={index}>

                                    {

                                        typeof item === "object"

                                            ?

                                            <>

                                                <strong>

                                                    {item.title}

                                                </strong>

                                                {

                                                    item.detail &&

                                                    <span>

                                                        {" : "}

                                                        {item.detail}

                                                    </span>

                                                }

                                            </>

                                            :

                                            item

                                    }

                                </li>

                            ))

                        }

                    </ul>

                    :

                    <p>

                        {value}

                    </p>

            }

        </section>

    );

}



function translateTitle(key) {

    const titles = {

        title: "หัวข้อ",

        collection: "รอบการเก็บข้อมูล",

        collection: "รอบการเก็บข้อมูล",

        plan: "แผนยุทธศาสตร์",

        strategy: "ความเชื่อมโยงยุทธศาสตร์",

        owner: "ผู้รับผิดชอบ",

        meaning: "ความหมาย",

        explanation: "คำอธิบาย",

        formula: "วิธีการคำนวณ",

        evaluation: "พิจารณาจาก",

        references: "เอกสารอ้างอิง",

        objective: "วัตถุประสงค์",

        description: "รายละเอียด",

        reports: "ข้อมูลที่ต้องรายงาน",

        type: "รูปแบบ",

        keywords: "คำสำคัญ",

        skill: "Skill",

        define: "นิยาม",

        activity: "คอร์ส/กิจกรรม"

    };

    return titles[key] || key;

}