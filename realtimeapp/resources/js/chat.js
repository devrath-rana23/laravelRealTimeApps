import "./bootstrap";

const userElement = document.getElementById("users");
const messagesElement = document.getElementById("messages");
const messageElement = document.getElementById("message");
const sendElement = document.getElementById("send");
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

Echo.join("chat")
    .here((users) => {
        users.forEach((user, index) => {
            let element = document.createElement("li");
            element.setAttribute("id", user.id);
            element.innerText = user.name;
            userElement.appendChild(element);
        });
    })
    .joining((user) => {
        let element = document.createElement("li");
        element.setAttribute("id", user.id);
        element.innerText = user.name;
        userElement.appendChild(element);
    })
    .leaving((user) => {
        const element = document.getElementById(user.id);
        element.parentNode.removeChild(element);
    })
    .listen("MessageSent", (ev) => {
        let element = document.createElement("li");
        element.innerText = `${ev.user.name}: ${ev.message}`;
        messagesElement.appendChild(element);
    });

sendElement.addEventListener("click", (ev) => {
    ev.preventDefault();
    async function postData(url = "", data = {}) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        return response.json();
    }
    postData("/chat/message", {
        message: messageElement.value,
    }).then((response) => {});
    messageElement.value = "";
});
