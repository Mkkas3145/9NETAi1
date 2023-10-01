

function share() {
    navigator.share({
        title: "9!NETAi1",
        text: "그래피티아트, 비디오에디팅하는 나인테일입니다!",
        url: location.href,
    });
}

function bannerLoop() {
    let banner = document.getElementsByClassName("banner");
    banner[0].style.display = "none";
    banner[1].style.display = null;
    let video = banner[1].getElementsByTagName("video");
    for (let i = 0; i < video.length; i++) {
        video[i].play();
    }
}

function toggleContent(index) {
    let items = document.getElementsByClassName("contents_bottom_item");
    for (let i = 0; i < items.length; i++) {
        if (i != index) {
            let top = document.getElementsByClassName("contents_bottom_item_top")[i];
            if (top.classList.contains("contents_bottom_item_top_open")) {
                hideContent(i);
            }
        }
    }
    let item = document.getElementsByClassName("contents_bottom_item")[index];
    let top = item.getElementsByClassName("contents_bottom_item_top")[0];
    let content = item.getElementsByClassName("contents_bottom_item_content")[0];
    let isAnimation = content.getAttribute("is_animation");
    if (isAnimation == null || isAnimation == "null") {
        if (top.classList.contains("contents_bottom_item_top_open")) {
            hideContent(index);
        } else {
            showContent(index);
        }
    }
}
function showContent(index) {
    let item = document.getElementsByClassName("contents_bottom_item")[index];
    let top = item.getElementsByClassName("contents_bottom_item_top")[0];
    top.classList.add("contents_bottom_item_top_open");
    //서서히 보이기
    let content = item.getElementsByClassName("contents_bottom_item_content")[0];
    content.setAttribute("is_animation", true);
    content.style.display = "block";
    let rect = content.getBoundingClientRect();
    let height = rect.height;
    content.style.height = "0px";
    content.style.transition = "all 0.2s";
    function callback() {
        content.style.height = ((height + 20) + "px");
        setTimeout(() => {
            content.style.height = null;
            content.style.transition = null;
            content.setAttribute("is_animation", null);
        }, 200);
    }
    window.requestAnimationFrame(callback);
}
function hideContent(index) {
    let item = document.getElementsByClassName("contents_bottom_item")[index];
    let top = item.getElementsByClassName("contents_bottom_item_top")[0];
    top.classList.remove("contents_bottom_item_top_open");
    //서서히 숨기기
    let content = item.getElementsByClassName("contents_bottom_item_content")[0];
    content.setAttribute("is_animation", true);
    content.style.display = "block";
    let rect = content.getBoundingClientRect();
    let height = rect.height;
    content.style.height = ((height + 20) + "px");
    content.style.transition = "all 0.2s";
    function callback() {
        content.style.height = "0px";
        setTimeout(() => {
            content.style.height = null;
            content.style.transition = null;
            content.style.display = null;
            content.setAttribute("is_animation", null);
        }, 200);
    }
    window.requestAnimationFrame(callback);
}
