const registry = require('@kasugalib/registry');

registry.getRegistry('kasuga_lib:menu').register("kuayue:lkj_2000",(menu)=>{
    console.info("LKJ2000 Opened")
    menu.addEventListener("close", ()=>{
        console.info("LKJ2000 Closed");
    })
});