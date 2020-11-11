const env = 'prod'; // dev | prod

import './sass/index.scss';
import { animateOnscroll } from './js/AnimationOnScroll';
import './js/ScrollButton';
import { loadGsapIntroScrollTween, loadGsapIntroTextTween } from './js/tweens';


var ready = (callback) => {
    if (document.readyState != 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
};

ready(() => {
    SmoothScroll({ stepSize: 60, animationTime : 1500 });

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
                fetch('assets/data/' + env + '/projects.json?' + Math.random())
                    .then((res) => res.json())
                    .then((responseData) => {
                        this.ProjectsList = responseData.projects.slice(0, 6);
                        animateOnscroll();
                        loadGsapIntroScrollTween();
                        setTimeout(() => {
                            loadGsapIntroTextTween();
                        }, 1000);
                    });
            },
        },
    });
});
