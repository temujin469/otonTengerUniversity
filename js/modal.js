// var span = document.getElementsByClassName("close");

// function openModal(id) {
//   var modal = document.getElementById(id);

//   modal.style.display = "block";

//   // span.forEach((element) => {
//   //   element.onclick = function () {
//   //     modal.style.display = "none";
//   //   };
//   // });

//
// }

// for (i = 0; i < span.length; i++) {
//   span[i].onclick = function () {
//     modal.style.display = "none";
//   };
// }

document.addEventListener(
  "click",
  function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    // if (
    //   target.hasAttribute("data-toggle") &&
    //   target.getAttribute("data-toggle") == "modal"
    // ) {
    if (target.hasAttribute("data-target")) {
      var m_ID = target.getAttribute("data-target");
      document.getElementById(m_ID).style.display = "block";
      document.getElementById(m_ID).classList.add("open");
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
      e.preventDefault();
    }
    // }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if (
      (target.hasAttribute("data-dismiss") &&
        target.getAttribute("data-dismiss") == "modal") ||
      target.classList.contains("modal")
    ) {
      var modal = document.querySelector('[class="modal open"]');
      modal.style.display = "none";
      document.body.style.height = "auto";
      document.body.style.overflowY = "scroll";
      modal.classList.remove("open");
      e.preventDefault();
    }
  },
  false
);
