## Larvele Websockets
Refer -> https://beyondco.de/docs/laravel-websockets/getting-started/introduction

configure websockets.php pusher credentials in .env with your own custom credntaila with values anything but remember to keep then same for client side as well.

sudo chmod +x ./laravel-websocket.sh
select 1

Now go to realtimeapp project and reconfigure websocket. and run php artisan serve for realtimeapp-> php art    serve & npm run dev and websocket app-> php artisan serve --port=8001
 and php artisan websockets:serve


# configure websockets config file and navigate to -> http://127.0.0.1:8001/panel
