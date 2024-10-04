$(document).ready(function () {
    $("#html").click(function () {
        $("#html").css("background-color", "red");
        $("#content").text("Html viết tắt");
        $("#php,#css,#jquery").css("background-color", "#ccc");
    })
    $("#css").click(function () {
        $("#css").css("background-color", "green");
        $("#content").text("css viết tắt");
        $("#php,#html,#jquery").css("background-color", "#ccc");
    })
    $("#jquery").click(function () {
        $("#jquery").css("background-color", "blue");
        $("#content").text("jquery viết tắt");
        $("#php,#css,#html").css("background-color", "#ccc");
    })
    $("#php").click(function () {
        $("#php").css("background-color", "aqua");
        $("#content").text("php viết tắt");
        $("#html,#css,#jquery").css("background-color", "#ccc");
    })
})