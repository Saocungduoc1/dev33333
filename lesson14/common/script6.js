let text;
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
        text = "Saturday";
        break;
    case 5:
    case 6:
    case 0:
        text = "Cuối tuần";
        break;
    default:
        text = "Tôi nâu biết";
}
document.getElementById("demo").innerHTML = text;