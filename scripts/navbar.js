document.getElementById("navbar").innerHTML = `
    <header class="d-flex justify-content-between w-100" style="position: absolute; top: 0;">
        <div class="navbar-brand align-self-center">
            <a class="nav-link" href="/index.html">Mike's Website</a>
        </div>
        <nav class="navbar navbar-expand-sm bg-light w-100" >
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/index.html">
                        <span class="fa-fw fas fa-home"></span> Home</a>
                </li>
                <li>
                    <a class="nav-link" href="/pages/study.html"><span class="fa fa-book"></span> Study</a>
                </li>
                <li>
                    <a class="nav-link" href="/pages/hobby.html"><span class="fa fa-heart"></span> Hobby</a>
                </li>
                <li>
                    <a class="nav-link" href="/pages/contact.html"><span class="fas fa-address-book"></span> Contact</a>
                </li>
                <li>
                    <a class="nav-link" href="/pages/aboutme.html"><span class="fas fa-address-card"></span> About me</a>
                </li>
            </ul>
        </nav>
    </header>
    
`;
