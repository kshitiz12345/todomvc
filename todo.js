Math.randomString = function(length) {
    length = length || 5;
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 };
 (function() {
    const navBar = document.querySelector(".navbar-nav");
    const appList = document.querySelectorAll(".app");
    const navList = document.querySelectorAll(".nav-item");
    const time_elapsed_elem = document.querySelector("#time_elapsed");
    const track_callback  = (time_elapsed) => {
       time_elapsed_elem.innerHTML = `Time consumed in DOM manipulation is ${time_elapsed} milliseconds`
    }
    const cleanup = () => {
       appList.forEach((app) => {
             app.style.display = "none";
       })
       navList.forEach((curNav) => {
             curNav.classList.remove("active");
       })
    };
    const selectTab = (curApp, curNav) => {
       if (curApp) {
             curNav.classList.add("active");
             curApp.style.display = "block";
       }
    }
    const startReact = () => {
       curApp = document.querySelector("#react-app");
       curNav = document.querySelector(".react-item");
       selectTab(curApp, curNav);
       performance.track("#react-data-list",  track_callback)
    }

    const startAngular = () => {
       curApp = document.querySelector("#angular-app");
       curNav = document.querySelector(".angular-item");
       selectTab(curApp, curNav);
       performance.track("#angular-data-list",  track_callback)
    }

    const startVue = () => {
       curApp = document.querySelector(".vue-app");
       curNav = document.querySelector(".vue-item");
       selectTab(curApp, curNav);
       performance.track("#vue-data-list", track_callback)
    }

    navBar.addEventListener('click', function(e) {
       cleanup()
       const value = e.target.getAttribute("value");;
       let curApp = null;
       let curNav = null;
       if (value === "react") {
             startReact()
       } else if (value === "angular") {
             startAngular()
       } else if (value === "vue") {
             startVue()
       }

       if (curApp) {
             curNav.classList.add("active");
             curApp.style.display = "block";
       }
    });

    startReact()
 })()