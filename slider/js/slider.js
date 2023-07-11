document.addEventListener("DOMContentLoaded", () => {
    
    const data = [
        {
            city: 'Rostov-on-Don LCD admiral',
            area: '81 m2',
            time: '3.5 months',
            cost: 'Upon request',
            url: 'img/img1.png',
        },
        {
            city: 'Sochi Thieves',
            area: '105 m2',
            time: '4 months',
            cost: 'Upon request',
            url: 'img/img2.png',
        },
        {
            city: 'Rostov-on-Don Patriotic',
            area: '93 m2',
            time: '3 months',
            cost: 'Upon request',
            url: 'img/img3.png',
        }
    ];
    
 
    const headBtns = document.getElementsByClassName('head_btn');
    const ellipseBtns = document.getElementsByClassName('ellipse_btn');
    const dataDetails = document.getElementsByClassName('details');
    const prevBtn = document.getElementsByClassName('arrow-button')[0];
    const nextBtn = document.getElementsByClassName('arrow-button')[1];
    
    let sliderImg = document.querySelector('.img')
    let currentSlideIndex = 0; 

    slide(); 

    for (let headBtn of headBtns) {
        headBtn.addEventListener('click', selectSlide, false);
    }


    for (let ellipseBtn of ellipseBtns) {
        ellipseBtn.addEventListener('click', selectSlide, false);
    }


    prevBtn.addEventListener('click', prevSlide, false);
    nextBtn.addEventListener('click', nextSlide, false);



    function prevSlide() {
        currentSlideIndex--;


        if(currentSlideIndex < 0) currentSlideIndex = data.length - 1;

        slide();
    }

    
    function nextSlide() {
        currentSlideIndex++;


        if (currentSlideIndex > data.length - 1) currentSlideIndex = 0;

        slide();
    }


    function selectSlide() {
        currentSlideIndex = getElementIndex(this);
        slide();
    }


    function slide() {
        setButtonsStyle();
        setDataDetails();
        changeSlideImg();
    }


    function setButtonsStyle() {
        for (let headbtn of headBtns) {
            headbtn.classList.remove("active");
        }
        for (let ellipseBtn of ellipseBtns) {
            ellipseBtn.classList.remove("active");
        }

        headBtns[currentSlideIndex].classList.add("active");
        ellipseBtns[currentSlideIndex].classList.add("active");
    }

    function setDataDetails() {
        dataDetails[0].textContent = data[currentSlideIndex].city;
        dataDetails[1].textContent = data[currentSlideIndex].area;
        dataDetails[2].textContent = data[currentSlideIndex].time;
        dataDetails[3].textContent = data[currentSlideIndex].cost;
    }


    function changeSlideImg() {
        sliderImg.style.opacity = 0;
        
        setTimeout(() => {
            sliderImg.style.backgroundImage = "url('" + data[currentSlideIndex].url + "')";
        }, 200);

        setTimeout(() => {
            sliderImg.style.opacity = 1;
        }, 400);
    }


    function getElementIndex(element) {
        let i = 0;

        do {
            i++;
        } while (element = element.previousElementSibling);

        return i - 1;
    }
});
