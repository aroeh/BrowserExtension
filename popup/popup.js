const content = document.getElementById("popupcontent");
const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
        let image = document.createElement("img");
        image.src = "/images/WP_20150613_21_25_25_Pro.jpg";
        image.id = `${guidGenerator()}`;
        image.classList.add("slide-image");
        document.body.appendChild(image);

        image.onclick = function() {
            image.remove();
        }

        function guidGenerator() {
            const S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }
    };
}

const tabUrl = document.getElementById("taburl");
if (tabUrl) {
    tabUrl.onclick = function() {
        let txt = document.createElement("p");
        txt.id = `${guidGenerator()}`;

        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            txt.innerHTML = "Currently viewing " + tabs[0].url;
        });

        document.body.appendChild(txt);
        
        function guidGenerator() {
            const S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }
    };
}