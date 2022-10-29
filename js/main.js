*{
    margin: 0px;
    padding: 0px;
    font-family: 'Playfair Display', serif; 
    font-family: 'Segoe UI Light', Tahoma, Geneva, Verdana, sans-serif;
}
body{

    overflow: hidden;
}
#mySidenav{
  overflow:hidden;
}

.loading{
position: fixed;
top:0;
right: 0;
left: 0;
bottom: 0;
background-color: #0D0D0D;
z-index: 9633333;
display: none;
justify-content: center;
align-items: center;
color: white;
}

/* navbar */

.header{
    /* height: 100vh; */
  /* background-color: #111; */
  background-color: black;
    width: 100%;
   height: auto;
    color: white;
    position: relative;
}
.header1{
    /* height: 100vh; */
  /* background-color: #111; */
  background-color: #0D0D0D;
    width: 100%;
   height: 100vh;
    color: white;
    position: relative;
}

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    /* padding-top: 60px; */
  }
  
  /* .sidenav a {
    padding: 20px 8px 20px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  .sidenav a:hover {
    color: rgba(214, 46, 51, 0.4);
  } */
  
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
  .head-nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    z-index: 55555;
    background-color: #f8f6f6;
    text-align: center;
    transition: all 0.6s ease;
  }
  /* #h2-nav {
    font-size: 70px;
    position: absolute;
    top:400px;
    left: 0px;
    color: #111;
} */
.nav-logo {
    padding: 25px 0;
}
.nav-logo img {
    height: 48px;
}
.strip-toggel-menu {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #111;
}
.strip-social-icon {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 11;
    color: #111;
}

.strip-social-icon >div {
    padding-top: 10px;
}


/* .nav-tab-menu ul {
    padding-left: 30px;
    height: 300px;
    overflow: hidden;
}
.nav-tab-menu li {
    padding-top: 500px;
    opacity: 0;
} */
.nav-item ul li a {
    color: #f9f6f6 !important;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
}
.nav-social-item {
    position: absolute;
    bottom: 100px;
    left: 10px;
}
.nav-social-item-a {
    color: #f9f6f6;
    padding-left: 20px;
    font-size: 14px;
    margin: 10px;
}
.nav-social-item span {
    color: #999;
}
i {
    cursor: pointer;
}

/* content home */
.content-home {
    position: absolute;
    /* left: 1%; */
    /* z-index: 333; */
    top: 0;
    padding-top: 30px;
    background-color: #0D0D0D;
   width: 100%;
   height:auto;
   margin-right: 0px;
   margin-left: 0px;
}
.content{
    /* background-color: #008CBA; */
    width: 100%;
    /* height: 100vh; */
}
/*  */
.cont {
    position: relative;
    width: 100%;
  }
  
  .image {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255,.7);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
  }
  
  .cont:hover .overlay {
    height: 100%;
  }
  
  .text {
    color: black;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: start;
  }

  /*  */

  .movie {
    cursor: pointer;
}
.d-flex {
    flex-wrap: wrap !important;
}
.layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(255,255,255,.7);
    background-color: rgba(0, 0, 0,.5);
    text-align: center;
    /* color: tomato; */
    color: #000;
    font-weight: 800;
    transition: all 1s;
}
.movie {
    overflow: hidden;
}
/* get meal details */
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .det{
    text-align: start;
    justify-content: start;
  }
  .youtube {
    background-color: #F70000;
}


.form-control {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,.7);
    border-radius: 0;
    color: #fff;
    font-weight: 800;
}
.form-control:focus
{
	background-color: transparent;
	border: none;
	border-bottom: 1px solid rgba(255,255,255,.7);
	border-radius: 0;
}

.div-c{
    position: relative;
    width: 100%;
}
.loading1{
    position: fixed;
    top:20%;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: black;
    z-index: 3333;
    display: none;
    justify-content: center !important;
    align-items: center;
    color: white;  
}
.content-home1 {
    position: absolute;
    /* left: 2%; */
    /* z-index: 333; */
    top: 0;
    padding-top: 20px;
    background-color: #0D0D0D;
   width: 100%;
   height:100vh;
   margin-right: 20px;
   margin-left: 0px;
}
.fa-city {
    color: #e65a50ab;
}
.fa-bowl-food {
    color: #9ee650ab;
}
#contact input {
    box-shadow: 0 .5rem 1rem rgba(255,255,255,.1)!important;
}
