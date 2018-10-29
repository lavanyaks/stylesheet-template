var ampproject = function () {
    const sidebar = document.getElementById('sidebar');
    const button = document.getElementById('toggle');

    navtoggle = function () {
        button.addEventListener('click', _ => {
            sidebar.classList.toggle('open');
            sidebar.classList.toggle("close");
        });
    };

    window.onload = function () {
        console.log('loaded');
        navtoggle();
    };
}();

async function twitter () {
    let response = await fetch("https://publish.twitter.com/oembed?url=https://twitter.com/i/moments/650667182356082688");
    let data = await response.json();
};

twitter();