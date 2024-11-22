var $$_$$ = {
    user : {"is_user_guest":true,"is_user_login":false,"avatar_url":"","display_name":"","isVerifiedEmail":false}
};
(function(d) {
    var nav_user_new = d.getElementById("nav_user_new");
    var nav_user_a = d.getElementById("nav_user_a");
    var nav_user_img = d.getElementById("nav_user_img");
    var href = nav_user_new.getAttribute("data-ref");
    var nextUrl = "nextByApkpure('" + href + "')";
    var login_img = "https://static.apkpure.com/www/static/imgs/no_login_v1.png";

    window.setNavUserInfo = function () {
        var urlOrigin = location.origin;
        var isMobileUA = false;
        if (isMobileUA && urlOrigin === "https://apkpure.com") {
          urlOrigin = "https://m.apkpure.com";
        }
        if ($$_$$.user.is_user_guest) {
            nav_user_a.setAttribute("href", urlOrigin + "/login");
            nav_user_a.setAttribute("onclick", nextUrl);
            return;
        }
        
        if (!$$_$$.user.is_user_login) {
            nav_user_a.setAttribute("href", urlOrigin + "/login");
        }
        nav_user_a.setAttribute("href", "javascript:void(0)");
        if ($$_$$.user.avatar_url) {
            nav_user_img.setAttribute("src", $$_$$.user.avatar_url);
            login_img = $$_$$.user.avatar_url
        }
        var o = document.createElement("div");
        o.innerHTML = `
            <div class="nav_user_info">
            <a class="logout" href="/account/logout">Logout</a>
            <div>
                <a href="${urlOrigin}/u/${$$_$$.user.id}">
                    <img width="60" height="60" src="${login_img}">
                </a>
                <a class="display_name" href="${urlOrigin}/u/${$$_$$.user.id}">${$$_$$.user.display_name}</a>
            </div>
        </div>     
        `;
        nav_user_new.appendChild(o);
    }
    
    window.setNavUserInfo();
})(document);