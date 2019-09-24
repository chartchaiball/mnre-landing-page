var headerTxt = `<div class="top-header">
<div class="container-fluid">
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
            <p><span>ที่ตั้ง:</span> <i class="flaticon-placeholder"></i> 92 ซอยพหลโยธิน 7 ถนนพหลโยธิน แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400</p>
        </div>

        <div class="col-lg-6 col-md-6">
            <ul>
                <li><span>โทรศัพท์:</span> <i class="flaticon-phone-call"></i> <a href="tel:0 2278 8500"> 0 2278 8500</a></li>
                <li><span>อีเมล์:</span> <i class="flaticon-message-closed-envelope"></i> <a href="mailto:evolta@gmail.com"> webmaster@mnre.go.th</a></li>
            </ul>
        </div>
    </div>
</div>
</div>

<div class="navbar-area">
<div class="evolta-responsive-nav">
    <div class="container">
            <div class="header">
            <a href="index.html">
                    <img src="assets/img/logo_mnre_small.png" alt="logo" height="50px">
                    <div class="title">กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม</div>
                    <div class="sub-title">Ministry of Natural Resources and Environment</div>
                    </a>
            </div>
        <div class="evolta-responsive-menu">
        </div>
    </div>
</div>

<div class="evolta-nav">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="index.html">
                    <img src="assets/img/logo_mnre_small.png" alt="logo" style="max-height: 70px">
            </a>

            <div class="logo-text">
                <div class="logo-title">กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม</div>
                <div class="logo-sub-title">Ministry of Natural Resources and Environment</div>
            </div>

            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" >
                <ul class="navbar-nav">
                        <li class="nav-item"><a href="index.html" class="nav-link">หน้าแรก</a></li>
              
                    <li class="nav-item"><a href="aboutproject.html" class="nav-link">เกี่ยวกับโครงการ</a></li>

                    <li class="nav-item"><a href="#" class="nav-link">Metadata <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>

                            <li class="nav-item"><a href="features.html" class="nav-link">Features</a></li>

                            <li class="nav-item"><a href="team.html" class="nav-link">Team</a></li>

                            <li class="nav-item"><a href="#" class="nav-link">Services</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="services.html" class="nav-link">Services</a></li>

                                    <li class="nav-item"><a href="single-services.html" class="nav-link">Services Details</a></li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">Blog</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a href="blog-1.html" class="nav-link">Blog Grid</a></li>

                                    <li class="nav-item"><a href="blog-2.html" class="nav-link">Blog Right Sidebar</a></li>

                                    <li class="nav-item"><a href="single-blog.html" class="nav-link">Blog Details</a></li>
                                </ul>
                            </li>

                            <li class="nav-item"><a href="error-404.html" class="nav-link">404 Error</a></li>

                            <li class="nav-item"><a href="coming-soon.html" class="nav-link">Coming Soon</a></li>

                            <li class="nav-item"><a href="faq.html" class="nav-link">FAQ</a></li>
                        </ul>
                    </li>

                    <li class="nav-item"><a href="#" class="nav-link">Web Servies <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item"><a href="resources.html" class="nav-link">WEb SERVICES</a></li>

                            <li class="nav-item"><a href="single-resources.html" class="nav-link">Resources Details</a></li>
                        </ul>
                    </li>


                    <li class="nav-item"><a href="contact.html" class="nav-link">ติดต่อเรา</a></li>
                </ul>

                <!-- <div class="others-options">
                    <div class="option-item"><i class="search-btn flaticon-search"></i>
                        <i class="close-btn fas fa-times"></i>
                        
                        <div class="search-overlay search-popup">
                            <div class='search-box'>
                                <form class="search-form">
                                    <input class="search-input" name="search" placeholder="Search" type="text">

                                    <button class="search-button" type="submit"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </nav>
    </div>
</div>
</div>`;

var header = document.getElementById("site-header");
header.innerHTML = headerTxt;
console.log("load");
