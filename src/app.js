// import './sass/index.scss';
import projects from './js/data/projects.json';
import { animateOnscroll } from './js/pages/home/AnimationOnScroll';
// import './js/ScrollButton';
import { loadGsapIntroScrollTween } from './js/pages/home/tweens';

var ready = (callback) => {
    if (document.readyState != 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('service worker registered', reg))
        .catch(err => console.log('service worker not registered', err));
}

ready(() => {
    SmoothScroll({ stepSize: 60, animationTime: 1500 });

    new Vue({
        el: '#work',
        data: {
            ProjectsList: [],
        },
        mounted: function () {
            this.getProjects();
        },
        methods: {
            getProjects: function () {
                // fetch('assets/data/' + env + '/projects.json?' + Math.random())
                //     .then((res) => res.json())
                //     .then((responseData) => {
                // this.ProjectsList = responseData.projects.slice(0, 6);
                this.ProjectsList = projects.projects.slice(0, 6);
                animateOnscroll();
                loadGsapIntroScrollTween();
                // });
            },
        },
    });
});
