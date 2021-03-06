const testData = [
    {
		name: "Ken",
		age: 23,
		destination: "Hawaii",
		testimonial: "'I had a wonderfull time...'",
        profile: scr="profile/image1.png",
        ratings: scr="star.png",
        photo: "https://images.squarespace-cdn.com/content/v1/5ea2bcb7c4ac31691149f968/1587747063950-GK3FX36IYE04GAKJPN2F/ke17ZwdGBToddI8pDm48kKuiAnntm0j5DGqDi00EyglZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx0xBJ5u9pWgiJWgy9MpFEViNUMgNEhoE7cqVwha7pwyOorRdkhtCGY2sVQ33NUB_k/image-asset.jpeg?format=500w",
    },
    {
		name: "Dory",
		age: 26,
		destination: "Iceland",
		testimonial: "'I loved the beautifull nature...'",
        profile: scr="profile/image3.png",
        ratings: scr="star.png",
        photo: "https://images.squarespace-cdn.com/content/v1/5ea2bcb7c4ac31691149f968/1587747064453-0NHM1KDX5UE20ODB55P4/ke17ZwdGBToddI8pDm48kAjnGcc-szhzWxdWA-NtP01Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpy-v9athTaMeX-qThU6Jap2Bg3JHkx8Vjg05Zf535dcep3aVtbbMcWd2q8hs1BlPsk/image-asset.jpeg?format=500w",
	},
	{
		name: "Valdemar",
		age: 30,
		destination: "Caribbean",
		testimonial: "'It was a good experience...'",
        profile: scr="profile/image4.png",
        ratings: scr="star.png",
        photo: "https://images.squarespace-cdn.com/content/v1/5ea2bcb7c4ac31691149f968/1587747064113-69YY2M0WSSQNE996RJJM/ke17ZwdGBToddI8pDm48kAbrGIGafpX1W5uUmuXu7zFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxiS1R8uPSgT87E4-4GTFeLSv2RTao2pyx_-uALz4XAKM7deYkfcmSHFLKQ5GDhunU/image-asset.jpeg?format=500w",
    },
    {
		name: "Barbara",
		age: 34,
		destination: "France",
		testimonial: "'It was the best time of my life when...'",
        profile: scr="profile/image2.png",
        ratings: scr="star.png",
        photo: "https://images.pexels.com/photos/3989821/pexels-photo-3989821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },

];



function testTemplate(test) {
    return `
	<div class="testimonials slide">
    <img class="test-profile" src=${test.profile}> 
    <img class="test-ratings" src="${test.ratings}"> 
    <img class="test-ratings" src="${test.ratings}"> 
    <img class="test-ratings" src="${test.ratings}"> 
    <img class="test-ratings" src="${test.ratings}"> 
    <img class="test-ratings" src="${test.ratings}">
	<h2 class="test-name">${test.name} <span class="age">(${test.age})</span></h2>
	<p class="test-destination">${test.destination}
	<img class="test-photo" src="${test.photo}">
	<p class="test-testimonial">${test.testimonial}
    </div>
    `
}

document.getElementById("container").innerHTML = `
   <h1>Testimonials (${testData.length} results)</h1>
   ${testData.map(testTemplate).join('')}

`

function newSlider(containerElement) {

    var slider = {
    };
    slider.container = document.querySelector(containerElement);
    slider.currentSlide = 1; // holds the current slide number to view
    slider.allSlides = slider.container.querySelectorAll(".slide"); // holds all the slides
    slider.totalSlides = slider.allSlides.length; // the number of slides in total
    
    slider.showSlide = function() {
        console.log("Showing slide number: " + slider.currentSlide);

        // firstly remove the active class from all slides
        for (let i = 0; i<slider.totalSlides; i++) {
            slider.allSlides[i].classList.remove("active");
        }

        // add active class to the slide to be shown
        slider.allSlides[slider.currentSlide - 1].classList.add("active"); // minus one so that it becomes an index
    }

   // Start the slideshow
    slider.showSlide(slider.currentSlide);

    // add click event to "next" button
    slider.container.querySelector(".button-right").addEventListener("click", function (e) {
        console.log("click");
        nextSlide(e);
    });

    // add click event to "previous" button
    slider.container.querySelector(".button-left").addEventListener("click", function (e) {
        console.log("click left");
        previousSlide(e);
    });

    // add keyboard events as well
    // slider.container.addEventListener("keydown", function(event) {
    //     console.log(event.keyCode);
    //     if (event.keyCode === 39) { // key 39 is the right arrow key
    //         nextSlide();
    //     } else if(event.keyCode === 37) { // left arrow
    //         previousSlide();
    //     }
    // });


     console.log(slider);

}

function nextSlide(e) {
            // current slideshow container
            var slider = e.currentTarget.parentElement;
            console.log(slider);

            // get current active slide
            currentSlide = slider.querySelector(".active");

            // check if last slide
            if(currentSlide.nextElementSibling === null || currentSlide.nextElementSibling.nodeName === "BUTTON") {
                console.log("last slide");
                currentSlide.classList.remove("active");
                currentSlide.parentElement.firstElementChild.classList.add("active");
            } else {
                console.log("moving to next slide");
                currentSlide.classList.remove("active");
                currentSlide.nextElementSibling.classList.add("active");
            }


}

function previousSlide(e) {
    //TODO bug here bc adding active to button element
            // current slideshow container
            var slider = e.currentTarget.parentElement;
            //console.log(slider);

            // get current active slide
            currentSlide = slider.querySelector(".active");

            // check if last slide
            if(currentSlide.previousElementSibling === null || currentSlide.previousElementSibling.nodeName === "BUTTON") {
                console.log("first slide");
                currentSlide.classList.remove("active");
                // Note: we take the last element and then 2x time previous elements, to skip the two <button> elements
                currentSlide.parentElement.lastElementChild.previousElementSibling.previousElementSibling.classList.add("active");
            } else {
                console.log("moving to previous slide");
                currentSlide.classList.remove("active");
                currentSlide.previousElementSibling.classList.add("active");
            }
}







/*




fetch('testimonials.json').then(function (response) {
    return response.json();
}).then(function (obj) {
    //console.log(obj);
    loadTestimonials(obj);
}).catch(function (error) {
    console.error('Something went wrong retrieving the data');
    console.error(error);
})

function loadTestimonials(obj) {
    for (let i = 0; i < obj.testimonials.length; i++) {
        const name = document.createElement('p');
        name.textContent = obj.testimonials[i].name + ", " + obj.testimonials[i].age;
        document.querySelector('#testimonials').appendChild(name);

        const dest = document.createElement('p');
        dest.textContent = "Destination: " + obj.testimonials[i].destination;
        document.querySelector('#testimonials').appendChild(dest);

        const test = document.createElement('p');
        test.textContent = "Testimonial: " + obj.testimonials[i].testimonial;
        document.querySelector('#testimonials').appendChild(test);
    }
}
*/

