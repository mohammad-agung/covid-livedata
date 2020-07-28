function headerSticky() {
    window.onscroll = function () {
        myFunction(mediaQuery)
    };
    var mediaQuery = window.matchMedia("(max-width: 992px)")
    myFunction(mediaQuery)
    mediaQuery.addListener(myFunction)

    function myFunction(mediaQueryOn) {
        if (mediaQueryOn.matches) { // If media query matches
            document.getElementById("head").style.boxShadow = "0 2px 10px rgba(0, 0, 0, .5)";
        } else {

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("head").style.boxShadow = "0 2px 10px rgba(0, 0, 0, .5)";
                document.querySelector(".navbar-brand").style.fontSize = "2.2em";
                document.querySelector(".navbar-nav").style.fontSize = "1.3em";
            } else {
                document.querySelector(".navbar-brand").style.fontSize = "2em";
                document.querySelector(".navbar-nav").style.fontSize = "1.2em";
                document.getElementById("head").style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
            }
        }
    }
}

export default headerSticky;