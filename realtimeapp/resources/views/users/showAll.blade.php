@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Users') }}</div>

                    <div class="card-body">
                        <ul id="users">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        async function getData(url = '') {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });
            return response.json();
        }
        getData("/api/users").then((response) => {
            const usersElement = document.getElementById("users");
            let users = response;
            users.forEach((user, index) => {
                let element = document.createElement("li");
                element.setAttribute("id", user.id);
                element.innerText = user.name;
                usersElement.appendChild(element);
            });
        })

       
    </script>
@endsection
