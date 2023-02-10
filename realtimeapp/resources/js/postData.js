export async function postData(url = "", csrfToken = "", data = {}) {
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
