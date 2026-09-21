
import { homemembers } from "../../data/homemembers";;

function Councilhero() {
    return (
        <section className="council-hero">

            {/* Background */}
            <img
                className="hero-background"
                src="/images/council/background.jpg"
                alt=""
            />

            {/* People */}
            <div className="hero-members">
                {homemembers.map((member) => (
                    <div
                        key={member.id}
                        className="hero-member"
                        style={{
                            "--scale": member.scale ?? 1,
                            "--x": member.x,
                            "--y": member.y,
                            "--width": member.width,
                            "--z": (member.row * 100) + member.order
                        }}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            style={{
                                transform: `
                                    scale(${member.scale ?? 1})
                                    scaleX(${member.flip ? -1 : 1})
        `
                            }}
                        />

                        <div className="hero-member-name"
                        >
                            <strong>{member.name}</strong>
                            <span>{member.position}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Logo */}
            <img
                className="hero-logo"
                src="/images/council/logov3.png"
                alt="สภานักศึกษา"
            />

            {/* Title */}
            <div className="hero-title">
                <span>
                    KHON KAEN UNIVERSITY
                </span>

                <h1>
                    STUDENT COUNCIL
                </h1>

                <div className="hero-title-line" />

                <p>
                    สภานักศึกษา มหาวิทยาลัยขอนแก่น
                    ประจำปีการศึกษา 2569
                </p>
            </div>

        </section>

    )
}

export default Councilhero;