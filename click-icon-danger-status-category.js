//Check icon
document.querySelectorAll('.fal.fa-minus-circle').forEach((icon, index) => {
    console.log(`Icon ${index}:`, icon);
});

//============================================================================

//Click
document.querySelectorAll('.fal.fa-minus-circle').forEach(icon => {
    try {
        icon.click();
        console.log("Đã click vào:", icon);
    } catch (error) {
        console.warn("Không thể click vào icon:", icon, error);
    }
});
