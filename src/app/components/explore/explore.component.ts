import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {


  activities = [
    { name: 'Hiking', description: 'Ekki Forest Adventure', details: '2.4 miles (4km) round trip, 1.5 hours, easy A canopy of coconut, neem and peach trees are the first things you’ll notice when you walk into the Lekki Urban Forest Animal Sanctuary Initiative (LUFASI) park, a 20-hectare farm-forest and recreation center. Promoted as a ‘natural wellness center’, the park is big on habitat preservation and re-generation and hikers walk along its sandy and leaf-strewn trails, past butterfly and fern gardens, anthills and duck ponds.On your way, guides will tell you about the various ongoing conservation efforts within the park, including for pangolins and hooded vultures, is where walkers tend to pause and take it all it. Boardwalks across the park’s two artificial lakes are perfect spots to look out for', image: 'assets/img/rockclimb-car-carol.jpg' },
    { name: 'Hiking', description: 'Olumo Rock Hike Trail', details: 'Olumo Rock is a popular tourist attraction in Nigeria, located in Abeokuta, Ogun state. The historical rock holds a lot of cultural significance, and is a build-up of granite rocks that has been in existence for thousands of years. It is said to be 450 feet (137m) above sea level, however hiking just got easier thanks to the manmade stairs and crevices used to climb up the giant collection of rocks. From the top of the rock, you can view other tourists attractions in Abeokuta—the First Church of Nigeria, the Central Mosque, the River Ogu and the family house of the late Moshood Abiola.' },
    { name: 'Mountain Biking', description: 'Obudu Mountain Resort, Cross River State, Nigeria', details: ' It offers mountain biking trails with diverse terrains that wind through lush tropical forests, rolling hills, and even along the edge of the Obudu Cattle Ranch plateau. Riders can explore the natural beauty of the region, spot wildlife, and enjoy the cool mountain climate. It is an adventure for nature lovers and mountain biking enthusiasts.' },
    { name: 'Mountain Biking', description: 'Whistler Mountain Bike Park, British Columbia, Canada.', details: 'The park offers a network of chairlifts and gondolas to transport riders and their bikes to the top of the mountain, making it easy to access incredible trails. Whistler is not only a mecca for biking but also a vibrant resort town with a great apres-bike scene, making it a perfect destination for mountain biking and relaxation.' },
    { name: 'Running Trails', description: 'Lekki Conservation Centre Running Trail, Lagos', details: 'The running trail at the Lekki Conservation Centre is a well-maintained path that winds through a dense forest and over picturesque wooden bridges. Runners can choose to follow the elevated tree canopy walkway, which allows you to feel as if you are running above the treetops, providing an exceptional experience.' },
    { name: 'Running Trails', description: 'Zion National Park Running Trails (Utah, USA)', details: 'The running trails in Zion National Park cater to a wide range of fitness levels and preferences. The most popular trail, the Zion Canyon Scenic Drive, offers a relatively flat and paved path that follows the Virgin River. For more challenging runs, you can explore trails like the Angel is Landing or the Observation Point trails, which involve steep ascents and offer incredible viewpoints of the park.' },
    { name: 'Road Biking', description: 'Col du Tourmalet - French Pyrenees, France', details: 'The road reaches an elevation of 2,115 meters (6,939 feet) and offers stunning views of the surrounding mountain landscapes. The ascent to the summit can be challenging but incredibly rewarding. Along the way, you will pass through charming villages and witness the natural beauty of the Pyrenees.' },
    { name: 'Road Biking', description: 'Cruise on Lekki-Ikoyi Link Bridge - Lagos, Nigeria ', details: 'The trail is approximately 1.36 kilometers long and is a popular spot for cyclists in the early morning and late afternoon. Biking across the bridge is a great way to enjoy the city fresh sea breeze and take in the beauty of the lagoon. However,it is essential to check local regulations and traffic conditions before heading out.' },
    { name: 'Camping', description: 'Be Under the stars in Big Bend Resort & Adventures, Texas', details: 'With breathtaking views of the Chisos Mountains and the Chihuahuan Desert, this camp resort offers an unforgettable experience for nature enthusiasts and adventurers.' },
    { name: 'Camping', description: 'Spend nights in Idanre Hills, Nigeria', details: 'Estimated to be over 800 years old, the Idanre Hills are steep-sided, smooth and dome-shaped in nature. The majestic hills are located in the ancient town of Idanre, Ondo State of Nigeria. It is said in history that the inhabitants of the ancient town once lived on the hilltop. Today, the new settlement is at the base of the hills. No wonder the scenic hills was listed as a UNESCO World Heritage Site. To get to the top of the hill, tourists must climb 667 steps with five resting posts along the way.' },
    { name: 'Skiing', description: 'A snowy destination, Milky Way, Italy', details: 'The Milky Way ski area sits on the French-Italian border and boasts over 400km of pistes between a number of linked ski resorts. The ski area played host to the 2006 Winter Olympics which brought investment and speedier lifts to the area.' },
    { name: 'Skiing', description: 'Hit the slopes in Three Valleys, France', details: 'The Three Valleys is the largest ski area in the world. Courchevel, Méribel and Val Thorens are just three of the eight world-class ski resorts packed into this one ski area. It’s a great choice if your ski party is made up of different skiing personalities and levels. Families can try out sledging, hang gliding and snowmobile rides in Courchevel, while more advanced skiers can take on the challenging black runs of Val Thorens. After a long day on the slopes of Méribel, head to popular restaurant Aux Petits Oignons for restorative French cuisine.' },
    { name: 'Rock Climbing', description: 'Mount Patti, Nigeria', details: 'Nestled in the city of Lokoja, an adventurous climb to the top of Mount Patti, which is around 1,500 feet (460m) above sea level, will take you on an interesting hike to the summit with an incredible view of the city and the famous Rivers Niger and Benue. You’ll also get to see Lord Luggard’s rest place at the top of the hill, which was built around 1900. The then-colonial Governor General of Nigeria was said to have used the Rest House as a relaxation spot after his day’s activities.' },
    { name: 'Rock Climbing', description: 'Aso Rock, Nigeria', details: 'The Aso Rock is the largest and highest rock in Nigeria’s capital city, Abuja. Standing at about 1,300 feet (400m) above sea level, it is Abuja’s most noticeable feature, spreading wide across the horizon of the city. The rock encompasses the three major seats of power of the Federal Republic of Nigeria, therefore proper permission from the appropriate authorities must to be granted to climb the rock. It is also quite steep.' }
    
  ];

  filteredActivities = [...this.activities];

  filterActivities(activityType: string) {
    if (activityType === 'All') {
      this.filteredActivities = [...this.activities];
    } else {
      this.filteredActivities = this.activities.filter(activity => activity.name === activityType);
    }
  }
  


}
