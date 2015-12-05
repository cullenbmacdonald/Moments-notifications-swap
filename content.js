var moments = document.querySelectorAll("#global-actions li.moments")[0],
    notifications = document.querySelectorAll("#global-actions li.notifications")[0];
notifications.parentNode.insertBefore(notifications, moments);
