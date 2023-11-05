const usernameEle1 = document.getElementById('username1');
const emailEle1 = document.getElementById('email1');
const phoneEle1 = document.getElementById('phone1');

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

function clearText() {
    const textFields = document.querySelectorAll('input[type="text"]');
    // Kiểm tra xem có ít nhất một trường văn bản hay không
    if (textFields.length > 0) {
        textFields.forEach(text => text.value = "");
    }
    const emailFields = document.querySelectorAll('input[type="email"]');
    if (emailFields.length > 0) {
        emailFields.forEach(text => text.value = "");
    }
}

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Submitted registration successfully');
    }
});

function checkValidate() {
    let usernameValue = usernameEle1.value;
    let emailValue = emailEle1.value;
    let phoneValue = phoneEle1.value;
    let isCheck = true;

    if (usernameValue == '') {
        setError(usernameEle1, 'Please enter full name');
        isCheck = false;
    } else if (!isName(usernameValue)) {
        setError(usernameEle1, 'Full name must be greater than 8 characters');
        isCheck = false;
    } else {
        setSuccess(usernameEle1);
    }

    if (emailValue == '') {
        setError(emailEle1, 'Please enter email');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle1, 'Email is not in the correct format (eg: abc@domain.xy)');
        isCheck = false;
    } else {
        setSuccess(emailEle1);
    }

    if (phoneValue == '') {
        setError(phoneEle1, 'Please enter the phone number');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle1, 'The phone number is not in the correct format');
        isCheck = false;
    } else {
        setSuccess(phoneEle1);
    }


    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isName(username) {
    // Yêu cầu tên người dùng có ít nhất 8 ký tự
    const re = /^.{8,}$/;
    return re.test(username);
}

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function isPhone(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}