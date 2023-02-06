<template>
    <div>
        <footer class="footer-area bg-f" style="position: relative;">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-6">
                    <h3>Location</h3>
                    <p>
                    Eben Ezar Batha Opening soon! 📍 Villagio Mall, First floor, Gate
                    7, Bldg 1, Food court, Batha Riyadh, **Beside Kruathai & Albaik
                    **Infront of Yellow Cab Pizza
                    </p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3>Opening hours</h3>
                    <p>
                    <span class="text-color">Sun - Mon : </span> 10:30 AM - 11:30 PM
                    </p>
                    <p><span class="text-color">Tuesday :</span> 10:30 AM - 11:30 PM</p>
                    <p>
                    <span class="text-color">Wed - Thurs :</span> 10:30 AM - 11:30 PM
                    </p>
                    <p><span class="text-color">Fri & Sat :</span>4:00 PM - 11:30 PM</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3>Contact information</h3>
                    <p class="lead">
                    Eben Ezar Sulaimaniyah, Beside Tasters House & Jollibee
                    </p>
                    <p class="lead"><a href="#!">CR #: 1010670407</a></p>
                    <p class="lead"><a href="#!">Tax #: 310879721200003</a></p>
                    <p><a href="#">Info@eben-ezar.xyz</a></p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3>Inquiry / Orders</h3>
                    <div class="subscribe_form">
                    <form class="subscribe_form">
                        <h3>Whatsapp</h3>
                        <button type="submit" class="submit">
                        <a style="text-decoration: none;" href="https://wa.me/message/KDKOF72DNELRJ1"> Message Us</a>
                        </button>
                        <div class="clearfix"></div>
                    </form>
                    </div>
                    <ul class="list-inline f-social">
                    <li class="list-inline-item">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div class="copyright">
                <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    <p class="company-name">
                        Powered  by: <a href="#">Hoopoelink</a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style>
.footer-area{
	padding-top: 50px;
	padding-bottom: 0px;
}
.bg-f{
	background-image: url("");
	background-attachment: scroll;
	background-clip: initial;
	background-color: rgba(0, 0, 0, 0);
	background-origin: initial;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}
.bg-f::before {
    background: #010101;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
	opacity: 0.8;
}

.footer-area .container{
	position: relative;
	z-index: 1;
}
.footer-area h3{
	color: #ffffff;
	text-transform: uppercase;
	font-size: 24px;
	border-bottom: 1px dashed rgba(207, 166, 113, 0.5);
	margin-bottom: 10px;
}
.footer-area p{
	font-size: 15px;
	color: rgba(255, 255, 255, 0.8);
	margin: 0;
	padding-bottom: 10px;
}

.footer-area p.lead{
	font-size: 19px;
	color: #ffffff;
	margin-bottom: 15px;
}
.footer-area p.lead a{
	color: #ffffff;
	margin-bottom: 15px;
}
.footer-area p.lead a:hover{
	color: #d0a772;
}
.footer-area p a{
    text-decoration: none;
	font-size: 18px;
	color: #ffffff;
}
.footer-area p a:hover{
	color: #d0a772;
}

.subscribe_form {
    display: block;
    text-align: center;
    padding: 5px 0;
}

.subscribe_form .form_input {
    display: block;
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    border: none;
    font-size: 19px;
    line-height: 50px;
    padding: 0 10px;
    float: left;
    width: 100%;
    transition: all 0.5s ease-in-out;
}

.subscribe_form .submit {
    background-color: #d0a772;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
    display: inline-block;
    padding: 0 10px;
    float: left;
    width: 100%;
	border: none;
	cursor: pointer;
    transition: all 0.5s ease-in-out;
}
.subscribe_form .submit:hover{
	background: #010101;
}

.f-social {
    padding-bottom: 10px;
    margin: 0px;
    margin-top: 20px;
}
.f-social li a {
    font-size: 25px;
    color: rgba(255, 255, 255, 0.9);
	margin-right: 10px;
}

.copyright{
	margin-top: 20px;
	position: relative;
	display: block;
	background-color: #010101;
	border-top: 1px dashed rgba(207, 166, 113);
	padding: 30px 0;
	z-index: 1;
}

.copyright .company-name{
	font-size: 16px;
	text-align: center;
}
.copyright .company-name a{
	font-size: 16px;
}
</style>