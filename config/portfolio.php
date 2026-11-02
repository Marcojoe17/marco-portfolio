<?php

/*
|--------------------------------------------------------------------------
| Portfolio content
|--------------------------------------------------------------------------
| All text and image references for the portfolio live here, so you can edit
| content without touching the Blade views. Images are files in /public/images.
*/

return [

    'name'  => 'Marco Gallardo',
    'email' => env('PORTFOLIO_CONTACT_EMAIL', 'marcogallr@gmail.com'),

    // Order matters: this is the order the pill links appear in.
    'nav' => [
        'info'     => 'INFO',
        'skills'   => 'SKILLS',
        'projects' => 'PROJECTS',
        'contact'  => 'CONTACT',
    ],

    'hero' => [
        'greeting'    => "HI, I'M",
        'first_name'  => 'MARCO',
        'last_name'   => 'GALLARDO',
        'image'       => 'hero.png',
        'floating'    => 'floating-left.png',
        'description' => 'I AM A CREATIVE PHOTO AND VIDEO EDITOR WITH A PASSION FOR TURNING RAW '
                       . 'FOOTAGE AND IMAGES INTO VISUALLY COMPELLING CONTENT. I FOCUS ON CLEAN '
                       . 'EDITS, STRONG STORYTELLING, AND POLISHED VISUALS THAT CONNECT WITH '
                       . 'AUDIENCES. I ENJOY WORKING ON CREATIVE PROJECTS THAT ALLOW ME TO BRING '
                       . 'IDEAS TO LIFE THROUGH COLOR, MOTION, AND DETAIL.',
    ],

    // Floating app icons around the skills section (CSS class sets the position).
    'skill_icons' => [
        ['image' => 'photoshop.png',     'alt' => 'Photoshop',     'class' => 'icon1'],
        ['image' => 'after-effects.png', 'alt' => 'After Effects', 'class' => 'icon2'],
        ['image' => 'premiere-pro.png',  'alt' => 'Premiere Pro',  'class' => 'icon3'],
        ['image' => 'lightroom.png',     'alt' => 'Lightroom',     'class' => 'icon4'],
        ['image' => 'capcut.png',        'alt' => 'CapCut',        'class' => 'icon5'],
        ['image' => 'canva.png',         'alt' => 'Canva',         'class' => 'icon6'],
    ],

    'skills' => [
        [
            'title' => 'PHOTO EDITING',
            'class' => '',
            'items' => [
                'Color correction and retouching',
                'Image enhancement',
                'Image manipulation',
                'Background removal and compositing',
            ],
        ],
        [
            'title' => 'VIDEO EDITING',
            'class' => 'center',
            'items' => [
                'Cutting and sequencing footage',
                'Color grading',
                'Basic motion graphics',
                'Adding transitions, text, and music',
            ],
        ],
        [
            'title' => 'PHOTO EDITING',
            'class' => '',
            'items' => [
                'Color correction and retouching',
                'Image enhancement',
                'Image manipulation',
                'Background removal and compositing',
            ],
        ],
    ],

    'projects' => [
        [
            'image' => 'photo-enhancement.png',
            'title' => 'PHOTO ENHANCEMENT, ETC.',
            'text'  => 'This image editing project focuses on enhancing the overall quality '
                     . 'of photos through careful color correction, lighting adjustment, '
                     . 'and background cleanup.',
        ],
        [
            'image' => '3d-environment-design.png',
            'title' => '3D ENVIRONMENT DESIGN, ETC.',
            'text'  => 'A cinematic style video editing project that emphasizes mood and '
                     . 'storytelling through smooth transitions and lighting.',
        ],
        [
            'image' => 'cinematic-video-edit.png',
            'title' => 'CINEMATIC VIDEO EDIT, ETC.',
            'text'  => 'This 3D environment project involves creating immersive visuals '
                     . 'using basic assets, lighting, and layout.',
        ],
    ],

    'contact' => [
        'text'        => 'Let’s work together! If you’re looking for clean, creative photo or video '
                       . 'edits, feel free to reach out.',
        'image_left'  => 'floating-left.png',
        'image_right' => 'floating-right.png',
    ],
];
