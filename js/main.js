const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  // approach 1: This caused bugs bc it can put the border on other things
  // inside of el
  // let el = e.target;
  // el.parentElement.classList.add('tab-border');

  // this approach only attaches it to what this is
  // which is the "item" you called it on
  this.classList.add('tab-border');

  // Grab content item from the DOM
  console.log(this.id);
  const tabContentItem = document.getElementById(`${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-border');
  });
}

function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}
 
tabItems.forEach((item, i) => {
  item.addEventListener('click', selectItem);
})