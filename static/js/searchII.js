$("#search-ion-icon").on({
    click: () => {
        $("#nav-normal").removeClass("show");
        $("#nav-normal").removeClass("active");
        $("#nav-ios").removeClass("show");
        $("#nav-ios").removeClass("active");
        $("#nav-android").removeClass("show");
        $("#nav-android").removeClass("active");
        $("#nav-all").removeClass("show");
        $("#nav-all").removeClass("active");
        $("#nav-search").addClass("show");
        $("#nav-search").addClass("active");

        $("#nav-normal-tab").removeClass("active");
        $("#nav-ios-tab").removeClass("active");
        $("#nav-android-tab").removeClass("active");
        $("#nav-all-tab").removeClass("active");
        $("#nav-search-tab").addClass("active");

        $("#pages_are").hide(500);
    },
    change: () => {
        $("#nav-normal").removeClass("show");
        $("#nav-normal").removeClass("active");
        $("#nav-ios").removeClass("show");
        $("#nav-ios").removeClass("active");
        $("#nav-android").removeClass("show");
        $("#nav-android").removeClass("active");
        $("#nav-all").removeClass("show");
        $("#nav-all").removeClass("active");
        $("#nav-search").addClass("show");
        $("#nav-search").addClass("active");

        $("#nav-normal-tab").removeClass("active");
        $("#nav-ios-tab").removeClass("active");
        $("#nav-android-tab").removeClass("active");
        $("#nav-all-tab").removeClass("active");
        $("#nav-search-tab").addClass("active");

        $("#pages_are").hide(500);
    }
});

/*
nav-normal
nav-android

nav-all
nav-search
*/



$("#nav-search-tab").on({
    click: () => {
        $("#pages_are").hide(500);
    },
    change: () => {
        $("#pages_are").hide(500);
    }
});
$("#nav-normal-tab").click(() => {
    $("#pages_are").show(500);
})
$("#nav-ios-tab").click(() => {
    $("#pages_are").show(500);
})
$("#nav-android-tab").click(() => {
    $("#pages_are").show(500);
})
$("#nav-all-tab").click(() => {
    $("#pages_are").show(500);
})

$(() => {

    let countdownTimeout;
    let countdownInterval;

    $("#search-ion-icon").on({
        input: () => {
            clearTimeout(countdownTimeout);
            clearInterval(countdownInterval);
            $("#CountContainer").text("");

            let countdown = 2;
            $("#CountContainer").html(
                `<p class="m-0 p-0" style="color: #2d9005;">Searching Automatically starts in <span id="timeSearchCountDown">${countdown}</span>s</p>`
            );
            $("#timeSearchCountDown").text(countdown);

            countdownTimeout = setTimeout(() => {
                function searchData(query) {
                    if (query.length != 0) {
                        $.ajax({
                            url: '/ion-icons-v2/search/?search=' + query,
                            type: "GET",
                            dataType: "json",
                            success: function (response) {
                                var data = response.data;
                                if (data != 0) {
                                    $("#FoundResults").html(`<h4 class="text-center mt-3 mb-5 text-success">Icons Found : ${data[0].found_searches} | ${data[0].found_searches_time}s</h4>`);
                                } else {
                                    $("#FoundResults").html(`<h4 class="text-center mt-3 mb-5">Icons Found : 0</h4>`);
                                }
                                var SearchBody = $("#search_ion_icons");
                                if (data.length  != 0) {
                                    $("#FoundResults").show(200);
                                    SearchBody.empty();

                                    // Generate Searched Icons
                                    for (var i = 0; i < data.length; i++) {
                                        var searchedItems =
                                            `
                                        <div class="iconBx">
                                            <div class="box border cup ppcode mb-3"  data-aos="fade-in" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                data-bs-custom-class="light-tooltip" data-bs-title="${data[i].name}" icon-number="1" svgIs="${data[i].svgname}"
                                                onclick="whatIsCode(this)">
                                                <img src="${data[i].path}" alt="ion-icon"   class="mb-2">
                                                </div>
                                                <span class="iconNameIs">${data[i].name}</span>
                                        </div>
                                    `;

                                        // Appendations of searched items
                                        SearchBody.removeClass("flex-column");
                                        SearchBody.addClass("justify-content-center");
                                        SearchBody.append(searchedItems);
                                    }
                                } else {
                                    $("#FoundResults").show(200);
                                    $("#search_ion_icons").removeClass("flex-column");
                                    $("#search_ion_icons").addClass("flex-column");
                                    $("#search_ion_icons").removeClass("justify-content-center");
                                    $("#search_ion_icons").html(
                                    `<h4 class="text-center text-secondary pt-5 text-center">
                                         Not Found Try Something Else.
                                    </h4>
                                    <h2 class="text-center text-secondary">ƪ( ˘ ⌣ ˘ )ʃ</h2>`
                        )
                                }
                            },
                            error: function (xhr, status, error) {
                                console.log(error);
                            }
                        });
                    }
                    else {
                        $("#FoundResults").hide(200);
                        $("#search_ion_icons").removeClass("flex-column");
                        $("#search_ion_icons").addClass("flex-column");
                        $("#search_ion_icons").removeClass("justify-content-center");
                        $("#search_ion_icons").html(
                            `<h4 class="text-center text-secondary pt-5 text-center">
                    Nothing Searched.
                </h4>
                <h2 class="text-center text-secondary">¯|_(ツ)_/¯</h2>`
                        )
                    }
                }

                searchData($("#search-ion-icon").val());
                $("#CountContainer").text("Searched !!");
                $("#timeSearchCountDown").text("");
            }, 2000);

            countdownInterval = setInterval(() => {
                countdown--;
                $("#timeSearchCountDown").text(countdown);

                if (countdown === 0) {
                    clearInterval(countdownInterval);
                }
            }, 1000);
        }
    });
    $("#search-icon-btn").on({
        click: () => {
            function searchData(query) {
                if (query.length != 0) {
                    $.ajax({
                        url: '/ion-icons-v2/search/?search=' + query,
                        type: "GET",
                        dataType: "json",
                        success: function (response) {
                            var data = response.data;
                            var SearchBody = $("#search_ion_icons");
                            SearchBody.empty();

                            // Generate Searched Icons
                            for (var i = 0; i < data.length; i++) {
                                var searchedItems =
                                    `
                                    <div class="iconBx">
                                        <div class="box border cup ppcode mb-3" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                            data-bs-custom-class="light-tooltip" data-bs-title="${data[i].name}" icon-number="1" svgIs="${data[i].svgname}"
                                            onclick="whatIsCode(this)">
                                            <img src="${data[i].path}" alt="ion-icon"   class="mb-2">
                                            </div>
                                            <span class="iconNameIs">${data[i].name}</span>
                                    </div>
                                `;

                                // Appendations of searched items
                                SearchBody.removeClass("flex-column");
                                SearchBody.addClass("justify-content-center");
                                SearchBody.append(searchedItems);
                            }
                        },
                        error: function (xhr, status, error) {
                            console.log(error);
                        }
                    });
                }
                else {
                    $("#search_ion_icons").removeClass("flex-column");
                    $("#search_ion_icons").addClass("flex-column");
                    $("#search_ion_icons").removeClass("justify-content-center");
                    $("#search_ion_icons").html(
                        `<h4 class="text-center text-secondary pt-5 text-center">
                    Nothing Searched.
                    <a id="previous-link" href="?page=1">Previous</a>
                </h4>
                <h2 class="text-center text-secondary">¯|_(ツ)_/¯</h2>`
                    )
                }
            }
            searchData($("#search-ion-icon").val())
        }
    });
})
