<?php

namespace App\Mail;

use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailable;

class ContactMessage extends Mailable
{
    public function __construct(
        public string $senderName,
        public string $senderEmail,
        public string $body,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            // Hitting "Reply" in your inbox answers the visitor directly.
            replyTo: [new Address($this->senderEmail, $this->senderName)],
            subject: 'New portfolio message from ' . $this->senderName,
        );
    }

    public function content(): Content
    {
        return new Content(text: 'emails.contact');
    }
}
