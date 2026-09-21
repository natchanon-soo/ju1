import descriptions from "./descriptions";

function DirectoryItem({
    item,
    category,
    onHover,
    onLeave
}) {

    const info =
        category
            ? descriptions[category]?.[item.code]
            : descriptions.okrKpi?.[item.code] ||
              descriptions.methods?.[item.code] ||
              descriptions.approach?.[item.code] ||
              descriptions.sdgs?.[item.code] ||
              descriptions[item.code];

    const data = info || {
        code: item.code,
        name: item.code,
        detail: {}
    };

    const handleMouseEnter = () => {

        onHover({
            code: data.code,
            name: data.name,
            image: data.image,
            detail: data.detail
        });

    };

    return (
        <div
            className={`dm-directory-item ${
                item.checked
                    ? "active"
                    : "inactive"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={onLeave}
        >

            <strong>
                {item.checked ? "☑" : "☐"} {item.code}
            </strong>

            <p>
                {data.name}
            </p>

        </div>
    );
}

export default DirectoryItem;