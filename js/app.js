//параллакс
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) 
})





//бургер
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})




//модальное окно
//11
document.getElementById("open11").addEventListener("click", function() {
    document.getElementById("modal11").classList.add("open")
})

document.getElementById("close11").addEventListener("click", function() {
    document.getElementById("modal11").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal11").classList.remove("open")
    }
});


document.querySelector("#modal11 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal11").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//12
document.getElementById("open12").addEventListener("click", function() {
    document.getElementById("modal12").classList.add("open")
})

document.getElementById("close12").addEventListener("click", function() {
    document.getElementById("modal12").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal12").classList.remove("open")
    }
});


document.querySelector("#modal12 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal12").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//13
document.getElementById("open13").addEventListener("click", function() {
    document.getElementById("modal13").classList.add("open")
})

document.getElementById("close13").addEventListener("click", function() {
    document.getElementById("modal13").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal13").classList.remove("open")
    }
});


document.querySelector("#modal13 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal13").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//14
document.getElementById("open14").addEventListener("click", function() {
    document.getElementById("modal14").classList.add("open")
})

document.getElementById("close14").addEventListener("click", function() {
    document.getElementById("modal14").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal14").classList.remove("open")
    }
});


document.querySelector("#modal14 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal14").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//15
document.getElementById("open15").addEventListener("click", function() {
    document.getElementById("modal15").classList.add("open")
})

document.getElementById("close15").addEventListener("click", function() {
    document.getElementById("modal15").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal15").classList.remove("open")
    }
});


document.querySelector("#modal15 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal15").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


//16
document.getElementById("open16").addEventListener("click", function() {
    document.getElementById("modal16").classList.add("open")
})

document.getElementById("close16").addEventListener("click", function() {
    document.getElementById("modal16").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal16").classList.remove("open")
    }
});


document.querySelector("#modal16 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal16").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//21
document.getElementById("open21").addEventListener("click", function() {
    document.getElementById("modal21").classList.add("open")
})

document.getElementById("close21").addEventListener("click", function() {
    document.getElementById("modal21").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal21").classList.remove("open")
    }
});


document.querySelector("#modal21 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal21").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//22
document.getElementById("open22").addEventListener("click", function() {
    document.getElementById("modal22").classList.add("open")
})

document.getElementById("close22").addEventListener("click", function() {
    document.getElementById("modal22").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal22").classList.remove("open")
    }
});


document.querySelector("#modal22 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal22").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//23
document.getElementById("open23").addEventListener("click", function() {
    document.getElementById("modal23").classList.add("open")
})

document.getElementById("close23").addEventListener("click", function() {
    document.getElementById("modal23").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal23").classList.remove("open")
    }
});


document.querySelector("#modal23 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal23").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//24
document.getElementById("open24").addEventListener("click", function() {
    document.getElementById("modal24").classList.add("open")
})

document.getElementById("close24").addEventListener("click", function() {
    document.getElementById("modal24").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal24").classList.remove("open")
    }
});


document.querySelector("#modal24 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal24").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//25
document.getElementById("open25").addEventListener("click", function() {
    document.getElementById("modal25").classList.add("open")
})

document.getElementById("close25").addEventListener("click", function() {
    document.getElementById("modal25").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal25").classList.remove("open")
    }
});


document.querySelector("#modal25 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal25").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//26
document.getElementById("open26").addEventListener("click", function() {
    document.getElementById("modal26").classList.add("open")
})

document.getElementById("close26").addEventListener("click", function() {
    document.getElementById("modal26").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal26").classList.remove("open")
    }
});


document.querySelector("#modal26 .main-grid-1-modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal26").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});




//табы
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content-modal");

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {

		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tab--active");
		}
		tabs[i].classList.add("tab--active");
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("content--active");
		}
		contents[i].classList.add("content--active");

	});
}




//аккордеон
document.querySelectorAll('.accordeon').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;

        if(content.style.maxHeight){
            document.querySelectorAll('.accordeon__content').forEach((el) => el.style.maxHeight = null)
        } else{
            document.querySelectorAll('.accordeon__content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})


//фильтрация элементов по категориям

const list = document.querySelector('.filter__list'),
   items = document.querySelectorAll('.filter__block')
   listItems = document.querySelectorAll('.filter__list__item')

function filter(){
   list.addEventListener('click', event => {
       const targetId = event.target.dataset.id
       const target = event.target

       listItems.forEach(listitem => listitem.classList.remove('active'))
       target.classList.add('active')

    //    if(target.classList.contains('.filter__list__item')) {
    //         listItems.forEach(listitem => listitem.classList.remove('active'))
    //         target.classList.add('active')
    //    }

       switch(targetId){
           case 'all':
                items.forEach(item => {
                    item.style.display = 'block'
                })
            
               break
           case 'with':
               items.forEach(item => {
                   if (item.classList.contains('with')) {
                       item.style.display = 'block'
                 } else {
                       item.style.display = 'none'
                   }
               })
               break

            case 'without':
                items.forEach(item => {
                    if (item.classList.contains('without')) {
                        item.style.display = 'block'
                  } else {
                        item.style.display = 'none'
                    }
                })
                break
       }
   })
}
filter()





//слайдер
//1
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//2
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}


//3
var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
}


//4
var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("dot4");
  if (n > slides.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex4-1].style.display = "block";
  dots[slideIndex4-1].className += " active";
}


// //5
var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides5");
  var dots = document.getElementsByClassName("dot5");
  if (n > slides.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex5-1].style.display = "block";
  dots[slideIndex5-1].className += " active";
}


// //6
var slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("dot6");
  if (n > slides.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex6-1].style.display = "block";
  dots[slideIndex6-1].className += " active";
}
