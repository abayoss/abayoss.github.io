window.document.body.onload = () => {
    loadProjects().then(r => {
        setTimeout(() => {
            // scrollButton();
            animateOnscroll();
        }, 2000);
    });
};
