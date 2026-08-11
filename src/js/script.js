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

const post_parent = document.querySelector(".posts-list")

async function doLastNewsElemention(parent) {
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

doLastNewsElemention()