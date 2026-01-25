# Hugo Resources Project

A Hugo static site for curating web developer resources, styled with Tailwind CSS and deployed on Vercel.

## Project Structure

```
├── archetypes/          # Content templates
├── assets/              # CSS and other assets (processed by Hugo)
├── content/
│   └── web-developer-resources/   # All resource markdown files
├── data/                # Data files
├── i18n/                # Internationalization
├── layouts/             # Hugo templates
├── public/              # Built output (git-ignored)
├── static/              # Static files (copied as-is)
└── resources/           # Hugo resource cache
```

## Commands

### Hugo Development

```bash
# Start development server
hugo server -D

# Build for production
hugo

# Build with drafts included
hugo -D
```

### Creating New Content

Use the `new-content.sh` script to create new content files with proper frontmatter:

```bash
./new-content.sh -t "<title>" -u "<url>"
```

#### Options

| Flag | Description |
|------|-------------|
| `-t, --title` | Title of the resource (required) |
| `-u, --url` | Original URL of the resource (required) |
| `-h, --help` | Show help message |

#### Example

```bash
./new-content.sh -t "React Documentation" -u "https://react.dev"
```

#### Workflow

1. Run the script with a title and URL
2. The script scans existing content for categories
3. Select a category from the numbered list, or enter `0` to create a new category
4. The script generates a markdown file in `content/web-developer-resources/`

## Content Frontmatter

All content files use this YAML frontmatter structure:

```yaml
---
title: "Resource Title"
date: "2025-01-25T12:00:00.000Z"
lastmod: "2025-01-25T12:00:00.000Z"
categories: ["Category Name"]
original_url: "https://example.com"
draft: false
---
```

## Existing Categories

Common categories in this project include:
- AI tools
- APIs or Data Sources
- Authentication
- CSS
- Databases
- Design
- Frameworks and Libraries
- Free Resources
- JavaScript
- Job Boards
- Lessons Tutorials
- Privacy
- Testing
- Web Hosting or Functions

Run `./new-content.sh` to see the full current list.

## Tech Stack

- **Static Site Generator**: Hugo
- **CSS**: Tailwind CSS v4 (via PostCSS)
- **Deployment**: Vercel

## Development Setup

```bash
# Install Node dependencies (for Tailwind/PostCSS)
npm install

# Run Hugo dev server
hugo server -D
```

## Deployment

The site is configured for Vercel deployment via `vercel.json`. Pushes to main trigger automatic deployments.
