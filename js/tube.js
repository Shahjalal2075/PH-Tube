const loadUserInfo = async(catid) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catid}`);
    const data = await res.json();
    const info = data.data;
    //console.log(info);
    displayAll(info);
}

const loadCategory = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categoryName = data.data;
    //console.log(categoryName);
    displayCategoryButton(categoryName);
}

const displayCategoryButton = categoryName => {
    const buttonContainer = document.getElementById('button-container');
    loadUserInfo(1000);
    categoryName.forEach(cat => {
        console.log(cat);

        const button = document.createElement('button');
        button.classList = `text-sm font-medium text-[#252525b3] rounded bg-[#25252526] px-6 py-2 mx-3`;
        button.innerText=cat.category;
        button.addEventListener('click',function(){
            console.log(cat.category_id);
            loadUserInfo(cat.category_id);
        });
        buttonContainer.appendChild(button);
    });
}

const displayAll = info => {
    console.log(info.length);
    
    const emptyCheck = document.getElementById('empty-add');
    if(info.length===0)
    {
        emptyCheck.innerHTML=`
        <div class="mx-auto w-full mt-10">
                <div class="">
                    <div class="flex justify-center">
                        <img src="images/icon.png" alt="">
                    </div>
                    <h2 class="text-center text-site-black font-bold text-2xl mt-8">Oops!! Sorry, There is no<br>content here</h2>
                </div>
            </div>
        `;
    }
    else{
        emptyCheck.innerHTML=``;
    }
    /* const emptyCheck = document.getElementById('empty-add');
    emptyCheck.innerHTML */
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML=``;
    info.forEach(det => {
        
        
            console.log(det.authors[0].verified);

        const cardDet = document.createElement('div');
        cardDet.classList = `card bg-site-white`;

        if(det.authors[0].verified==true)
        {
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
                    <div class="flex justify-items-center py-1">
                        <p class="text-site-black font-normal text-xs pr-2">${det.authors[0].profile_name}</p>
                        <img class="w-4 h-4" src="images/verify.png" alt="">
                    </div>
                    <p class="text-site-black font-normal text-xs">${det.others.views} views</p>
                </div>
            </div>
            `;
        }
        else{
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
                    <div class="flex justify-items-center py-1">
                        <p class="text-site-black font-normal text-xs pr-2">${det.authors[0].profile_name}</p>
                    </div>
                    <p class="text-site-black font-normal text-xs">${det.others.views} views</p>
                </div>
            </div>
            `;
        }
        cardContainer.appendChild(cardDet);
    });
}



loadCategory();