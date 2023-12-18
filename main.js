const loginForm = document.querySelector(".login-form");
const checkOption = document.querySelector(".check-option")
const checkPass = document.querySelector(".check-pass")
const checkUser = document.querySelector(".check-user")
const sucCess = document.querySelector(".success")

const user = document.querySelector(".user")
const pass = document.querySelector(".pass")
const ro = document.querySelector(".ro")



// โจทย์ : ให้สร้างฟังก์ชั่นเพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form
// 1. ทุก input ต้องไม่เป็นค่าว่างหรือ ใส่ space มาล้วนๆ
// 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
//      - ตัด space หน้า-หลัง
//      (option) - และไม่มี space คั่นกลาง
//      - ห้ามนำหน้าด้วยตัวเลข
// 3. password ความยาวต้องมากกว่า 4 ตัวอักษร
//      (option) - ต้องมีทั้งตัวเลขและตัวอักษร
// ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
// ถ้า validate ผ่านให้ไปที่ https://www.example.com
// หรือ
// ถ้า validate ผ่านให้ไปทำการ login โดยตรวจสอบ username, password
// กับ array แบบที่เคยทำตอนโจทย์ javascript แล้วแจ้ง login successful

const validateInput = (inputObj) => {

    const cleanedUsername = inputObj.username.replace(/\s/g, '').trim();
    const cleanedPassword = inputObj.password.replace(/\s/g, '').trim();
    const role = inputObj.role;

    const isNotEmpty = (value) => value.trim() !== "";
    const isUsernameValid = (username) => username.length > 3 && !(/^\d/.test(username));
    const isPasswordValid = (password) => password.length > 4 && /\s/.test(username);


    const usernameEmpty = !isNotEmpty(cleanedUsername);
    const passwordEmpty = !isNotEmpty(cleanedPassword);
    const roleEmpty = !isNotEmpty(role);
    const usernameInvalid = !isUsernameValid(cleanedUsername);
    const passwordInvalid = !isPasswordValid(cleanedUsername);


    if (usernameEmpty || usernameInvalid) {
        checkUser.textContent = "โปรดกรอกให้มีความยาวต้องมากกว่า 3 ตัวอักษร / ห้ามนำหน้าด้วยตัวเลข"
        loginForm.elements.username.style.borderColor = "red";
    } else {
        checkUser.textContent = ""
        loginForm.elements.username.style.borderColor = "";
    }

    if (passwordEmpty || passwordInvalid) {
        checkPass.textContent = "โปรดกรอกให้มีความยาวต้องมากกว่า 4 ตัวอักษร / ต้องมีทั้งตัวเลขและตัวอักษร"
        loginForm.elements.password.style.borderColor = "red";
    } else {
        checkPass.textContent = ""
        loginForm.elements.password.style.borderColor = "";
    }

    if (roleEmpty) {
        checkOption.textContent = "โปรดเลือกบทบาท"
        loginForm.elements.role.style.borderColor = "red";
    } else {
        checkOption.textContent = ""
        loginForm.elements.role.style.borderColor = "";
    }

    if (!usernameEmpty && !usernameInvalid && !passwordEmpty && !passwordInvalid && !roleEmpty) {
        const dataArray = [cleanedUsername, cleanedPassword, role];

        console.log(dataArray);


        sucCess.textContent = "Login successful";
        user.textContent = "Username : " + cleanedUsername
        pass.textContent = "Passworld : " + cleanedPassword
        ro.textContent = " Role : " + role

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

