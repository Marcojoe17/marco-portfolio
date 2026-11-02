<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    // Only these columns may be mass-assigned (create/update with an array).
    protected $fillable = [
        'title', 'description', 'software_used', 'project_url',
        'image', 'date_completed', 'display_order',
    ];

    protected $casts = ['date_completed' => 'date:Y-m-d'];

    // Sent to React automatically as project.image_url
    protected $appends = ['image_url'];

    public function getImageUrlAttribute(): ?string
    {
        if (! $this->image) {
            return null;
        }
        // Seeded images live in /public/images, uploads live in storage/app/public
        return str_starts_with($this->image, 'images/')
            ? asset($this->image)
            : Storage::disk('public')->url($this->image);
    }
}
