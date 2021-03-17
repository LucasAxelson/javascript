const form = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const userInput = form.elements.username;
    const tweetInput = form.elements.tweet;

    addTweet(username.value, tweet.value);
    userInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetContainer.append(newTweet);
};