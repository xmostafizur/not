 // Fetch the app details from the server
 fetch('/get-app-details')
 .then(response => response.json())
 .then(data => {
	 // Update the title of the page
	 document.title = data.app_name;
	 document.title = data.app_about;
	 document.title = data.app_notification;
	 document.title = data.notice1;
	 document.title = data.notice2;
	 document.title = data.notice3;

	 // Update the content in the page
	 document.getElementById('app-title').innerText = `${data.app_name}`;
	 document.getElementById('about-us').innerText = `${data.app_about}`;
	 document.getElementById('notification').innerText = `${data.app_notification}`;
	 document.getElementById('noticehome').innerText = `${data.notice1}`;
	 document.getElementById('noticegame').innerText = `${data.notice2}`;
	 document.getElementById('noticecommon').innerText = `${data.notice3}`;
 })
 .catch(error => console.error('Error fetching the app details:', error));




