function openPop(imageId) {
    // 이미지에 해당하는 팝업 띄우기
    var popupLayer = document.getElementById("popup_layer");
    var popupTitle = document.getElementById("popup_title");
    var popupContent = document.getElementById("popup_content");

    // 이미지 별로 팝업 내용 변경
    switch (imageId) {
        case "image1":
            popupTitle.textContent = "Popup Title 1";
            popupContent.innerHTML = `
                <p>안녕하세요</p>
                <img src="images/work-3.png">
            `;
            break;
        case "image2":
            popupTitle.textContent = "Popup Title 2";
            popupContent.innerHTML = `
                <!-- 팝업 내용 변경 작업 -->
            `;
            break;
        case "image3":
            popupTitle.textContent = "Popup Title 3";
            popupContent.innerHTML = `
                <!-- 팝업 내용 변경 작업 -->
            `;
            break;
        case "image4":
            popupTitle.textContent = "Popup Title 4";
            popupContent.innerHTML = `
                <!-- 팝업 내용 변경 작업 -->
            `;
            break;
        case "image5":
            popupTitle.textContent = "Popup Title 5";
            popupContent.innerHTML = `
                <!-- 팝업 내용 변경 작업 -->
            `;
            break;
        case "image6":
            popupTitle.textContent = "Popup Title 6";
            popupContent.innerHTML = `
                <!-- 팝업 내용 변경 작업 -->
            `;
            break;
        default:
            popupTitle.textContent = "Default Popup Title";
            popupContent.innerHTML = `
                <!-- 팝업 내용 변경 작업 -->
            `;
            break;
    }

    popupLayer.style.display = "block";
}

function closePop() {
    var popupLayer = document.getElementById("popup_layer");
    popupLayer.style.display = "none";
} 