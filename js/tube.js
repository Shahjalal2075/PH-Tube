const loadUserInfo = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const info = data.data;
    console.log(info);
    displayAll(info);
}

const displayAll = info => {
    info.forEach(det => {
        console.log(det);
    });
}

loadUserInfo();