$(document).ready(function () {
  function new_arrivalCarousel() {
    $('#new_arrival').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      items: 4,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  }

  let arrival = $('#new_arrival')
  let new_stock = [
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Accessories',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
    },
  ]

  new_stock.forEach(item => {
    arrival.append(`
    <div class="item">
      <div class="card">
      <a href="/details.html" class="text-decoration-none text-black">
          <div class="show d-flex justify-content-between container-fluid">
            <button class=" btn bg-white shadow rounded-pill">New Arrival !</button>
          </div>
          <img
            src="${item.img}"
            // class="card-img-top" alt="..." height="200px" width="100%">
          <div class="card-body">
            <p class="card-text mb-2">${item.name}</p>
            <p class="card-text text-secondary m-0 pb-1">${item.category}</p>
            <div class="d-flex">
              <p class="fw-bold m-0 pb-0">${item.price}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
            </div>
          </a>
            <button class="btn shadow rounded-circle bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
          </div>
        </div>
      </div>

    </div>
    `)
  })

  new_arrivalCarousel();

  // Control New Arrival and Details
  var new_arrival = $("#new_arrival").owlCarousel();

  $(".owl_new_control").on("click", function () {
    new_arrival.trigger("next.owl.carousel");
  });

  // Boys Section
  let boys_container = $('#boys_container')
  let boys_stock = [
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Accessories',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
  ]

  boys_stock.forEach(item => {
    boys_container.append(`
    <div class="col-lg-3 col-md-4 col-sm-12 mt-3 mt-md-5">
      <div class="card shadow">
        <img
          src="${item.img}"
          class="card-img-top" alt="..." height="200px" width="100%">
        <div class="card-body">
          <p class="card-text m-0">${item.name}</p>
          <p class="card-text text-secondary m-0">${item.category}</p>
          <div class="d-flex">
            <p class="fw-bold m-0">${item.price}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
          </div>
          <button class="btn shadow rounded-circle bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
        </div>
        </div>
      </div>
    </div>
    `)
  })


  // Boys HTML
  let boys_html = $('#boys_html')
  let boys_box = [
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Accessories',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
  ]

  boys_box.forEach(item => {
    boys_html.append(`
     <div class="col-lg-3 col-md-4 col-sm-12 mt-3 mt-md-5">
       <div class="card shadow border-0">
         <img
           src="${item.img}"
           class="card-img-top" alt="..." height="200px" width="100%">
         <div class="card-body">
           <p class="card-text m-0">${item.name}</p>
           <p class="card-text text-secondary m-0">${item.category}</p>
           <div class="d-flex">
             <p class="fw-bold m-0">${item.price}</p>
           </div>
           <div class="d-flex justify-content-between align-items-center">
           <div class="d-flex align-items-center">
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
            </div>
           <button class="btn shadow rounded-circle bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
         </div>
         </div>
       </div>
     </div>
     `)
  })

  // girls Section
  let girls_container = $('#girls_container')
  let girls_stock = [
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Accessories',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
  ]

  girls_stock.forEach(item => {
    girls_container.append(`
    <div class="col-lg-3 col-md-4 col-sm-12 mt-3 mt-md-5">
      <div class="card shadow">
        <img
          src="${item.img}"
          class="card-img-top" alt="..." height="200px" width="100%">
        <div class="card-body">
          <p class="card-text m-0">${item.name}</p>
          <p class="card-text text-secondary m-0">${item.category}</p>
          <div class="d-flex">
            <p class="fw-bold m-0">${item.price}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
          </div>
          <button class="btn shadow rounded-circle bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
        </div>
        </div>
      </div>
    </div>
    `)
  })
  // Girls HTML


  // Girls HTML
  let girls_html = $('#girls_html')
  let girls_box = [
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Accessories',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
  ]

  girls_box.forEach(item => {
    girls_html.append(`
     <div class="col-lg-3 col-md-4 col-sm-12 mt-3 mt-md-5">
       <div class="card shadow border-0">
         <img
           src="${item.img}"
           class="card-img-top" alt="..." height="200px" width="100%">
         <div class="card-body">
           <p class="card-text m-0">${item.name}</p>
           <p class="card-text text-secondary m-0">${item.category}</p>
           <div class="d-flex">
             <p class="fw-bold m-0">${item.price}</p>
           </div>
           <div class="d-flex justify-content-between align-items-center">
           <div class="d-flex align-items-center">
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
           </div>
           <button class="btn shadow rounded-circle bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
         </div>
         </div>
       </div>
     </div>
     `)
  })

  // accessories Section
  let accessories_container = $('#accessories_container')
  let accessories_stock = [
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Accessories',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
  ]

  accessories_stock.forEach(item => {
    accessories_container.append(`
    <div class="col-lg-3 col-md-4 col-sm-12 mt-3 mt-md-5">
      <div class="card shadow">
        <img
          src="${item.img}"
          class="card-img-top" alt="..." height="200px" width="100%">
        <div class="card-body">
          <p class="card-text m-0">${item.name}</p>
          <p class="card-text text-secondary m-0">${item.category}</p>
          <div class="d-flex">
            <p class="fw-bold m-0">${item.price}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
          </div>
          <button class="btn shadow rounded-circle bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
        </div>
        </div>
      </div>
    </div>
    `)
  })


  // Accessories HTML
  let accessories_html = $('#accessories_html')
  let accessories_box = [
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Accessories',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
    },
  ]

  accessories_box.forEach(item => {
    accessories_html.append(`
     <div class="col-lg-3 col-md-4 col-sm-12 mt-3 mt-md-5">
       <div class="card shadow border-0">
         <img
           src="${item.img}"
           class="card-img-top" alt="..." height="200px" width="100%">
         <div class="card-body">
           <p class="card-text m-0">${item.name}</p>
           <p class="card-text text-secondary m-0">${item.category}</p>
           <div class="d-flex">
             <p class="fw-bold m-0">${item.price}</p>
           </div>
           <div class="d-flex justify-content-between align-items-center">
           <div class="d-flex align-items-center">
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
              <div class="star">&#9733;</div>
           </div>
           <button class="btn shadow rounded-circle bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
         </div>
         </div>
       </div>
     </div>
     `)
  })



  // details

  $('#details').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })


  function suggestedCarousel() {
    $('#you_may_like').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      items: 4,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  }

  let may_like = $('#you_may_like')
  let may_like_box = [
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Girl',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Accessories',
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
    },
  ]

  may_like_box.forEach(item => {
    may_like.append(`
    <div class="item">
      <div class="card">
        <img
          src="${item.img}"
          class="card-img-top" alt="..." width="100%">
        <div class="card-body">
          <p class="card-text mb-2">${item.name}</p>
          <p class="card-text text-secondary m-0 pb-1">${item.category}</p>
          <div class="d-flex">
            <p class="fw-bold m-0 pb-0">${item.price}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
            <div class="star">&#9733;</div>
          </div>
            <button class="btn shadow rounded-circle bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
          </div>
        </div>
      </div>

    </div>
    `)
  })

  suggestedCarousel();

  // Control New Arrival and Details
  var you_may_like = $("#you_may_like").owlCarousel();

  $(".owl_new_control").on("click", function () {
    you_may_like.trigger("next.owl.carousel");
  });




  // Details owl button control
  var details = $("#details").owlCarousel();

  $(".forward").on("click", function () {
    details.trigger("next.owl.carousel");
  });

  $(".prev").on("click", function () {
    details.trigger("prev.owl.carousel")
  });


  // For Star
  $('.card .star').click(function () {
    // Get the index of the clicked star within the product
    var index = $(this).index();

    // Toggle the 'orange' class for stars up to and including the clicked star within the product
    $(this).prevAll('.star:lt(' + (index + 1) + ')').toggleClass('orange');

    // Remove the 'orange' class for stars after the clicked star within the product
    $(this).nextAll('.star:gt(' + index + ')').removeClass('orange');
  });


});



