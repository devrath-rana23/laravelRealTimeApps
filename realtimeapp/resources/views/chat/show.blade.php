@extends('layouts.app')



@section('content')
    <style type="text/css">
        #users>li {
            cursor: pointer;
        }
    </style>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Chat') }}</div>
                    <div class="card-body">
                        <input type="hidden" id="authenticated-user-id" value="{{ auth()->user()->id }}">
                        <div class="row p-2"></div>
                        <div class="col-10">
                            <div class="row">
                                <div class="col-12 border rounded-lg p-3">
                                    <ul id="messages" class="list-unstyled overflow-auto" style="height:45vh;">
                                    </ul>
                                </div>
                            </div>
                            <form>
                                <div class="row py-3">
                                    <div class="col-10">
                                        <input id="message" class="form-control" type="text" />
                                    </div>
                                    <div class="col-2">
                                        <button id="send" type="submit"
                                            class="btn btn-primary btn-block">Send</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div class="col-2">
                            <p><strong>Online Now</strong></p>
                            <ul class="list-unstyled overflow-auto text-info" id="users" style="height:45vh;">
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
    @vite(['resources/js/chat.js'])
    <script>
        const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
        async function postData(url = "", csrfToken = "", data = {}) {
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
            });
            return response.json();
        }

        function greetUser(userId) {
            postData(`/chat/greet/${userId}`, csrfToken);
        }
    </script>
@endsection
