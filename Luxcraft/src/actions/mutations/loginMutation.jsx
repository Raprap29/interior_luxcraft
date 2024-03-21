export const LoginActionSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }

}
