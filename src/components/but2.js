function Bbb2(props) {

    const { tattoo } = props;

    let x = 170000;
    let y = 150000;
    let z = 0;
    let a = 0;

    //z = (x/(x+y))*100;

    //const percent = z + "%";

    return (
                        <button
                            className="trow svelte-1qtl1gk"
                            type="button"
                            style={{ "--d": 0 }}
                        >
                            <span className="cell name svelte-1qtl1gk">
                                <span className="tw svelte-1qtl1gk">
                                    <span className="caret svelte-1qtl1gk">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2.25}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                            className="lucide-icon lucide lucide-chevron-right"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </span>

                                    <img
                                        className="org-logo svelte-11f6rk9"
                                        src={tattoo.img}
                                        alt=""
                                        aria-hidden="true"
                                        loading="lazy"
                                        decoding="async"
                                    />

                                    <span
                                        className="lbl svelte-1qtl1gk"
                                        title="{tattoo.organization}"
                                    >
                                        {tattoo.organization}
                                    </span>
                                </span>
                            </span>

                            <span className="cell tag faint svelte-1qtl1gk">
                                {tattoo.level}
                            </span>

                            <span className="cell num tnum svelte-1qtl1gk">
                                {tattoo.budget}
                            </span>

                            <span className="cell bar svelte-1qtl1gk">
                                <span className="track svelte-1qtl1gk">
                                    <span
                                        className="fill svelte-1qtl1gk"
                                        style={{ width: tattoo.wp + "%" }}
                                    />
                                </span>
                            </span>

                            <span className="cell pc tnum faint svelte-1qtl1gk">
                                {tattoo.percent}
                            </span>
                        </button>

    );
}

export default Bbb2;