document.getElementById('speakButton').addEventListener('click', function() {
    const message = new SpeechSynthesisUtterance
    ("Hey Pooja, cheer up! You're amazing and valued. I know things may feel a little off right now, but remember that this moment is just a tiny wave in the vast ocean of your friendships. You are a wonderful person, full of kindness, joy, and love. No matter what, your true friends will always see the amazing light in you. You have such a bright spirit that no misunderstanding can dim. Take a deep breath, smile, and know that things will be okay. You've always been strong, and nothing can change how much you are appreciated and loved!");
    message.pitch = 2;
    message.rate = 1;
    speechSynthesis.speak(message);
});
