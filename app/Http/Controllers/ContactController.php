<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(ContactRequest $request): RedirectResponse
    {
        // Honeypot: real visitors never see or fill this field. Pretend success to bots.
        if ($request->filled('website')) {
            return $this->thanks();
        }

        Mail::to(config('portfolio.email'))->send(new ContactMessage(
            senderName: $request->validated('name'),
            senderEmail: $request->validated('email'),
            body: $request->validated('message'),
        ));

        return $this->thanks();
    }

    private function thanks(): RedirectResponse
    {
        return redirect(route('home') . '#contact')
            ->with('status', 'Thanks! Your message has been sent.');
    }
}
