$(document).ready(function() {
	$("#fancybox-unity").click(function() {
		$.fancybox.open([
		{
			href : 'assets/images/unity/gallery/3d_cap_all.jpg',
			title : '<strong>Maya Captain</strong><br>The 3D Model of the "Captain" was realized at the module "Character Modelling and Animation". Designated for the parallel ongoing Augmented Reality Project for the Binnenschifffahrtsmuseum Duisburg.'
		}, {
			href : 'assets/images/unity/gallery/ar_ship_scene.png',
			title : '<strong>AR exhibit RORO-Ship</strong><br>Augmented Reality Project for the Binnenschifffahrtsmuseum Duisburg. The Captain did not made it into the final version, so he is represented by Unitys Construction Worker.<br> The User gets information about the ship by draging the 3D model on different spots close to the exhibit.'
		}, {
			href : 'assets/images/unity/gallery/bac_scene+mod.jpg',
			title: '<strong>Bachelorthesis</strong><br>Augmented Reality App i made for reaching my Bachelors Degree. The Botanika Bremen wanted a virtual exhibit of the Rhinogradentia, a chimera based on a poem by Christian Morgenstern. The App shows different prototypes of a possible fielding during an exhibition.'
		}],
		{
			prevEffect: 'none',
			nextEffect: 'none',
			closeBtn: false, 
			padding : 3,
			helpers : {
				title: {
					type: 'inside'
				},
				overlay: {
					css: {
						'background': 'rgba(0, 202, 205, 0.7)'
					}
				},
				thumbs : {
					width: 75,
					height: 50
				}
			}
		});
	});

	$("#fancybox-ios").click(function() {
		$.fancybox.open([
		{
			href : 'assets/images/ios/gallery/ios_wgm_pers.jpg',
			title : '<strong>wgm info</strong><br>An iOS Version of the information system of the "Wirtschaftsverband Großhandel Metallhalbzeug e.V.". They already had an Android Version so i created the equivalent version for Apple products.'
		}, {
			href : 'assets/images/ios/gallery/ios_at_ct_map.jpg',
			title : '<strong>Citytagger</strong><br>A Bachelor Project realized with Titanium Appcelerator. Within a group of students, a working social sharing system was implemented. Within a subgroup we focused on the mobile app for iOS.'
		}], 
		{
			prevEffect: 'none',
			nextEffect: 'none',
			closeBtn: false, 
			padding : 3,
			helpers : {
				title: {
					type: 'inside'
				},
				overlay: {
					css: {
						//'background': 'rgba(69, 90, 100, 0.8)'
						'background': 'rgba(251, 156, 68, 0.7)'
					}
				},
				thumbs : {
					width: 75,
					height: 50
				}
			}
		});
	});
/** Android **
	$("#fancybox-android").click(function() {
		$.fancybox.open([
		{
			href : 'assets/images/android/gallery/1_b.jpg',
			title : 'Bild1'
		}, {
			href : 'assets/images/android/gallery/2_b.jpg',
			title : 'Bild2'
		}, {
			href : 'assets/images/android/gallery/3_b.jpg',
			title: 'Bild3'
		}],
		{
			prevEffect: 'none',
			nextEffect: 'none',
			closeBtn: false, 
			padding : 3,
			helpers : {
				title: {
					type: 'inside'
				},
				overlay: {
					css: {
						'background': 'rgba(164, 198, 57, 0.7)'
					}
				},
				thumbs : {
					width: 75,
					height: 50
				}
			}
		});
	});
	**/
});