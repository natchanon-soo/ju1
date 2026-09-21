import { Link } from "react-router-dom";

function AppHeader() {

    return (
        <header class="site-header svelte-12qhfyh">
            <div class="container hdr svelte-12qhfyh">
                <a class="brand svelte-12qhfyh" href="/">
                <span class="brand-mark svelte-12qhfyh">
                    <svg viewBox="0 0 255.53 221.32" aria-hidden="true" class="svelte-12qhfyh"></svg>
                    <img src="/images/kkusc.png" width="34" height="34" />
                </span>
                
                <span class="brand-text svelte-12qhfyh">
                    <strong class="svelte-12qhfyh">สภานักศึกษามหาวิทยาลัยขอนแก่น</strong>
                        <small class="faint svelte-12qhfyh">Khon Kaen University Student Council</small>
                </span>
                </a>

                <nav class="mainnav svelte-12qhfyh">

                    <Link
    to="/131243"
    className="navlink svelte-12qhfyh"
>
    <span className="lb svelte-12qhfyh">
        หมวด 131243
    </span>
</Link>

<Link
    to="/131239"
    className="navlink svelte-12qhfyh"
>
    <span className="lb svelte-12qhfyh">
        หมวด 131239
    </span>
</Link>

<Link
    to="/about"
    className="navlink svelte-12qhfyh"
>
    <span className="lb svelte-12qhfyh">
        เกี่ยวกับ
    </span>
</Link>


                    <a data-sveltekit-noscroll="" href="/" class="navlink svelte-12qhfyh">
                        <span class="ic svelte-12qhfyh">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="lucide-icon lucide lucide-layout-dashboard">
                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                            </svg>
                        </span>
                        <span class="lb svelte-12qhfyh">ภาพรวม</span>
                    </a>
                    <a data-sveltekit-noscroll="" href="/explore" class="navlink svelte-12qhfyh active">
                        <span class="ic svelte-12qhfyh">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="lucide-icon lucide lucide-list-tree">
                                <path d="M8 5h13"></path>
                                <path d="M13 12h8"></path>
                                <path d="M13 19h8"></path>
                                <path d="M3 10a2 2 0 0 0 2 2h3"></path>
                                <path d="M3 5v12a2 2 0 0 0 2 2h3"></path>
                            </svg>
                        </span>
                        <span class="lb svelte-12qhfyh">สำรวจงบ</span>
                    </a>
                    <a data-sveltekit-noscroll="" href="/search" class="navlink svelte-12qhfyh">
                        <span class="ic svelte-12qhfyh">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="lucide-icon lucide lucide-search">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx="11" cy="11" r="8"></circle>
                            </svg>
                        </span>
                        <span class="lb svelte-12qhfyh">ค้นหา</span>
                    </a>
                    <a data-sveltekit-noscroll="" href="/compare" class="navlink svelte-12qhfyh">
                        <span class="ic svelte-12qhfyh">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="lucide-icon lucide lucide-git-compare-arrows">
                                <circle cx="5" cy="6" r="3"></circle>
                                <path d="M12 6h5a2 2 0 0 1 2 2v7"></path>
                                <path d="m15 9-3-3 3-3"></path>
                                <circle cx="19" cy="18" r="3"></circle>
                                <path d="M12 18H7a2 2 0 0 1-2-2V9"></path>
                                <path d="m9 15 3 3-3 3"></path>
                            </svg>
                        </span>
                        <span class="lb svelte-12qhfyh">เทียบรายปี</span>
                    </a>
                </nav>
                <div class="yearbox svelte-12qhfyh">
                    <div class="yearswitch svelte-12qhfyh">
                        <button class="yr svelte-12qhfyh">2569</button>
                        <button class="yr svelte-12qhfyh active">2570</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;