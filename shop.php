<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">


    <title>Xxxxx Xxxx | Shop</title>

    <!-- Embedding poppins font from google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="hamburger.css">
</head>

<body>
    <nav class="navbar fl-c-b w100">
        <div class="navbrand fl-c">
            <h1><a href="./ishop.html" class="brand">Xxxxx Xxxx</a></h1>
            <div class="burger hamburger" id="burger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>
        <ul class="menu fl-c-b" id="menu">
            <li class="menu-item"><a href="#HomeC" class="scrollable menu-link" id="Home">Home</a></li>
            <li class="menu-item"><a href="#AboutC" class="scrollable menu-link" id="About">Best Deal</a></li>
            <li class="menu-item"><a href="shop.html" class="menu-link">Shops</a></li>
            <li class="menu-item"><a href="#ContactC" class="scrollable menu-link" id="Contact">Contact</a></li>
        </ul>
    </nav>

    <section class="shopHolder w100" id="noID" style="display: none;">
        i am default shop
    </section>

    <section class="shopHolder w100" id="id" style="display: none;">
        i am shop from id
    </section>
    <footer class="sec-c text-white" id="ContactC">
        I am Footer, Use me to Contact Dev
    </footer>

    <script src="jquery.js"></script>
    <script src="scripts.js"></script>
    <script src="shop.js"></script>
</body>

</html>