document.addEventListener('readystatechange', event => {
    // if (event.target.readyState === 'interactive') {
    //     const loading = true;
    // }
    if (event.target.readyState === 'complete') {
        loadProjects().then(r => {
            // scrollButton();
            animateOnscroll();
        });
    }
});
