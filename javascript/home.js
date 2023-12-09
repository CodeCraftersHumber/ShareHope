var $ = function (id) {
    return document.getElementById(id);
};

const redirectToPage = function (nav) {
    console.log(nav);
    window.location.href = nav;
};

//navigation to different pages
window.onload = function () {
    $("donateNowBtn").onclick = function () {
        redirectToPage("./disaster.html");
    };
    $("childDonateBtn").onclick = function () {
        redirectToPage("./child.html");
    };
    $("elderDonateBtn").onclick = function () {
        redirectToPage("./elders.html");
    };
    $("disabilityDonateBtn").onclick = function () {
        redirectToPage("./disability.html");
    };
    $("about").onclick = function () {
        redirectToPage("./aboutUs.html");
    };
    $("contact").onclick = function () {
        redirectToPage("./contactUs.html");
    };
};