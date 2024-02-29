import modeldata from './modelData.js';

document.querySelector('.Grid-boxes').innerHTML = modeldata
  .map(
    (data, index) => `
    <article class='Box'>
    <img class='box-image' src='${data.snapshot}' alt='protfolio image tonic'>
    <div class='content'>
    <h2 class='content-title'>${data.projectname}</h2>
    <div class='text-title'>
        <a href='#' class='client'>${data.frame[0]}</a>
        <img class='dot' src='${data.dot}' alt='dot'>
        <a href='#' class='client-skills'>${data.frame[1]}</a>
        <img class='dot' src='${data.dot}' alt='dot'>
        <a href='#' class='period'>${data.frame[2]}</a>
    </div>
    <p class='content-text'>${data.para}</p>
    <ul class='tags'>
        <li class='style'>${data.technologies[0]}</li>
        <li class='style'>${data.technologies[1]}</li>
        <li class='style'>${data.technologies[2]}</li>
    </ul>
    <button class='link' aria-label='Enter here to see this project.'
    id='project_${index}'
    data-target='modal'>${data.smBtnText}</button>
</div>
</article>
`,
  )
  .join('');

const displayModal = (val) => {
  const modalSection = document.querySelector('.modal');
  modalSection.innerHTML = ` <div class='overlay'></div>
    <div class='popup flex'>
        <div class='header flex'>
            <h1 class='heading'>${val.projectname}</h1>
            <button class='closeBtn'>&times;</button>
        </div>
        <ul class='author flex'>
            <li class='frame1'>${val.frame[0]}</li>
            <li><img src='${val.dot}' alt='dot' /></li>
            <li class='frame'>${val.frame[1]}</li>
            <li><img src='${val.dot}' alt='dot' /></li>
            <li class='frame'>${val.frame[2]}</li>
        </ul>
        <div class='projectImage'>
            <img class='image' src='${val.popimage}' alt='' />
        </div>
        <div class='deskres'>
            <div class='para'>
                <p class='paraText'>
                ${val.disdes}
                </p>
            </div>
            <ul class='socialmediaa flex'>
                <li class='desktag'>${val.technologies[0]}</li>
                <li class='desktag'>${val.technologies[1]}</li>
                <li class='desktag'>${val.technologies[2]}</li>
                <li class='desktag desktag1'>${val.technologies[3]}</li>
                <li class='desktag desktag1'>${val.technologies[4]}</li>
                <li class='desktag desktag1'>${val.technologies[5]}</li>
            </ul>
            <div class='separater'>
                <img src='${val.sep}' alt='sep' class='sep' />
            </div>
            <div class='smBtn flex'>
                <button class='popBtn flex'>
                    see live<img src='${val.livelogo}' alt='${val.livelink}' class='sImage' />
                </button>
                <button class='popBtn flex'>
                    see source<img src='${val.sourcelogo}' alt='${val.sourcelink}' class='sImage' />
                </button>
            </div>
        </div>
    </div>`;
  modalSection.style.display = 'block';
  modalSection.querySelectorAll('.closeBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('.modal').style.display = 'none';
    });
  });
};

const projectButtons = document.querySelectorAll('.link');
projectButtons.forEach((projectButton) => {
  projectButton.addEventListener('click', (f) => {
    const index = f.target.id.split('_')[1];
    displayModal(modeldata[index]);
  });
});