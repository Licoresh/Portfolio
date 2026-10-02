# Portfolio Image Guide

Put every replacement image inside `public/images/`. The placeholder files already use the exact names expected by the website, so replace each file without changing its name.

## Required images

| File to replace | Used for | Recommended size |
| --- | --- | --- |
| `public/images/profile-neutral.png` | Main profile portrait in the hero section | 1200 × 1440 px, portrait |
| `public/images/social-preview.png` | Link preview for social media and messaging apps | 1200 × 630 px |
| `public/images/projects/project-1.png` | Project 1 card and project-detail screenshot | 1600 × 1000 px, 16:10 |
| `public/images/projects/project-2.png` | Project 2 card and project-detail screenshot | 1600 × 1000 px, 16:10 |
| `public/images/projects/project-3.png` | Project 3 card and project-detail screenshot | 1600 × 1000 px, 16:10 |
| `public/images/projects/project-4.png` | Project 4 card and project-detail screenshot | 1600 × 1000 px, 16:10 |
| `public/images/projects/project-5.png` | Project 5 card and project-detail screenshot | 1600 × 1000 px, 16:10 |
| `public/images/projects/project-6.png` | Project 6 card and project-detail screenshot | 1600 × 1000 px, 16:10 |

## Naming rules

- Keep the filenames exactly as listed above, including lowercase letters and `.png`.
- Replace the existing placeholder image instead of adding a second file with a different name.
- Use PNG, JPG, or WebP source artwork, but export the final replacement as PNG to match the filenames already configured in the code.
- Keep important text and subjects away from the outer edges because project cards crop images responsively.

## Folder layout

```text
public/
└── images/
    ├── profile-neutral.png
    ├── social-preview.png
    └── projects/
        ├── project-1.png
        ├── project-2.png
        ├── project-3.png
        ├── project-4.png
        ├── project-5.png
        └── project-6.png
```

After replacing an image while the development server is running, refresh the browser. If an older image remains visible, use a hard refresh (`Ctrl+F5`).
