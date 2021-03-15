// projectCard.js

const projectCard = (item) => {
  const projectStr = `<div class="card my-2" style="width: 18rem;" id=${item.index}>
    <div class="card-body">
      <p class="card-text project-title">${item.title}</p>
      <img class="img-container" src="${item.screenshot}" alt="${item.altText}">
      <p class="card-text technologies">Technologies: ${item.technologiesUsed}</p>
      <p class="card-text url"><a href="${item.url}">Site Link</a></p>
      <p class="card-text githubUrl"><a href="${item.githubUrl}">GitHub</a></p>
    </div>
  </div>`;
  return projectStr;
};

export default projectCard;
