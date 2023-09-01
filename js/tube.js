const loadUserInfo = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const info = data.data;
    console.log(info);
    displayAll(info);
}

const displayAll = info => {
    const cardContainer = document.getElementById('card-container');
    info.forEach(det => {
        console.log(det);

        const cardDet = document.createElement('div');
        cardDet.classList = `card bg-site-white`;
        cardDet.innerHTML = 
        `
        <figure class="rounded-lg h-44">
            <img src="${det.thumbnail}" alt="" />
        </figure>
        <div class="flex my-4 gap-4 px-1">
            <div class="">
                <img class="mask mask-circle w-10" src="${det.authors[0].profile_picture}" />
            </div>
            <div class="">
                <h2 class="text-site-black font-bold text-sm">${det.title}</h2>
                <p class="text-site-black font-normal text-xs py-1">${det.authors[0].profile_name}</p>
                <p class="text-site-black font-normal text-xs">${det.others.views}</p>
            </div>
        </div>
        `;
        cardContainer.appendChild(cardDet);
    });
}

loadUserInfo();