<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $rows = [
            ['PHOTO ENHANCEMENT, ETC.', 'This image editing project focuses on enhancing the overall quality of photos through careful color correction, lighting adjustment, and background cleanup.', 'Adobe Photoshop, Lightroom', 'images/photo-enhancement.png', '2026-03-10'],
            ['3D ENVIRONMENT DESIGN, ETC.', 'This 3D environment project involves creating immersive visuals using basic assets, lighting, and layout.', 'After Effects, Premiere Pro', 'images/3d-environment-design.png', '2026-05-22'],
            ['CINEMATIC VIDEO EDIT, ETC.', 'A cinematic style video editing project that emphasizes mood and storytelling through smooth transitions and lighting.', 'Premiere Pro, CapCut', 'images/cinematic-video-edit.png', '2026-08-15'],
        ];

        foreach ($rows as $i => [$title, $desc, $stack, $image, $date]) {
            Project::updateOrCreate(['title' => $title], [
                'description' => $desc, 'software_used' => $stack, 'image' => $image,
                'date_completed' => $date, 'display_order' => $i + 1,
            ]);
        }
    }
}
