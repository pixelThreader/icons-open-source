$(() => {
    // Required toggling for pagination
    $("#nav-normal-tab").click(() => {
        $("#pagesTotalLink").removeClass("filled")
        $("#pagesTotalLink").removeClass("all")
        $("#pagesTotalLink").removeClass("searching")
        $("#pagesTotalLink").addClass("normal")
        normalIconsPage()
    });
    $("#nav-fill-tab").click(() => {
        $("#pagesTotalLink").removeClass("all")
        $("#pagesTotalLink").removeClass("searching")
        $("#pagesTotalLink").removeClass("normal")
        $("#pagesTotalLink").addClass("filled")
        filledIconsPage()
    });
    $("#nav-all-tab").click(() => {
        $("#pagesTotalLink").removeClass("searching")
        $("#pagesTotalLink").removeClass("normal")
        $("#pagesTotalLink").removeClass("filled")
        $("#pagesTotalLink").addClass("all")
        allIconsPage()
    });
    $("#nav-search-tab").click(() => {
        $("#pagesTotalLink").removeClass("normal")
        $("#pagesTotalLink").removeClass("filled")
        $("#pagesTotalLink").removeClass("all")
        $("#pagesTotalLink").addClass("searching")
        searchedIconsPage()
    });

    // Pagination Functions
    // Normal
    function normalIconsPage() {
        if ($("#pagesTotalLink").hasClass("normal")) {
            var normalIcons = 0;

            for (i in booticons) {
                if (booticons[i].category == "normal") {
                    normalIcons++;
                }
            }

            let pagesPossible = "";
            for (let i = 0; i <= Math.round(normalIcons / 110); i++) {
                pagesPossible += `
                    <li class="page-item">
                        <button class="page-link" onclick="$('.page-link').removeClass('active');$(this).addClass('active'); processChunk(${i * 110});" id="normal${i}">${i}</button>
                    </li>
                `;
            }
            $("#pagesTotalLink").html(pagesPossible);
        }
    }

    // Filled
    function filledIconsPage() {
        if ($("#pagesTotalLink").hasClass("filled")) {
            var filledIcons = 0;

            for (i in booticons) {
                if (booticons[i].category == "filled") {
                    filledIcons++;
                }
            }

            let FilledpagesPossible = "";
            for (let i = 0; i <= Math.round(filledIcons / 110); i++) {
                FilledpagesPossible += `
                    <li class="page-item">
                        <button class="page-link" onclick="$('.page-link').removeClass('active'),$(this).addClass('active'),processChunk(${i * 110});" id="filled${i}">${i}</button>
                    </li>
                `;
            }
            $("#pagesTotalLink").html(FilledpagesPossible);
        }
    }

    // All
    function allIconsPage() {
        if ($("#pagesTotalLink").hasClass("all")) {
            var allIcons = booticons.length;

            let allpagesPossible = "";
            for (let i = 0; i <= Math.round(allIcons / 110); i++) {
                allpagesPossible += `
                    <li class="page-item">
                        <button class="page-link" onclick="$('.page-link').removeClass('active'),$(this).addClass('active'),processChunk(${i * 110});" id="all${i}">${i}</button>
                    </li>
                `;
            }
            $("#pagesTotalLink").html(allpagesPossible);
        }
    }

    // Search
    function searchedIconsPage() {
        if ($("#pagesTotalLink").hasClass("searching")) {
            var searchIcons = booticons.length; // Change this logic based on your search results

            let searchpagesPossible = "";
            for (let i = 0; i <= Math.round(searchIcons / 110); i++) {
                searchpagesPossible += `
                    <li class="page-item">
                        <button class="page-link" onclick="$('.page-link').removeClass('active'),$(this).addClass('active')" id="search${i}">${i}</button>
                    </li>
                `;
            }
            $("#pagesTotalLink").html(searchpagesPossible);
        }
    }

    // Start processing the array in chunks of 102 items
    var totalBootstrapIcons = "";

    // Get icons between the range
    function processChunk(startIndex) {
        var endIndex = startIndex + 110;
        var chunk = booticons.slice(startIndex, endIndex);

        // Do something with the chunk of 110 items
        totalBootstrapIcons = chunk;
    }

    // Iterating Functions
    function loadNormalIcons() {
        // Normal Icons
        let niicons = "";

        for (icon in totalBootstrapIcons) {
            if (totalBootstrapIcons[icon].category == "normal") {
                niicons += `
                    <div class="box border cup ppcode" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        data-bs-custom-class="light-tooltip" data-bs-title="${totalBootstrapIcons[icon].name}" icon-number="${totalBootstrapIcons[icon].sno}" 
                        onclick="whatIsCode(this)">
                        <img src="/static/${totalBootstrapIcons[icon].path}" alt="ion-icon">
                    </div>
                `;
            }
        }
        $("#normal_boot_icons").html(niicons);
    }

    function loadFilledIcons() {
        // Filled Icons
        let oiicons = "";

        for (icon in totalBootstrapIcons) {
            if (totalBootstrapIcons[icon].category == "filled") {
                oiicons += `
                    <div class="box border cup ppcode" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        data-bs-custom-class="light-tooltip" data-bs-title="${totalBootstrapIcons[icon].name}" icon-number="${totalBootstrapIcons[icon].sno}" onclick="whatIsCode(this)">
                        <img src="${totalBootstrapIcons[icon].path}" alt="ion-icon">
                    </div>
                `;
            }
        }
        $("#fill_boot_icons").html(oiicons);
    }

    function loadAllIcons() {
        // All Icons
        let icns = totalBootstrapIcons;
        let aiicons = "";

        for (icon in icns) {
            aiicons += `
                <div class="box border cup ppcode" data-bs-toggle="tooltip" data-bs-placement="bottom"
                    data-bs-custom-class="light-tooltip" data-bs-title="${icns[icon].name}" icon-number="${icns[icon].sno}" onclick="whatIsCode(this)">
                    <img src="${icns[icon].path}" alt="ion-icon">
                </div>
            `;
        }
        $("#all_boot_icons").html(aiicons);
    }

    // Calling All Required Functions
    processChunk(0); // Initialize with the first chunk
    normalIconsPage();; // Initialize the first chunk pagination
    loadNormalIcons();
    loadFilledIcons();
    loadAllIcons();

    // Function to handle pagination link click
    function handlePageLinkClick(startIndex) {
        $('.page-link').removeClass('active');
        $(this).addClass('active');
        processChunk(startIndex);
        loadNormalIcons();
        loadFilledIcons();
        loadAllIcons();
    }

    // Event delegation for page link click
    $('#pagesTotalLink').on('click', '.page-link', function () {
        let startIndex = $(this).text() * 110;
        handlePageLinkClick(startIndex);
    });
});
