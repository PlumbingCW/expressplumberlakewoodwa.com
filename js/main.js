(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");

  function openDrawer() {
    drawer.removeAttribute("hidden");
    overlay.classList.add("visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    document.documentElement.style.overflow = "hidden";
  }
  function closeDrawer() {
    drawer.setAttribute("hidden", "");
    overlay.classList.remove("visible");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    document.documentElement.style.overflow = "";
  }
  if (toggle && drawer && overlay) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") { closeDrawer(); } else { openDrawer(); }
    });
    if (closeBtn) { closeBtn.addEventListener("click", closeDrawer); }
    overlay.addEventListener("click", closeDrawer);
    var links = drawer.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeDrawer); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeDrawer(); } });
  }

  var groups = document.querySelectorAll(".drawer-toggle");
  for (var g = 0; g < groups.length; g++) {
    groups[g].addEventListener("click", function () {
      var sub = document.getElementById(this.getAttribute("aria-controls"));
      var open = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", open ? "false" : "true");
      if (sub) { sub.classList.toggle("open", !open); }
    });
  }

  var qs = document.querySelectorAll(".faq-q");
  for (var q = 0; q < qs.length; q++) {
    qs[q].addEventListener("click", function () {
      var item = this.parentNode;
      var open = item.classList.contains("open");
      item.classList.toggle("open", !open);
      this.setAttribute("aria-expanded", open ? "false" : "true");
    });
  }
})();
