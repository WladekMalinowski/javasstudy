document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      const loading = document.querySelector(".loading");
      loading.classList.add("active_loading");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveErr(input);

      if (input.classList.contains("email-req")) {
        if (emailTest(input)) {
          formAddErr(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddErr(input);
        }
      }
    }
    return error;
  }

  function formAddErr(input) {
    input.classList.add("err");
  }

  function formRemoveErr(input) {
    input.classList.remove("err");
  }

  function emailTest(input) {
    return !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
      input.value
    );
  }
});
