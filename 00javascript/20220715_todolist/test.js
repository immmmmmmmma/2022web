const testData = [
    {
        menu:"이거 추천",
        href:"#1",
        sub:[
            {
                submenu:"음료1",
                href:"#음료1",
            },
            {
                submenu:"음료2",
                href:"#음료2",
            },
        ]

    },
    {
        menu:"이건 그저그럼",
        href:"#2",
        sub:[
            {
                submenu:"간식1",
                href:"#간식1",
            },
            {
                submenu:"간식2",
                href:"#간식2",
            },
        ]

    },
    {
        menu:"이거 별로",
        href:"#3",
        sub:[
            {
                submenu:"식사1",
                href:"#식사1",
            },
            {
                submenu:"식사2",
                href:"#식사2",
            },
        ]

    },
]

let menuList = document.querySelector(".menu");

let listView = "";
menuData.forEach(function(item,index){
    listView += `<li>`
    listView += `    <a href="${item.href}">${item.menu}</a>`

    listView +=`    <ul class="submenu">`
    item.sub.forEach(function(sitem){
        listView += `       <li>`
        listView +=`            <a href="${sitem.href}">${sitem.href}</a>`
        listView +=`        </li>`
    })
    listView +=`    </ul>`
    listView +=`</li>`
    
})

menuList.innerHTML = listView



/* <li>
    <a href="${item.href}">${item.menu}</a>
    <ul class="submenu">
        <li>
            <a href="${sitem.href}">${sitem.href}</a>
        </li>
    </ul>
</li> */
