function DetailProcess({ process }) {
    if (!process?.length) return null;

    return (
        <section className="dm-process-section">
            <h3>ขั้นตอนการดำเนินงาน</h3>

            {process.map((group, index) => (
                <div className="dm-process-group" key={index}>
                    <h4>{group.title}</h4>

                    <ol className="dm-process-list">
                        {group.items?.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <div className="dm-process-item">
                                    <div className="dm-process-text">
                                        {item.description && (
                                            <p>{item.description}</p>
                                        )}

                                        {item.link?.url && (
                                            <a
                                                href={item.link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="dm-process-link"
                                            >
                                                {item.link.label}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            ))}
        </section>
    );
}

export default DetailProcess;