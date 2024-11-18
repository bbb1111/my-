document.getElementById('forgiveButton').addEventListener('click', function () {
    const message = document.getElementById('message');
    message.style.display = 'block'; // Hiện lời nhắn
    this.style.display = 'none'; // Ẩn nút sau khi bấm
});