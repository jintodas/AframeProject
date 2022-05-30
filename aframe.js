AFRAME.registerComponent("click-to-shoot", {
    init: function() {
      document.body.addEventListener("click", () => {
        console.log("Pew pew pew!");
        this.el.emit("shoot");
      });
    }
  });
  AFRAME.registerComponent("hit-handler", {
    init: function() {
      var el = this.el;
      var opacity = 1;
      var scale = 1;

      el.setAttribute("material", "transparent", true);

      el.addEventListener("hit", () => {
        console.log("You hit the target, it slowly evaporates!");
        opacity -= 0.1;
        scale *= 1.2;
        el.setAttribute("material", "opacity", opacity);
        console.log(scale)
        el.setAttribute("scale", `1 ${scale} 1`);
      });

      el.addEventListener("die", () => {
        console.log("This object is dead, and will be removed!")
        el.parentNode.removeChild(el);
        el.setAttribute("target", "active", false)
      });
    }
  });