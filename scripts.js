$(document).ready(function() {

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('highlight');
        })
        $(this).addClass('highlight');

        if ($(window).width() < 768)
            toggleMenu();


        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $(".box-select").click(function() {
        if ($(this).hasClass("box-select-active")) {
            $(this).removeClass("box-select-active");
            $(".in-stock .btn").prop('disabled', true);
            $(".box.in-stock .btn").html("Out Of Stock");
            $(".box.in-stock").removeClass("in-stock");
        } else {
            $(".box-select").removeClass("box-select-active");
            $(this).addClass("box-select-active");
            id = $(this).attr('id');
            $(".in-stock .btn").prop('disabled', true);
            $(".box.in-stock .btn").html("Out Of Stock");
            $(".box.in-stock").removeClass("in-stock");
            $("#stock_" + id).addClass("in-stock");
            $(".in-stock .btn").prop('disabled', false);
            $(".box.in-stock .btn").html("Order Now");
            scrollToStock();
        }
    })

    $(".visit-store").click(function() {
        window.location.href = "shop.html";
    })
});


if (window.location.href == "index.html") {
    const burgerMenu = document.getElementById("burger");
    const navbarMenu = document.getElementById("menu");
    const header = document.querySelector('nav');
    let current = 'Home';
    // Responsive Navbar Toggle
    burgerMenu.addEventListener("click", function() {
        toggleMenu();
    });

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY; //window.scrollY returns the number of pixels that the document is currently scrolled vertically.
        if (scrollPos >= "10") {
            header.style.padding = ".5rem 2rem";
        } else if (scrollPos < "10") {
            header.style.padding = "1rem 4rem";
        }
    });


    /*-------Horizontal Scroll Control------*/
    var box = $(".box-inner"),
        x;
    $(".arrow").click(function() {
        horizontalScroll(box, $(this).hasClass("arrow-right"));
    })

    var box2 = $(".box-inner2"),
        x;
    $(".arrow2").click(function() {
        horizontalScroll(box2, $(this).hasClass("arrow-right2"));
    })

}

/*-------Horizontal Scroll Control------*/

/*------Scroll to In Stock Item----------------*/
function scrollToStock() {
    let Parent = $('.box-inner2');
    let Child = $('.in-stock');
    Parent.animate({ scrollLeft: (Parent.scrollLeft() + Child.position().left + Child.width() / 2 - Parent.width() / 2) }, 900);
}
/*------Scroll to In Stock Item----------------*/


function horizontalScroll(box, curr) {
    if (curr) {
        x = (box.width() / 2) + box.scrollLeft();
        box.animate({
            scrollLeft: x,
        })
    } else {
        x = (box.width() / 2) - box.scrollLeft();
        box.animate({
            scrollLeft: -x,
        })
    }
}

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos + 100 && refElement.position().top + refElement.height() > scrollPos + 100) {
            $('#menu ul li a').removeClass("highlight");
            currLink.addClass("highlight");
        } else {
            currLink.removeClass("highlight");
        }
    });
}



function toggleMenu() {
    $(".hamburger").toggleClass("is-active");
    navbarMenu.classList.toggle("active");
    burgerMenu.classList.toggle("active");
}
//------TEST----------------
//------TEST BELOW----------------

//------TEST ABOVE----------------
//------TEST----------------