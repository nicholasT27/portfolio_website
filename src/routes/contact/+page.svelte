<script>
	import { onMount } from 'svelte';
	import emailjs from '@emailjs/browser';
	import {
		PUBLIC_EMAILJS_KEY,
		PUBLIC_EMAILJS_TEMPLATE_ID,
		PUBLIC_EMAILJS_SERVICE_ID
	} from '$env/static/public';
	import { writable } from 'svelte/store';

	let fullName = '';
	let userEmail = '';
	let message = '';
	let notification = writable('');

	onMount(() => {
		emailjs.init(PUBLIC_EMAILJS_KEY);
	});

	async function sendEmail(evt) {
		const emailData = {
			service_id: PUBLIC_EMAILJS_SERVICE_ID,
			template_id: PUBLIC_EMAILJS_TEMPLATE_ID,
			user_id: PUBLIC_EMAILJS_KEY,
			template_params: {
				full_name: fullName,
				to_name: userEmail,
				message: message,
				from_name: 'nicholas'
			}
		};

		const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(emailData)
		});
		if (resp.status == 200) {
			notification.set('message successfully sent! Will reply to u as soon as possible, Tq 😉');
			setTimeout(() => {
				notification.set('');
			}, 5000);
			evt.target.reset();
		} else {
			notification.set(
				'message is not sent due to some error, Please check the details and try again !'
			);
			setTimeout(() => {
				notification.set('');
			}, 5000);
		}
	}
</script>

<svelte:head>
	<title>Nicholas | Contact</title>
</svelte:head>

<div class="bg-gradient-to-br from-blue-200 via-sky-300 to-blue-400" id="contact-page-background">
	<img rel="preload" class="h-16 w-16" src="logo.png" alt="..." />

	<div class="flex">
		<div class="relative w-96 sm:h-80 h-56">
			<h1
				class="text-6xl md:text-9xl font-semibold mt-20 lg:ml-10 ml-2 absolute z-20"
				id="contact-page-title"
			>
				Contact
			</h1>

			<h1
				class="text-6xl md:text-9xl font-semibold mt-20 lg:ml-10 ml-2 absolute z-10 top-10 left-5 text-gray-200 opacity-50"
				id="contact-page-title"
			>
				Contact
			</h1>
		</div>

		<div class="relative flex items-center ml-24">
			<img rel="preload" src="contact.png" class="w-72" alt="" />
		</div>
	</div>

	<!-- Comment Form -->
	<div class="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-2 mx-auto slide-up">
		<div class="mx-auto max-w-2xl pb-24">
			<section class="flex flex-col w-full mt-5">
				<div class="flex flex-row">
					<h2
					class=" my-8 text-xl text-gray-800 font-semibold sm:text-3xl mt-18 flex items-center relative"
					>
					<span id="contact-page-subtitle" class="w-fit">
						Project in mind ?
					</span>
					</h2>
					<img rel="preload" src="idea.png" class="w-24" alt="" />
				</div>
				
				

				<h3 class="font-semibold">
					you can contact me for freelance opportunities - or just chat to chat !
				</h3>
				<h4 class="mt-2 font-semibold">
					Just drop your email and message at here and I will reply to you as soon as possible. 😁
				</h4>
			</section>

			
			<!-- Card -->
			<div
				class="mt-5 p-4 border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-lg bg-white/60 drop-shadow-xl shadow-xl"
			>
				<form on:submit|preventDefault={sendEmail}>
					<div class="mb-4 sm:mb-8">
						<label
							for="hs-feedback-post-comment-name-1"
							class="block mb-2 text-sm font-medium dark:text-white">Full name</label
						>
						<input
							bind:value={fullName}
							type="text"
							id="hs-feedback-post-comment-name-1"
							class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="Full name"
							required
						/>
					</div>

					<div class="mb-4">
						<label
							for="hs-feedback-post-comment-email-1"
							class="block mb-2 text-sm font-medium dark:text-white">Email address</label
						>
						<input
							bind:value={userEmail}
							type="email"
							id="hs-feedback-post-comment-email-1"
							class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="Email address"
							required
						/>
					</div>

					<div>
						<label
							for="hs-feedback-post-comment-textarea-1"
							class="block mb-2 text-sm font-medium dark:text-white">Message</label
						>
						<div class="mt-1">
							<textarea
								bind:value={message}
								id="hs-feedback-post-comment-textarea-1"
								name="hs-feedback-post-comment-textarea-1"
								rows="3"
								class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
								placeholder="Leave your message here..."
								required
							/>
						</div>
					</div>

					<div class="mt-6 grid">
						<button
							type="submit"
							class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							>Submit</button
						>
					</div>
					<div class="mt-2">
						{$notification}
					</div>
				</form>
			</div>
			<!-- End Card -->
		</div>
	</div>
	<!-- End Comment Form -->

	<div class="py-10" />
</div>

<style>
	@keyframes text-clip {
		from {
			clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
		}
		to {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}

	#contact-page-title {
		animation: text-clip 1s;
		
	}

	h1 {
		font-family: 'Young Serif', serif;
	}

	@media (max-width: 289px) {
		#contact-page-title {
			font-size: 60px;
			margin-left: 30px;
		}
	}

	@media (min-width: 290px) and (max-width: 400px) {
		#contact-page-title {
			font-size: 70px;
		}
	}

	/* @media (min-width: 401px) and (max-width: 800px) {
		#contact-page-title {
			font-size: 60px;
		}
	} */

	/* @media (min-height: 1179px) and (max-height: 1400px){
  #contact-page-background{
    height: 100vh;
  }
} */

	@media (min-width: 830px) and (min-height: 1024px){
		#contact-page-background {
			height: 100vh;
		}
	}
</style>
