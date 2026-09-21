import React from "react";

function DetailHeader({
    project,
    organization,
    onClose
}) {

    return (

        <div className="dm-header">

            <div className="dm-title">

                <img
                    src={organization?.img}
                    className="dm-logo"
                    alt=""
                />

                <div className="dm-title-content">

                    <h2>
                        {project.name}
                    </h2>


                    <div className="dm-project-meta">

                        <div className="dm-project-meta-item">

                            <strong>
                                {organization?.organization}
                            </strong>

                        </div>


                        <div className="dm-project-meta-item">

                            <span>
                                ปีการศึกษา
                            </span>

                            <strong>
                                {project.detail?.year}
                            </strong>

                        </div>


                        <div className="dm-project-meta-item">

                            <span>
                                วันที่จัด
                            </span>

                            <strong>
                                {project.detail?.date}
                            </strong>

                        </div>

                    </div>

                </div>

            </div>


            <button
                className="dm-close"
                onClick={onClose}
                aria-label="ปิด"
            >
                ✕
            </button>

        </div>

    );

}

export default DetailHeader;