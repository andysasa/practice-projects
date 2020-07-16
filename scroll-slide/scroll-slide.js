// debounce function to optimize performance that set wait time to 20ms so scroll event doesn't keep on firing function 
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

const sliderImg = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImg.forEach(img => {
        // find the px at which a quarter of image is scrolled through
        const slideInAt = (window.scrollY + window.innerHeight) - (img.height / 4);
        // find the px from top of page to bottom of img
        const imgBottom = img.offsetTop + img.height;

        // for use in if statement later
        const isQuarter = slideInAt > img.offsetTop;
        const notScrolledPast = imgBottom > window.scrollY;

        if (isQuarter && notScrolledPast) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
        
    });
}


window.addEventListener('scroll', debounce(checkSlide));