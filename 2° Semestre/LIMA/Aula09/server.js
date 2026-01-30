let count = 0;

const valor = document.querySelector("#valor");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains("menos")){
            count--;
        }
        else if(styles.contains("mais")){
            count++;
        }

    else {
        count = 0;
    }

    if(count > 0){
        valor.style.color = "green";
    }

        if(count < 0){
            valor.style.color = "#222";
        }
    valor.textContent = count;
    });
});
