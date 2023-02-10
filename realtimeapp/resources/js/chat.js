import "./bootstrap";
import { postData } from "./postData";

const userElement = document.getElementById("users");
const messagesElement = document.getElementById("messages");
const messageElement = document.getElementById("message");
const sendElement = document.getElementById("send");
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
const authenticatedUserId = document.getElementById(
    "authenticated-user-id"
).value;

Echo.join("chat")
    .here((users) => {
        users.forEach((user, index) => {
            let element = document.createElement("li");
            element.setAttribute("id", user.id);
            element.setAttribute("onclick", `greetUser(${user.id})`);
            element.innerText = user.name;
            userElement.appendChild(element);
        });
    })
    .joining((user) => {
        let element = document.createElement("li");
        element.setAttribute("id", user.id);
        element.setAttribute("onclick", `greetUser(${user.id})`);
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
    postData("/chat/message", csrfToken, {
        message: messageElement.value,
    }).then((response) => {});
    messageElement.value = "";
});

Echo.private(`chat.greet.${authenticatedUserId}`).listen(
    "GreetingSent",
    (ev) => {
        let element = document.createElement("li");
        element.innerText = `${ev.message}`;
        element.classList.add("text-success");
        messagesElement.appendChild(element);
    }
);
