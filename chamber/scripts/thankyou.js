function getParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        fName: params.get("fName"),
        lName: params.get("lName"),
        title: params.get("title"),
        email: params.get("email"),
        phone: params.get("phone"),
        orgName: params.get("orgName"),
        level: params.get("mLevel"),
        desc: params.get("description"),
        time: params.get("timeStamp")
    };
}

const formData = getParams();

const submitTime = new Date(formData.time * 1000);

document.getElementById('first').textContent = formData.fName;
document.getElementById('last').textContent = formData.lName;
document.getElementById('title').textContent = formData.title || '';
document.getElementById('email').textContent = formData.email;
document.getElementById('phone').textContent = formData.phone;
document.getElementById('org').textContent = formData.orgName;
document.getElementById('level').textContent = formData.level;
document.getElementById('desc').textContent = formData.desc || '';
document.getElementById('timeStamp').textContent = submitTime.toLocaleString();