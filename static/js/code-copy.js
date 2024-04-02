function whatIsCode(e) {
    // getting the icon number
    $("#codeOfIcon").html(`
        <span class="text-secondary">&lt;</span><span class="html-tag">i</span> <span class="html-class">class</span><span class="text-secondary">="</span><span class="html-value">icon ion-<span id="code0123"></span></span><span class="text-secondary">"</span><span class="text-secondary">&gt;</span><span class="text-secondary">&lt;</span><span class="text-secondary">/</span><span class="html-tag">i</span><span class="text-secondary">&gt;</span>
        `);
    $(".preview-container").html(`<i class="icon ion-${e.getAttribute("svgIs")}"></i>`);
    $("#copyIconHere").val(`<i class="icon ion-${e.getAttribute("svgIs")}"></i>`)
    $(".popup").slideDown(200);
    $(".close-btn").click(() => {
        $(".popup").slideUp(200);
        $("#codeOfIcon").removeClass('active');
        $("#copyCodeSection").removeClass('active');
    });

    $("#codeOfIcon").removeClass('active');
    $("#copyCodeSection").removeClass('active');
    $("#codeOfIcon").addClass('active');
    $("#copyCodeSection").addClass('active');

    setTimeout(() => {
        $("#codeOfIcon").removeClass('active');
        $("#copyCodeSection").removeClass('active');
    }, 500);
    generateParagraph("#code0123", e.getAttribute("svgIs"));
};

// Bootstrap CDN code
function copiedBsp() {
    $("#bstp-cdn-copy-indicator").html(`<i class="bi bi-file-earmark-check" style="color: #00ff00;"></i>`);

    setTimeout(() => {
        $("#bstp-cdn-copy-indicator").html(`<i class="bi bi-file-earmark-code"></i>`);
    }, 2000);
};


// Main icons code
function copied() {
    $(".copied-indicator").html(`<i class="bi bi-clipboard-check" style="color: #00ff00;"></i>`);

    setTimeout(() => {
        $(".copied-indicator").html(`<i class="bi bi-clipboard"></i>`);
    }, 2000);
}

// Copying the icon
function copy(item) {
    var Text = document.getElementById(item);
    /* Select the text inside text area. */
    Text.select();
    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(Text.value);
    // indication by changing the Title of Tooltip
}