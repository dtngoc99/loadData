$(function () {
    const courses = [
        {
            name: "Development",
            users: 46,
            likes: 14,
            price: 300,
            categories: ["Business"],
            img:
                "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p1.jpg",
        },
        {
            name: "Creative Art",
            users: 26,
            likes: 24,
            price: 600,
            categories: ["Business", "Management"],
            img:
                "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p2.jpg",
        },
        {
            name: "Interior Design",
            users: 36,
            likes: 34,
            price: 300,
            categories: ["Languages"],
            img:
                "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p3.jpg",
        },
        {
            name: "Tech and Coding",
            users: 46,
            likes: 14,
            price: 500,
            categories: ["Business", "Management"],
            img:
                "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p4.jpg",
        },
        {
            name: "Literature",
            users: 36,
            likes: 34,
            price: 200,
            categories: ["Management", "Languages"],
            img:
                "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p5.jpg",
        },
        {
            name: "Business",
            users: 56,
            likes: 44,
            price: 400,
            categories: ["Business"],

            img:
                "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p6.jpg",
        },
        {
            name: "Graphic Design",
            users: 46,
            likes: 14,
            categories: ["Business"],
            price: 300,
            img:
                "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p7.jpg",
        },
        {
            name: "Languages",
            users: 46,
            likes: 34,
            price: 500,
            categories: ["Management", "Languages"],
            img:
                "https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/eduline-liberty-demo_Free/1627966365/web/assets/images/p8.jpg",
        },
    ];
    let filterdCourses = [];
    //  đổ dữ liệu từ array categories ra giao diện html
    // duyệt qua từng phần tử của categories rồi đổ vào mẫu
    // template literal
    // filter trả về 1 mảng mới thoải mãn function test

    // render all courses
    renderCourse(courses);
    $(".filter-category a").click(function (e) {
        e.preventDefault();
        // remove and and class .active
        $(".filter-category a").removeClass("active");
        $(this).addClass("active");
        // filter
        const filterdItem = $(this).attr("data-category");
        filterdCourses = courses.filter((val) =>
            val.categories.includes(
                filterdItem.charAt(0).toUpperCase() + filterdItem.slice(1)
            )
        );
        // remove all children
        $(".content-category .row").empty();

        // render new Courses
        if (filterdCourses.length === 0) {
            renderCourse(courses);
            const currentVal = $('#filter-price').val();
            filterByPriceCourses = courses.filter(
                (val) => val.price >= currentVal
            );
            // remove all children
            $(".content-category .row").empty();
            renderCourse(filterByPriceCourses);
        } else {
            renderCourse(filterdCourses);
            const currentVal = $('#filter-price').val();
            const filterByPriceCourses = filterdCourses.filter(
                (val) => val.price >= currentVal
            );
            // remove all children
            $(".content-category .row").empty();
            renderCourse(filterByPriceCourses);
        }
    });
    $("#filter-price").change(function (e) {
        e.preventDefault();
        if (filterdCourses.length === 0) {
            const currentVal = $(this).val();
            const filterByPriceCourses = courses.filter(
                (val) => val.price >= currentVal
            );
            $(".content-category .row").empty();
            renderCourse(filterByPriceCourses);
        }
        else {
            const currentVal = $(this).val();
            const filterByPriceCourses = filterdCourses.filter(
                (val) => val.price >= currentVal
            );
            $(".content-category .row").empty();
            renderCourse(filterByPriceCourses);
        }
    });
});

function renderCourse(list) {
    list.forEach((val) => {
        $(`
          <div class="col-md-3">
          <img
            src=${val.img}
            alt=""
          />
          <div class="card-content">
            <a href="">Christina Rose</a>
            <h2>${val.name}</h2>
            <ul class="flex a-center j-between">
              <li>
                <i class="fa fa-user"></i>
                <span>${val.users}</span>
              </li>
              <li>
                <i class="fa fa-thumbs-up"></i>
                <span>${val.likes}</span>
              </li>
              <li>
                <i class="fa fa-dollar-sign"></i>
                <span>${val.price}</span>
              </li>
            </ul>
          </div>
        </div>
          `).appendTo(".content-category .row");
    });
}