<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255)->unique();
            $table->text('description');
            $table->string('software_used', 100);
            $table->string('project_url')->nullable();
            $table->string('image')->nullable();
            $table->date('date_completed');
            $table->unsignedSmallInteger('display_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
