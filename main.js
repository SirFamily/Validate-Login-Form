const loginForm = document.querySelector(".login-form");
const checkOption = document.querySelector(".check-option");
const checkPass = document.querySelector(".check-pass");
const checkUser = document.querySelector(".check-user");
const sucCess = document.querySelector(".success");

const user = document.querySelector(".user");
const pass = document.querySelector(".pass");
const ro = document.querySelector(".ro");

const validateInput = (inputObj) => {
    const cleanedUsername = inputObj.username.replace(/\s/g, "").trim();
    const cleanedPassword = inputObj.password.replace(/\s/g, "").trim();
    const role = inputObj.role;

    const isNotEmpty = (value) => value.trim() !== "";
    const isUsernameValid = (username) =>
        username.trim().length > 3 && !/^\d/.test(username);
    const isPasswordValid = (password) =>
        password.trim().length > 4 && /\d/.test(password) && /[a-zA-Z]/.test(password);

    const usernameEmpty = !isNotEmpty(cleanedUsername);
    const passwordEmpty = !isNotEmpty(cleanedPassword);
    const roleEmpty = !isNotEmpty(role);
    const usernameInvalid = !isUsernameValid(cleanedUsername);
    const passwordInvalid = !isPasswordValid(cleanedPassword);

    if (usernameEmpty || usernameInvalid) {
        checkUser.textContent =
            "โปรดกรอกให้มีความยาวต้องมากกว่า 3 ตัวอักษร / ห้ามนำหน้าด้วยตัวเลข";
        loginForm.elements.username.style.borderColor = "red";
    } else {
        checkUser.textContent = "";
        loginForm.elements.username.style.borderColor = "";
    }

    if (passwordEmpty || passwordInvalid) {
        checkPass.textContent =
            "โปรดกรอกให้มีความยาวต้องมากกว่า 4 ตัวอักษร / ต้องมีทั้งตัวเลขและตัวอักษร";
        loginForm.elements.password.style.borderColor = "red";
    } else {
        checkPass.textContent = "";
        loginForm.elements.password.style.borderColor = "";
    }

    if (roleEmpty) {
        checkOption.textContent = "โปรดเลือกบทบาท";
        loginForm.elements.role.style.borderColor = "red";
    } else {
        checkOption.textContent = "";
        loginForm.elements.role.style.borderColor = "";
    }

    if (!usernameEmpty && !usernameInvalid && !passwordEmpty && !passwordInvalid && !roleEmpty) {
        const dataArray = [cleanedUsername, cleanedPassword, role];
        console.log(dataArray);

        sucCess.textContent = "Login successful";
        user.textContent = "Username : " + cleanedUsername;
        pass.textContent = "Password : " + cleanedPassword;
        ro.textContent = "Role : " + role;

        setTimeout(function () {
            window.location.href = "https://www.example.com";
        }, 2000);
    }
};

const hdlLogin = (e) => {
    e.preventDefault();
    let inputObj = {};
    for (let el of loginForm.elements) {
        inputObj[el.id] = el.value;
    }
    validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);
