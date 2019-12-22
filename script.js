$(document).ready(function () {

    var d = new Date()
    d.getHours()
    console.log(d.getHours())




    var event = $(".description")




    // for (let i = 0; i < event.length; i++) {
    //     var test = event[i];
    //     console.log(this)


    //     console.log(event[i]);


    // var test = $(".description[data-value]")
    // for (let i = 0; i < test.length; i++) {
    //     const element = test[i];
    //     console.log(element);




    // var timeEl = JSON.stringify(timeArr)
    // console.log(timeEl.value)
    // console.log((timeArr).data('value'));
    // }

    // for (let i = 0; i < 9; i++) {
    //     const element = event[i];

    $.each($("*[data-value]"), function (index, element) {
        var test = ($(element).attr("data-value"))
        var arr = test.split(', ')
        console.log(arr);
        if (arr === d.getHours) {
            this.classList.add("present")

        } else if (arr < d.getHours) {
            this.classList.add("past")
        } else {
            this.classList.add("future")
        }



        //     var testParse = JSON.parse(test)
        //     console.log(testParse);
        //     if (testParce === 15) {
        //         event.classList.add("present")
        //     }




        // for (let i = 0; i < test.length; i++) {
        //         const element = test[i];
        //         if (element === 15) {
        //             event.classlist.add('present')

        //             console.log(test);

    })





    // });

    // }










    $("*[data-value]").each(function () {
        $(this).val(localStorage.getItem("item-" + $(this).attr("data-value")));
    });


    $("*[data-value]").on("keyup", function (itm) {
        localStorage.setItem("item-" + $(this).attr("data-value"), $(this).val());
    })
    // var save = $(".saveBtn")

    // $document.on("click", ".saveBtn", function () {
    //     localStorage.setItem("item-" + $(this).attr("data-value"), $(this).val());

    // })







    // save.on("click", function () {
    //     $(this).val(localStorage.setItem("event", event))
    //     console.log(this);






    // localStorage.setItem("event", event)

    // console.log(event);
    // var localStor = localStorage.getItem(event)
    // var local;
    // if (localStor === null) {
    //     local = [];
    // } else {
    //     local = JSON.parse(localStor)
    // }
    // console.log(local);

})