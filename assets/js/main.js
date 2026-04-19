      (function () {
        const views = Array.from(document.querySelectorAll("[data-view]"));
        const links = Array.from(document.querySelectorAll(".nav a[href^='#']"));
        const viewLinks = links.filter((link) => link.dataset.viewLink);
        const detailLinks = links.filter((link) => link.dataset.parentView);
        const allowedViews = new Set(views.map((view) => view.dataset.view));
        const sectionToView = detailLinks.reduce((accumulator, link) => {
          const href = link.getAttribute("href") || "";
          const sectionId = href.replace("#", "");
          accumulator[sectionId] = link.dataset.parentView;
          return accumulator;
        }, {});

        function resolveRoute(target) {
          if (allowedViews.has(target)) {
            return { view: target, section: null };
          }

          if (sectionToView[target]) {
            return { view: sectionToView[target], section: target };
          }

          return { view: "home", section: null };
        }

        function getRoute() {
          return resolveRoute(window.location.hash.replace("#", ""));
        }

        function activateView(route) {
          views.forEach((view) => {
            view.classList.toggle("is-active", view.dataset.view === route.view);
          });

          viewLinks.forEach((link) => {
            link.classList.toggle("is-active", link.dataset.viewLink === route.view);
          });

          detailLinks.forEach((link) => {
            const href = link.getAttribute("href") || "";
            const target = href.replace("#", "");
            link.classList.toggle("is-active", target === route.section);
          });

          if (!route.section) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
          }

          const targetSection = document.getElementById(route.section);
          if (!targetSection) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
          }

          window.requestAnimationFrame(() => {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        }

        window.addEventListener("hashchange", () => {
          activateView(getRoute());
        });

        links.forEach((link) => {
          link.addEventListener("click", (event) => {
            const href = link.getAttribute("href") || "";
            const target = href.replace("#", "");

            if (window.location.hash.replace("#", "") !== target) {
              return;
            }

            event.preventDefault();
            activateView(resolveRoute(target));
          });
        });

        activateView(getRoute());
      })();
