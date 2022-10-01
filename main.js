const sideMenu = document.querySelector("#side-menu");
const toggle = document.querySelector("#toggle");

// 高亮当前选项
sideMenu.addEventListener("click", (event) => {
  const menuItem = event.target.closest(".menu-item");
  const id = menuItem.id;
  const checkedItem = document.querySelector(`#${id}`);

  isActive = Array.from(checkedItem.classList).includes("active");
  if (isActive) {
    menuItem.classList.remove("active");
  } else {
    menuItem.classList.add("active");
  }
});

// 收缩侧边栏
toggle.addEventListener("click", () => {
  isCollapsible = Array.from(sideMenu.classList).includes("collapsible");
  if (isCollapsible) {
    sideMenu.classList.remove("collapsible");
  } else {
    sideMenu.classList.add("collapsible");
  }
});
