function DetailFeeCertificate({ fee, certificate }) {
    return (
        <section className="dm-section-fee-certificate">
            <h3>ค่าใช้จ่ายและเกียรติบัตร</h3>

            <div className="dm-option-row">
                <span className="dm-option-label">
                    ค่าใช้จ่ายที่เรียกเก็บจากผู้เข้าร่วมโครงการ
                </span>
                
                <div className="dm-option-g">
                    <div className="dm-option-g2">
                        <span>
                            {fee?.hasFee ? "☑ มี" : "☐ มี"}
                        </span>
                        {fee?.hasFee && (
                            <span>
                                จำนวน {fee.amount?.toLocaleString("th-TH") || ".............."} บาทต่อคน
                            </span>
                        )}
                    </div>

                <span>
                    {fee?.hasFee ? "☐ ไม่มี" : "☑ ไม่มี"}
                </span>
                </div>
            </div>

            <div className="dm-option-row">
                <span className="dm-option-label">
                    เกียรติบัตรหรือ Certificate
                </span>

                <div className="dm-option-g">
                <span>
                    {certificate?.hasCertificate ? "☑ มี" : "☐ มี"}
                </span>

                <span>
                    {certificate?.hasCertificate ? "☐ ไม่มี" : "☑ ไม่มี"}
                </span>
                </div>
            </div>
        </section>
    );
}

export default DetailFeeCertificate;