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
      items: 10
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
      items: 5
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Girl',
      items: 3
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Accessories',
      items: 1
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
      items: 0
    },
  ]

  new_stock.forEach(item => {
    arrival.append(`
    <div class="item">
      <div class="card">
              <div class="show d-flex justify-content-between container-fluid">
                <button class=" btn bg-white shadow rounded-pill text_pink size fw-bold">New Arrival</button>
              </div>
              <img
                src="${item.img}"
                class="card-img-top" alt="..." width="100%">
              <div class="card-body">
                <p class="card-text mb-2">${item.name}</p>
                <p class="card-text text-secondary m-0 pb-1">${item.category}</p>
                <div class="d-flex">
                  <p class="fw-bold m-0 pb-0">${item.price}</p>
                </div>
                <p class="m-0 size pt-2">${item.items} stock left</p>
                <div class="progress mt-2" role="progressbar" aria-label="Example 5px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 8px">
                  <div class="progress-bar bg_pink" style="width: 100%"></div>
                </div>

                <div class="d-flex justify-content-between align-items-center">
       
          <div class="d-flex justify-content-around align-items-center w-100 mt-3">
                <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white heart"><i class="bi bi-heart text_pink"></i></button>
                <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye text_pink"></i></button>
                  <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
            </div>
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
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Accessories',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
  ]

  boys_stock.forEach(item => {
    boys_container.append(`
    <div class="col-lg-3 col-md-4 col-6 mt-3 mt-md-5">
      <div class="card shadow">
        <img
          src="${item.img}"
          class="card-img-top" alt="..." width="100%">
        <div class="card-body">
          <p class="card-text m-0">${item.name}</p>
          <p class="card-text text-secondary m-0">${item.category}</p>
          <div class="d-flex">
            <p class="fw-bold m-0">${item.price}</p>
          </div>
          <p class="m-0 size pt-2">${item.items} stock left</p>
          <div class="progress mt-2" role="progressbar" aria-label="Example 5px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 8px">
            <div class="progress-bar bg_pink" style="width: 100%"></div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-around align-items-center w-100 mt-3">
          <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white heart"><i class="bi bi-heart text_pink"></i></button>
          <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye text_pink"></i></button>
            <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
          </div>
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
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Accessories',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Boys Jeans',
      category: 'Boy',
      items: 20
    },
  ]

  boys_box.forEach(item => {
    boys_html.append(`
     <div class="col-lg-3 col-md-4 col-6 mt-3 mt-md-5">
       <div class="card shadow border-0">
         <img
           src="${item.img}"
           class="card-img-top" alt="..." width="100%">
         <div class="card-body">
           <p class="card-text m-0">${item.name}</p>
           <p class="card-text text-secondary m-0">${item.category}</p>
           <div class="d-flex">
             <p class="fw-bold m-0">${item.price}</p>
           </div>
           <p class="m-0 size pt-2">${item.items} stock left</p>
           <div class="progress mt-2" role="progressbar" aria-label="Example 5px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 8px">
             <div class="progress-bar bg_pink" style="width: 100%"></div>
           </div>
           <div class="d-flex justify-content-between align-items-center">
           <div class="d-flex justify-content-around align-items-center w-100 mt-3">
           <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white heart"><i class="bi bi-heart text_pink"></i></button>
           <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye text_pink"></i></button>
             <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
          </div>
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
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Accessories',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
  ]

  girls_stock.forEach(item => {
    girls_container.append(`
    <div class="col-lg-3 col-md-4 col-6 mt-3 mt-md-5">
      <div class="card shadow">
        <img
          src="${item.img}"
          class="card-img-top" alt="..." width="100%">
        <div class="card-body">
          <p class="card-text m-0">${item.name}</p>
          <p class="card-text text-secondary m-0">${item.category}</p>
          <div class="d-flex">
            <p class="fw-bold m-0">${item.price}</p>
          </div>
          <p class="m-0 size pt-2">${item.items} stock left</p>
          <div class="progress mt-2" role="progressbar" aria-label="Example 5px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 8px">
            <div class="progress-bar bg_pink" style="width: 100%"></div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-around align-items-center w-100 mt-3">
                <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white heart"><i class="bi bi-heart text_pink"></i></button>
                <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye text_pink"></i></button>
                  <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
            </div>
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
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Accessories',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Girls Jeans',
      category: 'Boy',
      items: 20
    },
  ]

  girls_box.forEach(item => {
    girls_html.append(`
     <div class="col-lg-3 col-md-4 col-6 mt-3 mt-md-5">
       <div class="card shadow border-0">
         <img
           src="${item.img}"
           class="card-img-top" alt="..." width="100%">
         <div class="card-body">
           <p class="card-text m-0">${item.name}</p>
           <p class="card-text text-secondary m-0">${item.category}</p>
           <div class="d-flex">
             <p class="fw-bold m-0">${item.price}</p>
           </div>
           <p class="m-0 size pt-2">${item.items} stock left</p>
           <div class="progress mt-2" role="progressbar" aria-label="Example 5px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 8px">
             <div class="progress-bar bg_pink" style="width: 100%"></div>
           </div>
           <div class="d-flex justify-content-between align-items-center">
           <div class="d-flex justify-content-around align-items-center w-100 mt-3">
           <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white heart"><i class="bi bi-heart text_pink"></i></button>
           <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye text_pink"></i></button>
             <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
          </div>
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
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Accessories',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
  ]

  accessories_stock.forEach(item => {
    accessories_container.append(`
    <div class="col-lg-3 col-md-4 col-6 mt-3 mt-md-5">
      <div class="card shadow">
        <img
          src="${item.img}"
          class="card-img-top" alt="..." width="100%">
        <div class="card-body">
          <p class="card-text m-0">${item.name}</p>
          <p class="card-text text-secondary m-0">${item.category}</p>
          <div class="d-flex">
            <p class="fw-bold m-0">${item.price}</p>
          </div>
          <p class="m-0 size pt-2">${item.items} stock left</p>
          <div class="progress mt-2" role="progressbar" aria-label="Example 5px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 8px">
            <div class="progress-bar bg_pink" style="width: 100%"></div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-around align-items-center w-100 mt-3">
          <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white heart"><i class="bi bi-heart text_pink"></i></button>
          <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye text_pink"></i></button>
            <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
          </div>
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
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Accessories',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1404034854/photo/blank-black-and-white-man-pants-mock-up-side-view.jpg?s=612x612&w=0&k=20&c=NlaaDpOlIQ-4cWbrKiOJe2cHGbg9dKUL_iffyYpJLVU=',
      price: '&#8373; 100',
      name: 'Accessories',
      category: 'Boy',
      items: 20
    },
  ]

  accessories_box.forEach(item => {
    accessories_html.append(`
     <div class="col-lg-3 col-md-4 col-6 mt-3 mt-md-5">
       <div class="card shadow border-0">
         <img
           src="${item.img}"
           class="card-img-top" alt="..." width="100%">
         <div class="card-body">
           <p class="card-text m-0">${item.name}</p>
           <p class="card-text text-secondary m-0">${item.category}</p>
           <div class="d-flex">
             <p class="fw-bold m-0">${item.price}</p>
           </div>
           <p class="m-0 size pt-2">${item.items} stock left</p>
           <div class="progress mt-2" role="progressbar" aria-label="Example 5px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 8px">
             <div class="progress-bar bg_pink" style="width: 100%"></div>
           </div>
           <div class="d-flex justify-content-between align-items-center">
           <div class="d-flex justify-content-around align-items-center w-100 mt-3">
           <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white heart"><i class="bi bi-heart text_pink"></i></button>
           <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye text_pink"></i></button>
             <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
            </div>
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
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Girl',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Accessories',
      items: 20
    },
    {
      img: 'https://media.istockphoto.com/id/1043534738/photo/childrens-sneakers-for-sport.jpg?s=612x612&w=0&k=20&c=xUc4pUZQ6WIOQYl758P2tEkjjqpJo2kPCj3b-TNlywE=',
      price: '&#8373; 100',
      name: 'boys Shoes',
      category: 'Boy',
      items: 20
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
          <p class="m-0 size pt-2">${item.items} stock left</p>
          <div class="progress mt-2" role="progressbar" aria-label="Example 5px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 8px">
            <div class="progress-bar bg_pink" style="width: 100%"></div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-around align-items-center w-100 mt-3">
          <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white heart"><i class="bi bi-heart text_pink"></i></button>
          <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye text_pink"></i></button>
            <button class="btn shadow py-0 py-md-2 px-1 px-md-3 bg-white"><i class="bi bi-handbag-fill text_pink"></i></button>
          </div>
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


  // For Account OverView

  $('#order_section').hide()
  $('.account').addClass('bg_pink')
  $('.account').css('color', 'white')

  $('.account').click(function () {
    $(this).toggleClass('bg_pink');
    $(this).css('color', $(this).hasClass('bg_pink') ? 'white' : '');
    $(".order").removeClass('bg_pink').css('color', '');
    $(".saved_items").removeClass('bg_pink').css('color', '');
    $('#account_section').show()
    $('#order_section').hide()
  })

  $('.order').click(function () {
    $(this).toggleClass('bg_pink');
    $(this).css('color', $(this).hasClass('bg_pink') ? 'white' : '');
    $(".account").removeClass('bg_pink').css('color', '');
    $(".saved_items").removeClass('bg_pink').css('color', '');
    $('#order_section').show()
    $('#account_section').hide()
  })
  $('.saved_items').click(function () {
    $(this).toggleClass('bg_pink');
    $(this).css('color', $(this).hasClass('bg_pink') ? 'white' : '');
    $(".account").removeClass('bg_pink').css('color', '');
    $(".order").removeClass('bg_pink').css('color', '');
    $('#order_section').show()
    $('#account_section').hide()
  })

});



