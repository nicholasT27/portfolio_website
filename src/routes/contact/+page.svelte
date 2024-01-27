<script>
import { onMount } from 'svelte';
import emailjs from '@emailjs/browser';
import { PUBLIC_EMAILJS_KEY, PUBLIC_EMAILJS_TEMPLATE_ID, PUBLIC_EMAILJS_SERVICE_ID } from '$env/static/public'

let fullName ="";
let userEmail = "";
let message = "";

onMount(() => {
    emailjs.init(PUBLIC_EMAILJS_KEY);
});


async function sendEmail() {

  const emailData = {
      "service_id": PUBLIC_EMAILJS_SERVICE_ID,
      "template_id": PUBLIC_EMAILJS_TEMPLATE_ID,
      "user_id": PUBLIC_EMAILJS_KEY,
      "template_params": {
        "full_name": fullName,
        "to_name": userEmail,
        "message": message,
        "from_name": "nicholas"
      }
  }

  const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method:'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
  })
  if (resp.status == 200){
    console.log('email successfully sent')
  }else{
    const res = await resp.json();
		formErrors = res.error;
    console.log(formErrors)
  }
}

</script>


<div class="bg-gradient-to-r from-indigo-200 to-purple-200">
    <img class="h-16 w-16"src="logo.png" alt="..."/>

    <h1 class="text-9xl font-semibold mt-20 ml-10">
        Contact
    </h1>

    <!-- Comment Form -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="mx-auto max-w-2xl">
      <h2 class="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white mt-36 ml-8">
        Project in mind ?
      </h2>

      <h3 class="mt-4 font-semibold ml-4">you can contact me for freelance opportunities - or just chat to chat !</h3>
      <h4 class="mt-2 font-semibold ml-4 flex">
        Just drop your email and message at here and I will reply to you as soon as possible.
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill mt-1 ml-2" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
        </svg>
    </h4>

    <!-- Card -->
    <div class="mt-5 p-4 relative z-10 border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl">
      <form on:submit|preventDefault={sendEmail}>
        <div class="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-name-1" class="block mb-2 text-sm font-medium dark:text-white">Full name</label>
          <input bind:value={fullName} type="text" id="hs-feedback-post-comment-name-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Full name">
        </div>

        <div class="mb-4 sm:mb-8">
          <label for="hs-feedback-post-comment-email-1" class="block mb-2 text-sm font-medium dark:text-white">Email address</label>
          <input bind:value={userEmail} type="email" id="hs-feedback-post-comment-email-1" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Email address">
        </div>

        <div>
          <label for="hs-feedback-post-comment-textarea-1" class="block mb-2 text-sm font-medium dark:text-white">Message</label>
          <div class="mt-1">
            <textarea bind:value={message} id="hs-feedback-post-comment-textarea-1" name="hs-feedback-post-comment-textarea-1" rows="3" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Leave your message here..."></textarea>
          </div>
        </div>

        <div class="mt-6 grid">
          <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Submit</button>
        </div>
      </form>
    </div>
    <!-- End Card -->
  </div>
</div>
<!-- End Comment Form -->
</div>