$(function (){
    $("#otherLinksButton").on("click", () => {
        if($("#otherLinksButton").text() === "Other Links \u2BC6"){
            $("#otherLinksButton").text("Other Links \u2BC5");
            $(".otherLinksDiv").show();
        } else {
            $("#otherLinksButton").text("Other Links \u2BC6");
            $(".otherLinksDiv").hide();
        }
    });
});