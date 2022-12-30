const picturesListElement = document.querySelector('.pictures');
const pictureTemlateElement = document.getElementById('picture')
    .content
    .querySelector(".picture");

const renderPicturesList = (pictures) => {
    for (const picture of pictures) {
        const pictureElement = pictureTemlateElement.cloneNode(true);
        pictureElement.querySelector("img").src = picture.url;
        pictureElement.querySelector(".picture_likes").texContent = picture.likes;
        
        pictureElement.querySelector(".picture_comments").texContent = picture.comments.length;
        pictureElement.append(pictureElement);
    }
};

export {renderPicturesList};