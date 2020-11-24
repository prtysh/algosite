

// <div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
//             content.</p>
//           <a href="#" class="card-link">Card link</a>
//           <a href="#" class="card-link">Another link</a>
//         </div>
//       </div>


Papa.parse("assets/2adms.csv", {

    download: true,
    header: true,
    complete: function (results) {
        // document.write(results);
        console.log(results);
        for (i = 0; i < results.data.length; i++) {
            // console.log(results.data[i].Name);

            var cardbox = document.createElement("div");
            cardbox.className = "card data-card";
            cardbox.style.width = "18rem";

            var cardtitle = document.createElement("h5");
            cardtitle.className = "card-title";
            var cardtitletext = document.createTextNode(results.data[i].Name);
            cardtitle.appendChild(cardtitletext);
            cardbox.appendChild(cardtitle);

            var cardsubtitle = document.createElement("h6");
            cardsubtitle.className = "card-subtitle mb-2 text-muted";
            var cardsubtitletext = document.createTextNode(results.data[i].Area);
            cardsubtitle.appendChild(cardsubtitletext);
            cardbox.appendChild(cardsubtitle);

            var cardtext = document.createElement("p");
            cardtext.className = "card-text";
            var cardtexttext = document.createTextNode(results.data[i].Issues);
            cardtext.appendChild(cardtexttext);
            cardbox.appendChild(cardtext);

            var cardlink = document.createElement("a");
            cardlink.className = "card-link";
            var cardlinktext = document.createTextNode(results.data[i].Purpose);
            cardlink.appendChild(cardlinktext);
            cardbox.appendChild(cardlink);

            var element = document.getElementById("card-container");
            element.appendChild(cardbox);
        }
    }
});


// for (let i = 0; i < 10; i++) {
//     var cardbox = document.createElement("div");
//     cardbox.className = "card";
//     cardbox.style.width = "18rem";

//     var cardtitle = document.createElement("h5");
//     cardtitle.className = "card-title";
//     var cardtitletext = document.createTextNode("Card Title");
//     cardtitle.appendChild(cardtitletext);
//     cardbox.appendChild(cardtitle);

//     var cardsubtitle = document.createElement("h6");
//     cardsubtitle.className = "card-subtitle mb-2 text-muted";
//     var cardsubtitletext = document.createTextNode("Card Sub Title");
//     cardsubtitle.appendChild(cardsubtitletext);
//     cardbox.appendChild(cardsubtitle);

//     var cardtext = document.createElement("p");
//     cardtext.className = "card-text";
//     var cardtexttext = document.createTextNode("Some quick example text to build on the card title and make up the bulk of the card's content.");
//     cardtext.appendChild(cardtexttext);
//     cardbox.appendChild(cardtext);

//     var cardlink = document.createElement("a");
//     cardlink.className = "card-link";
//     var cardlinktext = document.createTextNode("Card Title");
//     cardlink.appendChild(cardlinktext);
//     cardbox.appendChild(cardlink);

//     var element = document.getElementById("card-container");
//     element.appendChild(cardbox);

// }


// for (let i = 0; i < 10; i++) {
//     var tag = document.createElement("p");
//     var text = document.createTextNode("Tutorix is the best e-learning platform");
//     tag.appendChild(text);
//     var element = document.getElementById("new");
//     element.appendChild(tag);
//     element.className = "verybold";

// }
