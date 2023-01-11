<template>
    <div>
        <div class="contact-imfo-box">
            <div class="container">
                <div class="row">
                <div class="col-md-4">
                    <i class="fa fa-volume-control-phone"></i>
                    <div class="overflow-hidden">
                    <h4>Phone</h4>
                    <p class="lead">+966 50 362 2293</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <i class="fa fa-envelope"></i>
                    <div class="overflow-hidden">
                    <h4>Email</h4>
                    <p class="lead">Info@eben-ezar.xyz</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <i class="fa fa-map-marker"></i>
                    <div class="overflow-hidden">
                    <h4>Location</h4>
                    <p class="lead">
                        Abu bakr Al Razi Street, Al Sulimaniyah, Riyadh, SA
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
    .contact-imfo-box{
        background: #d0a772;
        padding: 30px 0;
    }

    .overflow-hidden {
        overflow: hidden;
    }

    .contact-imfo-box i{
        display: block;
        float: left;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #fff;
        color: #d0a772;
        font-size: 30px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%;
        margin-right: 20px;
    }
    .contact-imfo-box h4 {
        margin: 0px;
        margin-top: 5px;
        color: #ffffff;
        font-size: 20px;
        padding: 0px;
        font-weight: 500;
        line-height: 24px;
    }
    .contact-imfo-box p {
        margin: 0px;
        color: #ffffff;
        font-weight: 300;
    }
</style>