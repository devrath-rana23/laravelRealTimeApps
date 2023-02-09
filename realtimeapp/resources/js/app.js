import "./bootstrap";

Echo.private("notifications").listen("UserSessionChanged", (ev) => {
    console.log("HI")
    const notificationElement = document.getElementById("notification");
    notificationElement.innerText = ev.message;

    notificationElement.classList.remove("invisible");
    notificationElement.classList.remove("alert-success");
    notificationElement.classList.remove("alert-danger");

    notificationElement.classList.add(`alert-${ev.type}`);
});
