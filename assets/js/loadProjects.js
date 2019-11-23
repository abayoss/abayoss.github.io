const loadProjects = async () => {
    // Work projects place holders
    const topWorkGrid = document.querySelector('.top_work_grid');
    const workGrid = document.querySelector('.work_grid');
    if (workGrid || topWorkGrid) {
        fetch('assets/data/projects.json')
            .then(res => res.json())
            .then( responseData => {
                if (topWorkGrid) {
                    displayTopProjects(responseData.projects, topWorkGrid);
                  } else {
                    displayProjects(responseData.projects, workGrid);
                  }
            });
    }
    const displayTopProjects =  projects => {
        let topProjects = [];
        for (let index = 0; index < 6; index++) {
            topProjects.push(projects[index]);
        }
        displayProjects(topProjects, topWorkGrid);
    };
    const displayProjects = async (projects, grid) => {
        await projects.forEach(element => {
            grid.innerHTML += `
                <div class="col-md-4 mx-auto py-2">
                  <div>
                    <div
                      class="uk-inline tm-image-card uk-transition-toggle" tabindex="0">
                      <div>
                        <div class="uk-card uk-card-default">
                          <div class="uk-card-media-top">
                            <img src="${element.image}" alt="" />
                          </div>
                          <div class="uk-card-body">
                            <h3 class="uk-card-title">${element.title}</h3>
                            <p>
                            ${element.description}
                            </p>
                          </div>
                          <div
                            class="uk-position-cover uk-overlay uk-overlay-primary uk-transition-fade"
                          ></div>
                        </div>
                      </div>
                      <div class="uk-panel uk-position-center uk-text-center uk-transition-fade">
                        <p>
                          <a
                            class="uk-button btn-info"
                            href="${element.live ? element.live : '#'}"
                            target="#"
                            ${element.live ? '' : 'hidden'}
                            >Live Demo</a
                          >
                        </p>
                        <p>
                          <a
                            class="uk-button btn-secondary"
                            href="${element.details}"
                            target="#"
                            >Details</a
                          >
                        </p>
                        <p>
                          <a
                            class="uk-button uk-button-default-warning"
                            href="${element.source}"
                            target="#"
                            ><i class="fa fa-github"></i> Source</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          `;
        });
        setTimeout(() => {
          return 1;
        }, 3000);
    };
};