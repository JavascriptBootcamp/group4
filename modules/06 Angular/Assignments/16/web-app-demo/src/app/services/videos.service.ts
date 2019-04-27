import { Injectable } from '@angular/core';
import { Video } from "../interfaces/video";

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  data: Video[];

  constructor() {
    this.data = [
      {
        title: "Big Buck Bunny",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        poster: "http://www.cricketwellington.co.nz/wp-content/uploads/2013/04/big_buck_bunny_2008_11.jpg",
        artist: "Blender Foundation"
      },
      {
        title: "Elephant Dream",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        description: "The first Blender Open Movie from 2006",
        poster: "https://amazingslider.com/wp-content/uploads/amazingslider/22/images/elephants-dream-600-300.jpg",
        artist: "Blender Foundation"
      },
      {
        title: "Sintel",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        description: "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
        poster: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
        artist: "Blender Foundation"
      },
      {
        title: "Tears of Steel",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        description: "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
        poster: "http://cdn0.nflximg.net/images/1140/9931140.jpg",
        artist: "Blender Foundation"
      },
      {
        title: "For Bigger Blazes",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        description: "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
        poster: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
        artist: "Google"
      },
      {
        title: "For Bigger Escape",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        poster: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
        artist: "Google"
      },
      {
        title: "For Bigger Fun",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
        poster: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
        artist: "Google"
      },
      {
        title: "For Bigger Joyrides",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
        poster: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
        artist: "Google"
      },
      {
        title: "For Bigger Meltdowns",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
        poster: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
        artist: "Google"
      },
      {
        title: "Subaru Outback On Street And Dirt",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        description: "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
        poster: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
        artist: "Garage419"
      },
      {
        title: "Volkswagen GTI Review",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        description: "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
        poster: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/16q3/669461/2017-volkswagen-golf-gti-tested-review-car-and-driver-photo-670948-s-original.jpg",
        artist: "Garage419"
      },
      {
        title: "We Are Going On Bullrun",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        description: "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
        poster: "http://www.carzi.com/wp-content/uploads/1161.jpg",
        artist: "Garage419"
      },
      {
        title: "What care can you get for a grand?",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
        description: "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8iKDLK7gFkTWK9n6iXfZMb-T7PySqcS8Be9yvKQjEzWaI_7N",
        artist: "Garage419"
      }
    ]
  }

  getData(): Video[] {
    return this.data;
  }

}
