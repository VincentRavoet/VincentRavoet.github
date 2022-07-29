$(document).ready(() => {
  function loaded() {
    var header_navbar = document.querySelector(".navigation");
    var appear = document.querySelectorAll(".appear-on-scroll");
    var sticky = header_navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");

      appear.forEach((e) => {
        e.classList.add("sm:block");
        e.classList.remove("sm:hidden");
      });
    } else {
      header_navbar.classList.remove("sticky");

      appear.forEach((e) => {
        e.classList.add("sm:hidden");
        e.classList.remove("sm:block");
      });
    }
  }

  function onScroll(event) {
    var sections = document.querySelectorAll(".page-scroll");
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (var i = 0; i < sections.length; i++) {
      var currLink = sections[i];
      var val = currLink.getAttribute("href");
      var refElement = document.querySelector(val);
      var scrollTopMinus = scrollPos + 200;
      if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  $.get("/views/components/header_dropdown.html", (html) => {
    $("#header_dropdown").append(html);

    /*=====================================
          Sticky
          ======================================= */
    window.onscroll = loaded;

    // Get the navbar

    // for menu scroll
    var pageLink = document.querySelectorAll(".page-scroll");

    pageLink.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();

        var element = document.querySelector(elem.getAttribute("href"));
        var headerOffset = 126;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });

    // section menu active

    window.document.addEventListener("scroll", onScroll);

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
      })
    );
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
      navbarCollapse.classList.toggle("show");
    });

    //WOW Scroll Spy
    var wow = new WOW({
      //disabled for mobile
      mobile: false,
    });
    wow.init();
    // loaded();

    let ev = document.createEvent("Event");
    ev.initEvent("DOMContentLoaded", true, true);
    window.document.dispatchEvent(ev);
  });

  $.get("/views/components/footer.html", (html) => {
    $("#footer_component").append(html);
  });

  $.get("/views/components/team.html", (html) => {
    $("#team_component").append(html);
  });
});
