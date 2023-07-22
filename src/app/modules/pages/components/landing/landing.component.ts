import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  skills = [
    {
      name: 'Angular',
      logo: 'angularlogo.png'
    },
    {
      name: 'NodeJs',
      logo: 'nodejslogo.png'
    },
    {
      name: 'ReactJs',
      logo: 'reactjslogo.png'
    },
    {
      name: 'ExpressJs',
      logo: 'expressjslogo.png'
    },
    {
      name: 'MongoDB',
      logo: 'mongodblogo.png'
    },
    {
      name: 'Javascript',
      logo: 'jslogo.png'
    },
    {
      name: 'Typescript',
      logo: 'typescriptlogo.png'
    },
    {
      name: 'HTML',
      logo: 'htmllogo.png'
    },
    {
      name: 'CSS',
      logo: 'csslogo.png'
    },
    {
      name: 'Tailwind',
      logo: 'tailwindlogo.png'
    },
    {
      name: 'Git',
      logo: 'gitlogo.png'   
    }
  ]

  blogList = [
    {
      title: 'Unleashing the Power of Generator Functions in JavaScript',
      image: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/8jNATlZXhgk/upload/cd34c52791a84b222901ec7103966ad3.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
      description: 'Exploring the Magic and Versatility of Generator Functions in JavaScript',
      date: '31/05/2023',
      url: 'https://pradyumnagarg.hashnode.dev/unleashing-the-power-of-generator-functions-in-javascript'
    },
    {
      title: 'Javascript Proxy, hidden masterpiece?',
      image: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/vLmo8kAVVt4/upload/4b765f848120e6ed363c5ccb3622f3af.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
      description: '',
      date: '25/04/2023',
      url: 'https://pradyumnagarg.hashnode.dev/javascript-proxy-hidden-masterpiece'
    },
    {
      title: 'Configure multiple Github accounts on the same machine using SSH',
      image: 'https://cdn.hashnode.com/res/hashnode/image/unsplash/wX2L8L-fGeA/upload/v1653248643002/S55NjABPx.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
      description: '',
      date: '05/05/2022',
      url: 'https://pradyumnagarg.hashnode.dev/configure-multiple-github-accounts-on-the-same-machine-using-ssh'
    },
    {
      title: 'How to create an Asynchronous callback in JavaScript really!',
      image: 'https://cdn.hashnode.com/res/hashnode/image/unsplash/FkjaN-7gWC0/upload/v1651951659781/mqc_f5FfH.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
      description: '',
      date: '08/05/2022',
      url: 'https://pradyumnagarg.hashnode.dev/how-to-create-an-asynchronous-callback-in-javascript-really'
    },
    
  ]
}
