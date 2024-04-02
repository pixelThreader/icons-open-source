$(() => {
    // Normal Icons
    let niicons = "";

    for (icon in icons) {
        if (icons[icon].category == "normal") {
            niicons += `
            <div class="box border cup" data-bs-toggle="tooltip" data-bs-placement="bottom"
                data-bs-custom-class="light-tooltip" data-bs-title="${icons[icon].name}">
                <img src="${icons[icon].path}" alt="ion-icon">
            </div>
            `
        }
    };
    $("#normal_ion_icons").html(niicons);

    // Outline Icons
    let oiicons = "";

    for (icon in icons) {
        if (icons[icon].category == "outline") {
            oiicons += `
            <div class="box border cup" data-bs-toggle="tooltip" data-bs-placement="bottom"
                data-bs-custom-class="light-tooltip" data-bs-title="${icons[icon].name}">
                <img src="${icons[icon].path}" alt="ion-icon">
            </div>
            `
        }
    };
    $("#outline_ion_icons").html(oiicons);

    // Sharp Icons
    let siicons = "";

    for (icon in icons) {
        if (icons[icon].category == "sharp") {
            siicons += `
            <div class="box border cup" data-bs-toggle="tooltip" data-bs-placement="bottom"
                data-bs-custom-class="light-tooltip" data-bs-title="${icons[icon].name}">
                <img src="${icons[icon].path}" alt="ion-icon">
            </div>
            `
        }
    };
    $("#sharp_ion_icons").html(siicons);

    // All Icons
    let aiicons = "";

    for (icon in icons) {
        aiicons += `
        <div class="box border cup" data-bs-toggle="tooltip" data-bs-placement="bottom"
            data-bs-custom-class="light-tooltip" data-bs-title="${icons[icon].name}">
            <img src="${icons[icon].path}" alt="ion-icon">
        </div>
        `
    };
    $("#all_ion_icons").html(aiicons);
});