function generateParagraph(target_box, paragraphContent, gen_time = 100) {
    var mytext = paragraphContent;
    var paragraph = $(target_box);
    var index = 0;
    var interval;

    function typeText() {
        if (index < mytext.length) {
            paragraph.text(function (_, oldText) {
                return oldText + mytext[index];
            });
            index++;
        } else {
            clearInterval(interval)
        }
    }

    function deleteText() {
        if (index > 0) {
            paragraph.text(function (_, oldText) {
                return oldText.slice(0, -1);
            });
            index--;
        } else {
            clearInterval(interval);
        }
    }

    // trigger the type
    clearInterval(interval);
    if (index === mytext.length) {
        index = 0;
        paragraph.empty();
    }
    interval = setInterval(typeText, gen_time);

    $('#DPBTN').on('click', function () {
        clearInterval(interval);
        interval = setInterval(deleteText, gen_time);
    });
}