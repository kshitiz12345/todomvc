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
    const time_elapsed_elem = document.querySelector("#time_elapsed");
    const track_callback  = (time_elapsed) => {
       time_elapsed_elem.innerHTML = `Time consumed in DOM manipulation is ${time_elapsed} milliseconds`
    }
    const cleanup = () => {
      little.displayElement.hideElement(".app");
      little.removeCSSClass(".nav-item", "active")
    };
    const selectTab = (curApp, curNav) => {
      little.displayElement.showElement(curApp);
      little.addCSSClass(curNav, "active");
    }
    const startReact = () => {
       selectTab("#react-app", ".react-item");
       performance.track("#react-data-list",  track_callback)
    }

    const startAngular = () => {
       selectTab("#angular-app", ".angular-item");
       performance.track("#angular-data-list",  track_callback)
    }

    const startVue = () => {
       selectTab(".vue-app", ".vue-item");
       performance.track("#vue-data-list", track_callback)
    }

    navBar.addEventListener('click', function(e) {
       cleanup()
       const value = e.target.getAttribute("value");;
       if (value === "react") {
             startReact()
       } else if (value === "angular") {
             startAngular()
       } else if (value === "vue") {
             startVue()
       }
    });

    startReact()
 })()