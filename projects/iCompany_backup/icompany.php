<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="header">
        <section id="sector1">
            <span id="sp1">
                <img src="img/logo_camera.png" alt="" srcset="" width="25px">
                <b id="ic">iCompany</b>
            </span>
            <span style="font-family: serif; font-size: 20px;">
                Home 
                <select><option>About</option></select>
                <select><option>Links</option></select>
                Contact
            </span>
            <span>
                <img src="img/logo_human.png" id="popup" srcset="" width="25px" onclick="f1()">
            </span>
            <!-- popup -->
            <dialog id="hide">
                <form class="formSub"> <b class="subTitle">Sign Up</b>
                  <div class="bod"> Register with us to get offers, support and more <p></p>
                  <b>Name</b> <br>
                  <input type="text" class="handle" placeholder="Enter Name" required> <p></p>
                     <b>Email</b> <br>
                     <input type="text" class="handle" placeholder="Enter Email" required> <p></p>
                     <b>Password</b> <br>
                     <input type="password" class="handle" placeholder="Enter Password" required> <p></p>
                  <b>Confirm Password</b> <br>
                     <input type="password" class="handle" placeholder="Confirm Password"> <p></p>
                     <button>Submit</button>
                 </div>
                </form>
            </dialog>
            <!-- popup -->
            <script>
                const popup=document.getElementById('hide')
                function f1(){
                    popup.show();
                }
            </script>
        </section>
        <section id="sector2">
           <div class="container">
                 <b style="font-size: 32px; font-family: serif; font-weight: 200;">You've come to the right place!</b> <p></p>
                 <span style="font-family: serif;">Quality | Trust | Flexibility</span> <p></p>
                 <button class="face">About Us</button>
                 <button class="face">Contacts</button> <p></p>
                 We are different because we realize that a good partner must know the business in order to manage it more effectively.
           </div>
        </section>
    </div>
    <div class="body">
        <section id="sector3">     <!-- Slide Show blocks -->
            <div class="slide"></div>
        </section>
        <div class="pattern"><b style="font-family: sans-serif; font-weight: 500;">About us</b>
            <div class="ball"></div>
            <div class="line"></div>
        </div>
        <section id="sector4">
            <img src="img/biz-1.jpg" alt="" srcset="" width="400px" height="350px" style="position: relative; left: 100px; box-shadow: 2px 2px 2px rgb(163, 163, 163);">
            <div class="divRight">
                <b>Brand Communication and Brand</b> <br>
                <b style="font-weight: 800;">Promotion Tools</b> <p></p>
                <b style="font-size: 14px;">We provide Marketing services and customize them according to our
                   clients’ specific needs and goals. Our team is a group of passionate
                   professionals.
                </b>
                <p style="font-size: 14px;">Business Hub Marketing Agency was founded in 2017. We provide Marketing services
                    and customize them according to our clients’ specific needs and goals. Our team is a
                    group of passionate professionals. We have proficient experience in managing
                    marketing campaigns and social media marketing of businesses operating in food
                    industry, starting from agricultural products to hospitality.
                </p>
                <button class="face">More about us</button>
            </div>
        </section>
        <div class="pattern"><b style="font-family: sans-serif; font-weight: 500;">Our Services</b>
            <div class="ball"></div>
            <div class="line"></div>
        </div>
        <section id="sector5">
            <div class="box">
                <img src="img/service-1.png" alt="" srcset="" width="80"> <br>
                <b style="font-size: 14px; color: #013560;;">Design</b> <br>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum 
                    omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
                </span>
            </div>
            <div class="box">
                <img src="img/service-2.png" alt="" srcset="" width="80"> <br>
                <b style="font-size: 14px; color: #013560;">Development</b> <br>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum 
                    omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
                </span>
            </div>
            <div class="box">
                <img src="img/service-3.png" alt="" srcset="" width="80"> <br>
                <b style="font-size: 14px; color: #013560;">SEO</b> <br>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum 
                    omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
                </span>
            </div>
            <div class="box">
                <img src="img/service-4.png" alt="" srcset="" width="80"> <br>
                <b style="font-size: 14px; color: #013560;">Marketing</b> <br>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum 
                    omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
                </span>
            </div>
            <div class="box">
                <img src="img/service-5.png" alt="" srcset="" width="80"> <br>
                <b style="font-size: 14px; color: #013560;">App Development</b> <br>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum 
                    omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
                </span>
            </div>
            <div class="box">
                <img src="img/service-6.png" alt="" srcset="" width="80"> <br>
                <b style="font-size: 14px; color: #013560;">Error Fixing</b> <br>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum 
                    omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
                </span>
            </div>
        </section>
        <div class="pattern"><b style="font-family: sans-serif; font-weight: 500;">Our team</b>
            <div class="ball"></div>
            <div class="line"></div>
        </div>
        <section id="sector6">
            <div class="team">
                <img src="img/pic-1.jpg" alt="" srcset="" width="180px" style="border-radius: 180px;"> <br>
                <div class="tbox">
                    <b style="font-size: 14px;">Micheal Jordan</b> <br>
                    <p style="color: #3472a5;">CEO</p>
                    <img src="img/facebook.png" alt="">
                    <img src="img/twitter.png" alt="">
                    <img src="img/instagram.png" alt="">
                    <img src="img/in.png" alt="">
                </div>
            </div>
            <div class="team">
                <img src="img/pic-2.jpg" alt="" srcset="" width="180px" style="border-radius: 180px;"> <br>
                <div class="tbox">
                    <b style="font-size: 14px;">Micheal Jordan</b> <br>
                    <p style="color: #3472a5;">CEO</p>
                    <img src="img/facebook.png" alt="">
                    <img src="img/twitter.png" alt="">
                    <img src="img/instagram.png" alt="">
                    <img src="img/in.png" alt="">
                </div>
            </div>
            <div class="team">
                <img src="img/pic-3.jpg" alt="" srcset="" width="180px" style="border-radius: 180px;"> <br>
                <div class="tbox">
                    <b style="font-size: 14px;">Micheal Jordan</b> <br>
                    <p style="color: #3472a5;">CEO</p>
                    <img src="img/facebook.png" alt="">
                    <img src="img/twitter.png" alt="">
                    <img src="img/instagram.png" alt="">
                    <img src="img/in.png" alt="">
                </div>
            </div><div class="team">
                <img src="img/pic-4.jpg" alt="" srcset="" width="180px" style="border-radius: 180px;"> <br>
                <div class="tbox">
                    <b style="font-size: 14px;">Micheal Jordan</b> <br>
                    <p style="color: #3472a5;">CEO</p>
                    <img src="img/facebook.png" alt="">
                    <img src="img/twitter.png" alt="">
                    <img src="img/instagram.png" alt="">
                    <img src="img/in.png" alt="">
                </div>
            </div>
        </section>
        <section id="sector7">
            <form action="server.php" method="post">
                <b style="font-size: 20px; font-family: sans-serif;">Get in touch</b> <p></p>
                <input type="text" name="name" placeholder="name" required> <br>
                <input type="text" name="email" placeholder="email" required> <br>
                <input type="text" name="subject" placeholder="subject" required> <p></p>
                <textarea name="" id="" cols="55" rows="12" placeholder="message" style="border-top: none; border-left: none; border-right: none;"></textarea>
                <button  type="submit" class="face" name="submit" style="position: relative; left: -160px;">submit</button>       
            </form>
            <div class="map"></div>
        </section>
        <section id="sector8">
           <div class="iconl">
            <img src="img/phone.png" alt="" width="40px"> <p></p>
            <b style="font-size: 18px;">Phone</b> <p></p>
            +976-99112233 <br>
            +976-88112233
           </div>
           <div class="iconl">
            <img src="img/clock.png" alt="" width="40px"> <p></p>
            <b style="font-size: 18px;">Timetable</b> <p></p>
            Ma - Fr : 8.00 - 18.00 <br>
            Sa - Su : 10.00 - 20.00
           </div>
           <div class="iconl">
            <img src="img/email.png" alt="" width="40px"> <p></p>
            <b style="font-size: 18px;">Email</b> <p></p>
            icode@icompany.com <br>
            info@icompany.com
           </div>
           <div class="iconl">
            <img src="img/sign.png" alt="" width="40px"> <br>
            <b style="font-size: 18px;">Address</b> <p></p>
            MN Tower, Chingeltei district <br>
            Ulaanbaatar, Mongolia
           </div>
        </section>
    </div>
    <div class="footer">
        <section id="sector9">
            <div class="foot">
                <div class="tit">iCompany</div>
                We have proficient experience in managing marketing
                campaigns and social media marketing of businesses
                operating in food industry, starting from agricultural products
                to hospitality. <p></p>
                <div style="position: relative; left: -80px;">
                    <img src="img/facebook_rectangle.png" alt="">
                    <img src="img/twitter_rectangle.png" alt="">
                    <img src="img/instagram_rectangle.png" alt="">
                    <img src="img/in_rectangle.png" alt="">
                </div>
            </div>
            <div class="foot">
                 <div class="tit">Quick links</div>
                 <div id="subSign1">
                    <p><img src="img/Symbol.png" alt="">Home</p>
                    <p><img src="img/Symbol.png" alt="">About</p>
                    <p><img src="img/Symbol.png" alt="">Team</p>
                    <p><img src="img/Symbol.png" alt="">Service</p>
                 </div>
                 <div id="subSign2">
                    <p><img src="img/Symbol.png" alt="">A-Page</p>
                    <p><img src="img/Symbol.png" alt="">S-Page</p>
                    <p><img src="img/Symbol.png" alt="">C-Page</p>
                 </div>

            </div>
            <div id="foot1">
                <div class="tit">Contact info</div>
                <p><img src="img/phone_last.png" alt="">+976-111-222</p>
                <p><img src="img/phone_last.png" alt="">+976-123-456</p>
                <p><img src="img/mail_last.png" alt="">icode@icompany.com</p>
                <p><img src="img/sign_last.png" alt="">Ulaanbaatar, Mongolia</p>
            </div>
        </section>
        <section id="sector10">
            <div class="finalLine"></div> <p></p>
            <span id="final">Developed by <b>iCode</b> | &copy; 2023 iCompany | All rights reserved.</span>
        </section>
    </div>
</body>
</html>
