const createArrayElement = arr => {
  return arr.reduce((acc, item) => {
    acc.push(
      ` <li class='list-item'><a  href="${item.largeImageURL}"><img width="360"
           height="200"   src="${item.webformatURL}" alt="${item.tags}"></a><div class="cont">
          <div class="mini-cont">
            <p><strong>Likes</strong></p>
            <p>${item.likes}</p>
          </div>
          <div class="mini-cont">
            <p><strong>Views</strong></p>
            <p>${item.views}</p>
          </div>
          <div class="mini-cont">
            <p><strong>Comment</strong></p>
            <p>${item.comments}</p>
          </div>
          <div class="mini-cont">
             <p><strong>Downloads</strong></p>
            <p>${item.downloads}</p>
          </div>
        </div></li>`
    );
    return acc;
  }, []);
};
export { createArrayElement };
