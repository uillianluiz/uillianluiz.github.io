import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  name: string;
  description: string;
  subProjects: [
    {
      image: string;
      description: string;
      sourceCode?: string;
      url?: string;
      skills?: string[];
    }
  ];
  skills?: string[];
}

@Injectable()
export class ProjectsService {
  public projects: Project[] = [];

  constructor() {
    this.buildProjects();
  }

  buildProjects() {
    const fccFullStack: Project = {
      id: 'fccFullStack',
      name: 'FreeCodeCamp Full Stack',
      description:
        'Full stack applications developed with Angular for the FreeCodeCamp Back-end certification.',
      subProjects: [
        {
          image: 'fcc_back_voting_app.png',
          description:
            'Voting App, which allows the creation of polls with multiple options.',
          url: 'https://ul-voting-app.herokuapp.com/',
          sourceCode: 'https://github.com/uillianluiz/fcc-voting-app',
          skills: ['MongoDB', 'PassportJS', 'Chart.js']
        },
        {
          image: 'fcc_back_nightlife.png',
          description:
            'NightLife coordinator app, which allows the search for nearby bars and restaurants, listing how many people are going there.',
          url: 'https://ul-nightlife.herokuapp.com/',
          sourceCode: 'https://github.com/uillianluiz/fcc-nightlife-app',
          skills: ['MongoDB', 'PassportJS', 'Yelp API']
        },
        {
          image: 'fcc_back_stocks.png',
          description:
            'Stock tracker app, which allows multiple users to track the current stock prices.',
          url: 'https://ul-stock.herokuapp.com/',
          sourceCode: 'https://github.com/uillianluiz/fcc-stock-market',
          skills: ['Socket.io', 'Quandl Stock API', 'Chart.js']
        }
      ],
      skills: [
        'Angular',
        'ExpressJS',
        'TypeScript',
        'Clarity UI',
        'Heroku',
        'GitHub'
      ]
    };

    const fccReact: Project = {
      id: 'fccReact',
      name: 'FreeCodeCamp ReactJS',
      description:
        'Applications developed with ReactJS for the FreeCodeCamp Data Visualization certification.',
      subProjects: [
        {
          image: 'fcc_data_gameoflife.png',
          description:
            'ReactJS Game of Life. It allows to start, stop, change sizes, speed and more.',
          url: 'http://codepen.io/uillianluiz/full/ZLLvWL/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/ZLLvWL/',
          skills: ['ReactJS', 'Javascript', 'Bootstrap', 'SCSS', 'CodePen']
        },
        {
          image: 'fcc_data_roguelike.png',
          description:
            'ReactJS Roguelike Dungeon Crawler Game. Random generated game, which allows you to play infinitely.',
          url: 'https://uillianluiz.github.io/roguelike/',
          sourceCode: 'https://github.com/uillianluiz/roguelike',
          skills: ['ReactJS', 'TypeScript', 'Webpack', 'GitHub']
        },
        {
          image: 'fcc_data_recipes.png',
          description:
            'ReactJS application that allows to view, edit and search recipes.',
          url: 'http://codepen.io/uillianluiz/full/EZNoxo/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/EZNoxo/',
          skills: ['ReactJS', 'Javascript', 'Bootstrap', 'SCSS', 'CodePen']
        },
        {
          image: 'fcc_data_leaderboard.png',
          description:
            'ReactJS application that retrieves a leader board info and display in the screen.',
          url: 'http://codepen.io/uillianluiz/full/egdRVv/',
          sourceCode: 'https://codepen.io/uillianluiz/pen/egdRVv',
          skills: [
            'ReactJS',
            'Javascript',
            'Ajax',
            'Bootstrap',
            'SCSS',
            'CodePen'
          ]
        },
        {
          image: 'fcc_data_markdown.png',
          description:
            'ReactJS application for editing and visualizing markdown text.',
          url: 'http://codepen.io/uillianluiz/full/pREoMw/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/pREoMw/',
          skills: ['ReactJS', 'Javascript', 'Bootstrap', 'SCSS', 'CodePen']
        }
      ]
    };

    const fccAPIs: Project = {
      id: 'fccAPIs',
      name: 'FreeCodeCamp APIs',
      description:
        'APIs applications developed with ExpressJS for the FreeCodeCamp Back End certification.',
      subProjects: [
        {
          image: 'fcc_api_urlshortener.png',
          description:
            'URL shortener microservice, allowing to add, view and view details of shorten urls.',
          url: 'https://ul-url-shortener.herokuapp.com/',
          sourceCode: 'https://github.com/uillianluiz/fcc-url-shortener',
          skills: ['MongoDB']
        },
        {
          image: 'fcc_api_imgsearch.png',
          description:
            'Image search abstraction layer, which uses a Google API and returns a JSON of images.',
          url: 'https://ul-img-search.herokuapp.com/',
          sourceCode: 'https://github.com/uillianluiz/fcc-img-search',
          skills: ['MongoDB']
        },
        {
          image: 'fcc_api_filemetadata.png',
          description:
            'API that receives a POST of a file, and returns its size in a JSON response.',
          url: 'https://ul-file-metadata.herokuapp.com/',
          sourceCode: 'https://github.com/uillianluiz/fcc-file-metadata'
        },
        {
          image: 'fcc_api_timestamp.png',
          description:
            'API that receives a UNIX timestamp or a natural date, and respond with both. ',
          url: 'https://ul-timestamp.herokuapp.com/',
          sourceCode: 'https://github.com/uillianluiz/fcc-timestamp'
        },
        {
          image: 'fcc_api_headerrequest.png',
          description:
            'API that returns a JSON with information from the request header. ',
          url: 'https://ul-whoami.herokuapp.com/',
          sourceCode: 'https://github.com/uillianluiz/fcc-whoami'
        }
      ],
      skills: ['ExpressJS', 'Javascript', 'GitHub', 'Heroku']
    };

    const fccFrontEnd: Project = {
      id: 'fccFrontEnd',
      name: 'FreeCodeCamp Front-End',
      description:
        'Applications developed for the FreeCodeCamp Front End Development Certification.',
      subProjects: [
        {
          image: 'ffc_front_twitch.png',
          description:
            'Application that allows to view streamers status on Twitch.',
          url: 'http://codepen.io/uillianluiz/full/rjVGYd/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/rjVGYd/',
          skills: ['Ajax', 'Twitch API', 'CodePen']
        },
        {
          image: 'fcc_front_simon.png',
          description: 'Web application that simulates the game simon.',
          url: 'http://codepen.io/uillianluiz/full/NdNbrJ/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/NdNbrJ/',
          skills: ['SCSS', 'Animate.css', 'CodePen']
        },
        {
          image: 'fcc_front_calculator.png',
          description:
            'Application that simulates a real electronic calculator.',
          url: 'http://codepen.io/uillianluiz/full/rjVQYb/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/rjVQYb/',
          skills: ['CodePen']
        },
        {
          image: 'fcc_front_tictactoe.png',
          description:
            'TicTacToe game that implements different artificial intelligences, including Minimax.',
          url: 'https://uillianluiz.github.io/fcc-tictactoe/',
          sourceCode: 'https://github.com/uillianluiz/fcc-tictactoe',
          skills: ['Artificial Intelligence', 'GitHub']
        },
        {
          image: 'fcc_front_pomodoro.png',
          description:
            'Pomodoro clock, which allows user to personalize the work and break time.',
          url: 'http://codepen.io/uillianluiz/full/wgMyaO/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/wgMyaO/',
          skills: ['CodePen']
        },
        {
          image: 'fcc_front_wikipedia.png',
          description:
            'Application that uses the Wikipedia API to search Wikipedia entries.',
          url: 'http://codepen.io/uillianluiz/full/QdbgKm/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/QdbgKm/',
          skills: ['Wikipedia API', 'CodePen']
        },
        {
          image: 'fcc_front_weather.png',
          description:
            'Application that shows the local weather, using weather API and geolocation.',
          url: 'http://codepen.io/uillianluiz/full/xgbEdP/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/xgbEdP/',
          skills: ['Weather API', 'CodePen']
        },
        {
          image: 'fcc_front_quotes.png',
          description:
            'Application that generates a random quote each time it is reloaded.',
          url: 'https://codepen.io/uillianluiz/full/NdKqmE/',
          sourceCode: 'https://codepen.io/uillianluiz/pen/NdKqmE/',
          skills: ['CodePen']
        },
        {
          image: 'fcc_front_tribute.png',
          description: 'Tribute page made with bootstrap.',
          url: 'http://codepen.io/uillianluiz/full/YpmJZp/',
          sourceCode: 'http://codepen.io/uillianluiz/pen/YpmJZp/',
          skills: ['CodePen']
        }
      ],
      skills: ['Bootstrap', 'JavaScript', 'HTML', 'CSS', 'jQuery']
    };

    const mundobf: Project = {
      id: 'mundobf',
      name: 'Mundo Brasfoot',
      description:
        'Fan based web-site for a game called Brasfoot, which had more than 100 thousand views per month.',
      subProjects: [
        {
          image: 'web_mundobf_2014.png',
          description:
            'Front page of the Wordpress blog, which had more than 100k unique views during several months in the period 2009-2014.',
          skills: ['Wordpress', 'PHP', 'Javascript', 'CSS', 'SEO', 'MySQL']
        },
        {
          image: 'vb_hack.png',
          description:
            'VB.NET application to help players to modify their game saves.',
          skills: ['VB.NET']
        },
        {
          image: 'vb_points-skins.png',
          description: 'VB.NET application that modified the skin of the game.',
          skills: ['VB.NET']
        },
        {
          image: 'vb_verificador-patches.png',
          description:
            'VB.NET application that searched for duplicated teams in the game.',
          skills: ['VB.NET']
        },
        {
          image: 'elifoot_escalacoes.png',
          description:
            'VB.NET application that allows the creation of teams squad for the game Elifoot.',
          skills: ['VB.NET']
        },
        {
          image: 'brasfoot_crest_conversor.png',
          description:
            'VB.NET application for converting team crests to the approprieta size.',
          skills: ['VB.NET']
        },
        {
          image: 'brasfoot_teams_conversor.png',
          description:
            'VB.NET application for converting teams from older game to the current version.',
          skills: ['VB.NET']
        },
        {
          image: 'pack_patches.png',
          description:
            'VB.NET application for downloading and installing multiple team patches.',
          skills: ['VB.NET']
        }
      ]
    };

    const onibusrs: Project = {
      id: 'onibusrs',
      name: 'ÔnibusRS',
      description:
        'Application for intercity bus search made as part of the final undergraduate project at UNIPAMPA.',
      subProjects: [
        {
          image: 'onibusrs_web.png',
          description: 'Main page of the web application of ÔnibusRS.',
          url: 'http://onibusrs.com/',
          skills: ['PHP', 'Bootstrap', 'Javascript', 'jQuery', 'Ajax']
        },
        {
          image: 'onibusrs_android.png',
          description: 'Android application for ÔnibusRS.',
          skills: ['Android', 'SQLite', 'Java']
        },
        {
          image: 'onibusrs_ios.png',
          description: 'iOS application for ÔnibusRS.',
          skills: ['iOS', 'SQLite', 'Objective C']
        }
      ],
      skills: ['Python', 'Web Scapping', 'Artificial Intelligence']
    };

    const unkapps: Project = {
      id: 'unkapps',
      name: 'UnkApps',
      description:
        'Web and mobile applications developed to improve knowledge on trending technologies.',
      subProjects: [
        {
          image: 'unkapps_tapball.png',
          description:
            "Tap Ball game made with Unity, where you can't let the ball touch the floor.",
          url:
            'https://play.google.com/store/apps/details?id=com.unkapps.tapball',
          skills: ['Android', 'Unity', 'Achievements']
        },
        {
          image: 'unkapps_supercup.png',
          description:
            'Android game where you play against the computer and have to choose the player best stats.',
          skills: ['Android', 'SQLite', 'Java', 'Achievements']
        },
        {
          image: 'unkapps_worldcupquiz.png',
          description:
            'Android game where you have to guess the right name of the player.',
          skills: ['Android', 'SQLite', 'Java', 'Achievements']
        }
      ],
      skills: []
    };

    const webCsb: Project = {
      id: 'webCsb',
      name: 'Web System CSB',
      description:
        'Web application for a clinic: manage patients history, control appointments, upload exams, and more.',
      subProjects: [
        {
          image: 'web_csb.png',
          description: 'Login page of the system.'
        },
        {
          image: 'web_csb2.png',
          description: 'Internal menu page of the system.'
        },
        {
          image: 'web_csb3.png',
          description: 'Internal company registration page of the system.'
        }
      ],
      skills: ['PHP', 'CSS', 'JavaScript', 'MySQL']
    };

    const ufpel: Project = {
      id: 'ufpel',
      name: 'Websites for UFPel',
      description:
        'Websites using Wordpress for the graduation program and for a research group at UFPel.',
      subProjects: [
        {
          image: 'web_ppgg.png',
          description:
            'Front page of the graduation program in Geography at UFPel.'
        },
        {
          image: 'web_leagef.png',
          description: 'Front page of the Geography research group at UFPel.'
        }
      ],
      skills: ['Wordpress', 'CMS', 'PHP', 'CSS', 'JavaScript', 'MySQL']
    };

    const nettoJunior: Project = {
      id: 'nettoJunior',
      name: 'Netto & Junior',
      description:
        'Website for a local band, providing agenda, media gallery and web music player.',
      subProjects: [
        {
          image: 'web_netto&junior.png',
          description: 'Front page of website of the band Netto & Junior.'
        }
      ],
      skills: ['PHP', 'JavaScript', 'MySQL', 'CMS', 'CSS']
    };

    this.projects.push(fccFullStack);
    this.projects.push(fccReact);
    this.projects.push(fccAPIs);
    this.projects.push(fccFrontEnd);
    this.projects.push(mundobf);
    this.projects.push(onibusrs);
    this.projects.push(unkapps);
    this.projects.push(webCsb);
    this.projects.push(ufpel);
    this.projects.push(nettoJunior);
  }
}
