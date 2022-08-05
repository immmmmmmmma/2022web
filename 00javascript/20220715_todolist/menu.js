const menuData = [
    {
        menu:"company",
        href:"#1",
        sub:null
    },
    {
        menu:"product",
        href:"#2",
        sub:[
            {
                smenu:"pro1",
                href:"#pro1"
            },
            {
                smenu:"pro2",
                href:"#pro2"
            },
            {
                smenu:"pro3",
                href:"#pro3"
            },
            {
                smenu:"pro4",
                href:"#pro4"
            },
        ]
    },
    {
        menu:"community",
        href:"#3",
        sub:[
            {
                smenu:"com1",
                href:"#com1"
            },
            {
                smenu:"com2",
                href:"#com2"
            }
        ]
    },
    {
        menu:"board",
        href:"#4",
        sub:[
            {
                smenu:"board1",
                href:"#board1"
            },
            {
                smenu:"board2",
                href:"#board2"
            }
        ]
    },
    {
        menu:"online",
        herf:"#5",
        sub:null
    },
    
]

let menuLi = document.querySelector(".menu");

let listView = '';
menuData.forEach(function(item,index){
    //console.log(item.menu)
    //console.log(menuData[index].menu)
    //console.log(menuData[index]["menu"])

    // listView += `<li>
    //                  <a href="${item.href}">${item.menu}</a>`

    // listView += `</li>`
    listView += `<li>`
    listView += `    <a href="${item.href}">${item.menu}</a>`

    if( item.sub != null){
        listView += `<ul class="submenu">`

        item.sub.forEach(function(itemSub){
            listView += `<li>`
            listView += `    <a href="${itemSub.href}">${itemSub.smenu}</a>`
            listView += `</li>`
        })

        listView += `</ul>`
    }
    
    listView += `</li>`


})
menuLi.innerHTML = listView;