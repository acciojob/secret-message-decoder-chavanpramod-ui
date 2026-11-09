//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const secretObj = {
        cipher: "Sifmpe!Xpsme",
        decode: function() {
            return this.cipher.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
        }
    };

    const missionInfo = {
        agent: "Agent 007",
        status: "Active",
        target: secretObj
    };

    const decodedMessage = missionInfo.target.decode();

    const messageDiv = document.getElementById("message-container");
    if (messageDiv) {
        messageDiv.textContent = `Decoded Message: ${decodedMessage}`;
    }
});