const openPupop = document.querySelectorAll(".openPupop");
const modal = document.querySelector(".modal-text-box");
const modal_container = document.getElementById("modal_container");
const closePupop = document.getElementById("closePupop");
const swiper_wrapper = document.getElementById("swiper_wrapper");

console.log(closePupop);

for (const op of openPupop) {
  op.addEventListener("click", () => {
    render(op);
    modal_container.classList.add("show");
  });
}

function render(op) {
  switch (op.id) {
    case "ahmed":
      console.log("1");
      modal.innerHTML = `
        <h1>Ahmed-this is a Data Saincer</h1>
        <p>    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique non velit vitae, architecto earum molestias quae
        sapiente explicabo qui soluta rem rerum autem amet! Rerum iusto atque quisquam ipsum officiis dolorem, suscipit
        excepturi eaque neque, perferendis cupiditate veniam? Cumque hic sapiente vitae repellendus asperiores, corrupti,
        dignissimos, numquam consequuntur atque sint quos quod quas architecto nostrum perspiciatis eveniet optio tempore
        incidunt. Animi dignissimos odit commodi. Alias iusto laudantium quod soluta quasi?
    </p>
      `;
      swiper_wrapper.innerHTML = `
      <div class="swiper-wrapper">
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
      </div>
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
        
      `;
      const swiper1 = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      break;
    case "ali":
      console.log("2");
      modal.innerHTML = `
        <h1>Ali-this is a Frontend Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis debitis cumque earum, nostrum vero quia optio
        perferendis quis minima! Facilis aliquam molestias quo sapiente, odio velit quisquam hic ipsam consequatur natus eos
        ducimus fuga, magni nisi optio alias ullam, dicta culpa cupiditate doloremque! Est reprehenderit adipisci facilis,
        ut ullam non deleniti repellat tempore eos eum nostrum repellendus. Odio voluptas officia, ut dolores minima libero
        expedita, dignissimos ea explicabo, iure inventore!</p>
      `;
      swiper_wrapper.innerHTML = `
        <div class="swiper-wrapper">
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      `;
      const swiper2 = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      break;
    case "meks":
      console.log("3");
      modal.innerHTML = `
        <h1>Meks-this is a Dangen Master</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis debitis cumque earum, nostrum vero quia optio
        perferendis quis minima! Facilis aliquam molestias quo sapiente, odio velit quisquam hic ipsam consequatur natus eos
        ducimus fuga, magni nisi optio alias ullam, dicta culpa cupiditate doloremque! Est reprehenderit adipisci facilis,
        ut ullam non deleniti repellat tempore eos eum</p>
      `;
      swiper_wrapper.innerHTML = `
      <div class="swiper-wrapper">
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
          <div class="foto-slide swiper-slide"><img src="https://zelig880.com/wp-content/uploads/2018/10/shutterstock_248597491_IntTest.jpg"></div>
      </div>
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      `;
      const swiper3 = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      break;
    case "amir":
      console.log("4");
      modal.innerHTML = `
          <h1>Amir-this is a</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste dolor similique nulla vero iure
          assumenda quos in excepturi blanditiis soluta, consequuntur iusto quis inventore reiciendis quidem,
          dolores placeat aut quo atque ex? Eaque modi ea nihil animi pariatur corrupti.</p>
        `;
      swiper_wrapper.innerHTML = `
        
      `;
      const swiper4 = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      break;
  }
}

closePupop.addEventListener("click", () => {
  console.log(123123);
  modal_container.classList.remove("show");
});
