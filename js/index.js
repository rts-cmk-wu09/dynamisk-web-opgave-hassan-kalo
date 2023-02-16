document.addEventListener("DOMContentLoaded", function () {
  function populate(obj, className) {
    const h2 = document.createElement("h2");
    h2.innerText = obj.headline || "";
    const p = document.createElement("p");
    p.innerText = obj.text || "";
    const a = document.createElement("a");
    a.innerHTML = obj.linktext || "";
    a.href = obj.btnicon || "#";
    if (obj == hero) {
      const img = document.createElement("img");
      img.src = obj.image;
      const intorArticle = document.createElement("article");
      intorArticle.append(h2, p, a);
      document.querySelector(className).append(img, intorArticle);
    } else {
      let arr;
      document.querySelector(className).append(h2, p, a);
      if (obj == services) {
        arr = obj;
      } else if (obj == facilities) {
        arr = obj.options;
      } else if (obj == sites) {
        arr = obj.places;
      } else if (obj == advantages) {
        arr = obj.listOfAdvantages;
      } else if (obj == footerUpper) {
        arr = footerUpper.footerArrs;
      } else if (obj == footerUnder) {
        arr = footerUnder;
      }

      arr.forEach((element) => {
        const article = document.createElement("article");
        const img = document.createElement("img");
        img.src = element.illustration || "";
        const h3 = document.createElement("h3");
        h3.innerText = element.headline || "";
        const p = document.createElement("p");
        p.innerText = element.text || "";
        const a = document.createElement("a");
        a.href = "#";
        if (obj == footerUpper) {
          element.forEach((footerArrsItem) => {
            const a = document.createElement("a");
            a.innerText = footerArrsItem;
            article.append(a);
          });
        } else if (obj == footerUnder) {
          const a = document.createElement("a");
          a.innerText = element;
          article.append(a);
        } else {
          a.innerText = element.linktext || "";
        }
        article.append(img, h3, p, a);
        document.querySelector(className).append(article);
        //jump back to the else if block, i.e. obj.footerArrs.forEach
      });
    }
  }
  populate(hero, ".hero");
  populate(services, ".services");
  populate(facilities, ".facilities");
  populate(sites, ".sites");
  populate(advantages, ".advantages");
  populate(footerUpper, ".footer--main");
  populate(footerUnder, ".footer--small"); 
});
