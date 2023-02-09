import "./bootstrap";

Echo.private("notifications").listen("UserSessionChanged", (ev) => {
    const notificationElement = document.getElementById("notification");
    notificationElement.innerText = ev.message;

    notificationElement.classList.remove("invisible");
    notificationElement.classList.remove("alert-success");
    notificationElement.classList.remove("alert-danger");

    notificationElement.classList.add(`alert-${ev.type}`);
});

Echo.channel("users").listen("UserCreated", (ev) => {
    const usersElement = document.getElementById("users");
    let element = document.createElement("li");
    element.setAttribute("id", ev.user.id);
    element.innerText = ev.user.name;
    usersElement.appendChild(element);
}).listen("UserUpdated", (ev) => {
    const element = document.getElementById(ev.user.id);
    element.innerText = ev.user.name;
}).listen("UserDeleted", (ev) => {
    const element = document.getElementById(ev.user.id);
    element.parentNode.removeChild(element);
})
