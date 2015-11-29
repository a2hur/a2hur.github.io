var openPhotoSwipeUnity = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var itemsUnity = [
        {
            src: 'assets/images/unity/gallery/3d_cap_all.jpg',
            w: 944,
            h: 532,
            title : '<strong>Maya Captain</strong><br>The 3D Model of the "Captain" was realized at the module "Character Modelling and Animation". Designated for the parallel ongoing Augmented Reality Project for the Binnenschifffahrtsmuseum Duisburg.'
        },
        {
            src : 'assets/images/unity/gallery/ar_ship_scene.png',
            w: 2048,
            h: 1536,
            title : '<strong>AR exhibit RORO-Ship</strong><br>Augmented Reality Project for the Binnenschifffahrtsmuseum Duisburg. The Captain did not made it into the final version, so he is represented by Unitys Construction Worker.<br> The User gets information about the ship by draging the 3D model on different spots close to the exhibit.'
        },
        {
            src : 'assets/images/unity/gallery/bac_scene+mod.jpg',
            w: 960,
            h: 540,
            title: '<strong>Bachelorthesis</strong><br>Augmented Reality App i made for reaching my Bachelors Degree. The Botanika Bremen wanted a virtual exhibit of the Rhinogradentia, a chimera based on a poem by Christian Morgenstern. The App shows different prototypes of a possible fielding during an exhibition.'
        }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        focus: false,
        shareEl: false,
        fullscreenEl: false,
        bgOpacity: 0.85,


        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var unityGallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, itemsUnity, options);
    unityGallery.init();
};

var openPhotoSwipeIos = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var itemsIos = [
        {
            src : 'assets/images/ios/gallery/ios_wgm_pers.jpg',
            w: 1094,
            h: 870,
            title : '<strong>wgm info</strong><br>An iOS Version of the information system of the "Wirtschaftsverband Großhandel Metallhalbzeug e.V.". They already had an Android Version so i created the equivalent version for Apple products.'
        },
        {
            src : 'assets/images/ios/gallery/ios_at_ct.jpg',
            w: 1158,
            h: 742,
            title : '<strong>Citytagger</strong><br>A Bachelor Project realized with Titanium Appcelerator. Within a group of students, a working social sharing system was implemented. Within a subgroup we focused on the mobile app for iOS.'
        }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        focus: false,
        shareEl: false,
        fullscreenEl: false,
        bgOpacity: 0.85,


        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var iosGallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, itemsIos, options);
    iosGallery.init();
};

document.getElementById('pswp_ios').onclick = openPhotoSwipeIos;
document.getElementById('pswp_unity').onclick = openPhotoSwipeUnity;