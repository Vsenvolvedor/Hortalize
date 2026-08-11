async function loadData() {
    try {
        const response = await fetch('./src/js/posts.json');
        const data = await response.json();
        return data;       
    }
    catch(err) {
        console.log(err)
    }
}

async function doLastNewsElemention() {
    const dataJson = await loadData();
    const lastnews_parent =document.querySelector(".news-list")

    dataJson.forEach((item, index) => {
        if(index >= 3) return;
        lastnews_parent.innerHTML+= `
        <li>
            <a href="">
                <h3>
                    ${item.title}
                </h3>
                <p>
                    ${item.short_desc}
                </p>
            </a>
        </li>
        `
    })
}

async function doBlogPostList() {
    const dataJson = await loadData()
    const post_parent = document.querySelector(".posts-list")
    
    dataJson.forEach((item) => {

        post_parent.innerHTML+= `
        <li>
            <a href="./post.html?id=${item.id}">
                <img src="${item.image_short}" alt="">
                <h2 class="section-title">
                    ${item.title}
                </h2>
                <p>
                    ${item.short_desc}
                </p>
            </a>
        </li>
        `
    })
}

