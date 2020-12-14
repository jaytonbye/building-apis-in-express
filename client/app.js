const chirpInput = document.getElementById("chirpInput");
const usernameInput = document.getElementById("usernameInput");
const submitButton = document.getElementById("submitButton");
const route = "http://localhost:3000/api/chirps";

submitButton.addEventListener("click", () => {
  $.ajax({
    type: "POST",
    url: route,
    data: JSON.stringify({
      username: usernameInput.value,
      text: chirpInput.value,
    }),
    contentType: "application/json",
  });
});

$.get(route).done((chirpsObject) => {
  for (const chirpId in chirpsObject) {
    let chirps = chirpsObject[chirpId];
    let username = chirps.username;
    let text = chirps.text;
    let editChirp = () => {
      $(`#myModal`).modal({ show: true });
      $("#chirpSubmitButton").click(() => {
        let $usernameUpdate = $("#usernameUpdate").val();
        let $textChange = $("#textInput").val();
        $.ajax({
          type: "PUT",
          url: route,
          data: JSON.stringify({
            id: chirpId,
            chirp: { username: $usernameUpdate, text: $textChange },
          }),
          contentType: "application/json",
        });
      });
    };
    let deleteChirp = () => {
      console.log("attempting to delete the chirp...");
      $.ajax({
        type: "DELETE",
        url: route,
        data: JSON.stringify({ id: chirpId }),
        contentType: "application/json",
      });
    };

    let $deleteButton = $("<button>Delete me!</button>").click(deleteChirp);
    let $editButton = $("<button>Edit me!</button>").click(editChirp);
    if (chirpId > -1) {
      $("#chirpContainer").append(
        `<div id="chirp${chirpId}" class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${chirpId}: ${username}</h5>
        <p class="card-text">${text}</p>
      </div>
    </div>`
      );
      $(`#chirp${chirpId}`).append($editButton, $deleteButton);
    }
  }
});
