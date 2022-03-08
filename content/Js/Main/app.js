new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    navigationTooltips:["HotBurger","Fried Chicken","Pizza"],
    parallax: true,
    autoScrolling:true,
    ScrollingSpeed: 3000,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});