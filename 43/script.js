const ratings = document.querySelectorAll('.rating');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied';

panel.addEventListener('click', (e) => {
	const ratingDiv = e.target.closest('.rating');
	if (ratingDiv) {
		// 1. Remove active from all
		ratings.forEach((rating) => {
			rating.classList.remove('active');
		});

		// 2. Add active to the specific div found by .closest()
		ratingDiv.classList.add('active');
		selectedRating = ratingDiv.querySelector('small').innerHTML;
		console.log(selectedRating);
	}
});

sendBtn.addEventListener('click', (e) => {
	panel.innerHTML = `
    <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});