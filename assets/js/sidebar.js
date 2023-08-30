const BtnItem = document.querySelectorAll('.home__sidebar--item');
const ContentItem = document.querySelectorAll('.home__content--item');

BtnItem.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    BtnItem.forEach((b) => {
      b.classList.remove('active');
    });
    ContentItem.forEach((c) => {
      c.classList.remove('active');
    });
    btn.classList.add('active');
    ContentItem[index].classList.add('active');
  });
});
