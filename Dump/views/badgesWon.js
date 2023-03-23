// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config object here
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = firebase.database();

// Define the list of videos and their corresponding badges
const videos = [
  { id: 'video1', badge: 'Bronze' },
  { id: 'video2', badge: 'Silver' },
  { id: 'video3', badge: 'Gold' }
];

// Function to check if a user has watched a video
function hasWatchedVideo(videoId) {
  return firebase.auth().currentUser && firebase.database().ref(`users/${firebase.auth().currentUser.uid}/watched/${videoId}`).once('value').then(snapshot => snapshot.val());
}

// Function to reward a user with an award after watching a video
function rewardUser(award) {
  // Create an image element to display the badge
  const badgeImg = document.createElement('img');
  badgeImg.src = 'badge.png';
  badgeImg.alt = 'Badge';
  
  // Add the badge image to the page
  const badgeContainer = document.getElementById('badge-container');
  badgeContainer.innerHTML = '';
  badgeContainer.appendChild(badgeImg);
  
  // Display a message to the user that they have earned a badge
  const messageContainer = document.getElementById('message-container');
  messageContainer.textContent = `Congratulations! You have earned the ${award} badge!`;
}

// Function to handle when a user clicks on a video
function handleVideoClick(videoId) {
  // Check if the user has already watched the video
  hasWatchedVideo(videoId).then(watched => {
    if (watched) {
      // Display a message to the user that they have already watched the video
      alert('You have already watched this video and received the badge!');
    } else {
      // Reward the user with a badge for watching the video
      const video = videos.find(v => v.id === videoId);
      rewardUser(video.badge);
      
      // Store the fact that the user has watched the video in Firebase
      const userRef = firebase.database().ref(`users/${firebase.auth().currentUser.uid}`);
      userRef.child('watched').update({ [videoId]: true });
      
      // Update the user's badges in Firebase
      userRef.child('badges').push(video.badge);
    }
  });
}
