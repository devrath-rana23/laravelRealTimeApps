import "./bootstrap";

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
